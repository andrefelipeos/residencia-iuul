import { Vertice } from "../questao1.js";
import { Poligono } from "../questao3.js";

let v1, v2, v3, v4;
v1 = new Vertice(3, 5);
v2 = new Vertice(8, 5);
v3 = new Vertice(7, 2);
v4 = new Vertice(2, 2);

let poligono = new Poligono(v1, v2, v3);
console.log("O perímetro do polígono é: ", poligono.perimetro.toFixed(2));
console.log("O polígono tem ", poligono.qtdVertices, " vertices.");
poligono.addVertice(v4);
console.log("O perímetro do polígono é: ", poligono.perimetro.toFixed(2));
console.log("O polígono tem ", poligono.qtdVertices, " vertices.");