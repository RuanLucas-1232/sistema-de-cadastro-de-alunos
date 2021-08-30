console.log("Seja bem vindo ao nosso sistema de cadastro!");
let list = 10;
for (let contador = 0; contador <= list; contador++) {
    console.log(contador);
    if (contador == 0) {
        console.log("O valor atual é ZERO");
    } else if (contador % 2 == 0) {
        console.log(`O valor ${contador} é PAR`);
    } else {
        console.log(`O valor ${contador} é IMPAR`);
    }
}