/*
class pilotoFormula1{
    nome = ''
    equipe = ''
    idade = ''
    correr = function(){
        console.log('VRUMMMM')
    }
}

const corredor1 = new pilotoFormula1()
corredor1.nome ='Aryton Sena'
corredor1.equipe = 'McLaren'
corredor1.idade = 28
console.log(corredor1)
corredor1.correr()
*/

class pilotoFormula1{
    constructor(nomeP, equipeP, idadeP){
        this.nome = nomeP
        this.equipe = equipeP
        this.idade = idadeP
    }
    correr(){
        console.log('VRUUUUMMMM!')
    }
}

const corredor1 = new pilotoFormula1('Aryton Sena', 'McLaren', 28);
const corredor2 = new pilotoFormula1('Lewis Hamilton', 'Mercedes', 32);
const corredor3 = new pilotoFormula1('Max Verstappen', 'Red Bul', 28);

console.log(corredor1)
console.log(corredor2)
console.log(corredor3)


class Retangulo {
    constructor(altura, largura) {
      this.altura = altura;
      this.largura = largura;
    }
    //Getter
    get area() {
      return this.calculaArea();
    }
  
    calculaArea() {
      return this.altura * this.largura;
    }
  }
  
  const quadrado = new Retangulo(10, 10);
  
  console.log(quadrado.area);
  