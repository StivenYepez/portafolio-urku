import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interfaces';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];
  productosFiltrado: Producto[] = [];

  constructor(private http: HttpClient) {

    this.cargarProductos();
   }
   private  cargarProductos() {

    return new Promise( (resolve, rejec) =>{

      this.http.get('https://templai-stiv.firebaseio.com/producto_idx.json')
               .subscribe( (resp: Producto[]) => {

                
                 this.productos = resp;
                 this.cargando = false;
                 resolve();
               });
    });
  }

   getProducto( id: string){
     return this.http.get(`https://templai-stiv.firebaseio.com/productos/${ id }.json`);
   }

   buscarProducto( termino: string){

    if(this.productosFiltrado.length === 0 ){
      // cargar producto
      this.cargarProductos().then( ()=>{
        // ejecutar despues de tener los productos
        // aplicar filtro
        this.filtrarProductos( termino);
      });
    }else{
      this.filtrarProductos(termino);
    }

   
   }

   private filtrarProductos( termino: string){
      // console.log(this.productos);
      this.productosFiltrado = [];

      termino = termino.toLocaleLowerCase();

      this.productos.forEach( prod => {

        const lowecase = prod.titulo.toLocaleLowerCase();

        if(prod.categoria.indexOf( termino) >= 0 || lowecase.indexOf( termino) >= 0){
          this.productosFiltrado.push( prod);
        }
      })
   }
}
