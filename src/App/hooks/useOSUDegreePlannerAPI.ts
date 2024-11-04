import { useCallback } from 'react';
import { OSUDegreePlannerAPI } from './OSUDegreePlannerAPI';

export const useOSUDegreePlannerAPI = ({ apiClient }: { apiClient: OSUDegreePlannerAPI }) => {
    const fetchAllCourses = useCallback(async () => {
        return apiClient.getOfferedCourses();
    }, [apiClient]);

    const verifyDegreePlan = useCallback(async () => {
        return apiClient.verifyDegreePlan().catch(() => {
            // TODO remove once verifyDegreePlan is implemented
        });
    }, [apiClient]);

    const createQuartersForDegreePlan = useCallback(
        async (targetGraduationDate: number) => {
            return apiClient.createQuartersForDegreePlan(targetGraduationDate);
        },
        [apiClient]
    );
    const exportDegreePlanToPDF = useCallback(async () => {
        return apiClient.exportDegreePlanToPDF().catch(() => {
            // TODO remove once exportDegreePlanToPDF is implemented
        });
    }, [apiClient]);
    const trackWebsiteAnalytics = useCallback(
        async (analytics: Record<string, string>) => {
            return apiClient.trackWebsiteAnalytics(analytics).catch(() => {
                // TODO remove once trackWebsiteAnalytics is implemented
            });
        },
        [apiClient]
    );

    return {
        fetchAllCourses,
        verifyDegreePlan,
        createQuartersForDegreePlan,
        exportDegreePlanToPDF,
        trackWebsiteAnalytics,
    };
};
