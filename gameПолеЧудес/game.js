'use strict';


const words = ["bear", "mamba", "mother", "dance", "aunt"];

const lowLevel = 20,
      middleLevel = 15,
      maxLevel = 10;

let levelOption = 0;

let option = +prompt("Выберите ваш уровень: 1. Легкий 2. Средний 3. Слажный");

if(option === 1){
    levelOption = lowLevel;
}
else if(option === 2){
    levelOption = middleLevel;
}
else if(option === 3){
    levelOption = maxLevel;
}
else{
    alert("Такого выбора нет!");
}
alert("Игра начинается, мы загадавыем слово!");

let randomWord = words[Math.floor(Math.random()* words.length)];
let convertedRandomWord = [];

for(let i = 0; i < randomWord.length; i++){
    convertedRandomWord[i] = "_";
}

alert(convertedRandomWord);

let attemptCounter = 0;
let attemptCounter2 = levelOption;
while(attemptCounter < levelOption){
    let character = prompt("Введите вашу букву");
    for(let i = 0; i < randomWord.length; i++){
        if (character === randomWord[i]){
            convertedRandomWord[i] = character;
        }
    }
    let word = "";
    for(let index = 0; index < convertedRandomWord.length; index++){
        word = word + convertedRandomWord[index];
    }
    if(randomWord === word){
        alert("Вы выйграли!");
        attemptCounter = levelOption + 1;
        attemptCounter2--;
    }
    else{
        alert(convertedRandomWord + "У вас осталось:" + attemptCounter2 + "попыток");
        attemptCounter++;
        attemptCounter2--;
    }
}