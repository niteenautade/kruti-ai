import { Component, OnInit,AfterViewInit,ElementRef,ViewChild  } from '@angular/core';
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
export class IndexComponent implements OnInit, AfterViewInit {
 @ViewChild("talkInput")
    private _inputElement: ElementRef;

    ngAfterViewInit(): void {
        let e:any = this._inputElement.nativeElement;
       let time=35;
       console.log('TIme:',time)
       
        let myTimer=setInterval(function(){
              fun();
          }, 500);
        
        function fun(){
          console.log('TIme:',time)
         if(time>=0) {
           time--;
          if(time%2==0 && time < 14){
            console.log('focus')
              e.focus();
          }
            if(time%2!=0) {
              console.log('no focus')
              e.blur();
            }
         }
          else clearInterval(myTimer);
        }

    }

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
