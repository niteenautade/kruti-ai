import { Component, OnInit,AfterViewInit,ElementRef,ViewChild,AfterViewChecked  } from '@angular/core';
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
 @ViewChild("talkInput1") private _inputElement1: ElementRef;
  ngAfterViewInit(): void {
      let e:any = this._inputElement1.nativeElement;
      e.focus();
  }

  @ViewChild('chatConversation') private myScrollContainer: ElementRef;

    ngAfterViewChecked() {        
        this.scrollToBottom();        
    } 

    scrollToBottom(): void {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        } catch(err) { }                 
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
      this.arr.push('Let\'s Talk. Try asking me something about my master in the box below');
    });
    this.contents = this.tws.format(this.arr); 
  }
  user                 : string  = '';
  talkButtonClicked    : boolean = false;
  hideFirstTalkInputBox: boolean = false;
  chatArray=[];

  ngOnInit(){}
  togglePage2(){
    console.log("Toggle Page 2")
    this.talkButtonClicked = true;
  }

  data='';
  initialTalk(data){
    console.log('Initial Talk Method')
    this._http.post('getResponse',data).subscribe(
      (res)=>{
        console.log('ress',res)
        this.data = res.json();
        this.chatArray.push(this.data['result']['resolvedQuery']);
        this.chatArray.push(this.data['result']['fulfillment']['speech']);
      })
    this.togglePage2();
    this.hideFirstTalkInputBox = true;
  }

  talkToKruti(data){
    console.log('TalkToKriti Method')
    this._http.post('getResponse',data).subscribe(
      (res)=>{
        console.log('ress',res)
        this.data = res.json();
        this.chatArray.push(this.data['result']['resolvedQuery']);
        this.chatArray.push(this.data['result']['fulfillment']['speech']);
        
      })
  }
}
