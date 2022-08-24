import { Component, OnInit } from '@angular/core';
import {MenuService} from "./../../menu.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private _MenuService:MenuService ) 
  {
    _MenuService.Cargar(["menu/script"]);
   }

  ngOnInit(): void {
    
  }

}
