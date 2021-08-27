//constants
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const questions = require("./lib/questions");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

//Array for team
let team = [];


//Manager comes first
function buildManager() {
  try {
    inquirer.prompt(questions.managerQuestions).then(function (answers) {
      //  creates manager object and pushes manager data in team array
      const manager = new Manager(
        answers.manager_name,
        answers.manager_id,
        answers.manager_email,
        answers.manager_officeNo
      );
      team.push(manager);

      // function called to build team
      buildTeam();
    });
  } catch (error) {
    console.log(error);
  }
}


//builds the team
async function buildTeam() {
  while (true) {
    await inquirer
      .prompt([
        {
          type: "list",
          name: "team_member",
          message: "What type of team member would you like to add?",
          choices: [
            "Engineer",
            "Intern",
            "I don't want to add any more team members.",
          ],
        },
      ])
      .then(async function (response) {
        if (response.team_member === "Engineer") {
          try {
            await inquirer
              .prompt(questions.engineerQuestions)
              .then(function (engineerData) {
                const engineer = new Engineer(
                  engineerData.engineer_name,
                  engineerData.engineer_id,
                  engineerData.engineer_email,
                  engineerData.engineer_github
                );

                team.push(engineer);
              });
          } catch (error) {
            console.log(error);
          }
        } else if (response.team_member === "Intern") {
          
          try {
          
            await inquirer.prompt(questions.internQuestions).then(function (internData) {
        
              const intern = new Intern(
                internData.intern_name,
                internData.intern_id,
                internData.intern_email,
                internData.intern_school
              );

              team.push(intern);
            
            });
          } catch (error) {
            console.log(error);
          }

          //If done
        } else if (
          response.team_member === "I don't want to add any more team members."
        ) {
          const htmlData = render(team);

          // Writes to file to generate an html output file
          writeToFile(htmlData);

          process.exit(0);
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  }
}


// output file
function writeToFile(htmlData) {

  if (!fs.existsSync(OUTPUT_DIR)) {

    // Creates an 'output' folder if does not already exist
    fs.mkdirSync(OUTPUT_DIR, 0744);
    console.log("output folder Created!");

  }

  fs.writeFileSync(outputPath, htmlData, "utf8");

  console.log("Output File generated!");
}

function init() {
  console.log("Welcome to Team Profile Generator! Build your team :");
  buildManager();
}

init();
