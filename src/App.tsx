import React from 'react';
import { v4 } from 'uuid';
import { ALL_OFFERED_COURSES, Season, COURSE_IDS, UUID, Quarter } from './common/constants';
import './common/reset.css';
import './common/variables.css';
import './App.css';
import { CourseCatalog } from './components/CourseCatalog/CourseCatalog';
import { DegreePlan } from './components/DegreePlan/DegreePlan';

const fall2024: Quarter = {
    id: v4(),
    season: Season.FALL,
    year: 2024,
};
const winter2024: Quarter = {
    id: v4(),
    season: Season.WINTER,
    year: 2024,
};
const spring2025: Quarter = {
    id: v4(),
    season: Season.SPRING,
    year: 2025,
};
const summer2025: Quarter = {
    id: v4(),
    season: Season.SPRING,
    year: 2025,
};

const exampleQuarters = [fall2024, winter2024, spring2025, summer2025];

const exampleQuartersToCourses: Record<UUID, UUID[]> = {
    [fall2024.id]: [COURSE_IDS.CS161],
    [winter2024.id]: [COURSE_IDS.CS162],
    [spring2025.id]: [COURSE_IDS.CS225],
    [summer2025.id]: [COURSE_IDS.CS261],
};

// const exampleCourse: Course = {
//     id: COURSE_IDS.CS325,
//     isRequired: true,
//     fullName: 'Analysis of Algorithms',
//     courseCode: 'CS325',
//     prerequisiteCourseIDs: [COURSE_IDS.CS225, COURSE_IDS.CS261],
//     offeredIn: [Season.FALL, Season.WINTER, Season.SPRING, Season.SUMMER],
// };

const App = () => {
    return (
        <div className="App">
            <div className="App__header">{/* TODO */}</div>
            <div className="App__coursecatalog">
                <CourseCatalog
                    allOfferedCourses={ALL_OFFERED_COURSES}
                    selectedCourse={null}
                    courses={ALL_OFFERED_COURSES}
                    onCourseSelect={_ => {}}
                    quartersToCourses={exampleQuartersToCourses}
                />
            </div>
            <div className="App__form">
                <div style={{ height: '500px', width: '100%', backgroundColor: '#eee' }} />
                {/* TODO */}
            </div>
            <div className="App__quartercatalog">
                {/* <QuarterCard
                    quarter={fall2024}
                    quartersToCourses={exampleQuartersToCourses}
                    allOfferedCourses={ALL_OFFERED_COURSES}
                    onCourseSelect={_ => {}}
                    selectedCourse={null}
                /> */}
                <DegreePlan
                    quarters={exampleQuarters}
                    allOfferedCourses={ALL_OFFERED_COURSES}
                    quartersToCourses={exampleQuartersToCourses}
                    selectedCourse={null}
                    onCourseSelect={_ => {}}
                />
            </div>
        </div>
    );
};

export default App;
