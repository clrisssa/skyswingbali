import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'skyswing';
  isOpen:boolean = false
  toggleText:String = "Menu"
  imgPath:String = '../assets/images/swing.jpg'

  toggleMenu(){
    console.log("open: " + this.isOpen)
    if (this.isOpen==false){
      this.isOpen=true
      this.toggleText="Close"
    }else{
      this.isOpen=false
      this.toggleText="Menu"
    }
  }


  
}
