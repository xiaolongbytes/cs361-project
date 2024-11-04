import { Course, UUID, Quarter } from '../../common/constants';
import { useCallback, useState, useEffect, useMemo } from 'react';
import { OSUDegreePlannerAPI } from './OSUDegreePlannerAPI';
import { useOSUDegreePlannerAPI } from './useOSUDegreePlannerAPI';

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

    const { fetchAllCourses, createQuartersForDegreePlan } = useOSUDegreePlannerAPI({ apiClient });

    useEffect(() => {
        const loadData = async () => {
            setAllOfferedCourses(await fetchAllCourses());
            setQuarters(await createQuartersForDegreePlan(new Date().getFullYear() + 4));
        };
        loadData();
    }, [fetchAllCourses, createQuartersForDegreePlan]);

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
        setDegreePlan({});
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

    return {
        quarters,
        allOfferedCourses,
        unassignedCourses,
        degreePlan,
        selectedCourseFromCatalog,
        selectedCourseFromQuarter,
        selectedQuarter,
        onCourseSelect,
        onCourseAdd,
        onCourseRemove,
        onDegreeReset,
        onQuarterSelect,
    };
};
