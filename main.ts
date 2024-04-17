import inquirer from "inquirer";
import chalk from "chalk";

const answers : {
    sentance : string
} = await inquirer.prompt([
   {
      name: "sentance",
      type: "input",
      message: chalk.red.bold("Enter your sentance to count the word")
      
   },
]);
const words = answers.sentance.trim().split(" ")
console.log(words) 
console.log(chalk.green.bold(`your sentance to count is $(words.lenght) words`));


