import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import {ScrollToModule} from 'ng2-scroll-to';
import { TypewriterModule } from "ng2-typewriter";
import { TypewriterService, TypewriterContent } from "ng2-typewriter";

const appRoutes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'u/:id', component: IndexComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ScrollToModule.forRoot(),
    FormsModule,
    HttpModule,
    TypewriterModule
  ],
  providers: [TypewriterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
