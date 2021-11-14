const { clear } = require('console');
const fs = require ('fs');
// renderLicenseBadge is a function that returns a license badge based on which license is passed in
 function renderLicenseBadge(license) {
 // ['MIT','APPACHE 2.0','GPL 3.0','BSD 3','NONE'],
 switch(license){
      case 'MIT' : return 'https://img.shields.io/badge/license-MIT-green';break;
      case 'APPACHE 2.0' : return 'https://img.shields.io/badge/license-APPACHE%202.0-blue';break;
      case 'GPL 3.0' : return 'https://img.shields.io/badge/license-GPL%203.0-pink' ;break;
      case 'BSD 3' : return 'https://img.shields.io/badge/license-BSD%203--Clause-blue';break;
      default: return "No Licence";
        }
 }
// renderLicenseLink is a function that returns the license link
  function renderLicenseLink(license) {
    switch(license){
      case 'MIT' : return './License/MIT.txt';break;
      case 'APPACHE 2.0' : return './License/APPACHE 2.txt';break;
      case 'GPL 3.0' : return './License/GPL 3.txt' ;break;
      case 'BSD 3' : return './License/BSD 3.txt' ; break;
      default: return "./License/empty.txt";
    }
}

// renderLicenseSection is  function that returns the license section of README
function renderLicenseSection(license) {
fs.readFile(`${renderLicenseLink(license)}`, 'utf8',(error, data) =>
  {if (error){console.error(error) }else{
    fs.appendFile('./README.md', `${data}`, (err) =>
    err ? console.error(err) : console.log('Copyright section generated Successfully !!')
  );
  
    }}
);
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
${data.usage}\n
  ## License
  this Project is licensed under **${data.license}** license.
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

