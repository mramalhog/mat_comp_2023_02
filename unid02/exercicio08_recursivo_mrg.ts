/*2.8. O que acontece ao se executar uma chamada a uma função recursiva que chama a si
mesma um elevado número de vezes? Dê um exemplo utilizando o código-fonte da progressão
aritmética fornecido pelo professor. Faça um comparativo escrevendo um algoritmo e código
que sejam equivalentes ao recursivo em termos de entradas e saídas mas que utilizem iteração
ao invés de recursão. Qual sua conclusão?*/

function sequenceRecursive_mrg(n: number): number {
    if (n == 1) {
      return 1;
    } else {
      return 2 + sequenceRecursive_mrg(n - 1);
    }
  }
  
  console.log(sequenceRecursive_mrg(10));