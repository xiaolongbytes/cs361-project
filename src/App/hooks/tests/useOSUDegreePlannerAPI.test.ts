import { renderHook } from '@testing-library/react';
import { useOSUDegreePlannerAPI } from '../useOSUDegreePlannerAPI';
import { OSUDegreePlannerAPI } from '../OSUDegreePlannerAPI';
import { Course, Season, Quarter } from '../../../common/constants';
import { v4 } from 'uuid';

describe(useOSUDegreePlannerAPI, () => {
    const apiClient = new OSUDegreePlannerAPI();
    describe('fetchAllCourses', () => {
        const courses: Course[] = [
            {
                id: v4(),
                isRequired: true,
                offeredIn: [Season.FALL],
                fullName: 'Test Course',
                prerequisiteCourseIDs: [],
                courseCode: 'CS 101',
            },
        ];
        beforeEach(() => {
            jest.spyOn(apiClient, 'getOfferedCourses').mockResolvedValue(courses);
        });
        it('should return a list of courses fetched from the API', async () => {
            const { result } = renderHook(useOSUDegreePlannerAPI, {
                initialProps: { apiClient },
            });

            const returnedCourses = await result.current.fetchAllCourses();
            expect(returnedCourses).toStrictEqual(courses);
        });
        it('should utilize the passed in API client', async () => {
            const { result } = renderHook(useOSUDegreePlannerAPI, {
                initialProps: { apiClient },
            });

            await result.current.fetchAllCourses();
            expect(apiClient.getOfferedCourses).toHaveBeenCalled();
        });
    });
    describe('verifyDegreePlan', () => {
        beforeEach(() => {
            jest.spyOn(apiClient, 'verifyDegreePlan').mockResolvedValue(true);
        });
        it('should utilize the passed in API client', async () => {
            const { result } = renderHook(useOSUDegreePlannerAPI, {
                initialProps: { apiClient },
            });
            await result.current.verifyDegreePlan();
            expect(apiClient.verifyDegreePlan).toHaveBeenCalled();
        });
    });
    describe('createQuartersForDegreePlan', () => {
        const quarters: Quarter[] = [
            {
                id: v4(),
                season: Season.FALL,
                year: 2024,
            },
        ];
        beforeEach(() => {
            jest.spyOn(apiClient, 'createQuartersForDegreePlan').mockResolvedValue(quarters);
        });
        it('should utilize the passed in API client', async () => {
            const { result } = renderHook(useOSUDegreePlannerAPI, {
                initialProps: { apiClient },
            });
            await result.current.createQuartersForDegreePlan(2024);
            expect(apiClient.createQuartersForDegreePlan).toHaveBeenCalledWith(2024);
        });
        it('should return the list of created quarters', async () => {
            const { result } = renderHook(useOSUDegreePlannerAPI, {
                initialProps: { apiClient },
            });
            const createdQuarters = await result.current.createQuartersForDegreePlan(2024);
            expect(createdQuarters).toStrictEqual(quarters);
        });
    });

    describe('exportDegreePlanToPDF', () => {
        beforeEach(() => {
            jest.spyOn(apiClient, 'exportDegreePlanToPDF').mockResolvedValue();
        });
        it('should utilize the passed in API client and not throw an error', async () => {
            const { result } = renderHook(useOSUDegreePlannerAPI, {
                initialProps: { apiClient },
            });
            await result.current.exportDegreePlanToPDF();
            expect(apiClient.exportDegreePlanToPDF).toHaveBeenCalled();
        });
    });

    describe('trackWebsiteAnalytics', () => {
        beforeEach(() => {
            jest.spyOn(apiClient, 'trackWebsiteAnalytics').mockResolvedValue();
        });
        it('should utilize the passed in API client and not throw an error', async () => {
            const { result } = renderHook(useOSUDegreePlannerAPI, {
                initialProps: { apiClient },
            });
            const analytics = {
                event: 'event',
            };
            await result.current.trackWebsiteAnalytics(analytics);
            expect(apiClient.trackWebsiteAnalytics).toHaveBeenCalled();
        });
    });
});
