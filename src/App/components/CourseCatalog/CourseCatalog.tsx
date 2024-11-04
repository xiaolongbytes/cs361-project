import React, { FunctionComponent } from 'react';
import { Course, UUID } from '../../../common/constants';
import { CourseCard } from '../CourseCard/CourseCard';
import { CourseSelectorCallback, CourseSelectSource } from '../../hooks/useOSUDegreePlannerState';
import './CourseCatalog.css';

type CourseCatalogProps = {
    allOfferedCourses: Course[];
    selectedCourse: Course | null;
    courses: Course[];
    onCourseSelect: CourseSelectorCallback;
    quartersToCourses: Record<UUID, UUID[]>;
};

export const CourseCatalog: FunctionComponent<CourseCatalogProps> = ({
    allOfferedCourses,
    selectedCourse,
    courses,
    onCourseSelect,
    quartersToCourses,
}) => {
    // Note, probably should hoist the filtering up to the stateful component
    // TODO: Stretch goal - add filtering by prereqs fulfilled
    // TODO: Stretch goal - add filtering by text search
    // TODO: Stretch goal - add filtering by season offered
    return (
        <div className="coursecatalog">
            <p className="coursecatalog__header">Course Catalog</p>
            <div className="coursecatalog__body">
                {courses.map(course => (
                    <CourseCard
                        isSelected={selectedCourse?.id === course.id}
                        course={course}
                        allOfferedCourses={allOfferedCourses}
                        onCourseSelect={onCourseSelect}
                        quartersToCourses={quartersToCourses}
                        key={course.id}
                        source={CourseSelectSource.COURSE_CATALOG}
                    />
                ))}
            </div>
        </div>
    );
};
