import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[]=['batman', 'superman','ironman','spiderman','thor'];
  hborrado: string='';

  borrarHeroe(): void {
    this.hborrado=this.heroes.shift();
    if(this.heroes.length==0)this.hborrado='';
  }
}
