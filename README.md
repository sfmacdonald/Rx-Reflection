# Rx-Reflection
Application for patients to track medications

## Table of Contents

- [Project Name](#rx-reflection)
- [Table of Contents](#table-of-contents)
- [Description](#description)
- [User Story](#user-story)
- [Collaboraters](#collaboraters)
- [Initial Wireframes](#initial-wireframes)
- [Timeline of Work](#timeline-of-work)
- [Features](#features)
- [Usage](#usage)
- [Stakeholder Presentation](#stakeholder-presentation)

# Description

This application allows any user who needs to track medications they take or have taken in the past to maintain a profile with their medications in it. The user shall create a profile featuring a username and password to protect their personal medication information. The user may enter information about their prescription such as dose, reason for use, route, and more to track their needs. This application will use node.js and Express.js, creating a RESTful API, as well as Handlebars.js for the template engine. In addition to these, it will feature GET and POST routes for retrieving and adding new data.

Stakeholder requirements for the application include:

    1. Use Node.js and Express.js to create a RESTful API.
    2. Use Handlebars.js as the templating engine.
    3. Use MySQL and the Sequelize ORM for the database.
    4. Have both GET and POST routes for retrieving and adding new data.
    5. Be deployed using Heroku (with data).
    6. Use at least one new library, package, or technology not previously leveraged.
    7. Have a polished UI.
    8. Be responsive.
    9. Be interactive (i.e., accept and respond to user input).
    10. Have a folder structure that meets the MVC paradigm.
    11. Include authentication (express-session and cookies).
    12. Protect API keys and sensitive information with environment variables.
    13. Have a clean repository that meets quality coding standards (file structure, naming conventions, follows best practices for class/id naming conventions, indentation, quality comments, etc.).
    14. Have a quality README (with unique name, description, technologies used, screenshot, and link to deployed application).

# User Story

As a patient prescribed medications, I need the ability to track which ones I take by name (brand or generic), how often (days of the week, times per day), the route (oral vs injection) and other aspects. I also need the ability to track medications that have been discontinued (when and reason) so that if a physician needs to know past medical history, I may provide it to them.

## Collaboraters

The following members of the 2023-2024 ASU Coding Bootcamp participated on this project:
- Nicholas Smith (https://github.com/nicklearning)
- Sean MacDonald (https://github.com/sfmacdonald)
- Faith O'Connor (https://github.com/floconno)
- Anthony Castillo (https://github.com/ac1745198)

The collaborators agreed to leverge Slack as a project tracker to communicate ensuring all acceptance criteria are met in the final product and no redundant work was occurring.

# Initial Wireframes 

The following wireframes were created as an initial template for user workflows. While these wireframes are not final, they provide a starting point for understanding how users will interact with the application. The final product may be viewed in the "Usage" section of this README.

Login Page ![Login](<./wireframes/Login.png>)

Home Page ![Home](<./wireframes/Home.png>)

New User/Patient Setup ![New](<./wireframes/New Patient.png>)

Medication List ![Meds](<./wireframes/Medication List.png>)

Today's Medications ![Today](<./wireframes/Daily Meds.png>)

# Timeline of Work 

**Tuesday, January 31st, 2024: 2024:** Project started with brainstorming session between team members to come up with an idea for a health tracking application that would be user friendly and easy. 

**Thursday, February 1st, 2024:** Initial planning and wireframing sessions. Collaborators agreed upon communication tool and division of labor. Repo initially created on GitHub along with Heroku connection. Contributors provided access to the repo and connect to Heroku. Initial file structure created. Setup server.js -> importing packages, test api and look at results, setup our models, setup RESTful routes - GET and a POST for a drug, test in Insomnia. Turn in initial concept to stakeholders.

**Monday, February 5th, 2024:** Set up our models with associations (User, Drugs), create Handlebars folder/files, setup res.render() methods

**Tuesday, February 6th, 2024:** Basic CSS, bootstrap, Animate CSS Library

**Thursday, February 8th, 2024:** Perform Quality Assurance tests, improve styling, prepare slide deck presentation for stakeholders

**Monday, March 12th, 2024:** Present final project to stakeholders

## Features

This web-based medication tracker shall have the following features and functions:

Must Have (MVP):

    1. Users may create a profile to utilize for tracking medications
    2. Users may add medications to their profile including the following aspects:
        - Medication Name
        - Strength
        - Dosage
        - Frequency
        - Route
        - Duration
    3. Once medications are added to the user's profile, they may print out a list of their medications
    3. Users may also remove medications from their profile as needed
    4. Users may navigatge to different pages within the application using menu icon in the header of the page as well as log out of the application.

## Usage

The github repository may be found at https://github.com/sfmacdonald/Rx-Reflection

The live URL for the working website deployed via Heroku is https://rx-reflection-9623b73a46aa.herokuapp.com

When accessed, the initial landing page should reflect the following image:

![Rx Reflection](<./wireframes/Screenshot 2024-02-12 at 1.37.22 PM.png>)

## Stakeholder Presentation

Attached is the stakeholder slide deck presentation with the final MVP product outline: [View the Rx-Reflection Presentation PDF](./wireframes/Rx-Reflection%Presentation.pdf)