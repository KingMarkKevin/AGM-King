import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Server mappe';

  strC = ''

  latC: number = 45.500537;
  lngC: number = 9.149400;

  latS: number = 45.506738;
  lngS: number = 9.190766;

  colorC: string = '';

  triangle: Array<Point> =
  [
    {lngPoint:9.1, latPoint:45.5},
    {lngPoint:9.0, latPoint:45.6},
    {lngPoint:9.0, latPoint:45.4}
  ]

  onClickColor(str){
    this.colorC = str
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

  public iconPeru = {
    url:'./assets/img/Star.ico',
    scaledSize:{
      width: 60,
      height: 60
    }
  };
}
