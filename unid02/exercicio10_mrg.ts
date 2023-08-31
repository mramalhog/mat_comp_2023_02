/*2.10. A sequência de Fibonacci é definida da seguinte forma: {1, 1, 2, 3, 5, 8, 13, ...}, ou seja,
para k>2, xk = xk-1 + xk-2. Utilizando uma linguagem de programação com suporte a orientação a
objetos, defina uma classe que modele a sequência de Fibonacci e exemplifique o cálculo de
alguns de seus termos. Ilustre a chamada recursiva e identifique chamadas repetidas a um
mesmo valor.*/

class Fibonacci_mrg {
    calculados: { [key: number]: number } = {};

    calcularTermo_mrg(n: number): number {
        if (this.calculados[n] !== undefined) {
            console.log(`Valor repetido! Usando cache para ${n}`);
            return this.calculados[n];
        }

        if (n <= 0) {
            return 0;
        } else if (n == 1) {
            return 1;
        } else {
            const resultado = this.calcularTermo_mrg(n - 1) + this.calcularTermo_mrg(n - 2);
            this.calculados[n] = resultado;
            return resultado;
        }
    }
}


const fibonacci = new Fibonacci_mrg();

console.log(fibonacci.calcularTermo_mrg(6)); // Chamadas: 5, 4, 3, 2, 1, 0
console.log(fibonacci.calcularTermo_mrg(8)); // Chamadas: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0
console.log(fibonacci.calcularTermo_mrg(10)); // Chamada repetida (usando cache)




/*class Fibonacci_mrg1 {
    calcularTermo_mrg(n: number): number {
        if (n <= 0) {
            return 0;
        } else if (n === 1) {
            return 1;
        } else {
            return this.calcularTermo_mrg(n - 1) + this.calcularTermo_mrg(n - 2);
        }
    }
}

// Exemplo de uso
const fibonacci_mrg1 = new Fibonacci_mrg1();

console.log(fibonacci.calcularTermo_mrg(5)); // Chamadas: 5, 4, 3, 2, 1, 0
console.log(fibonacci.calcularTermo_mrg(10)); // Chamadas: muitas...*/