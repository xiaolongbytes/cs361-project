# Demo Video
[![MyOSUDegreePlanner Demo](https://img.youtube.com/vi/ypy2HMxGl6w/0.jpg)](https://www.youtube.com/watch?v=ypy2HMxGl6w)

# Problem
- Current MyDegree Plan tool offered by Oregon State University does not provide information about or check prerequisites or what quarters courses are offered and only displays course code (with no human legible course name) and credit hours. 
![image](https://github.com/user-attachments/assets/f06aa548-f5ad-4744-b587-637ecdc9efe4)
- Required courses vs. Electives information is buried deep in a Canvas module
- Need to navigate to each course on the ECatalog to see the prereqs. [Example for CS161](https://ecampus.oregonstate.edu/soc/ecatalog/ecoursedetail.htm?subject=CS&coursenumber=161&termcode=ALL)

# Figma Link
[MyOSUDegreePlanner Prototypes (View Only)](https://www.figma.com/design/uInwn7ScBF7rFUsZ9zd7uM/MyOSUDegreePlanner-Prototypes?node-id=3-3&t=WOPh7GzVrdQXalHd-1)

# Lessons Learned:
- BEM naming convention for class names
    - block__element--modifier
- The Typescript + React FunctionComponent pattern for defining component function signature

# Future Features:
- [X] Allow custom quarter creation based on a given starting quarter and graduation quarter at start
- [ ] Have adding course to degree plan logic check if the season of the quarter is in the seasons the class is offered
- [X] Have button to check course order is valid (aka pre-reqs are fulfilled before course is being taken) as current add course logic doesn't check this
- [ ] Add course credits for checking degree requirements (since some courses aren't all 4 credit hours)
- [ ] Track website traffic/usage
- [X] Easy printable version
- [X] Allow users to import/export degree plan files so they can save/modify their plans

# Course Project Requirements:
- Main application must communicate with 4 microservices programmatically and without direct function calls.
    - One microservice must be written by a teammate
- Each microservice must be running in different processes

# Links to Microservice Repos:
1. [import/export degree plan](https://github.com/xiaolongbytes/import_export_degree_plan_microservice)
2. [validate degree plan](https://github.com/xiaolongbytes/validate_degree_plan_microservice)
3. [create quarter](https://github.com/xiaolongbytes/create_quarter_microservice)
4. [pdf generator (by classmate)](https://github.com/beckywong37/pdf_genarator)
