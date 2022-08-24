import { Injectable } from '@angular/core';
//import { Script } from 'vm';
import { BodyComponent } from './components/body/body.component';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  Cargar ( archivos:string[] )
  {
    for( let archivo of archivos )
    {
     let script = document.createElement("script");
     script.src = "./assets/js/" + archivo + ".js";
     let body = document.getElementsByTagName("body")[0];
     body.appendChild( script );
    }

  }
}
