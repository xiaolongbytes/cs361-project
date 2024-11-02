import { COURSE_IDS, ALL_OFFERED_COURSES } from '../constants';
describe('COURSE_IDS', () => {
    it('should have the same number of ids as the list of courses', () => {
        expect(Object.values(COURSE_IDS)).toHaveLength(ALL_OFFERED_COURSES.length);
    });
    it('should have an ID for each course', () => {
        Object.values(COURSE_IDS).every(courseID => {
            const matchingCourse = ALL_OFFERED_COURSES.find(course => course.id === courseID);
            expect(matchingCourse).toBeDefined();
        });
    });
});
