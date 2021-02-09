const fs = require('fs');

//Första parametern är filens namn
//Andra parametern är teckenkodningen som är UTF-8
//Tredje parametern är en funktion som körs efter det är klart. Parametern error populeras om det går fel
//och content är innehållet i filen
fs.readFile('hello.txt', 'utf8', (error, content) => {
    console.log('Längden på innehållet är: ', content.length);
});

fs.readFile('index.html', 'utf8', (error, content) => {
    console.log('Längden på innehållet är: ', content.length);
});

//Text att spara till en textfil
let quote = 'Be yourself. Everyone else is already taken.';

//Första parametern är filens namn (om den inte finns så skapas den)
//Andra parametern är det vi vill skriva till textfilen
//Tredje parametern är en funktion som körs efter det är klart. Parametern error populeras om det går fel
fs.writeFile('quotes.txt', quote, (error) => {
    console.log('Quote saved!');
});

fs.readFile('style.css', 'utf8', (error, content) => {
    const numberOfIds = content.split('#');
    console.log('ID:n ', numberOfIds);
    for(let i = 0; i < numberOfIds.length; i++) {
        console.log(`I position ${i} finns ${numberOfIds[i]}`);
    }
    console.log('Antal id:n är ', numberOfIds.length - 1);
});