import React from 'react';
import { Course, Season } from '../../../../common/constants';
import { render } from '@testing-library/react';
import { PrerequisitesList } from '../PrerequisitesList';
import { PrerequisiteBadgeStateClass } from '../../PrerequisiteBadge/PrerequisiteBadge';

describe(PrerequisitesList, () => {
    const course1: Course = {
        id: 'course1',
        courseCode: 'CS 101',
        fullName: 'Computer Science 101',
        offeredIn: [Season.FALL],
        prerequisiteCourseIDs: [],
        isRequired: true,
    };
    const course2: Course = {
        id: 'course2',
        courseCode: 'CS 102',
        fullName: 'Computer Science 102',
        prerequisiteCourseIDs: ['course1'],
        offeredIn: [Season.FALL],
        isRequired: true,
    };
    const allOfferedCourses: Course[] = [course1, course2];
    const prerequisiteCourseIDs = [course1.id];
    it('correctly renders an unfulfilled prerequisite badge', () => {
        const quartersToCourses = {};
        const testID = 'test-id';
        const result = render(
            <PrerequisitesList
                allOfferedCourses={allOfferedCourses}
                prerequisiteCourseIDs={prerequisiteCourseIDs}
                quartersToCourses={quartersToCourses}
                testID={testID}
            />
        );
        const unfulfilledPrerequisiteBadge = result.getByTestId(testID);
        expect(unfulfilledPrerequisiteBadge.classList).toContain(PrerequisiteBadgeStateClass.UNFULFILLED);
    });
});
