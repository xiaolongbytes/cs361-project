import React, { FunctionComponent } from 'react';
import { Quarter, Course, UUID, SEASON_TO_HUMAN_LEGIBLE_NAME } from '../../../common/constants';
import './QuarterCard.css';
import { CourseCard } from '../CourseCard/CourseCard';
import { CourseSelectorCallback, CourseSelectSource } from '../../hooks/useOSUDegreePlannerState';

type QuarterCardProps = {
    selectedCourse: Course | null;
    quarter: Quarter;
    quartersToCourses: Record<UUID, UUID[]>;
    allOfferedCourses: Course[];
    onCourseSelect: CourseSelectorCallback;
};

export const QuarterCard: FunctionComponent<QuarterCardProps> = ({
    selectedCourse,
    quarter,
    quartersToCourses,
    allOfferedCourses,
    onCourseSelect,
}) => {
    return (
        <div className="quartercard">
            <p className="quartercard__header">
                {SEASON_TO_HUMAN_LEGIBLE_NAME[quarter.season]} {quarter.year}
            </p>
            <div className="quartercard__body">
                {(quartersToCourses[quarter.id] ?? []).map(courseID => {
                    const course = allOfferedCourses.find(course => course.id === courseID)!;
                    return (
                        <CourseCard
                            isSelected={selectedCourse?.id === courseID}
                            course={course}
                            key={courseID}
                            allOfferedCourses={allOfferedCourses}
                            onCourseSelect={onCourseSelect}
                            quartersToCourses={quartersToCourses}
                            source={CourseSelectSource.DEGREE_PLAN}
                        />
                    );
                })}
            </div>
        </div>
    );
};
