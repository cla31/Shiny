
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![JEST](https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white)
![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
# Shiny
https://openclassrooms.com/fr/courses/7150606-creez-une-application-react-complete
<br/>
**Skills developed**:
- Build a complete Single Page Application that respects a robust architecture;
- Master the hooks;
- Test a React application;
- Evolve in a codebase that uses class components.
##
## Project branches:

- "structureFiles-proptypes-styledComponents" branch:<br/>
:point_right: [here](https://github.com/cla31/Shiny/tree/structureFiles-proptypes-styledComponents)<br/>
- "mockup-figma" branch:<br/>
:point_right: [here](https://github.com/cla31/Shiny/tree/mockup-figma)<br/>
- "useState-useEffect" branch:<br/>
:point_right: [here](https://github.com/cla31/Shiny/tree/useState-useEffect)<br/>
- "state-loading" branch:<br/>
:point_right: [here](https://github.com/cla31/Shiny/tree/state-loading)<br/>
- "fetch-freelance-profiles" branch:<br/>
:point_right: [here](https://github.com/cla31/Shiny/tree/fetch-freelance-profiles)<br/>
- "context-useContext" branch:<br/>
:point_right: [here](https://github.com/cla31/Shiny/tree/context-useContext)<br/>
- "create-hook" branch:<br/>
:point_right: [here](https://github.com/cla31/Shiny/tree/create-hook)<br/>
- "test-jest" branch:<br/>
:point_right: [here](https://github.com/cla31/Shiny/tree/test-jest)<br/>
- "react-testing-library" branch:<br/>
:point_right: [here](https://github.com/cla31/Shiny/tree/react-testing-library)<br/>
- "old-react-syntax" branch:<br/>
:point_right: [here](https://github.com/cla31/Shiny/tree/old-react-syntax)<br/>
##
## Additional information:
From the "useState-useEffect" branch, launch the API locally, for that :
1. Make a `git clone https://github.com/OpenClassrooms-Student-Center/7150606-API-React-intermediate.git`
2. Install `node_modules` with `yarn`
3. Run the API with `yarn start`
## Consuming the API
The Shiny API is a REST API. If you have any doubts about what a REST API is, do not hesitate to take a look at the excellent course [Adoptez les API REST pour vos projets web. 
](https://openclassrooms.com/fr/courses/6573181-adoptez-les-api-rest-pour-vos-projets-web). 

Once launched, this API makes several routes available to you:

- The route to recover the profiles of freelancers:
`GET /freelancers`

- The route to get the details of a freelance profile:
`GET /profile/?id={id}`

- The route to get the questionnaire:
`GET /survey/`

- The route to obtain the result of the questionnaire:
`GET /results/?a1={answer1}&a2={answer2}&a3={answer3}...`

##
## Code architecture:
##
![SCHEMA-CODE](./archi.png)
