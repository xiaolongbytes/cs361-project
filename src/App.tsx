import React from 'react';
import { SeasonBadge } from './components/SeasonBadge/SeasonBadge';
import { v4 } from 'uuid';
import { ALL_OFFERED_COURSES, Season, COURSE_IDS, UUID, Quarter, Course } from './common/constants';
import { PrerequisiteBadge } from './components/PrerequisiteBadge/PrerequisiteBadge';
import { NoPrerequisiteBadge } from './components/PrerequisiteBadge/NoPrerequisitesBadge';
import { PrerequisitesList } from './components/PrerequisitesList/PrerequisitesList';
import { CourseCard } from './components/CourseCard/CourseCard';
import './common/reset.css';
import './App.css';

const exampleQuarter: Quarter = {
    id: v4(),
    season: Season.FALL,
    year: 2024,
};

const exampleQuartersToCourses: Record<UUID, UUID[]> = {
    [exampleQuarter.id]: [COURSE_IDS.CS161],
};

const exampleCourse: Course = {
    id: COURSE_IDS.CS325,
    isRequired: true,
    fullName: 'Analysis of Algorithms',
    courseCode: 'CS325',
    prerequisiteCourseIDs: [COURSE_IDS.CS225, COURSE_IDS.CS261],
    offeredIn: [Season.FALL, Season.WINTER, Season.SPRING, Season.SUMMER],
};

function App() {
    return (
        <div className="App">
            <SeasonBadge season={Season.FALL} />
            <SeasonBadge season={Season.WINTER} />
            <SeasonBadge season={Season.SPRING} />
            <SeasonBadge season={Season.SUMMER} />
            <br />
            <PrerequisiteBadge courseName="CS161" isFulfilled={true} />
            <PrerequisiteBadge courseName="CS161" isFulfilled={false} />
            <NoPrerequisiteBadge />
            <br />
            <PrerequisitesList
                allOfferedCourses={ALL_OFFERED_COURSES}
                prerequisiteCourseIDs={[]}
                quartersToCourses={exampleQuartersToCourses}
            />
            <PrerequisitesList
                allOfferedCourses={ALL_OFFERED_COURSES}
                prerequisiteCourseIDs={[COURSE_IDS.CS162]}
                quartersToCourses={exampleQuartersToCourses}
            />
            <CourseCard
                isSelected={false}
                course={exampleCourse}
                allOfferedCourses={ALL_OFFERED_COURSES}
                onCourseSelect={_ => {}}
                quartersToCourses={exampleQuartersToCourses}
            />
            <CourseCard
                isSelected
                course={exampleCourse}
                allOfferedCourses={ALL_OFFERED_COURSES}
                onCourseSelect={_ => {}}
                quartersToCourses={exampleQuartersToCourses}
            />
        </div>
    );
}

export default App;
