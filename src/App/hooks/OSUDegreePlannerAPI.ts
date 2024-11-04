import { v4 } from 'uuid';
import { Season, Quarter, Course } from '../../common/constants';
import { NotImplementedError } from './NotImplementedError';

export class OSUDegreePlannerAPI {
    // Used for assigning dependencies during development. Will be removed when the API is ready
    // Set to public so we can use it in tests
    public static readonly _COURSE_IDS = {
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
        CS332: v4(),
        // TODO: UNCOMMENT THESE WHEN YOU ADD THE COURSE TO THE ALL_OFFERED_COURSES
        CS352: v4(),
        CS370: v4(),
        CS372: v4(),
        CS373: v4(),
        CS381: v4(),
        CS391: v4(),
        CS427: v4(),
        CS474: v4(),
        CS450: v4(),
        CS457: v4(),
        CS464: v4(),
        // CS469: v4(), //Structured project, not including in this catalog
        // CS472: v4(), //Removed due to ECE prereqs
        CS473: v4(),
        CS475: v4(),
        CS478: v4(),
        CS492: v4(),
        CS493: v4(),
    };
    public constructor() {}

    public async getOfferedCourses(): Promise<Course[]> {
        return [
            {
                id: OSUDegreePlannerAPI._COURSE_IDS.CS161,
                isRequired: true,
                fullName: 'Introduction to Computer Science I',
                courseCode: 'CS161',
                prerequisiteCourseIDs: [],
                offeredIn: [Season.FALL, Season.WINTER, Season.SPRING, Season.SUMMER],
            },
            {
                id: OSUDegreePlannerAPI._COURSE_IDS.CS162,
                isRequired: true,
                fullName: 'Introduction to Computer Science II',
                courseCode: 'CS162',
                prerequisiteCourseIDs: [OSUDegreePlannerAPI._COURSE_IDS.CS161],
                offeredIn: [Season.FALL, Season.WINTER, Season.SPRING, Season.SUMMER],
            },
            {
                id: OSUDegreePlannerAPI._COURSE_IDS.CS225,
                isRequired: true,
                fullName: 'Discrete Structures in Computer Science (or Equivalent)',
                courseCode: 'CS225',
                prerequisiteCourseIDs: [],
                offeredIn: [Season.FALL, Season.WINTER, Season.SPRING, Season.SUMMER],
            },
            {
                id: OSUDegreePlannerAPI._COURSE_IDS.CS261,
                isRequired: true,
                fullName: 'Data Structures',
                courseCode: 'CS261',
                prerequisiteCourseIDs: [OSUDegreePlannerAPI._COURSE_IDS.CS162, OSUDegreePlannerAPI._COURSE_IDS.CS225],
                offeredIn: [Season.FALL, Season.WINTER, Season.SPRING, Season.SUMMER],
            },
            {
                id: OSUDegreePlannerAPI._COURSE_IDS.CS271,
                isRequired: true,
                fullName: 'Computer Architecture and Assembly Language',
                courseCode: 'CS271',
                prerequisiteCourseIDs: [OSUDegreePlannerAPI._COURSE_IDS.CS161],
                offeredIn: [Season.FALL, Season.WINTER, Season.SPRING, Season.SUMMER],
            },
            {
                id: OSUDegreePlannerAPI._COURSE_IDS.CS290,
                isRequired: true,
                fullName: 'Web Development',
                courseCode: 'CS290',
                prerequisiteCourseIDs: [OSUDegreePlannerAPI._COURSE_IDS.CS162],
                offeredIn: [Season.FALL, Season.WINTER, Season.SPRING, Season.SUMMER],
            },
            {
                id: OSUDegreePlannerAPI._COURSE_IDS.CS325,
                isRequired: true,
                fullName: 'Analysis of Algorithms',
                courseCode: 'CS325',
                prerequisiteCourseIDs: [OSUDegreePlannerAPI._COURSE_IDS.CS225, OSUDegreePlannerAPI._COURSE_IDS.CS261],
                offeredIn: [Season.FALL, Season.WINTER, Season.SPRING, Season.SUMMER],
            },
            {
                id: OSUDegreePlannerAPI._COURSE_IDS.CS340,
                isRequired: true,
                fullName: 'Introduction to Databases',
                courseCode: 'CS340',
                prerequisiteCourseIDs: [OSUDegreePlannerAPI._COURSE_IDS.CS290],
                offeredIn: [Season.FALL, Season.WINTER, Season.SPRING, Season.SUMMER],
            },
            {
                id: OSUDegreePlannerAPI._COURSE_IDS.CS374,
                isRequired: true,
                fullName: 'Operating Systems I',
                courseCode: 'CS374',
                prerequisiteCourseIDs: [OSUDegreePlannerAPI._COURSE_IDS.CS261, OSUDegreePlannerAPI._COURSE_IDS.CS271],
                offeredIn: [Season.FALL, Season.WINTER, Season.SPRING, Season.SUMMER],
            },
            {
                id: OSUDegreePlannerAPI._COURSE_IDS.CS361,
                isRequired: true,
                fullName: 'Software Engineering I',
                courseCode: 'CS361',
                prerequisiteCourseIDs: [OSUDegreePlannerAPI._COURSE_IDS.CS261],
                offeredIn: [Season.FALL, Season.WINTER, Season.SPRING, Season.SUMMER],
            },
            {
                id: OSUDegreePlannerAPI._COURSE_IDS.CS362,
                isRequired: true,
                fullName: 'Software Engineering II',
                courseCode: 'CS362',
                prerequisiteCourseIDs: [OSUDegreePlannerAPI._COURSE_IDS.CS261],
                offeredIn: [Season.FALL, Season.WINTER, Season.SPRING, Season.SUMMER],
            },
            {
                id: OSUDegreePlannerAPI._COURSE_IDS.CS467,
                isRequired: true,
                fullName: 'Capstone Project',
                courseCode: 'CS467',
                prerequisiteCourseIDs: [
                    OSUDegreePlannerAPI._COURSE_IDS.CS374,
                    OSUDegreePlannerAPI._COURSE_IDS.CS361,
                    OSUDegreePlannerAPI._COURSE_IDS.CS362,
                ],
                offeredIn: [Season.FALL, Season.WINTER, Season.SPRING, Season.SUMMER],
            },
            {
                id: OSUDegreePlannerAPI._COURSE_IDS.CS321,
                isRequired: false,
                fullName: 'Introduction to Theory of Computation',
                courseCode: 'CS321',
                prerequisiteCourseIDs: [OSUDegreePlannerAPI._COURSE_IDS.CS261, OSUDegreePlannerAPI._COURSE_IDS.CS225],
                offeredIn: [Season.FALL, Season.SPRING],
            },
            {
                id: OSUDegreePlannerAPI._COURSE_IDS.CS332,
                isRequired: false,
                fullName: 'Intro to Applied Data Science With Programming',
                courseCode: 'CS332',
                prerequisiteCourseIDs: [OSUDegreePlannerAPI._COURSE_IDS.CS261],
                offeredIn: [Season.FALL],
            },
            {
                id: OSUDegreePlannerAPI._COURSE_IDS.CS352,
                isRequired: false,
                fullName: 'Introduction to Usability Engineering',
                courseCode: 'CS352',
                prerequisiteCourseIDs: [OSUDegreePlannerAPI._COURSE_IDS.CS161],
                offeredIn: [Season.FALL, Season.WINTER, Season.SPRING, Season.SUMMER],
            },
            {
                id: OSUDegreePlannerAPI._COURSE_IDS.CS370,
                isRequired: false,
                fullName: 'Introduction to Security',
                courseCode: 'CS370',
                prerequisiteCourseIDs: [OSUDegreePlannerAPI._COURSE_IDS.CS374],
                offeredIn: [Season.FALL, Season.SPRING],
            },
            {
                id: OSUDegreePlannerAPI._COURSE_IDS.CS372,
                isRequired: false,
                fullName: 'Introduction to Computer Networks',
                courseCode: 'CS372',
                prerequisiteCourseIDs: [OSUDegreePlannerAPI._COURSE_IDS.CS261, OSUDegreePlannerAPI._COURSE_IDS.CS271],
                offeredIn: [Season.FALL, Season.WINTER, Season.SPRING, Season.SUMMER],
            },
            {
                id: OSUDegreePlannerAPI._COURSE_IDS.CS373,
                isRequired: false,
                fullName: 'Defense Against the Dark Arts',
                courseCode: 'CS373',
                prerequisiteCourseIDs: [
                    OSUDegreePlannerAPI._COURSE_IDS.CS340,
                    OSUDegreePlannerAPI._COURSE_IDS.CS374,
                    OSUDegreePlannerAPI._COURSE_IDS.CS372,
                ],
                offeredIn: [Season.FALL, Season.SUMMER],
            },
            {
                id: OSUDegreePlannerAPI._COURSE_IDS.CS381,
                isRequired: false,
                fullName: 'Programming Language Fundamentals',
                courseCode: 'CS381',
                prerequisiteCourseIDs: [OSUDegreePlannerAPI._COURSE_IDS.CS261, OSUDegreePlannerAPI._COURSE_IDS.CS225],
                offeredIn: [Season.FALL, Season.SPRING],
            },
            {
                id: OSUDegreePlannerAPI._COURSE_IDS.CS391,
                isRequired: false,
                fullName: 'Social and Ethical Issues in Computer Science',
                courseCode: 'CS391',
                prerequisiteCourseIDs: [],
                offeredIn: [Season.FALL, Season.WINTER, Season.SPRING, Season.SUMMER],
            },
            {
                id: OSUDegreePlannerAPI._COURSE_IDS.CS427,
                isRequired: false,
                fullName: 'Cryptography',
                courseCode: 'CS427',
                prerequisiteCourseIDs: [OSUDegreePlannerAPI._COURSE_IDS.CS261],
                offeredIn: [Season.WINTER, Season.SUMMER],
            },
            {
                id: OSUDegreePlannerAPI._COURSE_IDS.CS474,
                isRequired: false,
                fullName: 'Operating Systems II',
                courseCode: 'CS474',
                prerequisiteCourseIDs: [OSUDegreePlannerAPI._COURSE_IDS.CS271, OSUDegreePlannerAPI._COURSE_IDS.CS374],
                offeredIn: [Season.SPRING],
            },
            {
                id: OSUDegreePlannerAPI._COURSE_IDS.CS450,
                isRequired: false,
                fullName: 'Introduction to Computer Graphics',
                courseCode: 'CS450',
                prerequisiteCourseIDs: [OSUDegreePlannerAPI._COURSE_IDS.CS261],
                offeredIn: [Season.FALL],
            },
            {
                id: OSUDegreePlannerAPI._COURSE_IDS.CS457,
                isRequired: false,
                fullName: 'Computer Graphics Shaders',
                courseCode: 'CS457',
                prerequisiteCourseIDs: [OSUDegreePlannerAPI._COURSE_IDS.CS261],
                offeredIn: [Season.WINTER],
            },
            {
                id: OSUDegreePlannerAPI._COURSE_IDS.CS464,
                isRequired: false,
                fullName: 'Open Source Software',
                courseCode: 'CS464',
                prerequisiteCourseIDs: [OSUDegreePlannerAPI._COURSE_IDS.CS261, OSUDegreePlannerAPI._COURSE_IDS.CS361],
                offeredIn: [Season.FALL, Season.SPRING],
            },
            {
                id: OSUDegreePlannerAPI._COURSE_IDS.CS473,
                isRequired: false,
                fullName: 'Introduction to Digital Forensics',
                courseCode: 'CS473',
                prerequisiteCourseIDs: [OSUDegreePlannerAPI._COURSE_IDS.CS374, OSUDegreePlannerAPI._COURSE_IDS.CS370],
                offeredIn: [Season.WINTER, Season.SUMMER],
            },
            {
                id: OSUDegreePlannerAPI._COURSE_IDS.CS475,
                isRequired: false,
                fullName: 'Introduction to Parallel Programming',
                courseCode: 'CS475',
                prerequisiteCourseIDs: [OSUDegreePlannerAPI._COURSE_IDS.CS261],
                offeredIn: [Season.SPRING],
            },
            {
                id: OSUDegreePlannerAPI._COURSE_IDS.CS478,
                isRequired: false,
                fullName: 'Network Security',
                courseCode: 'CS478',
                prerequisiteCourseIDs: [OSUDegreePlannerAPI._COURSE_IDS.CS372],
                offeredIn: [Season.FALL, Season.SPRING],
            },
            {
                id: OSUDegreePlannerAPI._COURSE_IDS.CS492,
                isRequired: false,
                fullName: 'Mobile Software Development',
                courseCode: 'CS492',
                prerequisiteCourseIDs: [OSUDegreePlannerAPI._COURSE_IDS.CS374],
                offeredIn: [Season.WINTER, Season.SUMMER],
            },
            {
                id: OSUDegreePlannerAPI._COURSE_IDS.CS493,
                isRequired: false,
                fullName: 'Cloud Application Development',
                courseCode: 'CS493',
                prerequisiteCourseIDs: [
                    OSUDegreePlannerAPI._COURSE_IDS.CS290,
                    OSUDegreePlannerAPI._COURSE_IDS.CS340,
                    OSUDegreePlannerAPI._COURSE_IDS.CS372,
                ],
                offeredIn: [Season.FALL, Season.SPRING],
            },
        ];
    }

