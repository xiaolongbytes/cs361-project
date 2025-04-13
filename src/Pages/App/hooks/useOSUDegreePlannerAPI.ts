import { useCallback } from 'react';
import { OSUDegreePlannerAPI } from './OSUDegreePlannerAPI';

export const useOSUDegreePlannerAPI = ({ apiClient }: { apiClient: OSUDegreePlannerAPI }) => {
    const fetchAllCourses = useCallback(async () => {
        return apiClient.getOfferedCourses();
    }, [apiClient]);

    const verifyDegreePlan = useCallback(
        async (...args: Parameters<typeof apiClient.verifyDegreePlan>) => {
            const data = await apiClient.verifyDegreePlan(...args);
            if (!data.isSuccess) {
                alert(data.error);
                return data;
            }
            if (!data.isValid) {
                alert(data.failedValidations);
                return data;
            }
            return data;
        },
        [apiClient]
    );

    const loadQuarters = useCallback(() => {
        return apiClient.localQuarters;
    }, [apiClient]);

    const createQuartersForDegreePlan = useCallback(
        async (...args: Parameters<typeof apiClient.createQuartersForDegreePlan>) => {
            const data = await apiClient.createQuartersForDegreePlan(...args);
            if (!data.isSuccess) {
                alert(data.error);
                return data;
            }
            apiClient.localQuarters = data.quarters;
            return data;
        },
        [apiClient]
    );

    const exportDegreePlanToPDF = useCallback(
        async (...args: Parameters<typeof apiClient.exportDegreePlanToPDF>) => {
            return apiClient.exportDegreePlanToPDF(...args);
        },
        [apiClient]
    );

    const saveDegreePlan = useCallback(
        async (...args: Parameters<typeof apiClient.saveDegreePlan>) => {
            const data = await apiClient.saveDegreePlan(...args);
            if (!data.isSuccess) {
                alert(data.error);
                return data;
            }
            alert(data.message);
            return data;
        },
        [apiClient]
    );

    const loadDegreePlan = useCallback(async () => {
        const data = await apiClient.loadDegreePlan();
        if (!data.isSuccess) {
            alert(data.error);
            return data;
        }
        alert('Degree plan successfully loaded');
        return data;
    }, [apiClient]);

    return {
        fetchAllCourses,
        loadQuarters,
        verifyDegreePlan,
        createQuartersForDegreePlan,
        exportDegreePlanToPDF,
        saveDegreePlan,
        loadDegreePlan,
    };
};
