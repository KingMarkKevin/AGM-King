import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'server mappe';

  strC = ''
  strS = ''

  latC: number = 45.500537;
  lngC: number = 9.149400;

  latS: number = 45.506738;
  lngS: number = 9.190766;

  colorS: string = '';
  colorC: string = '';

  onClickScuola(strS){
    this.colorS = strS
  }

  onClickCasa(strC){
    this.colorC = strC
  }

  public iconHome = {
    url:'./assets/img/Home.ico',
    scaledSize:{
      width: 60,
      height: 60
    }
  };

  public iconScuola = {
    url:'./assets/img/Pencil.ico',
    scaledSize:{
      width: 60,
      height: 60
    }
  };

  public iconDuomo = {
    url:'./assets/img/Duomo.ico',
    scaledSize:{
      width: 60,
      height: 60
    }
  };
}
