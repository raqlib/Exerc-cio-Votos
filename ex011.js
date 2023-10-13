var idade = 14
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Não vota!')
} else if (idade >= 16 && idade <18 || idade > 65) { // a parte da idade >= 16 não precisava estar escrita aqui
    console.log('Voto opcional!')
} else {
    console.log('Voto obrigatório!')
}