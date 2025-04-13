import React, { FunctionComponent } from 'react';
import { Season } from '../../common/constants';
import { TargetQuarterSelector } from './components/TargetQuarterSelector';
import { useCreateQuartersState } from './hooks/useCreateQuartersState';

const currentYear = new Date().getFullYear();

export const CreateQuarters: FunctionComponent = () => {
    const { onSubmit, onStartChange, onEndChange, startingQuarter, endingQuarter } = useCreateQuartersState();
    return (
        <form>
            <h1>Create Quarters for Degree Plan</h1>
            <TargetQuarterSelector
                onChange={onStartChange}
                ariaLabel="Starting Quarter"
                label="Starting Quarter"
                defaultSeason={Season.SPRING}
                defaultYear={currentYear}
            />
            <TargetQuarterSelector
                onChange={onEndChange}
                ariaLabel="Graduating Quarter"
                label="Graduating Quarter"
                defaultSeason={Season.SPRING}
                defaultYear={currentYear + 3}
            />

            <button type="button" onClick={onSubmit} disabled={!startingQuarter || !endingQuarter}>
                Submit
            </button>
        </form>
    );
};
