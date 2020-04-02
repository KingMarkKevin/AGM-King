import { Component } from '@angular/core';
import { Point } from 'src/models/point.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Server mappe';

  strC = '';
  strR = '';

  latC: number = 45.500537;
  lngC: number = 9.149400;

  latS: number = 45.506738;
  lngS: number = 9.190766;

  colorC: string = '';
  colorR: string = '';

  triangle: Array<Point> =
  [
    {lng:9.1, lat:45.5},
    {lng:9.0, lat:45.6},
    {lng:9.0, lat:45.4}
  ]

   rectangle: Array<Point> =
  [
    {lng:9.35, lat:45.54},
    {lng:9.55, lat:45.54},
    {lng:9.55, lat:45.44},
    {lng:9.35, lat:45.44}
  ]

  onClickColor(strC){
    this.colorC = strC
  }

  onClickRect(strR){
    this.colorR = strR;
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
