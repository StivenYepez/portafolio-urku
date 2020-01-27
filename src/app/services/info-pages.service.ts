import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoPagesService {

  info: InfoPagina = {};
  cargada = false;

  constructor( private http: HttpClient ) {


    this.http.get('assets/data/data-pagian.json')
              .subscribe( (resp: InfoPagina) => {


                this.cargada = true;
                this.info = resp;
                console.log(resp);
              });
   }
}
