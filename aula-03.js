const idade = 8;
const nome = 'Celso';
let podeEntrar = false;

if(idade >= 18 && nome === 'Celso') {
    podeEntrar = true;
    console.log ('O usuário pode entrar!')

} else {
    console.log('O usuário não pode entrar!')
} 


// "||" é uma conjunção alternativa e "&&"" é um bicondicional.
// "=" é atribuição, "==" é um comparativo, "===" é um comparativo mais preciso.
// Também temos "<", ">", ">=" e "<=".