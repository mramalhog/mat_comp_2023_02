//2.6. Utilizando linguagem de programação defina:

//a) Uma enumeração para os meses do ano.

//explicação, no caso do JSON abaixo a função ENUM do Typescript caracteriza o primeiro termo com o número 1 de forma a evitar qe se inicie do índice zero do array. 

enum MesesAno_mrg {
    janeiro=1,
    fevereiro,
    marco,
    abril,
    maio,
    junho,
    julho,
    agosto,
    setembro,
    outubro,
    novembro,
    dezembro,
}

console.log("Mês do Ano", MesesAno_mrg.agosto);  

//b) Uma enumeração para os dias da semana.
enum diasSemana_mrg {
    domingo=1,
    segunda,
    terca,
    quarta,
    quinta,
    sexta,
    sabado,
}

console.log("Dia da Semana", diasSemana_mrg.quarta);  


//c) Uma função recursiva para o cálculo do fatorial de um número. 

function calcfatorial_mrg(numero_mrg: number): number {
    if (numero_mrg == 0 || numero_mrg == 1) {
        return 1;
    } else {
        return numero_mrg * calcfatorial_mrg(numero_mrg - 1);
    }
}

const varFat = 4;
const resultado = calcfatorial_mrg(varFat);
console.log(`O resultado de ${varFat} fatorial é ${resultado}`);


//d) Uma definição que corresponda a definição do tipo gênero-diferença para um uma pessoa que estude em uma faculdade. Utilize uma linguagem que dê suporte a herança. 

class Estudante_mrg{
    graduacao_mrg(){
        console.log("Bacharel em Engenharia")
    }
}

class PosGrad_mrg extends Estudante_mrg{
    pos(){
        super.graduacao_mrg();
        console.log("pós graduado")
    }
}

const heranca = new PosGrad_mrg();
heranca.graduacao_mrg();
heranca.pos();