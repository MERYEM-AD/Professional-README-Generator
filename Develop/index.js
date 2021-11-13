// Include packages needed for this application

const inquirer = require('inquirer');
const fs = require ('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Create an array of questions for user input as Object

const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username ? ',
        validate : function(value){
            if (value)  return true ; else return 'Try again';
        }


    },
    {
        type: 'input',
        name: 'email',
        message: 'What is email address ? ',
        validate : function(value){
            if (value)  return true ; else return 'Try again';
        }
    },
    {
        type: 'input',
        name: 'projectName',
        message: 'What is Your Project name ? ',
        validate : function(value){
            if (value)  return true ; else return 'Try again';
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please , Write a short description about your Project :',
        validate : function(value){
            if (value)  return true ; else return 'Try again';
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of License should your project have ? ',
        choices : ['MIT','APPACHE 2.0','GPL 3.0','BSD 3','NONE'],
    },
    {
        type: 'input',
        name: 'cInstall',
        message: 'What command should be run to install dependencies ? ',
        validate : function(value){
            if (value)  return true ; else return 'Try again';
        }
    },
    {
        type: 'input',
        name: 'cTest',
        message: 'What command should be run to run tests ?',
        validate : function(value){
            if (value)  return true ; else return 'Try again';
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo ? ',
        validate : function(value){
            if (value)  return true ; else return 'Try again';
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What does the user need to know about contributing the repo ?',
        validate : function(value){
            if (value)  return true ; else return 'Try again';
        }
    },


];



// writeToFile is  a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
    err ? console.log(err) : console.log('The ReadMe file generated Successfully !!')
  );


}

// init is a function to initialize app
function init() {

    inquirer
    .prompt(questions)
    .then((answers) => {
     writeToFile('README.md', generateMarkdown(answers));
    });
  

} 

// Function call to initialize app
init();


