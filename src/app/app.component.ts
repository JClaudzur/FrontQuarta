import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = 'Julia';



  categorias = [
    {id: "1", nome: "Categorias 1"},
    {id: "2", nome: "Categorias 2"},
    {id: "3", nome: "Categorias 3"},
    {id: "4", nome: "Categorias 4"},
    {id: "5", nome: "Categorias 5"},
    {id: "6", nome: "Categorias 6"},
    {id: "7", nome: "Categorias 7"},
    {id: "8", nome: "Categorias 8"},
    {id: "9", nome: "Categorias 9"},
    {id: "10", nome: "Categorias 10"},

  ];
}