    public async verifyDegreePlan(): Promise<boolean> {
        // TODO Future Sprint Work
        throw new NotImplementedError();
    }

    public async createQuartersForDegreePlan(_targetGraduationDate: number): Promise<Quarter[]> {
        // TODO Future Sprint Work
        const quarters: Quarter[] = [
            {
                id: v4(),
                season: Season.FALL,
                year: 2024,
            },
            {
                id: v4(),
                season: Season.WINTER,
                year: 2025,
            },
            {
                id: v4(),
                season: Season.SPRING,
                year: 2025,
            },
            {
                id: v4(),
                season: Season.SUMMER,
                year: 2025,
            },
            {
                id: v4(),
                season: Season.FALL,
                year: 2025,
            },
            {
                id: v4(),
                season: Season.WINTER,
                year: 2026,
            },
            {
                id: v4(),
                season: Season.SPRING,
                year: 2026,
            },
            {
                id: v4(),
                season: Season.SUMMER,
                year: 2026,
            },
            {
                id: v4(),
                season: Season.FALL,
                year: 2026,
            },
            {
                id: v4(),
                season: Season.WINTER,
                year: 2027,
            },
            {
                id: v4(),
                season: Season.SPRING,
                year: 2027,
            },
            {
                id: v4(),
                season: Season.SUMMER,
                year: 2027,
            },
            {
                id: v4(),
                season: Season.FALL,
                year: 2027,
            },
        ];
        return quarters;
    }

    public async exportDegreePlanToPDF() {
        // TODO Future Sprint Work
        throw new NotImplementedError();
    }

    // TODO define a better type for the analytics
    public async trackWebsiteAnalytics(_analytic: Record<string, string>): Promise<void> {
        // TODO Future Sprint Work
        throw new NotImplementedError();
    }
}
