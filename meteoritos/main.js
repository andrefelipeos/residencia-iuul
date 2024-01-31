lines = ["2 4 5 1", "2", "1 2", "3 3", "2 4 3 2", "3", "1 1", "2 2", "3 3", "0 0 0 0"];

class Fazenda {
    constructor(x1, y1, x2, y2) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }
    
    pontoInterno(x, y) {
        if ((x >= this.x1 && x <= this.x2) && (y <= this.y1 && y >= this.y2)) {
            return true;
        } else {
            return false;
        }
    }
}

let teste = 0;
let linha = lines.shift();
while (linha != "0 0 0 0") {
    teste = teste + 1;
    console.log("Teste " + teste);

    linha = linha.split(" ");
    const x1 = parseInt(linha.shift());
    const y1 = parseInt(linha.shift());
    const x2 = parseInt(linha.shift());
    const y2 = parseInt(linha.shift());
    const fazenda = new Fazenda(x1, y1, x2, y2);

    linha = lines.shift();
    const qtd = parseInt(linha);
    let m = 1;
    let dentro = 0;
    while (m <= qtd) {
        let x, y;
        [x, y] = lines.shift().split(" ").map((s) => parseInt(s));
        if (fazenda.pontoInterno(x, y)) dentro = dentro + 1;
        m = m + 1;
    }
    console.log(dentro);
    linha = lines.shift();
}

