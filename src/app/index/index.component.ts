import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import {ScrollToModule} from 'ng2-scroll-to';
import { TypewriterModule } from "ng2-typewriter";
import { TypewriterService, TypewriterContent } from "ng2-typewriter";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  contents: TypewriterContent[] = [];
  arr=[];
  constructor(private _http:Http,private route: ActivatedRoute,private tws: TypewriterService) {
    this.route.params.subscribe(params => {
      if(params['id'])
      this.user=atob(params['id']);
      let temp = '<div style="font-size:1.5em;font-weight:bold;">Hi, '+this.user+'</div>'
      this.arr.push(temp);
      this.arr.push('How Are you?');
      this.arr.push('I am Kruti - An Artificially Intelligent System');
      this.arr.push('I was designed to talk to you about my creator @niteenautade');
    });
    this.contents = this.tws.format(this.arr); 
  }
  user:string ='';
  talkButtonClicked:boolean=false;
  ngOnInit(){}
  togglePage2(){
    console.log("Toggle Page 2")
    this.talkButtonClicked = true;
  }

}
