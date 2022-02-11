class Carro{
    //Propriedades do objeto
    cor;
    modelo;
    portas;
    ano;
    marca;
    ligado;
	combustivel;

    constructor(cor,modelo,portas,ano,marca,combustivel){
        //Inicializando as propriedades no constructor
        this.cor = cor;
        this.modelo = modelo;
        this.portas = portas;
        this.ano = ano;
        this.marca = marca;
        this.ligado = false;
		this.combustivel = 75;
    }

    introduceYourself(){
        //Invocando as propriedades do Objeto pelo this
        console.log(`Este carro tem a cor ${this.cor}, é do modelo ${this.modelo}, possui o numero de ${this.portas} portas,É do ano ${this.ano},e é do modelo ${this.modelo},'O tanque ja está ${this.combustivel}`);
    }
    //omitindo construtores
    ligar(){
      if (this.ligado) {
        console.log('Carro já está ligado...')
        return
      }

      console.log('Ligando o carro...')
      this.ligado = true
    }

    desligar() {
      if (!this.ligado) {
        console.log('Carro já está desligado')
        return
      }

      console.log('Desligando o carro')
      this.ligado = false
    }

    CombustivelCheio(){
        console.log(`Seu tanque esta cheio !!`);
    }
    CombustivelBaixo(){
        console.log(`Combustivel baixo abastecer`);
    }
    abastecer(){
        console.log(`Abastecendo tanque....`);
    }

}


const CAR1 = new Carro('Prata','Coversivel','4','2021','Ford Mustang',25);
CAR1.introduceYourself();
CAR1.ligar();
CAR1.CombustivelBaixo();
CAR1.desligar();
CAR1.abastecer();
CAR1.ligar();
CAR1.CombustivelCheio();
