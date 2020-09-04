import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { ProductViewComponent } from './components/products/product-view/product-view.component';
import { ProfileComponent } from './views/profile/profile.component';



const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'product/:id', component: ProductViewComponent },
  { path: 'profile', component: ProfileComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }