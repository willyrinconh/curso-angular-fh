import { templateJitUrl, ThisReceiver } from "@angular/compiler";
import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl:'heroe.component.html'
})   
export class HeroeComponent{
    nombre: string= 'Superman';
    edad: number= 40
    //getter. quedan como una propiedad de la clase
    get nombreMayus(){
        return this.nombre.toUpperCase();
    }
    obtenerNombre(): string{
        return `${ this.nombre} - ${this.edad}`;
    }

    cambiarNombre():void{
        this.nombre='Spiderman';
    }

    cambiarEdad():void{
        this.edad=30;
    }

}