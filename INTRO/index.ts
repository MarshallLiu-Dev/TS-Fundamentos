const fristName = "Marshall";
const lastName = "Apple";
const x = true;

const anotherName = 1;

// Como tipar alguma coisa : e o nome do tipo 

function greeting(name: string | boolean) {
    console.log('Olá ' + name);

};

greeting(fristName);
// greeting(anotherName);
greeting(x);