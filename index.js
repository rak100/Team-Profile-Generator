// Module Imports
const inquirer = require("inquirer");
const fs = require("fs");
const generateHtml = require("");

// class Imports except Employee.js (It's inherited in the below)
const Engineer = require('./Develop/lib/engineer');
const Intern = require('./Develop/lib/intern');
const Manager = require('./Develop/lib/manager');

// empty array to push selected members
const newMembers = [];

const questions = async () => {
  const answers = await inquirer
  .createPromptModule([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is your identification number?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your e-mail address?",
    },
    {
      type: "list",
      name: "role",
      message: "What is your role?",
      choices: ["Manager", "Engineer", "Intern"],
    },
  ]) 
  // console.log(answers);
  if (answers.role === "Manager") {
    const managerAns = await inquirer.createPromptModule([
      {
        type: "input",
        name: "officeNumber",
        message: "Pleae enter your office number?",
      },
    ])
    const newManager = new Manager(
      answers.name,
      answers.id,
      answers.email,
      managerAns.officeNumber
    );
    newMembers.push(newManager);
  } else if (answers.role === "Engineer") {
    const engineerAns = await inquirer.createPromptModule([
      {
        type: "input",
        name: "github",
        message: "Pleae enter your Github username?",
      },
    ])
    const newEngineer = new Engineer(
      answers.name,
      answers.id,
      answers.email,
      engineerAns.github
    );
    newMembers.push(newEngineer);
  } else if (answers.role === "Intern") {
    const internAns = await inquirer.createPromptModule([
      {
        type: "input",
        name: "school",
        message: "What school did you graduate from?",
      },
    ])
    const newIntern = new Intern(
      answers.name,
      answers.id,
      answers.email,
      internAns.school,
    );
    newMembers.push(newIntern);
  // } else (!answers.role) {
  //   return alert("Please choose a role")
  // }

}
}

async function promptQuestions() {
  await questions()
  const addMemberAns = await inquirer
  .createPromptModule([
    {
      type: "list",
      name: "addMember",
      message: "Who would you like to add?",
      choices: ["Add new member", "Create Team"],
    },
  ])
  if (addMemberAns.addMember === "Add new member") { //try to change add member to addMemberAns.choices
    return promptQuestions()
  }
  return createTeam();
}
promptQuestions();

function createTeam() {
  console.log('new guy', newMembers)
  fs.writeFileSync(
    "./dist/index.html", generateTeam(newMembers)
  );
}
