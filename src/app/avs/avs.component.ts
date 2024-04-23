import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-avs',
  templateUrl: './avs.component.html',
  styleUrls: ['./avs.component.scss']
})
export class AvsComponent {
  @ViewChild('container', { static: true }) container!: ElementRef;
  ngOnInit(): void {
    this.loadWebComponent();
  }

    loadWebComponent(): void {
    const script = document.createElement('script');
    script.src = 'https://wcdigitallab.segurossura.com.co/wc-home-svp/wc-home-svp.js'; // URL del web component
    script.onload = () => {
      // Una vez cargado el script, inicializa el componente web en el contenedor
      const avsCheck = document.createElement('wc-home-svp'); // Nombre del componente web
      this.container.nativeElement.appendChild(avsCheck);
    };
    document.body.appendChild(script);
  }
}
