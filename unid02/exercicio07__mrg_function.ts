/*2.7. Um veículo possui a capacidade de se mover, expressa pela alteração na sua coordenada de longitude e latitude. Um veículo elétrico é um veículo que possui como fonte de energia
primária a eletricidade (armazenada em uma bateria). Um veículo elétrico e voador é um veículo que também possui a capacidade de se mover na vertical, expressa pela alteração de sua altitude em relação ao solo. Represente um veículo elétrico e voador utilizando uma cadeia de herança. Defina o código-fonte representativo do modelo em um arquivo separado daquele que faz uso desse e, adicionalmente exemplifique o acesso e a modificação desses atributos através de chamada de suas operações. */

/*2.7. Um veículo possui a capacidade de se mover, expressa pela alteração na sua coordenada de longitude e latitude. Um veículo elétrico é um veículo que possui como fonte de energia
primária a eletricidade (armazenada em uma bateria). Um veículo elétrico e voador é um veículo que também possui a capacidade de se mover na vertical, expressa pela alteração de sua altitude em relação ao solo. Represente um veículo elétrico e voador utilizando uma cadeia de herança. Defina o código-fonte representativo do modelo em um arquivo separado daquele que faz uso desse e, adicionalmente exemplifique o acesso e a modificação desses atributos através de chamada de suas operações. */
import { Veiculo_mrg, V_eletrico_mrg, Voador_mrg} from "./exercicio07__mrg_class";


const longitudeVeiculo = 10;
const latitudeVeiculo = 20;
const meuveiculo_mrg = new Veiculo_mrg(longitudeVeiculo, latitudeVeiculo);
console.log("Veículo criado:", meuveiculo_mrg);

const longitudeEletrico = 10;
const latitudeEletrico = 20;
const bateriaEletrico =10
const meuveiculoV_eletrico_mrg = new V_eletrico_mrg(longitudeEletrico, latitudeEletrico, bateriaEletrico);
console.log("Veículo elétrico criado:", meuveiculoV_eletrico_mrg);

const longitudeVoador = 10;
const latitudeVoador = 20;
const bateriaVoador = 10;
const altitudeVoador = 30;
const meuveiculoEletricoVoador_mrg = new Voador_mrg(longitudeVoador, latitudeVoador, bateriaVoador, altitudeVoador);
console.log("Veículo elétrico voador criado:", meuveiculoEletricoVoador_mrg);