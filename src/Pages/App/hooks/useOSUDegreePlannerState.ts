import { Course, UUID, Quarter, ROUTES } from '../../../common/constants';
import { useCallback, useState, useEffect, useMemo } from 'react';
import { OSUDegreePlannerAPI } from './OSUDegreePlannerAPI';
import { useOSUDegreePlannerAPI } from './useOSUDegreePlannerAPI';
import { useNavigate } from 'react-router-dom';

export enum CourseSelectSource {
    COURSE_CATALOG = 'catalog',
    DEGREE_PLAN = 'degreePlan',
}

export type CourseSelectorCallback = (course: Course, source: CourseSelectSource) => void;
export type QuarterSelectorCallback = (quarterID: Quarter) => void;

export const useOSUDegreePlannerState = ({ apiClient }: { apiClient: OSUDegreePlannerAPI }) => {
    const [selectedCourseFromCatalog, setSelectedCourseFromCatalog] = useState<Course | null>(null);
    const [selectedCourseFromQuarter, setSelectedCourseFromQuarter] = useState<Course | null>(null);
    const [selectedQuarter, setSelectedQuarter] = useState<Quarter | null>(null);
    const [allOfferedCourses, setAllOfferedCourses] = useState<Course[]>([]);
    const [degreePlan, setDegreePlan] = useState<Record<UUID, UUID[]>>({});
    const [quarters, setQuarters] = useState<Quarter[]>([]);
    const navigate = useNavigate();

    const { fetchAllCourses, loadQuarters, createQuartersForDegreePlan, exportDegreePlanToPDF, verifyDegreePlan } =
        useOSUDegreePlannerAPI({ apiClient });

    useEffect(() => {
        const loadData = async () => {
            setAllOfferedCourses(await fetchAllCourses());
            const quarters = loadQuarters();
            if (!quarters.length) {
                alert('Please create quarters first');
                return navigate(ROUTES.QUARTER_CREATION);
            }
            setQuarters(quarters);
        };
        loadData();
    }, [fetchAllCourses, loadQuarters, navigate, createQuartersForDegreePlan]);

    const onCourseSelect: CourseSelectorCallback = useCallback((course: Course, source: CourseSelectSource) => {
        if (source === CourseSelectSource.COURSE_CATALOG) {
            setSelectedCourseFromCatalog(course);
            setSelectedCourseFromQuarter(null);
        } else {
            setSelectedCourseFromQuarter(course);
            setSelectedCourseFromCatalog(null);
        }
    }, []);

    const onCourseAdd = useCallback(() => {
        if (!selectedCourseFromCatalog || !selectedQuarter) {
            return;
        }

        const quarterCourses = degreePlan[selectedQuarter.id] ?? [];
        setDegreePlan({
            ...degreePlan,
            [selectedQuarter.id]: [...quarterCourses, selectedCourseFromCatalog.id],
        });
        setSelectedCourseFromCatalog(null);
    }, [degreePlan, selectedCourseFromCatalog, selectedQuarter]);

    const onExportToPDF = useCallback(async () => {
        const result = await exportDegreePlanToPDF({ degreePlan, quarters, courses: allOfferedCourses });
        if (!result.isSuccess) {
            return alert(result.error);
        }
        const pdfLink = result.documentURL;
        window.open(pdfLink, '_blank')!.focus();
    }, [exportDegreePlanToPDF, degreePlan, quarters, allOfferedCourses]);

    const onCourseRemove = useCallback(() => {
        if (!selectedCourseFromQuarter) {
            return;
        }

        const [courseQuarterID, courseIDs] = Object.entries(degreePlan).find(([, courseIDs]) =>
            courseIDs.find(courseID => {
                return courseID === selectedCourseFromQuarter.id;
            })
        )!;

        setDegreePlan({
            ...degreePlan,
            [courseQuarterID]: courseIDs.filter(courseID => courseID !== selectedCourseFromQuarter.id),
        });

        setSelectedCourseFromQuarter(null);
    }, [selectedCourseFromQuarter, degreePlan]);

    const onDegreeReset = useCallback(() => {
        const isConfirmed = window.confirm(
            'Resetting your degree plan is irreversible. Are you sure you want to start from scratch?'
        );
        if (isConfirmed) {
            setDegreePlan({});
        }
    }, []);

    const onQuarterSelect: QuarterSelectorCallback = useCallback((quarter: Quarter) => {
        setSelectedQuarter(quarter);
    }, []);

    const unassignedCourses = useMemo(() => {
        return allOfferedCourses.filter(course => {
            const assignedCourseIDs = Object.values(degreePlan).flat();
            return !assignedCourseIDs.includes(course.id);
        });
    }, [degreePlan, allOfferedCourses]);

    const onValidateDegreePlan = useCallback(async () => {
        const result = await verifyDegreePlan({ degreePlan, quarters, courses: allOfferedCourses });
        if (result.isSuccess && result.isValid) {
            return alert('Degree Plan meets degree requirements and prerequisites are satisfied.');
        }
    }, [verifyDegreePlan, degreePlan, quarters, allOfferedCourses]);

    return {
        quarters,
        allOfferedCourses,
        unassignedCourses,
        degreePlan,
        onExportToPDF,
        selectedCourseFromCatalog,
        selectedCourseFromQuarter,
        selectedQuarter,
        onCourseSelect,
        onCourseAdd,
        onCourseRemove,
        onDegreeReset,
        onQuarterSelect,
        onValidateDegreePlan,
    };
};
