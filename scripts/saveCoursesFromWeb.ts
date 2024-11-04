import fs from 'fs';
import path from 'path';
import { getCourses } from './getCourses';

export const saveCoursesFromWeb = async () => {
    const courses = await getCourses();
    fs.writeFileSync(path.resolve(__dirname, 'courses.json'), JSON.stringify(courses, null, 2));
};

saveCoursesFromWeb();
