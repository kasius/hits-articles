import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';

// Component
import { AppComponent } from './app.component';

// Services
import { HitsService } from './services/hits.service';
import { HttpClient } from './services/http-client.service';

// Router
import { AppRoutingModule } from './app-router.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [HttpClient, HitsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
