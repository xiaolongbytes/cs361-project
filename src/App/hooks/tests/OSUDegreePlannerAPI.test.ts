import { OSUDegreePlannerAPI } from '../OSUDegreePlannerAPI';
import { NotImplementedError } from '../NotImplementedError';

describe(OSUDegreePlannerAPI, () => {
    jest.useFakeTimers();

    beforeEach(() => {
        window.fetch = jest.fn();
    });
    // TODO remove when fetching courses from API is implemented
    describe('_COURSE_IDS', () => {
        it('should have the same number of ids as the list of courses', async () => {
            const courses = await new OSUDegreePlannerAPI().getOfferedCourses();
            expect(Object.values(OSUDegreePlannerAPI._COURSE_IDS)).toHaveLength(courses.length);
        });
        it('should have an ID for each course', async () => {
            const courses = await new OSUDegreePlannerAPI().getOfferedCourses();
            Object.values(OSUDegreePlannerAPI._COURSE_IDS).forEach(courseID => {
                const matchingCourse = courses.find(course => course.id === courseID);
                expect(matchingCourse).toBeDefined();
            });
        });
    });

    describe('getOfferedCourses', () => {
        it('should return a list of offered courses', async () => {
            const api = new OSUDegreePlannerAPI();
            const courses = await api.getOfferedCourses();
            expect(courses).toBeInstanceOf(Array);
        });
    });

    // TODO re-enable once creating quarters is implemented
    describe.skip('createQuartersForDegreePlan', () => {
        it('should create the correct number of quarters for someone graduating in a year', async () => {
            // January 1st, 2024
            const currentDate = new Date(2024, 0, 1);
            jest.setSystemTime(currentDate);
            const api = new OSUDegreePlannerAPI();
            const quarters = await api.createQuartersForDegreePlan(currentDate.getFullYear() + 1);
            expect(quarters.length).toBe(4);
        });
        it('should create the correct number of quarters for someone graduating in 2 years', async () => {
            // January 1st, 2024
            const currentDate = new Date(2024, 0, 1);
            jest.setSystemTime(currentDate);
            const api = new OSUDegreePlannerAPI();
            const quarters = await api.createQuartersForDegreePlan(currentDate.getFullYear() + 2);
            expect(quarters.length).toBe(8);
        });
        it('should create the correct number of quarters for someone graduating in 1.5 years', async () => {
            // June 1st, 2024
            const currentDate = new Date(2024, 6, 1);
            jest.setSystemTime(currentDate);
            const api = new OSUDegreePlannerAPI();
            const quarters = await api.createQuartersForDegreePlan(currentDate.getFullYear() + 2);
            expect(quarters.length).toBe(6);
        });
    });

    describe.skip('verifyDegreePlan', () => {
        // TODO write more tests
        it('should throw a NotImplementedError', async () => {
            const api = new OSUDegreePlannerAPI();
            await expect(api.verifyDegreePlan).rejects.toThrow(NotImplementedError);
        });
    });

    describe.skip('exportDegreePlanToPDF', () => {
        // TODO write more tests
        it('should throw a NotImplementedError', async () => {
            const api = new OSUDegreePlannerAPI();
            await expect(api.exportDegreePlanToPDF).rejects.toThrow(NotImplementedError);
        });
    });
    describe.skip('trackWebsiteAnalytics', () => {
        // TODO write more tests
        it('should throw a NotImplementedError', async () => {
            const api = new OSUDegreePlannerAPI();
            await expect(api.trackWebsiteAnalytics).rejects.toThrow(NotImplementedError);
        });
    });
});
