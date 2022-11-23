console.log("aqui");
console.log("aqui");

let nome = "Mario";
let idade = 25;
let sobrenome = undefined;
let estaAprovado = true;
console.log(idade);

let pessoa = {
  nome: "Mario",
  idade: 25,
  sobrenome: undefined,
  estaAprovado: true,
};

console.log(pessoa);
console.log(pessoa.nome);
//arrays

let familia = [25, 35, 36, 35];
console.log(familia);

let a = 23;
let b = 33;

let c = a;
a = b;
b = c;

console.log("sou o A", a);
console.log("sou o B", b);

// escreva uam funcao que usa 2 numeros e retorna o maior entre eles

function bigger(valor1, valor2) {
  // if (valor1 > valor2) {
  //   console.log(valor1);
  // } else {
  //   console.log(valor2);
  // }
  let result = valor1 > valor2 ? valor1 : valor2;
  console.log(result);
}
bigger(500, 200);

//fizzBuzz
//divisivel po 3 = fizz
//divisivel po 5 = buzz
//divisivel por 3 e 5 = fizzBuzz
//nao divisivel po 3 ou 5 = valor de entrada
const resultado = fizzBuzz(11);
console.log(resultado);

function fizzBuzz(entrada) {
  if (typeof entrada !== "number") {
    return "na0 e um numero";
  } else if (entrada % 3 === 0 && entrada % 5 === 0) {
    return "FizzBuzz";
  } else if (entrada % 3 === 0) {
    return "Fizz";
  } else if (entrada % 5 === 0) {
    return "Buzz";
  } else {
    return entrada;
  }
}

// velocidade maxima  70 km
// a cada 5km acima do limite vc ganha um ponto
//Math.flor()
//caso pontos maior que 12 -> carteira suspensa

verificarVelocidade(150);

function verificarVelocidade(velocidade) {
  let pontos = 0;
  let limite = 0;
  let velocidadeMax = 70;
  let kmPorPonto = 5;

  if (velocidade <= velocidadeMax) {
    console.log("OK");
  } else {
    pontos = Math.floor((velocidade - velocidadeMax) / kmPorPonto);
    if (pontos >= 12) {
      console.log("Suspensa");
      console.log("Você recebeu:", pontos, "pontos");
    } else {
      console.log("Você recebeu:", pontos, "pontos");
    }
  }
}
