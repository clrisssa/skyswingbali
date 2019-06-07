import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  imgPath: String = '../assets/images/swing5.jpg'
  initialImg: String = '../assets/images/swing5.jpg'
  imgLookup = {}

  initialCaption: String = "Indulge your senses. Discover experiences"
  caption: String = "Indulge your senses. Discover experiences"
  captionLookup = {}

  open: Boolean = false;
  isOpen: boolean = false
  toggleText: String = "Menu"

  activeLookup = {}
  changedImg = false;

  constructor() { }

  ngOnInit() {
    this.imgLookup['outdoor'] = '../assets/images/outdoor.jpg'
    this.imgLookup['restaurant'] = '../assets/images/restaurant4.jpg'
    this.imgLookup['spa'] = '../assets/images/spa.jpg'
    this.imgLookup['photo'] = '../assets/images/photo.jpg'

    this.captionLookup['outdoor'] = 'Discover new challenges throughout the day.'
    this.captionLookup['restaurant'] = 'Indulge in our delightful food & beverage offerings.'
    this.captionLookup['spa'] = 'Relax, indulge, enjoy. Give yourself a well-deserved break.'
    this.captionLookup['photo'] = 'Find the beautiful scenery and capture your special moments.'

    this.activeLookup['outdoor'] = false;
    this.activeLookup['restaurant'] = false;
    this.activeLookup['spa'] = false;
    this.activeLookup['photo'] = false;
  }

  toggleMenu() {
    console.log("open: " + this.isOpen)
    if (this.isOpen == false) {
      this.isOpen = true
      this.toggleText = "Close"
    } else {
      this.isOpen = false
      this.toggleText = "Menu"
    }
  }

  mouseEnter(item) {
    this.imgPath = this.imgLookup[item]
    this.caption = this.captionLookup[item]
  }

  mouseLeave(item) {
    if (!this.activeLookup[item]) {
      this.imgPath = this.initialImg
      this.caption = this.initialCaption
    }
  }

  mouseClick(item) {
    this.imgPath = this.imgLookup[item]
    this.caption = this.captionLookup[item]

    this.changedImg = false;
    var initialState = this.activeLookup[item]
    this.activeLookup['outdoor'] = false;
    this.activeLookup['restaurant'] = false;
    this.activeLookup['spa'] = false;
    this.activeLookup['photo'] = false;

    this.activeLookup[item] = !initialState

    console.log(this.activeLookup[item])
    this.changedImg = true;
  }
}
