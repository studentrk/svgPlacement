import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  addSvg() {
    console.log("test");
    
    var tag = document.createElement("ion-icon");
    tag.src = "./assets/shapes.svg"
    tag.className = "shapesSvg"
    var element = document.getElementById("svgContainer")
    element.appendChild(tag);
  }
}
