import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './features/registration/registration.component';
import { LoginComponent } from './features/login/login.component';
// Import other components as necessary

// Define your routes here
const routes: Routes = [
  { path: 'register', component: RegistrationComponent },  // Corrected path
  { path: 'login', component: LoginComponent },
  // Define additional routes
  { path: '', redirectTo: 'register', pathMatch: 'full' } // A default route, corrected redirectTo path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] // Export RouterModule so it's available throughout your app
})
export class AppRoutingModule { }
