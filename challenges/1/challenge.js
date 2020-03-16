/*
 * Somar os argumentos
 */

/* ENUNCIADO
 *
 * Você deve escrever uma função que some
 * todos os argumentos providos.
 *
 */

const sumArguments = (...array) => {
    return array.reduce((total, element) => {
        return total += element;
    });
};

module.exports = sumArguments
