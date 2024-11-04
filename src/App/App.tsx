import React, { FunctionComponent } from 'react';
import '../common/reset.css';
import '../common/variables.css';
import './App.css';
import { CourseCatalog } from './components/CourseCatalog/CourseCatalog';
import { DegreePlan } from './components/DegreePlan/DegreePlan';
import { CourseAssignmentForm } from './components/CourseAssignmentForm/CourseAssignmentForm';
import { useOSUDegreePlannerState } from './hooks/useOSUDegreePlannerState';
import { OSUDegreePlannerAPI } from './hooks/OSUDegreePlannerAPI';

const apiClient = new OSUDegreePlannerAPI();

const App: FunctionComponent = () => {
    const {
        quarters,
        unassignedCourses,
        allOfferedCourses,
        degreePlan,
        selectedCourseFromCatalog,
        selectedCourseFromQuarter,
        selectedQuarter,
        onCourseAdd,
        onCourseRemove,
        onCourseSelect,
        onDegreeReset,
        onQuarterSelect,
    } = useOSUDegreePlannerState({ apiClient });
    return (
        <div className="App">
            <div className="App__header">
                <h1>MyOSUDegreePlan</h1>
                <p>Checks prerequisites and course availability that MyDegree Plan can’t!</p>
            </div>
            <div className="App__coursecatalog">
                <CourseCatalog
                    allOfferedCourses={allOfferedCourses}
                    selectedCourse={selectedCourseFromCatalog}
                    courses={unassignedCourses}
                    onCourseSelect={onCourseSelect}
                    quartersToCourses={degreePlan}
                />
            </div>
            <div className="App__form">
                <CourseAssignmentForm
                    isCourseFromCourseCatalogSelected={!!selectedCourseFromCatalog}
                    isCourseFromDegreePlanSelected={!!selectedCourseFromQuarter}
                    currentlySelectedQuarter={selectedQuarter}
                    quarters={quarters}
                    onQuarterSelect={onQuarterSelect}
                    onCourseAdd={onCourseAdd}
                    onCourseRemove={onCourseRemove}
                    onDegreeReset={onDegreeReset}
                />
            </div>
            <div className="App__quartercatalog">
                <DegreePlan
                    quarters={quarters}
                    allOfferedCourses={allOfferedCourses}
                    quartersToCourses={degreePlan}
                    selectedCourse={selectedCourseFromQuarter}
                    onCourseSelect={onCourseSelect}
                />
            </div>
        </div>
    );
};

export default App;
