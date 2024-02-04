import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
 userName:boolean = false  ;
 userAge:boolean = false  ;
 userEmail:boolean = false  ;
 userPassword:boolean = false  ;
  inputClicked(event: any) {
    switch (event.srcElement.id) {
      case 'userName':
        if (event.data) {
          this.userName = true ;
        }else{
          this.userName = false ;
        }
        break;
      case 'userAge':
        if (event.data) {
          this.userAge = true ;
        }else{
          this.userAge = false ;
        }
        break;
      case 'userEmail':
        if (event.data) {
          this.userEmail = true ;
        }else{
          this.userEmail = false ;
        }
        break;
      case 'userPassword':
        if (event.data) {
          this.userPassword = true ;
        }else{
          this.userPassword = false ;
        }
        break;
    
      default:
        break;
    }
  }
}
