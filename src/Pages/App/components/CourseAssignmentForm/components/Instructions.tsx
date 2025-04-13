import React, { FunctionComponent } from 'react';

export const Instructions: FunctionComponent = () => {
    return (
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
    );
};
