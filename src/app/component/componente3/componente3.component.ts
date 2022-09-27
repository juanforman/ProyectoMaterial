import { Component, OnInit } from '@angular/core';
export interface ServiciosForman {
  nombre: string;
  codigo: number;
  modelo: string;
  precio: number;
}
const ELEMENT_DATA: ServiciosForman[] = [
  {codigo: 1, nombre: 'Cambio de aceite', modelo: "Aceite Ypf Elaion F10 15w40 De 4 Litros", precio: 7.351},
  {codigo: 2, nombre: 'Combo 4 cubiertas para auto', modelo: "Pirelli EVO P", precio: 139.328},
  {codigo: 3, nombre: 'Cambio de bujias para Cruze 1.4 turbo original', modelo: "GM", precio: 7.274},
  {codigo: 4, nombre: 'Cambio liquido refrigerante', modelo: "Tir Bardahl Radiador 1 Litro", precio: 1.256},
  {codigo: 5, nombre: 'Cambio de filtro de aire', modelo: "Bosch Chevrolet S-10/Blazer", precio: 2.461},
  {codigo: 6, nombre: 'Cambio alternador', modelo: "Ford Ranger", precio: 92.612},
  {codigo: 7, nombre: 'Cambio de embrague', modelo: "Valeo Toyota Corolla 1.6 16V (02)", precio: 96.009},
  {codigo: 8, nombre: 'Cambio de Filtro de nafta', modelo: "Vw Gol Power Fox Suran Crossfox Inyeccion Bosch", precio: 1.646},
];
@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css']
})
export class Componente3Component implements OnInit {

  displayedColumns: string[] = ['codigo', 'nombre', 'modelo', 'precio'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
