import React, { FunctionComponent, useState, ReactNode, useEffect } from 'react';
import { Season, SEASON_TO_HUMAN_LEGIBLE_NAME, SEASON_TO_SERVER_SEASON } from '../../../common/constants';

import { TargetQuarterData } from '../../App/hooks/OSUDegreePlannerAPI';

type TargetQuarterSelectorProps = {
    label: ReactNode;
    ariaLabel: string;
    onChange: (payload: TargetQuarterData) => void;
    defaultYear: number;
    defaultSeason: Season;
};

export const TargetQuarterSelector: FunctionComponent<TargetQuarterSelectorProps> = ({
    label,
    ariaLabel,
    onChange,
    defaultYear,
    defaultSeason,
}) => {
    const [season, setSeason] = useState(defaultSeason);
    const [year, setYear] = useState(defaultYear);
    useEffect(() => {
        onChange({ year, season: SEASON_TO_SERVER_SEASON[season] });
    }, [season, onChange, year]);

    return (
        <div className="quarterSelector">
            <label className="quarterSelector__label">{label}</label>
            <div className="quarterSelector__inputs">
                <select
                    aria-label={`${ariaLabel} Season`}
                    value={season}
                    onChange={e => setSeason(e.currentTarget.value as Season)}>
                    {Object.entries(Season).map(([key, value]) => (
                        <option key={key} value={value}>
                            {SEASON_TO_HUMAN_LEGIBLE_NAME[value as Season]}
                        </option>
                    ))}
                </select>
                <input
                    type="number"
                    min="2000"
                    step="1"
                    value={year}
                    onChange={e => setYear(e.currentTarget.valueAsNumber)}
                    aria-label={`${ariaLabel} Year`}
                />
            </div>
        </div>
    );
};
