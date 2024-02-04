import { Component } from '@angular/core';

@Component({
  selector: 'app-portofolio',
  templateUrl: './portofolio.component.html',
  styleUrls: ['./portofolio.component.css']
})
export class PortofolioComponent {
  showModal:boolean = false ; 
  imageURL:string = '' ; 
  images:string[] = [
    "assets/poert1.png",
    "assets/port2.png",
    "assets/port3.png",
    "assets/poert1.png",
    "assets/port2.png",
    "assets/port3.png",
  ]
  imageClick(w:string){
    this.imageURL=w ; 
    this.showModal = true ; 
  }
  hideModal(){
    this.showModal = false ; 
  }
  imgClick(event:any){
    event.stopPropagation();
  }
}
