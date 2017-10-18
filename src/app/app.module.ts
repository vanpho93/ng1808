import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WordComponent } from './word/word.component';
import { ListComponent } from './list/list.component';
import { MyInputComponent } from './my-input/my-input.component';
import { ChildComponent } from './playground/child.component';
import { ParentComponent } from './playground/parent.component';

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    ListComponent,
    MyInputComponent,
    ChildComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// app -> modules -> (components, directives, class)
