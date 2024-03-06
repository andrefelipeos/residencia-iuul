class Triangulo {
  #vertices = [];

  construtor(vertice1, vertice2, vertice3) {
    this.#vertices.push(vertice1, vertice2, vertice3);
  }

  get vertices() {
    return this.#vertices;
  }

  equal(outroTriangulo) {
    return this.#vertices.length === 3 && outroTriangulo.vertices.length === 3
      && this.#vertices.filter(v => outroTriangulo.includes(v)).length === 3;
  }

  get perimetro() {
    return 0;
  }

  tipo() {
    return '';
  }

  clone() {
    return new Triangulo(this.#vertices[0], this.#vertices[1], this.#vertices[2]);
  }

  area() {
    return 0.0;
  }
}
