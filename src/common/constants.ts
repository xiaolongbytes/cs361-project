export enum Season {
    FALL = 'FALL',
    WINTER = 'WINTER',
    SPRING = 'SPRING',
    SUMMER = 'SUMMER',
}

export const SEASON_TO_HUMAN_LEGIBLE_NAME: Record<Season, string> = {
    [Season.FALL]: 'Fall',
    [Season.SPRING]: 'Spring',
    [Season.SUMMER]: 'Summer',
    [Season.WINTER]: 'Winter',
};

export type UUID = string;

export type Course = {
    id: UUID;
    // Whether the course is an required course or an elective
    isRequired: boolean;
    // The full human readable name of the course
    fullName: string;
    // e.g. CS 162
    courseCode: string;
    // the UUIDs for the prerequisite courses. Empty array if no prereqs.
    prerequisiteCourseIDs: UUID[];
    // List of seasons it is offered in.
    offeredIn: Season[];
};

export type Quarter = {
    id: UUID;
    // The season for the quarter
    season: Season;
    // The year the quarter is offered in
    year: number;
};
