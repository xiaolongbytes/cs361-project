import React, { FunctionComponent } from 'react';
import { Course, UUID } from '../../../common/constants';
import './PrerequisitesList.css';
import { NoPrerequisiteBadge } from '../PrerequisiteBadge/NoPrerequisitesBadge';
import { PrerequisiteBadge } from '../PrerequisiteBadge/PrerequisiteBadge';

type PrerequisitesListProps = {
    allOfferedCourses: Course[];
    prerequisiteCourseIDs: UUID[];
    quartersToCourses: Record<UUID, UUID[]>;
    testID?: string;
};

export const PrerequisitesList: FunctionComponent<PrerequisitesListProps> = ({
    allOfferedCourses,
    prerequisiteCourseIDs,
    quartersToCourses,
    testID,
}) => {
    return (
        <span className="prerequisiteslist">
            Prerequisites:
            {!!prerequisiteCourseIDs.length ? (
                prerequisiteCourseIDs.map(prerequisiteCourseID => {
                    const prerequisiteCourse = allOfferedCourses.find(course => course.id === prerequisiteCourseID)!;
                    // iterate through all quarters and check if course ID is in list of course IDs assigned to the quarters
                    const isFulfilled = Object.values(quartersToCourses).some(courseIDs =>
                        courseIDs.some(courseID => courseID === prerequisiteCourseID)
                    );

                    return (
                        <PrerequisiteBadge
                            courseName={prerequisiteCourse.courseCode}
                            isFulfilled={isFulfilled}
                            key={prerequisiteCourseID}
                            testID={testID}
                        />
                    );
                })
            ) : (
                <NoPrerequisiteBadge />
            )}
        </span>
    );
};
