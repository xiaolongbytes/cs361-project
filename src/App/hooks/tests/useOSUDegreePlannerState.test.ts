import { useOSUDegreePlannerState, CourseSelectSource } from '../useOSUDegreePlannerState';
import { renderHook, act, waitFor } from '@testing-library/react';
import { Course, Season, Quarter } from '../../../common/constants';
import { OSUDegreePlannerAPI } from '../OSUDegreePlannerAPI';
jest.mock('../OSUDegreePlannerAPI');
import { v4 } from 'uuid';

const mocked = <T extends jest.MockableFunction>(fn: T) => fn as jest.MockedFn<typeof fn>;

describe('useOSUDegreePlannerState', () => {
    const mockClient = new OSUDegreePlannerAPI();
    const course: Course = {
        id: v4(),
        isRequired: false,
        courseCode: 'CS 161',
        offeredIn: [Season.FALL],
        fullName: 'Computer Science 161',
        prerequisiteCourseIDs: [],
    };
    const course1: Course = {
        id: v4(),
        isRequired: false,
        courseCode: 'CS 162',
        offeredIn: [Season.FALL],
        fullName: 'Computer Science 162',
        prerequisiteCourseIDs: [],
    };
    const course2: Course = {
        id: v4(),
        isRequired: false,
        courseCode: 'CS 163',
        offeredIn: [Season.FALL],
        fullName: 'Computer Science 163',
        prerequisiteCourseIDs: [],
    };
    const course3: Course = {
        id: v4(),
        isRequired: false,
        courseCode: 'CS 164',
        offeredIn: [Season.FALL],
        fullName: 'Computer Science 164',
        prerequisiteCourseIDs: [],
    };
    const quarter: Quarter = {
        id: v4(),
        year: 2024,
        season: Season.FALL,
    };
    const allQuarters = [quarter];
    const allCourses = [course, course1, course2, course3];
    beforeEach(() => {
        mocked(mockClient.createQuartersForDegreePlan).mockResolvedValue(allQuarters);
        mocked(mockClient.getOfferedCourses).mockResolvedValue(allCourses);
    });
    describe('onCourseSelect', () => {
        it('should set the selected course for the catalog if passed a selected course from the catalog', async () => {
            const { result } = renderHook(useOSUDegreePlannerState, {
                initialProps: {
                    apiClient: mockClient,
                },
            });

            act(() => {
                result.current.onCourseSelect(course, CourseSelectSource.COURSE_CATALOG);
            });

            await waitFor(() => expect(result.current.selectedCourseFromCatalog).toBe(course));
        });
        it('should set the selected course for the degree plan if passed a selected course from the degree plan', async () => {
            const { result } = renderHook(useOSUDegreePlannerState, {
                initialProps: {
                    apiClient: mockClient,
                },
            });

            act(() => {
                result.current.onCourseSelect(course, CourseSelectSource.DEGREE_PLAN);
            });

            await waitFor(() => expect(result.current.selectedCourseFromQuarter).toBe(course));
        });
        it('should unset the selected course from the degree plan if passed a selected course from the catalog', async () => {
            const courseFromCatalog = course;
            const courseFromDegreePlan = course1;
            const { result } = renderHook(useOSUDegreePlannerState, {
                initialProps: {
                    apiClient: mockClient,
                },
            });

            act(() => {
                result.current.onCourseSelect(courseFromDegreePlan, CourseSelectSource.DEGREE_PLAN);
            });

            await waitFor(() => expect(result.current.selectedCourseFromQuarter).toBe(courseFromDegreePlan));

            act(() => {
                result.current.onCourseSelect(courseFromCatalog, CourseSelectSource.COURSE_CATALOG);
            });

            await waitFor(() => expect(result.current.selectedCourseFromCatalog).toBe(courseFromCatalog));
            await waitFor(() => expect(result.current.selectedCourseFromQuarter).toBeNull());
        });
        it('should unset the selected course from the course catalog if passed a selected course from the degree plan', async () => {
            const courseFromCatalog = course;
            const courseFromDegreePlan = course1;
            const { result } = renderHook(useOSUDegreePlannerState, {
                initialProps: {
                    apiClient: mockClient,
                },
            });

            act(() => {
                result.current.onCourseSelect(courseFromCatalog, CourseSelectSource.COURSE_CATALOG);
            });

            await waitFor(() => expect(result.current.selectedCourseFromCatalog).toBe(courseFromCatalog));

            act(() => {
                result.current.onCourseSelect(courseFromDegreePlan, CourseSelectSource.DEGREE_PLAN);
            });

            await waitFor(() => expect(result.current.selectedCourseFromCatalog).toBeNull());
            await waitFor(() => expect(result.current.selectedCourseFromQuarter).toBe(courseFromDegreePlan));
        });
    });

    describe('onCourseAdd', () => {
        it('should add the selected course from the course catalog to the degree plan on the selected quarter if both are set', async () => {
            const { result } = renderHook(useOSUDegreePlannerState, {
                initialProps: {
                    apiClient: mockClient,
                },
            });

            act(() => {
                result.current.onCourseSelect(course, CourseSelectSource.COURSE_CATALOG);
                result.current.onQuarterSelect(quarter);
            });

            await waitFor(() => expect(result.current.selectedCourseFromCatalog).toBe(course));
            await waitFor(() => expect(result.current.selectedQuarter).toBe(quarter));

            act(() => {
                result.current.onCourseAdd();
            });

            await waitFor(() => expect(result.current.degreePlan[quarter.id]).toContain(course.id));
        });
        it('should unset the selected course', async () => {
            const { result } = renderHook(useOSUDegreePlannerState, {
                initialProps: {
                    apiClient: mockClient,
                },
            });

            act(() => {
                result.current.onCourseSelect(course, CourseSelectSource.COURSE_CATALOG);
                result.current.onQuarterSelect(quarter);
            });

            await waitFor(() => expect(result.current.selectedCourseFromCatalog).toBe(course));
            await waitFor(() => expect(result.current.selectedQuarter).toBe(quarter));

            act(() => {
                result.current.onCourseAdd();
            });

            await waitFor(() => expect(result.current.selectedCourseFromCatalog).toBeNull());
        });
        it('should not do anything if there is no selected course', async () => {
            const { result } = renderHook(useOSUDegreePlannerState, {
                initialProps: {
                    apiClient: mockClient,
                },
            });

            act(() => {
                result.current.onQuarterSelect(quarter);
            });

            act(() => {
                result.current.onCourseAdd();
            });

            await waitFor(() =>
                expect(result.current.degreePlan[quarter.id]).not.toStrictEqual(
                    expect.arrayContaining<string>([course.id])
                )
            );
        });
        it('should not do anything if there is no selected quarter', async () => {
            const { result } = renderHook(useOSUDegreePlannerState, {
                initialProps: {
                    apiClient: mockClient,
                },
            });

            act(() => {
                result.current.onCourseSelect(course, CourseSelectSource.COURSE_CATALOG);
            });

            act(() => {
                result.current.onCourseAdd();
            });

            await waitFor(() =>
                expect(result.current.degreePlan[quarter.id]).not.toStrictEqual(
                    expect.arrayContaining<string>([course.id])
                )
            );
        });
    });

    describe('onCourseRemove', () => {
        it('should remove the selected course from the degree plan on the selected quarter if the selected course from the degree plan are set', async () => {
            const { result } = renderHook(useOSUDegreePlannerState, {
                initialProps: {
                    apiClient: mockClient,
                },
            });

            act(() => {
                result.current.onCourseSelect(course, CourseSelectSource.COURSE_CATALOG);
                result.current.onQuarterSelect(quarter);
            });
            await waitFor(() => expect(result.current.selectedCourseFromCatalog).toBe(course));
            await waitFor(() => expect(result.current.selectedQuarter).toBe(quarter));

            act(() => {
                result.current.onCourseAdd();
            });
            console.log(result.current.degreePlan);
            await waitFor(() => expect(result.current.degreePlan[quarter.id]).toContain(course.id));

            act(() => {
                result.current.onCourseSelect(course, CourseSelectSource.DEGREE_PLAN);
            });

            await waitFor(() => expect(result.current.selectedCourseFromQuarter).toBe(course));

            act(() => {
                result.current.onCourseRemove();
            });

            await waitFor(() => expect(result.current.degreePlan[quarter.id]).not.toContain(course.id));
        });
        it('should unset the selected course', async () => {
            const { result } = renderHook(useOSUDegreePlannerState, {
                initialProps: {
                    apiClient: mockClient,
                },
            });

            act(() => {
                result.current.onCourseSelect(course, CourseSelectSource.COURSE_CATALOG);
                result.current.onQuarterSelect(quarter);
            });
            await waitFor(() => expect(result.current.selectedCourseFromCatalog).toBe(course));
            await waitFor(() => expect(result.current.selectedQuarter).toBe(quarter));
            act(() => {
                result.current.onCourseAdd();
            });

            await waitFor(() => expect(result.current.degreePlan[quarter.id]).toContain(course.id));

            act(() => {
                result.current.onCourseSelect(course, CourseSelectSource.DEGREE_PLAN);
            });

            act(() => {
                result.current.onCourseRemove();
            });
            await waitFor(() => expect(result.current.selectedCourseFromQuarter).toBeNull());
        });
        it('should not do anything if there is no selected course', async () => {
            const { result } = renderHook(useOSUDegreePlannerState, {
                initialProps: {
                    apiClient: mockClient,
                },
            });

            act(() => {
                result.current.onCourseSelect(course, CourseSelectSource.COURSE_CATALOG);
                result.current.onQuarterSelect(quarter);
            });
            await waitFor(() => expect(result.current.selectedCourseFromCatalog).toBe(course));
            await waitFor(() => expect(result.current.selectedQuarter).toBe(quarter));
            act(() => {
                result.current.onCourseAdd();
            });

            act(() => {
                result.current.onQuarterSelect(quarter);
                result.current.onCourseRemove();
            });

            await waitFor(() => expect(result.current.degreePlan[quarter.id]).toContain(course.id));
        });
    });

    describe('onDegreeReset', () => {
        let spy: jest.SpyInstance;
        beforeEach(() => {
            spy = jest.spyOn(window, 'confirm');
        });
        it('should clear the degree plan if the user confirms', async () => {
            spy.mockReturnValue(true);
            const { result } = renderHook(useOSUDegreePlannerState, {
                initialProps: {
                    apiClient: mockClient,
                },
            });

            act(() => {
                result.current.onCourseSelect(course, CourseSelectSource.COURSE_CATALOG);
                result.current.onQuarterSelect(quarter);
            });

            act(() => {
                result.current.onCourseAdd();
            });

            await waitFor(() => expect(result.current.degreePlan[quarter.id]).toContain(course.id));

            act(() => {
                result.current.onDegreeReset();
            });
            await waitFor(() => expect(result.current.degreePlan).toStrictEqual({}));
        });
        it('should not clear the degree plan if the user does not confirm', async () => {
            spy.mockReturnValue(false);
            const { result } = renderHook(useOSUDegreePlannerState, {
                initialProps: {
                    apiClient: mockClient,
                },
            });

            act(() => {
                result.current.onCourseSelect(course, CourseSelectSource.COURSE_CATALOG);
                result.current.onQuarterSelect(quarter);
            });

            act(() => {
                result.current.onCourseAdd();
            });

            await waitFor(() => expect(result.current.degreePlan[quarter.id]).toContain(course.id));

            act(() => {
                result.current.onDegreeReset();
            });
            await waitFor(() => expect(result.current.degreePlan[quarter.id]).toContain(course.id));
        });
    });

    describe('onQuarterSelect', () => {
        it('should set the selected quarter', async () => {
            const { result } = renderHook(useOSUDegreePlannerState, {
                initialProps: {
                    apiClient: mockClient,
                },
            });

            act(() => {
                result.current.onQuarterSelect(quarter);
            });

            await waitFor(() => expect(result.current.selectedQuarter).toBe(quarter));
        });
    });

    describe('unassignedCourses', () => {
        it('should return the list of courses, filtering out the ones assigned to quarters', async () => {
            const { result } = renderHook(useOSUDegreePlannerState, {
                initialProps: {
                    apiClient: mockClient,
                },
            });

            await waitFor(() =>
                expect(result.current.unassignedCourses).toStrictEqual(
                    expect.objectContaining([course, course1, course2, course3])
                )
            );

            act(() => {
                result.current.onCourseSelect(course, CourseSelectSource.COURSE_CATALOG);
                result.current.onQuarterSelect(quarter);
            });

            act(() => {
                result.current.onCourseAdd();
            });
            await waitFor(() => expect(result.current.degreePlan[quarter.id]).toContain(course.id));

            await waitFor(() =>
                expect(result.current.unassignedCourses).toStrictEqual(
                    expect.objectContaining([course1, course2, course3])
                )
            );
        });
    });
    describe('on load', () => {
        it('should load all the courses from the API', async () => {
            const { result } = renderHook(useOSUDegreePlannerState, {
                initialProps: {
                    apiClient: mockClient,
                },
            });
            await waitFor(() => expect(result.current.allOfferedCourses).toStrictEqual(allCourses));
        });
        it('should load all the quarters from the API', async () => {
            const { result } = renderHook(useOSUDegreePlannerState, {
                initialProps: {
                    apiClient: mockClient,
                },
            });
            await waitFor(() => expect(result.current.quarters).toStrictEqual(allQuarters));
        });
    });
});
