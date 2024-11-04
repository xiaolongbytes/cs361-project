import fetch from "node-fetch";

export const fetchCourses = async () => {
    const response = await fetch('https://ecampus.oregonstate.edu/soc/ecatalog/ecourselist.htm?termcode=all&subject=CS');
    return await response.text();
};
