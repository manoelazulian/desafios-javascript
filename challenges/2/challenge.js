/*
 * Números primos
 */

/* ENUNCIADO
 *
 * Você deve fazer um programa que soma o valor de todos
 * os números primos existentes de 1 a n, onde n é dado como
 * parâmetro.
 *
 * Para isso você deve usar a função já escrita de verificação
 * de primalidade.
 *
 * Exemplo:
 * sumPrimes(15) deve retornar 41
 *
 */

/*const isPrime = require('../../utils/isPrime')

const sumPrimes = n => {}

module.exports = sumPrimes*/



const isPrime = require('../../utils/isPrime')

const sumPrimes = n => {
    let allNumbers = Array.from(Array(n), (_, i) => i+1)

    return allNumbers.reduce((sum, element) => {
        if(isPrime(element)) {
            return sum += element
        }
        return sum
    }, 0)
}

module.exports = sumPrimes

