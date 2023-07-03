const mensagemSecreta = [
  "Aprender",
  "não",
  "é",
  "o",
  "sobre",
  "que",
  "você",
  "consegue",
  "facilmente",
  "na",
  "primeira",
  "vez",
  "mas",
  "sobre",
  "o",
  "que",
  "você",
  "pode",
  "descobrir",
  "-2015",
  "Chris",
  "Pine",
  "Aprenda",
  "JavaScript",
];

mensagemSecreta.pop();
mensagemSecreta.push("a", "programar");
mensagemSecreta.splice(8, 1, "certo");
mensagemSecreta.shift();
mensagemSecreta.unshift("Programação");
mensagemSecreta.splice(7, 5, "sabe");
mensagemSecreta.splice(8, 1, "é");
mensagemSecreta.splice(3, 1, "sobre");
mensagemSecreta.splice(4, 1, "o");

console.log(mensagemSecreta.join(" "));

// Programação não é sobre o que você sabe, é sobre o que você pode descobrir. -2015, Chris Pine, Aprenda a programar.
