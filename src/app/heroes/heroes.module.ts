import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core' ;
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    //que cosas deseamos que sean visibles fuera del modulo
    exports:[
        ListadoComponent
    ],
    imports:[
        CommonModule    //este Modulo es para las directivas ngif, ngFor, etc.
    ]
})
export class HeroesModule{


}