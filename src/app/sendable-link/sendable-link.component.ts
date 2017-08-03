import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sendable-link',
  templateUrl: './sendable-link.component.html',
  styleUrls: ['./sendable-link.component.css']
})
export class SendableLinkComponent implements OnInit {
  nameOfThePerson:string;
  nameInBtoA:string;
  sendableLink:string;
  
  constructor() { }

  ngOnInit() {
  }
  clickedGetLink:boolean=false;
  clickedCopyLink:boolean=false;
  getLink(data){
    this.nameInBtoA = btoa(data.nameOfThePerson);
    this.clickedGetLink = true;
    console.log(data.nameOfThePerson,' : ',this.nameInBtoA)
    this.sendableLink = window.location.host+'/u/'+this.nameInBtoA;
  }

}
