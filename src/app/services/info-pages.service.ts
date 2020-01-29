import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoPagesService {

  info: InfoPagina = {};
  cargada = false;

  equipo: any[] = [];

  constructor( private http: HttpClient ) {

    this.cargarInfo();
    this.cargarEquipo();
    
   }

   private cargarInfo(){
    this.http.get('assets/data/data-pagian.json')
    .subscribe( (resp: InfoPagina) => {


      this.cargada = true;
      this.info = resp;
     
    });
   }

   private cargarEquipo(){
    this.http.get('https://templai-stiv.firebaseio.com/equipo.json')
    .subscribe( (resp: any) => {


      this.equipo = resp;
      // console.log(resp);
    });
   }
}
