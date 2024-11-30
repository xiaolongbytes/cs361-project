import { useNavigate } from 'react-router-dom';
import { useCallback, useState } from 'react';
import { TargetQuarterData } from '../../App/hooks/OSUDegreePlannerAPI';
import { useOSUDegreePlannerAPI } from '../../App/hooks/useOSUDegreePlannerAPI';
import { OSUDegreePlannerAPI } from '../../App/hooks/OSUDegreePlannerAPI';

import { ROUTES } from '../../../common/constants';
const apiClient = new OSUDegreePlannerAPI();

export const useCreateQuartersState = () => {
    const navigate = useNavigate();
    const [startingQuarter, setStartingQuarter] = useState<TargetQuarterData | null>(null);
    const [endingQuarter, setEndingQuarter] = useState<TargetQuarterData | null>(null);
    const { createQuartersForDegreePlan } = useOSUDegreePlannerAPI({
        apiClient,
    });
    const onSubmit = useCallback(async () => {
        if (!startingQuarter || !endingQuarter) {
            return;
        }
        const { isSuccess } = await createQuartersForDegreePlan({
            startDate: startingQuarter,
            endDate: endingQuarter,
        });
        if (isSuccess) {
            return navigate(ROUTES.HOME);
        }
    }, [createQuartersForDegreePlan, startingQuarter, navigate, endingQuarter]);

    const onStartChange = useCallback((payload: TargetQuarterData) => {
        setStartingQuarter(payload);
    }, []);
    const onEndChange = useCallback((payload: TargetQuarterData) => {
        setEndingQuarter(payload);
    }, []);

    return {
        onSubmit,
        onStartChange,
        onEndChange,
        startingQuarter,
        endingQuarter,
    };
};
