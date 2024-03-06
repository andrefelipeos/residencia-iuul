class Poligono {
  #vertices = [];

  constructor(vertices) {
    if (vertices.length < 3) {
      throw "Polígono deve ter pelo menos três vértices";
    }
    vertices.forEach(v => this.#vertices.push(v));
  }

  addVertice(novoVertice) {
    if (this.#vertices.includes(novoVertice)) {
      return false;
    }
    this.#vertices.push(novoVertice);
    return true;
  }

  get perimetro() {
    return 0;
  }

  get qtdVertices() {
    return this.#vertices.length;
  }
}
