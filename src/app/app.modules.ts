import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {AddMemberComponent} from './add.member.component';
import {routing} from './app.routes';

@NgModule({
    imports: [
        BrowserModule,
        routing
    ],
    declarations: [
        AppComponent,
        AddMemberComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModules { }
