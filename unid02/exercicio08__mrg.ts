/*2.8. O que acontece ao se executar uma chamada a uma função recursiva que chama a si
mesma um elevado número de vezes? Dê um exemplo utilizando o código-fonte da progressão
aritmética fornecido pelo professor. Faça um comparativo escrevendo um algoritmo e código
que sejam equivalentes ao recursivo em termos de entradas e saídas mas que utilizem iteração
ao invés de recursão. Qual sua conclusão?*/

function sequenceIterative_mrg (n:number): number{

    let term: number = 1;
    let limit: number = 2;

    while(limit<=n){
        term = term*2;
        limit = limit +1;
    }
    return term;
}

console.log(sequenceIterative_mrg(10));

//Recursivo

function sequenceRecursive_mrg(n: number): number {
    if (n == 1) {
      return 1;
    } else {
      return 2 * sequenceRecursive_mrg(n - 1);
    }
  }
  
  console.log(sequenceRecursive_mrg(10));