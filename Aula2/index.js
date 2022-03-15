// const fs = require('fs'); formato antigo de fazer um import
import {promises as fs } from 'fs';
async function readData() {
  try{//caso tentar esse codigo porem não der certo
  const data = JSON.parse(await fs.readFile("./people.json"));
  return data;
  } catch(err) {//ele vai apresentar o erro de forma mais simples.
    console.log('Erro na leitura do arquivo ;-;');
  }
}
function doMap() {
  const people = readData();//ainda preciso terminar
}
readData();
