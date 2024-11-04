import { Season } from '../../../common/constants';
import './SeasonBadge.css';
import React, { FunctionComponent } from 'react';
type SeasonBadgeProps = { season: Season };

const SEASON_TO_CLASSNAME: Record<Season, string> = {
    [Season.FALL]: 'seasonbadge--fall',
    [Season.SPRING]: 'seasonbadge--spring',
    [Season.SUMMER]: 'seasonbadge--summer',
    [Season.WINTER]: 'seasonbadge--winter',
};

export const SeasonBadge: FunctionComponent<SeasonBadgeProps> = ({ season }) => {
    return <span className={`seasonbadge ${SEASON_TO_CLASSNAME[season]}`}>{season}</span>;
};
