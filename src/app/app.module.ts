import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { UserComponent } from './components/user/user.component';
import { OperacionesMatematicasComponent } from './components/operaciones-matematicas/operaciones-matematicas.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    OperacionesMatematicasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  //exports: [UserComponent],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
