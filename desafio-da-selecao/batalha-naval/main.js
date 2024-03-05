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

let saida2 = [
    "..XXX",
    ".....",
    "#####",
    ".....",
    "XO##."
]

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

let saida3 = [
    "OX....#",
    "XXX..##",
    ".X....#",
    "....#.#",
    ".X..#.#",
    ".X###.#",
    "......."
]

let linhas = entrada3;

class BatalhaNaval {
    constructor(linhas, colunas) {
        this.numeroDeLinhas = linhas;
        this.numeroDeColunas = colunas;
        this.naviosDestruidos = 0;
    }

    preencherTabuleiro(mapeamento) {
        this.tabuleiro = mapeamento.map(linha => linha.split(""));
    }

    atacarPosicao(linha, coluna) {
        linha = linha - 1;
        coluna = coluna - 1;
        if (this.tabuleiro[linha][coluna] === "#") {
            this.tabuleiro[linha][coluna] = "X";
            if (this.navioDestruido(linha, coluna)) {
                this.naviosDestruidos++;
            }
        }
    }

    navioDestruido(linha, coluna) {
        // verifica se a posição é válida para esse tabuleiro
        if (!this.coordenadasSaoValidas(linha, coluna)) {
            throw `A posição (${linha}, ${coluna}) não está no tabuleiro
                (${this.numeroDeLinhas} x ${this.numeroDeColunas}).`;
        }
        // verifica se posição não é água (e, sim, um navio)
        if (this.tabuleiro[linha][coluna] === ".") {
            throw `A posição (${linha}, ${coluna}) não é parte de um navio.`;
        }
        // se a posição for um navio em bom estado, o navio não foi destruido
        if (this.tabuleiro[linha][coluna] === "#") {
            return false;
        }
        // verifica se alguma das posições adjacentes é parte de um navio
        // em bom estado
        const posicoesVizinhas = this.posicoesVizinhas(linha, coluna)
        for (const posicao of posicoesVizinhas) {
            if (this.tabuleiro[posicao.linha][posicao.coluna] === "#") {
                return false;
            }
        }
        // para verificar todos os lados recursivamente, a posição base é
        // marcada para evitar um loop infinito na recursão
        this.tabuleiro[linha][coluna] = "x";
        for (const posicao of posicoesVizinhas) {
            if (this.tabuleiro[posicao.linha][posicao.coluna] === "X") {
                // caso um dos ramos não foi completamente destruído, desmarca
                // a posição e retorna false (o navio não foi destruído)
                if (!this.navioDestruido(posicao.linha, posicao.coluna)) {
                    this.tabuleiro[linha][coluna] = "X";
                    return false;
                }
            }
        }
        // se todos os ramos do navio foram destruídos, desmarca a posição e
        // retorna true (o navio foi destruído)
        this.tabuleiro[linha][coluna] = "X";
        return true;
    }

    posicoesVizinhas(linha, coluna) {
        let posições = [];
        if (linha - 1 >= 0 && linha - 1 < this.numeroDeLinhas
            && coluna >= 0 && coluna < this.numeroDeColunas)
        {
            posições.push({ linha: linha - 1, coluna })
        }
        if (linha >= 0 && linha < this.numeroDeLinhas
            && coluna - 1 >= 0 && coluna - 1 < this.numeroDeColunas)
        {
            posições.push({ linha, coluna: coluna - 1 })
        }
        if (linha >= 0 && linha < this.numeroDeLinhas
            && coluna + 1 >= 0 && coluna + 1 < this.numeroDeColunas)
        {
            posições.push({ linha, coluna: coluna + 1 })
        }
        if (linha + 1 >= 0 && linha + 1 < this.numeroDeLinhas
            && coluna >= 0 && coluna < this.numeroDeColunas)
        {
            posições.push({ linha: linha + 1, coluna })
        }
        return posições;
    }

    coordenadasSaoValidas(linha, coluna) {
        return linha >= 0 && linha < this.numeroDeLinhas
            && coluna >= 0 && coluna < this.numeroDeColunas;
    }

    imprimir() {
        this.tabuleiro.forEach(linha => {
            console.log(linha.join(""));
        });
    }
}

let N, M;
[N, M] = linhas.shift().split(" ").map((s) => parseInt(s));
let tabuleiro = new BatalhaNaval(N, M);
tabuleiro.preencherTabuleiro(linhas.splice(0, N));
let tabuleiro2 = new BatalhaNaval(N, M);
tabuleiro2.preencherTabuleiro(saida3);

console.log("Tabuleiro inicial:");
tabuleiro.imprimir()
console.log("Tabuleiro esperado no final:");
tabuleiro2.imprimir();

const quantidadeDeDisparos = parseInt(linhas.shift());

let linha, coluna;
for (let index = 0; index < quantidadeDeDisparos; index++) {
    [linha, coluna] = linhas[index].split(" ").map((s) => parseInt(s));
    tabuleiro.atacarPosicao(linha, coluna);
}

console.log("Tabuleiro final de fato:");
tabuleiro.imprimir();

console.log(tabuleiro.naviosDestruidos);
