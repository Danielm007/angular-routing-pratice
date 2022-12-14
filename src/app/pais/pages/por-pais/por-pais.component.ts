import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
})
export class PorPaisComponent {
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  constructor(private paisService: PaisService) {}

  buscar(termino: string) {
    this.termino = termino;
    this.hayError = false;
    this.paisService.buscarPais(this.termino).subscribe(
      (paises) => {
        console.log(paises);
        this.paises = paises;
      },
      (err) => {
        this.hayError = true;
        console.log('Error');
        console.info(err);
        this.paises = [];
      }
    );
  }
  sugerencias(termino: string) {
    this.hayError = false;
    // TODO: crear sugerencias
  }
}
