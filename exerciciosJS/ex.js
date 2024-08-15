// 1
const econtraMaiorNumero = (numeros) => {
    let maiorNumero = numeros[0]
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maiorNumero) {
            maiorNumero = numeros[i]
        }
    }
    return maiorNumero
}


const econtraMaiorNumeroReduce = (numeros) => {
    return numeros.reduce((maxNum, currNum) =>  currNum>maxNum? currNum:maxNum , numeros[0])
}



const numeros  = [2, 43, 1, -5, 0, 123, 5]

console.log(econtraMaiorNumero(numeros))
console.log(econtraMaiorNumeroReduce(numeros))