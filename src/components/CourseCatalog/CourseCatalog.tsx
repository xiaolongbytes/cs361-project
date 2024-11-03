import React, { FunctionComponent } from 'react';
import { Course, UUID } from '../../common/constants';
import { CourseCard } from '../CourseCard/CourseCard';
import './CourseCatalog.css';

type CourseCatalogProps = {
    allOfferedCourses: Course[];
    selectedCourse: Course | null;
    courses: Course[];
    onCourseSelect: (course: Course) => void;
    quartersToCourses: Record<UUID, UUID[]>;
};

export const CourseCatalog: FunctionComponent<CourseCatalogProps> = ({
    allOfferedCourses,
    selectedCourse,
    courses,
    onCourseSelect,
    quartersToCourses,
}) => {
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
                    />
                ))}
            </div>
        </div>
    );
};
