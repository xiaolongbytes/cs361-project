import React, { FunctionComponent } from 'react';
import { Course, UUID } from '../../../common/constants';
import { PrerequisitesList } from '../PrerequisitesList/PrerequisitesList';
import { SeasonBadge } from '../SeasonBadge/SeasonBadge';
import { CourseSelectorCallback, CourseSelectSource } from '../../hooks/useOSUDegreePlannerState';
import './CourseCard.css';

type CourseCardProps = {
    isSelected: boolean;
    course: Course;
    allOfferedCourses: Course[];
    /**
     * Callback for when a course is selected
     */
    onCourseSelect: CourseSelectorCallback;
    quartersToCourses: Record<UUID, UUID[]>;
    source: CourseSelectSource;
};

export const CourseCard: FunctionComponent<CourseCardProps> = ({
    isSelected,
    course,
    allOfferedCourses,
    quartersToCourses,
    onCourseSelect,
    source,
}) => {
    return (
        <div
            onClick={() => onCourseSelect(course, source)}
            className={`coursecard ${isSelected ? 'coursecard--selected' : ''}`}>
            <div className="coursecard__header">
                <p>
                    {course.courseCode} - {course.fullName}
                </p>
                <p>{course.isRequired ? 'REQUIRED' : 'ELECTIVE'}</p>
            </div>
            <div className="coursecard__body">
                <PrerequisitesList
                    allOfferedCourses={allOfferedCourses}
                    prerequisiteCourseIDs={course.prerequisiteCourseIDs}
                    quartersToCourses={quartersToCourses}
                />
            </div>
            <div className="coursecard__footer">
                {course.offeredIn.map(season => (
                    <SeasonBadge season={season} key={season} />
                ))}
            </div>
        </div>
    );
};
