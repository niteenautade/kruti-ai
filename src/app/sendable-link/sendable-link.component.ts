import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sendable-link',
  templateUrl: './sendable-link.component.html',
  styleUrls: ['./sendable-link.component.css']
})
export class SendableLinkComponent implements OnInit {
  nameOfThePerson:string;
  sendableLink:string;
  constructor() { }

  ngOnInit() {
  }
  clickedGetLink:boolean=false;
  getLink(data){
    this.sendableLink = btoa(data.nameOfThePerson);
    this.clickedGetLink = true;
    console.log(data.nameOfThePerson,' : ',this.sendableLink)
  }

}
