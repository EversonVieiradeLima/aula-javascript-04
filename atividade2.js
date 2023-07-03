// 1)
const ordenarNumeros = [25, 23, 11, 55, 30, 6, 4, 21, 34, 89, 56];
// ordenarNumeros.sort(); -> [11, 21, 23, 25, 30, 34, 4, 55, 56, 6, 89]
ordenarNumeros.sort((a, b) => {
  return a - b;
});
console.log(ordenarNumeros);
// Observe que 34 vem antes do 4,
// porque '34' vem antes de '4' em ponto de código Unicode.

// 2)
console.log("-----------");
const times = ["Santos", "Sport", "Santa Cruz", "Vasco", "Chapecó"];
times.push("Flamengo"); // Adicionar o time "Flamengo" no final do array.
times.shift(); // Remover o time que está no início do array.
times.unshift("Palmeiras"); // Adicionar o time "Palmeiras" no início do array.
times.push("Grêmio"); //Adicionar o time "Grêmio" no final do array.
times.unshift("São Paulo", "Santos"); // Adicionar os times "São Paulo" e "Santos" do início do array.
console.log(times.length); // Exibir, no console, a quantidade de elementos no array.
times.pop(); // Remover o time que está no final do array.
times.sort(); // Exibir, no console, em ordem crescente os times que estão no array.
console.log(times);

// 3)
console.log("-----------");
const atividades = [
  "Tomar café",
  "Varrer a casa",
  "Assistir aula da faculdade",
  "Listar conteúdo de reúnião",
  "Almoçar",
  "Mexer no notebook",
  "Assistir aula do Start",
];
console.log(atividades.reverse()); // Exibir no console as atividades na ordem inversa.
console.log(atividades[3]); // Selecionar e exibir no console, os elementos nas posições 3 e 6.
console.log(atividades[6]);
console.log(atividades.join("-")); // Exibir no console seu array transformado em string. Substituir a vírgula pelo símbolo " - " (hífen).
const atividadesTop = ["Estudar programação", "Resolver problemas"]; // Criar um array com 2 atividades que você mais gosta e juntar com o array das atividades que você faz durante o dia. E exibir no console o resultado.
const juncaoAtividades = atividades.concat(atividadesTop);
console.log(juncaoAtividades);

// 4)
console.log("-----------");
const cidades = [
  "São Lourenço da Mata",
  "Camaragibe",
  "Recife",
  "Olinda",
  "Garanhuns",
];
console.log(cidades.sort()); // Exibir, no console, em ordem crescente os times que estão no array.
cidades.shift(); // Remover a cidade que está no início do array.
cidades.pop(); // Remover a cidade que está no final do array.
console.log(cidades.sort()); // Exibir, no console, em ordem crescente os times que estão no array.
