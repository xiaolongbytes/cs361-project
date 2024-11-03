import { v4 } from 'uuid';

export enum Season {
    FALL = 'FALL',
    WINTER = 'WINTER',
    SPRING = 'SPRING',
    SUMMER = 'SUMMER',
}

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

export const COURSE_IDS = {
    CS161: v4(),
    CS162: v4(),
    CS225: v4(),
    CS261: v4(),
    CS271: v4(),
    CS290: v4(),
    CS325: v4(),
    CS340: v4(),
    CS361: v4(),
    CS362: v4(),
    CS374: v4(),
    CS467: v4(),
    CS321: v4(),
    // CS352: v4(),
    // CS370: v4(),
    // CS372: v4(),
    // CS373: v4(),
    // CS381: v4(),
    // CS391: v4(),
    // CS427: v4(),
    // CS444: v4(),
    // CS450: v4(),
    // CS457: v4(),
    // CS464: v4(),
    // CS469: v4(),
    // CS472: v4(),
    // CS473: v4(),
    // CS475: v4(),
    // CS478: v4(),
    // CS492: v4(),
    // CS493: v4(),
};

export const ALL_OFFERED_COURSES: Course[] = [
    {
        id: COURSE_IDS.CS161,
        isRequired: true,
        fullName: 'Intro to CS I',
        courseCode: 'CS161',
        prerequisiteCourseIDs: [],
        offeredIn: [Season.FALL, Season.WINTER, Season.SPRING, Season.SUMMER],
    },
    {
        id: COURSE_IDS.CS162,
        isRequired: true,
        fullName: 'Intro to CS II',
        courseCode: 'CS162',
        prerequisiteCourseIDs: [COURSE_IDS.CS161],
        offeredIn: [Season.FALL, Season.WINTER, Season.SPRING, Season.SUMMER],
    },
    {
        id: COURSE_IDS.CS225,
        isRequired: true,
        fullName: 'Discrete Math',
        courseCode: 'CS225',
        prerequisiteCourseIDs: [],
        offeredIn: [Season.FALL, Season.WINTER, Season.SPRING, Season.SUMMER],
    },
    // TODO: CHECK PREREQS FOR CS261, THIS DOESN'T SEEM RIGHT
    {
        id: COURSE_IDS.CS261,
        isRequired: true,
        fullName: 'Data Structures',
        courseCode: 'CS261',
        prerequisiteCourseIDs: [],
        offeredIn: [Season.FALL, Season.WINTER, Season.SPRING, Season.SUMMER],
    },
    {
        id: COURSE_IDS.CS271,
        isRequired: true,
        fullName: 'Computer Architecture and Assembly Language',
        courseCode: 'CS271',
        prerequisiteCourseIDs: [COURSE_IDS.CS161],
        offeredIn: [Season.FALL, Season.WINTER, Season.SPRING, Season.SUMMER],
    },
    {
        id: COURSE_IDS.CS290,
        isRequired: true,
        fullName: 'Web Development',
        courseCode: 'CS290',
        prerequisiteCourseIDs: [COURSE_IDS.CS162],
        offeredIn: [Season.FALL, Season.WINTER, Season.SPRING, Season.SUMMER],
    },
    {
        id: COURSE_IDS.CS325,
        isRequired: true,
        fullName: 'Analysis of Algorithms',
        courseCode: 'CS325',
        prerequisiteCourseIDs: [COURSE_IDS.CS225, COURSE_IDS.CS261],
        offeredIn: [Season.FALL, Season.WINTER, Season.SPRING, Season.SUMMER],
    },
    {
        id: COURSE_IDS.CS340,
        isRequired: true,
        fullName: 'Introduction to Databases',
        courseCode: 'CS340',
        prerequisiteCourseIDs: [COURSE_IDS.CS290],
        offeredIn: [Season.FALL, Season.WINTER, Season.SPRING, Season.SUMMER],
    },
    {
        id: COURSE_IDS.CS374,
        isRequired: true,
        fullName: 'Operating Systems I',
        courseCode: 'CS374',
        prerequisiteCourseIDs: [COURSE_IDS.CS261, COURSE_IDS.CS271],
        offeredIn: [Season.FALL, Season.WINTER, Season.SPRING, Season.SUMMER],
    },
    {
        id: COURSE_IDS.CS361,
        isRequired: true,
        fullName: 'Software Engineering I',
        courseCode: 'CS361',
        prerequisiteCourseIDs: [COURSE_IDS.CS261],
        offeredIn: [Season.FALL, Season.WINTER, Season.SPRING, Season.SUMMER],
    },
    {
        id: COURSE_IDS.CS362,
        isRequired: true,
        fullName: 'Software Engineering II',
        courseCode: 'CS362',
        prerequisiteCourseIDs: [COURSE_IDS.CS261],
        offeredIn: [Season.FALL, Season.WINTER, Season.SPRING, Season.SUMMER],
    },
    {
        id: COURSE_IDS.CS467,
        isRequired: true,
        fullName: 'Capstone Project',
        courseCode: 'CS467',
        prerequisiteCourseIDs: [COURSE_IDS.CS374, COURSE_IDS.CS361, COURSE_IDS.CS362],
        offeredIn: [Season.FALL, Season.WINTER, Season.SPRING, Season.SUMMER],
    },
    {
        id: COURSE_IDS.CS321,
        isRequired: false,
        fullName: 'Intro to Theory of Computation',
        courseCode: 'CS321',
        prerequisiteCourseIDs: [COURSE_IDS.CS261, COURSE_IDS.CS225],
        offeredIn: [Season.FALL, Season.SPRING],
    },
];
