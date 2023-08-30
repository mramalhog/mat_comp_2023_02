/*2.7. Um veículo possui a capacidade de se mover, expressa pela alteração na sua coordenada de longitude e latitude. Um veículo elétrico é um veículo que possui como fonte de energia
primária a eletricidade (armazenada em uma bateria). Um veículo elétrico e voador é um veículo que também possui a capacidade de se mover na vertical, expressa pela alteração de sua altitude em relação ao solo. Represente um veículo elétrico e voador utilizando uma cadeia de herança. Defina o código-fonte representativo do modelo em um arquivo separado daquele que faz uso desse e, adicionalmente exemplifique o acesso e a modificação desses atributos através de chamada de suas operações. */

class Veiculo_mrg {
  longitude:number;
  latitude:number

  constructor(latitude:number, longitude:number){
    this.latitude=latitude;
    this.longitude=longitude;
  }

  mover_mrg(latitude:number, longitude:number){
    this.latitude=latitude;
    this.longitude=longitude;
  }
}

class V_eletrico_mrg extends Veiculo_mrg{
  bateria:number;
  
  constructor(latitude:number, longitude:number, bateria:number){
    super(longitude,latitude);
    this.bateria=bateria;
  }

  carregar_mrg(carga:number):void{
    this.bateria+=carga;
  }
}

class Voador_mrg extends V_eletrico_mrg{
  altitude:number;

  constructor(latitude:number, longitude:number, bateria:number,altitude:number){
    super(longitude,latitude,bateria);
    this.altitude=altitude;
  }
}

export{Veiculo_mrg,V_eletrico_mrg,Voador_mrg};
