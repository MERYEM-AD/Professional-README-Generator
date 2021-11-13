const { clear } = require('console');
const fs = require ('fs');
// renderLicenseBadge is a function that returns a license badge based on which license is passed in
 function renderLicenseBadge(license) {

 }
// renderLicenseLink is a function that returns the license link
  function renderLicenseLink(license) {

}

// renderLicenseSection is  function that returns the license section of README
function renderLicenseSection(license) {

}

// // generateMarkdown is a function to generate markdown for README
function generateMarkdown(data) { 

  const backTicks ='```';

  renderLicenseSection(data.license);

  return `# Project Name :  ${data.projectName}
 
  ![License: ${data.license}](${renderLicenseBadge(data.license)})
  ## Description:
  ${data.description}
  ## Table of Contents 
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  - [Copyright](#copyright)
  ## Installation
  to install dependencies , run this following command :
${backTicks} \n ${data.cInstall}\n ${backTicks}
  ## Usage
${backTicks} \n ${data.usage}\n ${backTicks}
  ## License
  this Project is licensed under ${data.license} license.
  ## Contributing
${data.contribution}
  ## Tests
  to run test , run this following command :
${backTicks} \n ${data.cTest}\n ${backTicks}
  ## Questions
  Watch [the Demonstation video](https://google.com/) to know how can you use the application.\n
  iF you have any questions about the repo you can contact me by email : ${data.email}.\n
  Follow me on [my Github account](https://github.com/${data.username}).
  ## Copyright

   
`;
}

module.exports = generateMarkdown;

