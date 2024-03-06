class Triangulo {
  #vertices = [];

  construtor(vertice1, vertice2, vertice3) {
    if (!this.#formamUmTriangulo(vertice1, vertice2, vertice3)) {
      throw "Os vertices informados não formam um triângulo"
    }
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

  #formamUmTriangulo(v1, v2, v3){
    distanciaV1V2 = v1.distancia(v2);
    distanciaV1V3 = v1.distancia(v3);
    distanciaV2V3 = v2.distancia(v3);
    if ((distanciaV1V2 < distanciaV1V3 + distanciaV2V3)
      && (distanciaV1V3 < distanciaV1V2 + distanciaV2V3)
      && (distanciaV2V3 < distanciaV1V2 + distanciaV1V3)
    ) {
      return true;
    }
    return false;
  }
}
