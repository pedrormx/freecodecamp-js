let array = ['today', 'was', 'not', 'so', 'great'];

array.splice(2, 0); //se 0 fosse 1, ele excluiria o indice 2
/**
 * (2,2) 
 * 1 parametro: significa o indice, é daqui que vamos começar remover os elelemtos
 * 2 parametro: enquanto o segundo parâmetro indica o número de elementos a serem excluídos
 */
console.log(array)



const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// only change code below this line
arr.splice(1, 4);
// only change code above this line
console.log(arr);