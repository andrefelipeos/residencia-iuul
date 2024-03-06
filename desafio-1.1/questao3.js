import { Vertice } from "./questao1.js";

class Poligono {
  #vertices = [];

  constructor() {
    if (arguments.length < 3) {
      throw "Polígono deve ter pelo menos três vértices";
    }
    this.#vertices.push(...arguments);
  }

  get vertices() {
    return this.#vertices;
  }

  addVertice(novoVertice) {
    if (this.#vertices.includes(novoVertice)) {
      return false;
    } else {
      this.#vertices.push(novoVertice);
      return true;
    }
  }

  /*
  * Esse método supõe que os vértices estão armazenados seguindo uma
  * ordem de "desenho" do polígono.
  */
  get perimetro() {
    let perimetro = this.#vertices[0].distancia(this.#vertices[this.#vertices.length-1]);
    for (let i = 0; i < this.#vertices.length-1; i++) {
      perimetro += this.#vertices[i].distancia(this.#vertices[i+1]);
    }
    return perimetro;
  }

  get qtdVertices() {
    return this.#vertices.length;
  }
}

let v1, v2, v3, v4;
v1 = new Vertice(3, 5);
v2 = new Vertice(8, 5);
v3 = new Vertice(7, 2);
v4 = new Vertice(2, 2);

let poligono = new Poligono(v1, v2, v3);
console.log("O perimetro do poligono é: " + poligono.perimetro);
console.log("O poligono tem " + poligono.qtdVertices + " vertices.");
poligono.addVertice(v4);
console.log("O perimetro do poligono é: " + poligono.perimetro);
console.log("O poligono tem " + poligono.qtdVertices + " vertices.");
