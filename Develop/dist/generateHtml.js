const Questions = async () => {
  const Answers = await inquirer.prompt([
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
      //   filter(val) {
      //     return val;
      //   },
    },
  ]);
  //   console.log(Answers);
  // if user selects Manager, then will be prompted with these additional questions
  if (Answers.role === "Manager") {
    const ans_Manager = await inquirer.prompt([
      {
        type: "input",
        name: "officenumber",
        message: "Pleae enter your office number?",
      },
    ]);
    // create new Manager with user inputs
    const new_Manager = new Manager(
      Answers.name,
      Answers.id,
      Answers.email,
      ans_Manager.officeNumber
    );
    newMembers.push(new_Manager);
    //   console.log(new_Manager)
  } else if (Answers.role === "Engineer") {
    const ans_Engineer = await inquirer.prompt([
      {
        type: "input",
        name: "github",
        message: "Pleae enter your Github?",
      },
    ]);
    const new_Engineer = new Engineer(
      Answers.name,
      Answers.id,
      Answers.email,
      ans_Engineer.github
    );
    newMembers.push(new_Engineer);
    //   console.log(new_Engineer);
  } else if (Answers.role === "Intern") {
    const ans_Intern = await inquirer.prompt([
      {
        type: "input",
        name: "school",
        message: "What school did you graduate from?",
      },
    ]);
    const new_Intern = new Intern(
      Answers.name,
      Answers.id,
      Answers.email,
      ans_Intern.school
    );
    newMembers.push(new_Intern);
    //   console.log(ans_Intern);
  }
};
async function promptQuestions() {
  await Questions();
  const addMemberAns = await inquirer.prompt([
    {
      type: "list",
      name: "addmember",
      message: "Who would you like to add?",
      choices: ["Add new member", "Create Team"],
    },
  ]);
  if (addMemberAns === "Add new member") {
    return promptQuestions;
  } else if (addMemberAns === "Create Team") {
    return createTeam();
  }
}
