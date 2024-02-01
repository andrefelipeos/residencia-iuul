let entrada1 = [
    "5 5",
    "..#.#",
    "#....",
    "...#.",
    "#....",
    "...#.",
    "5",
    "1 3",
    "1 4",
    "1 5",
    "2 1",
    "3 4"
] // 4

let saida1 = [
    "..XOX",
    "X....",
    "...X.",
    "#....",
    "...#."
]

let entrada2 = [
    "5 5",
    "..###",
    ".....",
    "#####",
    ".....",
    "#.##.",
    "5",
    "5 1",
    "5 2",
    "1 3",
    "1 4",
    "1 5"
] // 2

let entrada3 = [
    "7 7",
    ".#....#",
    "###..##",
    ".#....#",
    "....#.#",
    ".#..#.#",
    ".####.#",
    ".......",
    "8",
    "1 1",
    "1 2",
    "2 1",
    "2 2",
    "2 3",
    "3 2",
    "5 2",
    "6 2"
] // 1

let lines = entrada1;

class Tabuleiro {
    constructor(linhas, colunas) {
        this.numero_de_linhas = linhas;
        this.numero_de_colunas = colunas;
        this.naviosDestruidos = 0;
    }

    preencher(mapeamento) {
        this.tabuleiro = mapeamento.map(linha => linha.split(""));
    }

    atacarPosicao(linha, coluna) {
        linha--;
        coluna--;
        if (this.tabuleiro[linha][coluna] === ".") {
            this.tabuleiro[linha][coluna] = "O";
        } else {
            this.tabuleiro[linha][coluna] = "X";
            if (this.destruiuNavio(linha, coluna)) {
                this.naviosDestruidos++;
            }
        }
    }

    destruiuNavio(linha, coluna) {
        // verifica lado esquerdo
        let indice = coluna - 1;
        while (indice >= 0 && this.tabuleiro[linha][indice] === "X") indice--;
        if (indice >= 0 && this.tabuleiro[linha][indice] === "#") return false;

        // verifica lado direito
        indice = coluna + 1;
        while (indice < this.numero_de_colunas
            && this.tabuleiro[linha][indice] === "X") indice++;
        if (indice < this.numero_de_colunas
            && this.tabuleiro[linha][indice] === "#") return false;
        
        return true;
    }

    imprimir() {
        console.log(this.tabuleiro);
    }
}

/*
    N: número de linhas
    M: número de colunas
*/
let N, M;
[N, M] = lines.shift().split(" ").map((s) => parseInt(s));
let tabuleiro = new Tabuleiro(N, M);
tabuleiro.preencher(lines.splice(0, N));
let tabuleiro2 = new Tabuleiro(N, M);
tabuleiro2.preencher(saida1);

console.log("Tabuleiro inicial:");
tabuleiro.imprimir()
console.log("Tabuleiro esperado no final:");
tabuleiro2.imprimir();

const quantidade_de_disparos = parseInt(lines.shift());

let linha, coluna;
for (let index = 0; index < quantidade_de_disparos; index++) {
    [linha, coluna] = lines[index].split(" ").map((s) => parseInt(s));
    tabuleiro.atacarPosicao(linha, coluna);
}

console.log("Tabuleiro final de fato:");
tabuleiro.imprimir();

console.log(tabuleiro.naviosDestruidos);
