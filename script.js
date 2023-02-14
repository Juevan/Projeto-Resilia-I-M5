import redlineSync from 'readline-sync';
import chalk from 'chalk';

const list = [];
let resp = "";

const addList = (prop) => {
  list.push(prop);
};

const order = () => {
  list.sort();
};

const listing = () => {
  list.forEach((elemento)=> { console.log(`• ${elemento}`); });
};

while (true) {
  resp = redlineSync.question(chalk.red("Digite a propriedade CSS ou 'SAIR' para exibir a listagem e encerrar: "));

  if (resp.toLowerCase() == "sair") {
    console.log(chalk.green('-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-'));
    console.log(chalk.blue('Lista Ordenada de Propriedades CSS: '));
    order();
    listing();
    console.log(chalk.green('-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-'));
  break;
 
  } else if (resp.toLowerCase() !== "sair" && resp !=="") {
    addList(resp);
  }
}