import { v4 } from 'uuid';
import {
    Season,
    ServerSeason,
    SEASON_TO_SERVER_SEASON,
    SEASON_TO_HUMAN_LEGIBLE_NAME,
    Quarter,
    Course,
    UUID,
} from '../../../common/constants';
// import { NotImplementedError } from './NotImplementedError';

export type TargetQuarterData = {
    year: number;
    season: ServerSeason;
};

export class OSUDegreePlannerAPI {
    // Used for assigning dependencies during development. Will be removed when the API is ready
    // Set to public so it can be used it in tests
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

    public async verifyDegreePlan({
        degreePlan,
        quarters,
        courses,
    }: {
        degreePlan: Record<UUID, UUID[]>;
        quarters: Quarter[];
        courses: Course[];
    }): Promise<
        | {
              isValid: true;
              isSuccess: true;
              error?: never;
              failedValidations?: never;
          }
        | {
              isSuccess: false;
              isValid?: never;
              error: string;
              failedValidations?: never;
          }
        | {
              isSuccess: true;
              isValid: false;
              error?: never;
              failedValidations: string[];
          }
    > {
        const serverDegreePlan = Object.entries(degreePlan)
            .map(([quarterID, courseIDs]) => {
                return {
                    quarter: quarters.find(quarter => quarter.id === quarterID)!,
                    coursesAssigned: courseIDs.map(courseID => courses.find(course => course.id === courseID)!),
                };
            })
            .sort((a, b) => {
                if (a.quarter.year === b.quarter.year) {
                    const aSeason = SEASON_TO_SERVER_SEASON[a.quarter.season];
                    const bSeason = SEASON_TO_SERVER_SEASON[b.quarter.season];
                    return aSeason - bSeason;
                }
                return a.quarter.year - b.quarter.year;
            });

        try {
            const response = await fetch('http://127.0.0.1:5000/validate-degree-plan', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ serverDegreePlan, courses }),
            });

            const { isValid, failedValidations } = await response.json();
            return { isSuccess: true, isValid, failedValidations };
        } catch (error) {
            return {
                isSuccess: false,
                error: (error as Error).message,
            };
        }
    }

    public set localQuarters(quarters: Quarter[]) {
        localStorage.setItem('quarters', JSON.stringify(quarters));
    }

    public get localQuarters(): Quarter[] {
        const rawQuarters = localStorage.getItem('quarters');
        if (rawQuarters) {
            return JSON.parse(rawQuarters);
        }
        return [];
    }

    public async createQuartersForDegreePlan({
        startDate,
        endDate,
    }: {
        startDate: TargetQuarterData;
        endDate: TargetQuarterData;
    }): Promise<
        | {
              isSuccess: true;
              error?: never;
              quarters: Quarter[];
          }
        | {
              isSuccess: false;
              error: string;
              quarters?: never;
          }
    > {
        try {
            const response = await fetch('http://127.0.0.1:5000/create-quarters', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    startSeason: startDate.season,
                    startYear: startDate.year,
                    endSeason: endDate.season,
                    endYear: endDate.year,
                }),
            });

            if (!response.ok) {
                const { message } = await response.json();
                throw new Error(message);
            }
            const data = await response.json();
            return {
                isSuccess: true,
                quarters: data,
            };
        } catch (error) {
            return {
                error: (error as Error).message,
                isSuccess: false,
            };
        }
    }

    public async exportDegreePlanToPDF({
        degreePlan,
        quarters,
        courses,
    }: {
        degreePlan: Record<UUID, UUID[]>;
        quarters: Quarter[];
        courses: Course[];
    }): Promise<
        | {
              isSuccess: true;
              documentURL: string;
              error?: never;
          }
        | {
              isSuccess: false;
              error: string;
              documentURL?: never;
          }
    > {
        const serverDegreePlan = Object.entries(degreePlan)
            .map(([quarterID, courseIDs]) => {
                return {
                    quarter: quarters.find(quarter => quarter.id === quarterID)!,
                    coursesAssigned: courseIDs.map(courseID => courses.find(course => course.id === courseID)!),
                };
            })
            .sort((a, b) => {
                if (a.quarter.year === b.quarter.year) {
                    const aSeason = SEASON_TO_SERVER_SEASON[a.quarter.season];
                    const bSeason = SEASON_TO_SERVER_SEASON[b.quarter.season];
                    return aSeason - bSeason;
                }
                return a.quarter.year - b.quarter.year;
            })
            .reduce<Record<string, Record<string, string>>>((acc, { quarter, coursesAssigned }) => {
                const quarterAsHumanLegible = `${SEASON_TO_HUMAN_LEGIBLE_NAME[quarter.season]} ${quarter.year}`;
                const coursesAsHumanLegible = coursesAssigned.reduce<Record<string, string>>((courseAcc, course) => {
                    return {
                        ...courseAcc,
                        [course.courseCode]: course.fullName,
                    };
                }, {});
                return {
                    ...acc,
                    [quarterAsHumanLegible]: coursesAsHumanLegible,
                };
            }, {});

        enum RESPONSE_MESSAGES {
            SUCCESS = 'PDF generated successfully',
            ERROR = 'Invalid structure. Class schedule should be in dictionary format ',
        }
        try {
            const response = await fetch('http://127.0.0.1:5000/generate_pdf', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(serverDegreePlan),
            });

            const { message, pdf: documentURL } = await response.json();
            if (message === RESPONSE_MESSAGES.ERROR) {
                return {
                    isSuccess: false,
                    error: message,
                };
            }
            return {
                isSuccess: true,
                documentURL,
            };
        } catch (error) {
            return {
                isSuccess: false,
                error: (error as Error).message,
            };
        }
    }

    // // TODO define a better type for the analytics
    // public async trackWebsiteAnalytics(_analytic: Record<string, string>): Promise<void> {
    //     // TODO Future Sprint Work
    //     throw new NotImplementedError();
    // }
}
