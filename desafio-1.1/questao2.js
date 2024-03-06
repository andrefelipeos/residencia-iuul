import { Vertice } from "./questao1.js";

export class Triangulo {
  #vertices = [];

  constructor(vertice1, vertice2, vertice3) {
    if (!this.#formamUmTriangulo(vertice1, vertice2, vertice3)) {
      throw "Os vertices informados não formam um triângulo"
    }
    this.#vertices.push(vertice1, vertice2, vertice3);
  }

  get vertices() {
    return this.#vertices;
  }

  equals(outroTriangulo) {
    return this.#vertices.length === 3 && outroTriangulo.vertices.length === 3
      && this.#vertices.filter(v => outroTriangulo.vertices.includes(v)).length === 3;
  }

  get perimetro() {
    return this.vertices[0].distancia(this.vertices[1])
      + this.vertices[0].distancia(this.vertices[2])
      + this.vertices[1].distancia(this.vertices[2]);
  }

  tipo() {
    const ladoA = this.vertices[0].distancia(this.vertices[1]);
    const ladoB = this.vertices[0].distancia(this.vertices[2]);
    const ladoC = this.vertices[1].distancia(this.vertices[2]);
    if (ladoA === ladoB && ladoB === ladoC) {
      return "equilátero";
    } else if (ladoA === ladoB || ladoB === ladoC || ladoC === ladoA) {
      return "isoceles";
    } else {
      return "escaleno";
    }
  }

  clone() {
    return new Triangulo(this.#vertices[0], this.#vertices[1], this.#vertices[2]);
  }

  area() {
    const ladoA = this.vertices[0].distancia(this.vertices[1]);
    const ladoB = this.vertices[0].distancia(this.vertices[2]);
    const ladoC = this.vertices[1].distancia(this.vertices[2]);
    const sp = (ladoA + ladoB + ladoC) / 2.0;
    return Math.sqrt(sp * (sp - ladoA) * (sp - ladoB) * (sp - ladoC));
  }

  #formamUmTriangulo(v1, v2, v3) {
    const distanciaV1V2 = v1.distancia(v2);
    const distanciaV1V3 = v1.distancia(v3);
    const distanciaV2V3 = v2.distancia(v3);
    if ((distanciaV1V2 < distanciaV1V3 + distanciaV2V3)
      && (distanciaV1V3 < distanciaV1V2 + distanciaV2V3)
      && (distanciaV2V3 < distanciaV1V2 + distanciaV1V3)
    ) {
      return true;
    }
    return false;
  }
}
