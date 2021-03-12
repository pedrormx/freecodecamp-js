/**
 * Construtores são funções que criam novos objetos.
 * Eles definem propriedades e comportamentos que pertencerão ao novo objeto.
 * Pense neles como um projeto para a criação de novos objetos.
 */

//Criamos esse tipo de construtor, pra criar novos objetos

/**
 * Algumas regras:
 * 1. Deve ser declarado com Letra maiuscula
 * 2. Usamos this, pra criar um um objeto
 * 3. Os construtores definem propriedades e comportamentos em vez de retornar um valor como outras funções podem fazer.
 */
function Bird() {
    this.name = "Albert";
    this.color = "blue";
    this.numLegs = 2;
}