import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module'; // Ensure this import is correct

import { AppComponent } from './app.component';
import { RegistrationComponent } from './features/registration/registration.component';
import { LoginComponent } from './features/login/login.component';

import { RegistrationService } from './core/services/registration.service';
import { LoginService } from './core/services/login.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './core/services/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent
    // Include any other components your app uses
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule // Make sure this is last to ensure route configurations load correctly
  ],
  providers: [
    RegistrationService,
    LoginService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    
    // Include any other services your app uses
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
