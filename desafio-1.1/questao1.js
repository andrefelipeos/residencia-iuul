export class Vertice {
  #x;
  #y;

  constructor(x, y) {
    this.#x = x;
    this.#y = y;
  }

  get x() {
    return this.#x;
  }

  get y() {
    return this.#y;
  }

  distancia(outroVertice) {
    const deltaX = outroVertice.x - this.x;
    const deltaY = outroVertice.y - this.y;
    return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
  }

  mover(novoX, novoY) {
    this.#x = novoX;
    this.#y = novoY;
  }

  equals(outroVertice) {
    if (this.x === outroVertice.x && this.y === outroVertice.y) {
      return true;
    }
    return false;
  }
}
