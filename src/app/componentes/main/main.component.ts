import { Component, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Iarticulo } from '../../interfaces/iacrticulo.interface';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements AfterViewInit {
  arrayarticulo: Iarticulo[] = [];
  nuevoarticulo: Iarticulo = {
    titulo: "",
    imagen: "",
    texto: "",
    fecha: ""
  };

  guardararticulo() {
    if (this.nuevoarticulo.titulo && this.nuevoarticulo.imagen && this.nuevoarticulo.texto && this.nuevoarticulo.fecha) {
      this.arrayarticulo.push({ ...this.nuevoarticulo });
      this.nuevoarticulo = {
        titulo: "",
        imagen: "",
        texto: "",
        fecha: ""
      };
      this.cargardatos();
    } else {
      alert('Por favor, rellena todos los campos.');
    }
    console.log(this.arrayarticulo);
  }

  ngAfterViewInit() {
    this.cargardatos();
  }

  cargardatos() {
    let html: string = "";
    this.arrayarticulo.forEach((articulo: Iarticulo) => {
      html += `
        <div class="news-item">
          <h3>${articulo.titulo}</h3>
          <img src="${articulo.imagen}" alt="Imagen de la noticia">
          <p>${articulo.texto}</p>
          <small>${articulo.fecha}</small>
        </div>
      `;
    });

    const container = document.getElementById('news-list-container');
    if (container) {
      container.innerHTML = html;
    }
  }
}