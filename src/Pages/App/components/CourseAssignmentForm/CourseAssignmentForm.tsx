import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import { Quarter, SEASON_TO_HUMAN_LEGIBLE_NAME } from '../../../../common/constants';
import { QuarterSelectorCallback } from '../../hooks/useOSUDegreePlannerState';
import './CourseAssignmentForm.css';
import { Instructions } from './components/Instructions';

type CourseAssignmentFormProps = {
    isCourseFromCourseCatalogSelected: boolean;
    isCourseFromDegreePlanSelected: boolean;
    currentlySelectedQuarter: Quarter | null;
    quarters: Quarter[];
    onQuarterSelect: QuarterSelectorCallback;
    onCourseAdd: () => void;
    onCourseRemove: () => void;
    onDegreeReset: () => void;
    onExportToPDF: () => void;
    onValidateDegreePlan: () => void;
    onSaveDegreePlan: () => void;
    onLoadDegreePlan: () => void;
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
    onExportToPDF,
    onValidateDegreePlan,
    onSaveDegreePlan,
    onLoadDegreePlan,
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
                className="courseassignmentform__button"
                disabled={!isCourseFromCourseCatalogSelected || !currentlySelectedQuarter}
                onClick={event => {
                    event.preventDefault();
                    onCourseAdd();
                }}>
                ADD COURSE TO PLAN
            </button>

            <button
                className="courseassignmentform__button"
                disabled={!isCourseFromDegreePlanSelected}
                onClick={event => {
                    event.preventDefault();
                    onCourseRemove();
                }}>
                REMOVE CLASS FROM PLAN
            </button>

            <Instructions />

            <button className="courseassignmentform__button" type="button" onClick={onValidateDegreePlan}>
                Verify Degree Plan
            </button>

            <button type="button" className="courseassignmentform__button" onClick={onExportToPDF}>
                PRINT PLAN AS PDF
            </button>

            <button type="button" className="courseassignmentform__button" onClick={onSaveDegreePlan}>
                Save Degree Plan
            </button>

            <button type="button" className="courseassignmentform__button" onClick={onLoadDegreePlan}>
                Load Degree Plan
            </button>

            <NavLink className="courseassignmentform__button courseassignmentform__button--danger" to="/quarters">
                Restart from Quarter Creation
            </NavLink>

            <button
                className="courseassignmentform__button courseassignmentform__button--danger"
                type="button"
                onClick={onDegreeReset}>
                Clear Degree Plan
            </button>
        </form>
    );
};
