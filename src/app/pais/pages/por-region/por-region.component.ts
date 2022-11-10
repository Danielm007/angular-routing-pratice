import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
        margin-top: 5px;
      }
    `,
  ],
})
export class PorRegionComponent {
  //Regiones array
  regiones: string[] = [
    'EU',
    'EFTA',
    'CARICOM',
    'PA',
    'AU',
    'USAN',
    'EEU',
    'AL',
    'ASEAN',
    'CAIS',
    'CEFTA',
    'NAFTA',
    'SAARC',
  ];

  // Active region
  regionActiva: string = '';
  //Constructor
  constructor() {}
  //getClaseCss
  getClaseCSS(region: string): string {
    return this.regionActiva === region
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }
  //activarRegion
  activarRegion(region: string) {
    this.regionActiva = region;

    //TODO: hacer el llamado al servicio
  }
}
