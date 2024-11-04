import React, { FunctionComponent } from 'react';
import { Course, Quarter, UUID } from '../../../common/constants';
import './DegreePlan.css';
import { QuarterCard } from '../QuarterCard/QuarterCard';
import { CourseSelectorCallback } from '../../hooks/useOSUDegreePlannerState';

type DegreePlanProps = {
    quarters: Quarter[];
    allOfferedCourses: Course[];
    quartersToCourses: Record<UUID, UUID[]>;
    selectedCourse: Course | null;
    onCourseSelect: CourseSelectorCallback;
};

export const DegreePlan: FunctionComponent<DegreePlanProps> = ({
    quarters,
    allOfferedCourses,
    quartersToCourses,
    selectedCourse,
    onCourseSelect,
}) => {
    return (
        <div className="degreeplan">
            <p className="degreeplan__header">Degree Plan</p>
            <div className="degreeplan__body">
                {quarters.map(quarter => (
                    <QuarterCard
                        selectedCourse={selectedCourse}
                        quarter={quarter}
                        quartersToCourses={quartersToCourses}
                        allOfferedCourses={allOfferedCourses}
                        onCourseSelect={onCourseSelect}
                        key={quarter.id}
                    />
                ))}
            </div>
        </div>
    );
};
