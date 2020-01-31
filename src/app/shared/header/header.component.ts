import { Component, OnInit } from '@angular/core';
import { InfoPagesService } from '../../services/info-pages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public infoPagesService: InfoPagesService,
              private router: Router) { }

  ngOnInit() {
  }

  buscarProducto( termino: string){

    if(termino.length < 1){
      return;
    }

    this.router.navigate(['/search', termino]);

    
  }

}
