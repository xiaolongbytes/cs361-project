import React, { FunctionComponent } from 'react';
import { Quarter, SEASON_TO_HUMAN_LEGIBLE_NAME } from '../../../common/constants';
import { QuarterSelectorCallback } from '../../hooks/useOSUDegreePlannerState';
import './CourseAssignmentForm.css';

type CourseAssignmentFormProps = {
    isCourseFromCourseCatalogSelected: boolean;
    isCourseFromDegreePlanSelected: boolean;
    currentlySelectedQuarter: Quarter | null;
    quarters: Quarter[];
    onQuarterSelect: QuarterSelectorCallback;
    onCourseAdd: () => void;
    onCourseRemove: () => void;
    onDegreeReset: () => void;
};

export const CourseAssignmentForm: FunctionComponent<CourseAssignmentFormProps> = ({
    isCourseFromCourseCatalogSelected,
    isCourseFromDegreePlanSelected,
    currentlySelectedQuarter,
    quarters,
    onQuarterSelect,
    onCourseAdd,
    onCourseRemove,
    onDegreeReset,
}) => {
    return (
        <form className="courseassignmentform">
            <label className="courseassignmentform__header" htmlFor="quarters">
                Add Course to:
            </label>
            <select
                name="quarters"
                id="quarters"
                onChange={event =>
                    onQuarterSelect(quarters.find(quarter => quarter.id === event.currentTarget.value)!)
                }>
                <option>Select a quarter</option>
                {quarters.map(quarter => (
                    <option key={quarter.id} value={quarter.id}>
                        {SEASON_TO_HUMAN_LEGIBLE_NAME[quarter.season]} {quarter.year}{' '}
                    </option>
                ))}
            </select>

            <button
                disabled={!isCourseFromCourseCatalogSelected || !currentlySelectedQuarter}
                onClick={event => {
                    event.preventDefault();
                    onCourseAdd();
                }}>
                ADD COURSE TO PLAN
            </button>

            <button
                disabled={!isCourseFromDegreePlanSelected}
                onClick={event => {
                    event.preventDefault();
                    onCourseRemove();
                }}>
                REMOVE CLASS FROM PLAN
            </button>

            <details open>
                <summary>Instructions for adding/removing courses to your degree plan</summary>
                <p>To Add a Course:</p>
                <ol>
                    <li>Click to select a course in the Catalog</li>
                    <li>Select a term in the dropdown menu</li>
                    <li>Then click “Add Course to Plan”</li>
                </ol>
                <p>To Remove a Course:</p>
                <ol>
                    <li>Click to select a course in the Degree Plan</li>
                    <li>Click "Remove Class from Plan" button</li>
                </ol>
            </details>

            <button
                onClick={() => {
                    const isConfirmed = window.confirm(
                        'Resetting your degree plan is irreversible. Are you sure you want to start from scratch?'
                    );
                    if (isConfirmed) {
                        onDegreeReset();
                    }
                }}>
                RESET DEGREE PLAN
            </button>
        </form>
    );
};
