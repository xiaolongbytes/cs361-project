import jsdom from 'jsdom';
import { fetchCourses } from './fetchCourses';

const isElementContainingCourseName = (node: Element) => {
    /**
     * The course names all follow the format
     * <p>
     *   <strong>
     *      <a href="...">...</a>
     *   </strong>
     * </p>
     */
    const expectedStrongTags = Array.from(node.childNodes);
    return expectedStrongTags.some((childNode) => Array.from(childNode.childNodes).some((childNode) => (childNode as HTMLElement).tagName === 'A'));
};

const isElementTableRowContainingPrerequisites = (childNode: ChildNode): childNode is HTMLTableRowElement => {
    return (childNode as Element).tagName === 'TR' && !!(childNode as HTMLTableRowElement).textContent?.includes('Enforced Prereqs');
};

const toPrerequisiteTextFromTableRow = (row: HTMLTableRowElement) => {
    // All prerequisites are displayed in a table with a single column
    const cellWithPrerequisites = row.childNodes[0];
    const indexOfPrerequisitesText =
        // The cell itself has multiple TextNodes, so we find the first one after the 'Enforced Prereqs' text
        Array.from(cellWithPrerequisites.childNodes).findIndex((childNode) => {
            return (childNode as Element).textContent?.includes('Enforced Prereqs');
        }) + 1;
    const prerequisites = Array.from(cellWithPrerequisites.childNodes)[indexOfPrerequisitesText];
    return (prerequisites as Element).textContent;
};

const toSanitizedPrerequisiteName = (prerequisite: string) => {
    return prerequisite.trim().replace('* [C]', '').replace(' [C]', '');
};

const isValidPrerequisiteForOnlineDegree = (prerequisite: string) =>
    !prerequisite.includes('Placement Test') && prerequisite.includes('CS') && !prerequisite.includes('EECS');

const getPrerequisitesFromDetailsTable = (node: Element) => {
    const correspondingDetailsTable = Array.from(node.childNodes[0].childNodes);

    const tableRows = correspondingDetailsTable.filter(isElementTableRowContainingPrerequisites);

    return Array.from(new Set(tableRows.map(toPrerequisiteTextFromTableRow))).flatMap((prerequisiteListAsString) => {
        if (!prerequisiteListAsString) {
            return [];
        }
        // ! Known issue, this code doesn't handle parenthesized AND / OR statement for requirements
        return prerequisiteListAsString.split(' or ').flatMap((prerequisite) => prerequisite.split(' and ')).map(toSanitizedPrerequisiteName).filter(isValidPrerequisiteForOnlineDegree);
    });
};

const getCourseCodeAndFullName = (node: Element) => {
    // Courses are displayed in the format CS ### - Full Name (#)
    const [courseCode, fullNameAndCode] = node.textContent?.split(' – ') ?? [];
    const [fullName] = fullNameAndCode.split('(');

    return {
        courseCode: courseCode.trim(),
        fullName: fullName.trim(),
    };
};

export const getCourses = async () => {
    const html = await fetchCourses();
    const dom = new jsdom.JSDOM(html);
    const document = dom.window.document;
    const allParagraphTags = document.querySelectorAll('div[role="main"] > p');
    // Parallel data structure containing detail tables for each course in the same order as the course names
    const courseDetailTables = document.querySelectorAll('table.coursedetail');
    const courses = Array.from(allParagraphTags)
        .filter(isElementContainingCourseName)
        .map((pNode, index) => {
            const prerequisites = getPrerequisitesFromDetailsTable(courseDetailTables[index]);
            const { courseCode, fullName } = getCourseCodeAndFullName(pNode);
            return {
                courseCode,
                fullName,
                prerequisites,
            };
        });

    return courses;
};
