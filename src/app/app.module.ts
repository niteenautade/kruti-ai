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
import { SendableLinkComponent } from './sendable-link/sendable-link.component';
import { ClipboardModule } from 'ngx-clipboard';

const appRoutes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'u/:id', component: IndexComponent },
  { path: 'sendableLink', component: SendableLinkComponent},
  { path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    SendableLinkComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ScrollToModule.forRoot(),
    FormsModule,
    HttpModule,
    TypewriterModule,
    ClipboardModule
  ],
  providers: [TypewriterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
