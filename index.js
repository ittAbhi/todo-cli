
const chalk = require ('chalk');
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,

});

const todos = [];
function showMenu(){
    console.log(chalk.bold.cyan("\n~~~~ Todo CLI ~~~~"));

    console.log(chalk.blue("\n1: Add Task"));
    console.log(chalk.blue("2: View Task"));
    console.log(chalk.red("3: Exit"));
    rl.question(chalk.rgb(135, 206, 235)("Choose an Option: "), handleInp);

}

const handleInp =(option)=> {
    if(option == '1'){
        rl.question("Enter Your Task name: ", (task) =>{
            todos.push(task);
            console.log(chalk.green("Task Added: "), task);
            showMenu();
        });
    }

    else if(option == '2'){
        console.log("\nYour task name: ");
        todos.forEach((task,index)=> {
            console.log(chalk.yellow(`${index + 1}: ${task}`));
        });
            showMenu();
    }

    else if(option == '3'){
        console.log(chalk.green("Thanks for using this!"));
        rl.close();
        } else {
            console.log(chalk.red("Choose valid option!"));
            showMenu();

        }
}

showMenu();