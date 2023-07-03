const mensagemSecreta = [
  "Aprender",
  "não",
  "é",
  "sobre",
  "o",
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

//console.log(mensagemSecreta.indexOf("certo"));

console.log(mensagemSecreta.join(" "));

// Programação não é sobre o que você sabe, é sobre o que você pode descobrir. -2015, Chris Pine, Aprenda a programar.
