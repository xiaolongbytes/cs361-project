import './PrerequisiteBadge.css';
import React, { FunctionComponent } from 'react';
type PrerequisiteBadgeProps = { courseName: string; isFulfilled: boolean; testID?: string };

export enum PrerequisiteBadgeStateClass {
    FULFILLED = 'prerequisitebadge--fulfilled',
    UNFULFILLED = 'prerequisitebadge--unfulfilled',
}

export const PrerequisiteBadge: FunctionComponent<PrerequisiteBadgeProps> = ({ courseName, isFulfilled, testID }) => {
    const fulfilled = isFulfilled ? PrerequisiteBadgeStateClass.FULFILLED : PrerequisiteBadgeStateClass.UNFULFILLED;

    return (
        <span data-testid={testID} className={`prerequisitebadge ${fulfilled}`}>
            {courseName}
        </span>
    );
};
