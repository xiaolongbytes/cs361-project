import { Season } from '../../common/constants';
import './SeasonBadge.css';
import React, { FunctionComponent } from 'react';
type SeasonBadgeProps = { season: Season };

export const SeasonBadge: FunctionComponent<SeasonBadgeProps> = ({ season }) => {
    return <span className={`seasonbadge ${season}`}>{season}</span>;
};
