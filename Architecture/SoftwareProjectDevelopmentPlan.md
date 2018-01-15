# Software Project Development Plan
- Version 1.2, Last update: December 18, 2017

## Table of Contents
#### 1. [Overview](#overview)  
* [1.1 Project Summary](#summary)
* [1.3 Assumptions and Constraints](#constraints)  
* [1.3 Project Deliverables](#deliver)
* [1.4 Schedule](#schedule)


#### [2. Project Organization](#organize)
* [2.1 External Interfaces](#external)   
* [2.2 Internal Structure](#internal)
* [2.3 Roles and Responsibilities](#roles)  

#### [3. Managerial Process Plan](#process)  
* [3.1 Startup Plan](#startup)  
* [3.2 Project Staff Training Plan](#training)  

#### [4. Technical Process Plan](#technical)  
* [4.1 Methods, Tools and Techniques](#methods)


#### [5. Definitions](#definitions)
---
# Authors
- Randy Dang
- Graham Dubreuil
- Matthew Fung
- Chris Vanderhyden
- Braydon Kains
- Frank Khalil
- Ryley Davenport
- Ariba Saqlain


## <a id="overview"></a> 1. Overview

##### <a id="summary"></a> 1.1 Project Summary
PlanMe is a web application that allows multiple users to connect together in order to create,organize and control group related projects. Users are able to navigate through very user friendly interface and easy to use features.


##### <a id="constraints"></a> 1.2 Assumptions and Constraints
PlanMe users have access to internet browser.

The PlanMe project has no budget.

PlanMe has a time requirement of roughly 4 months.

##### <a id="deliver"></a> 1.3 Project Deliverables
PlanMe, and all accompanying documentation is to be delivered by December 21st 2017.

##### <a id="schedule"></a> 1.4 Schedule
Sept 27th 2017 : Completing the first drafts of the requirements documentation along with a mock GUI and SPMP. <br/>
Oct 9th 2017 : Completing the analysis of the requirements documentation.  
Oct 23rd 2017 : Giving the designs including the class and interaction diagrams to the implementation team.  
Dec 21st 2017 : Completing the project along with all documentation.  

SQA will take place before progressing to the next step, and the schedule will change accordingly if necessary.

---



## <a id="organize"></a> 2. Project Organization


<!--
The project will follow the Kanban process model. This model uses a visual listing of product features and its subtasks describing the specifics on steps needed to implement the feature on a virtual or whiteboard. Our Product Backlog, a prioritized list of high-level requirements written as User Stories. At the start of a sprint, a number of User Stories is
selected and put into the Sprint Backlog. These stories are the features that will be implemented during the sprint. For each user story different phases are traversed: requirements, architectural design,
implementation and testing. Each sprint has the duration of one to two weeks. After all the sprints, the product will be delivered in full to the customer.   ***********confusing***************-->





The project will be organized in the following technique 


#### <a id="external"></a> 2.1 External interfaces
- The client for this project is Mr. Brown
- All formal communication between the client and the team is processed by our external representative Braydon Kains
- The primary method of communication is done via email on "as need" basis.

<!-- @Matthew F commented this out because this is the definition of External Interfaces: "This subclause of the SPMP shall describe the organizational boundaries between the project and external entities.
This should include, but is not limited to, the following: the parent organization, the acquiring organization,
subcontracted organizations, and other organizational entities that interact with the project. Representations such as
organizational charts and diagrams may be used to depict the project’s external interfaces."  - The user will be first asked to sign in into their account or create a new a account.  
- The user will be asked to select a project type (eg. how much control non-manager users have, how work is divided, whether the manager has to approve progress, etc).
- After the user enters all the project information, they will be asked to invite the group members to sign up for our website in case the group members don't have an existing account, the invite will be sent throw email.
- The user will be able to create an outline for the group project, and assign tasks/sections to members of a group.
- Members can update their progress by submitting work or by self reporting progress.
- The software will show the progress of the project overall, and the progress of individual users on their assigned sections.
- There will be a  feature to anonymously rate each other’s work, which could be used to help/simplify grading in a school project setting.
- If a member hasn’t submitted anything or updated their progress after a specified amount of time the program can send emails/notifications to remind them to be productive. -->

#### <a id="internal"></a> 2.2 Internal Structure
The team structure is hierarchical: three team leaders responsible for the Frontend, Backend, and Architecture will be leading discussions and guiding the project through each phase in parallel. <!--in an agile fashion. -->

#### <a id="roles"></a> 2.3 Roles and Responsibilities
Each member of PlanMe will be placed in one of three subgroups that deal with different tasks and although there are different subgroups, members are not differentiated by different roles.
<br /> **Backend**: Members placed in this subgroup will be responsible for creating a database along with all the code to make PlanMe fully functional.
<br /> **Frontend**: Members of this subgroup are responsible for the visual appearance of the web application and ensuring everything on the application has a proper function.
<br /> **Architecture**: Members of this subgroup are responsible for things behind the scenes such as documentation and UML diagrams that illustrate how the application should function on an elementary level.

<br />
The following table lists the members of each subgroup:

| Subgroup      | Members       |
| ------------- | ------------- |
| Backend       | Braydon Kains, Colin Leslie, Frank Khalil, Julian Chu, Luka Sitas, Pablo Morales |
| Frontend      | Ariba Saqlain, Joel Kipfer, Josh Jacob, Keegan Ireland, Nick Koehler, Taelor McMillan |
| Architecture  | Chris Vanderhyden, Graham Dubreuil, Kevin Liang, Matthew Fung, Ryley Davenport, Randy Dang |

<br />
The following table lists the major documentation and implementation tasks performed by each member:

| Deliverable                   | Members       |
| -------------                 | ------------- |
| Analysis Document             | Ariba Saqlain, Braydon Kains, Chris Vanderhyden, Frank Khalil, Joel Kipfer, Kevin Liang, Randy Dang, Ryley Davenport  |
| Coding Standard Document      | Brandon Chow, Braydon Kains |
| Design Document               | Braydon Kains, Chris Vanderhyden, Frank Khalil ,Graham Dubreuil, Kevin Liang, Matthew Fung, Nicholas Koehler, Randy Dang, Ryley Davenport |
| Requirements Document         | Chris Vanderhyden, Graham Dubreuil, Joel Kipfer, Frank Khalil, Kevin Liang, Matthew Fung, Nicholas Koehler, Randy Dang, Ryley Davenport, Taelor McMillan |
| Software Project Development Plan | Ariba Saqlain, Braydon Kains, Frank Khalil,Chris Vanderhyden, Graham Dubreuil, Matthew Fung, Randy Dang, Ryley Davenport |
| About View           | Taelor McMillan |
| Task Board View      | Josh Jacob, Nicholas Koehler |
| Dashboard View       | Ariba Saqlain, Joel Kipfer |
| Login View           | Taelor McMillan |
| Board Selection View | Josh Jacob |
| User Profile View    | Ariba Saqlain, William Keegan Ireland |

---

## <a id="process"></a> 3. Managerial Process Plan
The scope of the project is to create a group work management software that allows users to manage their work remotely


#### <a id="startup"></a> 3.1 Start-up Plan
<!--The estimate time to complete the project is 2 and half months; the staff are divided into 3 sub teams: frontend, backend and architecture.    *****repetition*****   --> 
We will be providing training for the each sub team in the tools used to build the project.
<!--
#### <a id="staff"></a> 3.2 Staffing Plan
Members of PlanMe are divided into three different subgroups; backend, frontend, and architecture, each of which handle and manage their own set of tasks.
<br /> **Backend**: Members of this subgroup are responsible for the functionality of the app through producing a vast majority of the code via Javascript along with creating and maintaining a database via SQL.
<br /> **Frontend**: Members of this subgroup are responsible for creating the visual aspect of PlanMe via HTML, CSS and or Javascript along with ensuring that the code provided by the backend group is fully functional and serves a purpose on the web application.
<br /> **Architecture**: Members of this subgroup are responsible for a vast majority of the documentation of this project along with creating UML Diagrams to illustrate how the project should ideally function.
--    *****repetition*****  -->



#### <a id="training"></a> 3.2 Project Staff Training Plan
Each subgroup is required to learn different languages  and or programs that pertain to their tasks if they do not already have prior knowledge.
<br /> **Backend**: NodeJS and MySQL
<br /> **Frontend**: HTML, CSS, and JavaScript
<br /> **Architecture**: HTML, UML, and Markdown

---

## <a id="technical"></a> 4. Technical Process Plan
<b>Source Control:</b>
Git will be used for source control. All members have equal contributor access to the repository. Merging will be handled by the members of each sub-team involved in reviewing a pull request.

<b>Software Documentation:</b>
Programmers will be required to keep up documentation on the code they are responsible for. Code commenting will be required to make intentions clear to collaborators. The Javadoc standard will be used to document objects and methods, and comments will be added to lines where clarification to collaborators may be required. It is up to the team member's discretion to only comment when necessary, and keep their comments non-intrusive.

<b>Software Quality Assurance</b>
A majority of SQA processes will be handled through source control. The two most important SQA processes are:
<b>Code Review:</b>
Detailed in Git Workflow, will be handled through git's pull request system.

<b>Bug Tracking:</b>

Bug tracking will be handled through Git's Issue system. Issues brought up here will be pulled into the SQA document required for the project.

#### <a id="methods"></a> 4.1 Methods, Tools and Techniques
PlanMe will use the following languages and tools in their technology stack:

<b>Front End:</b>
Languages:
<ul>
<li>HTML</li>
<li>CSS</li>
<li>Javascript</li>
</ul>

Libraries:
<ul>
<li>JQuery</li>
<li>Bootstrap</li>
</ul>

<b>Back End:</b>
Languages:
<ul>
<li>Javascript</li>
<li>SQL</li>
</ul>  

Tools:
<ul>
<li>Node</li>
<li>MySQL</li>
<li>JSDoc</li>
</ul>

Libraries:
<ul>
<li>Nodemon</li>
</ul>

<!--<b>Design Philosophy:</b>
The application programming interface will be object oriented and REST based. More information to come when back end requirements are further refined.  ********confusing*********** -->

<b>Editor:</b>
All code will be edited on a code editor and not an IDE. This is to ease the collaboration process, ensuring that there aren't proprietary project files being committed to the project repository.
Choice of editor is left to the discretion of the team member, though it is suggested that they use Visual Studio Code or Atom for their useful plug-ins.

- Back End: Visual Studio Code. There are no hard restrictions on editor used, but use of IDEs should be confirmed with the rest of the team to ensure commits are clean of special IDE files; only necessary code should be committed. Within the back end team, use of the Github Web Client editor is strictly prohibited.

<b>Git Workflow:</b>
The team will use a simplified feature branch workflow:

1. Clone from master
2. Create a new branch for their new feature
3. Upon finishing feature, create pull request and assign reviewers
4. Once review is approved, branch is merged to master and subsequently deleted
5. Repeat from step 2 <br/>

Why use the feature branch workflow?

While this is still subject to change as the team's workflow process is evaluated and refined, this is our current choice for workflow because it allows us to have an easily maintainable code review process.

<h4>Back-End Coding Standards:</h4>

<h4>Commits:</h4>
Commits should be sparse and use descriptive names. Large sums of unnecessary, small commits, and commits with similar/same names should be avoided.

<h4>Variables:</h4>

*Declaration:* Variables should be declared using the let keyword. This was decided because of the let keyword's differences to var. The var keyword declares a variable either globally, or to the scope of the entire function. The let keyword however allows us to declar variables locally to any block of code. This specificity was deemed more safe by the team, and will be used throughout the entirety of the PlanMe backend with no exceptions.

*Naming:* All packages, functions, and variables are to be named using the camel case naming format i.e. likeThis.
The only exception will be global constant data variables, which will be named in all capitals with underscores i.e. LIKE_THIS. 
All variables should have descriptive names with limited verbosity. To determine the balance between descriptiveness and verbosity is left to the programmer. Use of the same variable name in separate modules should be avoided. This rule does not apply to variables which hold packages; the names of these variables should be standardized throughout each module for consistency.

*Packages:* Packages should be declared as constants. The exceptions for package variable naming are stated above.

<h4>Objects:</h4>

*Naming:* All objects will be declared in PascalCase with no exceptions. At declaration, the objects will be name using the format *ObjectName*Class (where *ObjectName* is replaced with the object's intended name).
The exports will be declared in PascakCase with no exceptions. They will be named using the format *ObjectName* i.e. removing the word "Class" from the object's original name. This is because the export name is the name being used throughout the file, and as such the least verbose name is exported. Object member naming follows the same standards as variable naming, stated above.

*Methods:* An object's methods should only have responsibilities associated with the instance of the object. While the differentiation does not exist in Javascript ES6, all methods of an object should be treated as an instance method. Any methods that would be defined as static in other languages should simply be declared outside of the object in the module, and exported independently of the object. There will be no "getter" or "setter" methods in any of the objects on the PlanMe backend. The inclusion of these methods is superfluous in Javascript, as there is no concept of encapsulation present in the language. All members will simply be accessed directly on the instance i.e. this.*member*. Note that these methods will be included in the class diagram found in the Design document. These are included to coincide with the nature of the assignment, and not to reflect proper implementation. Further details on the disparities between documentation and implementation will be specified in the Implementation Guide document.

<h4>Module Code Order:</h4>

Code should be written in each module in the following order:
<ul>
<li>Require npm packages</li>
<li>Require app modules</li>
<li>Declare global constants</li>
<li>Define object if present in module; never more than one object per module</li>
<li>Define methods</li>
<li>Define operation code (i.e. the "main program") if necessary in module</li>
<li>Define exports</li>
</ul>

No exceptions with any module.



## <a id="definitions"></a> 5. Definitions
| Term                          | definition       |
| -------------                 | ------------- |
| PlanMe                        |PlanMe is a web application that organizes group projects. The application allows users to create projects, invite members, and manage tasks. Other platforms enable members to communicate but this web app keeps members focused. This is done by showing users active tasks and member participation. A quantifiable way to track work and progress is sometimes needed when working in a group.On the other hand, threads and messages allow members to communicate about goals and issues.All together PlanMe enables users to be their best and most efficent while working together.                 |
| Completed                     | Tasks that are done and no longer need to be worked on  |
| Git Merge                     |Join two or more development histories together|
|  Git Pull                     |Fetch from and integrate with another repository or a local branch|
| In-Progress                   | Tasks that are currently being worked on by indicated user(s). |
| Task                          | A trackable and achievable user defined goal. Each task has an effort level, descriptor and status,There may be multiple tasks inside every taskboard  There may be multiple tasks inside every taskboard. |
| Task descriptor               | a colour descriptor to allow users to visually group tasks together of the same colour. |
| Task status                   | visually seen by a task's location within the Kan-Ban style TaskBoard. The status may be To-Do , In-Progress or Done. |
| Task effort level             | A number descriptor for every task. May be from 1-5. the intent of effort level is to encourage members to work on tasks of a higher effort level or to describe their complexity.|
| Taskboard                     | The area in which the user can view each of their to-do, in-progress and done tasks. There may be multiple task boards for every project. |
| To-Do                         | Tasks that are yet to be completed and must be done by certain due dates if required. |
| Thread                        | A thread in the Message Board. Members of a project may create, edit or delete threads inside the Message Board. |
| Workbench                     | A drop-down part of PlanMe's interface that holds information such as your profile, current projects, tasks at hand, and users enlisted in current projects. The Workbench is also the gateway to the message board. |
|UML (Unified Modeling Language)| A standardized modeling language that will allow users to visually examine different aspects of the software.|






<!--Task status - visually seen by a task's location within the Kan-Ban style TaskBoard. There are three status's a task can have: To-Do , In-Progress or Done
Task effort level - A 1-5 number scale that has the intent to encourage members to work on tasks of a higher effort level or to describe their complexity, 1 is designated as easy and 5 is designated as the most difficult. 
Taskboard - The area in which the user can view each of their To-Do, In-Progress and Done tasks. There may be multiple task boards for every project. 
To-Do - Tasks that are yet to be completed and must be done by certain due dates if required.\
Thread - A thread in the Message Board. Members of a project may create, edit or delete threads inside the Message Board.
UML (Unified Modeling Language) - A standardized modeling language that will allow users to visually examine different aspects of the software. 
Workbench - A drop-down part of PlanMe's interface that holds information such as your profile, current projects, tasks at hand, and users enlisted in current projects. The Workbench is also the gateway to the message board. 
---
-->

