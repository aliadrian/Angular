import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navigation/navbar/navbar.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';

import { ProductCardComponent } from './components/products/product-card/product-card.component';
import { ProductCardDeckComponent } from './components/products/product-card-deck/product-card-deck.component';
import { ProductViewComponent } from './components/products/product-view/product-view.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';

import { ProductCatalogReducer } from './store/reducers/product-catalog.reducer';
import { ProductReducer } from './store/reducers/product.reducer';
import { ShoppingCartReducer } from './store/reducers/shoppingcart.reducer';
import { ShoppingCartComponent } from './components/shoppingcart/shopping-cart/shopping-cart.component';
import { ShoppingCartProductComponent } from './components/shoppingcart/shopping-cart-product/shopping-cart-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './views/profile/profile.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingPageComponent,   
    ProductCardComponent,
    ProductCardDeckComponent,
    ProductViewComponent,
    ShoppingCartComponent,
    ShoppingCartProductComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      productcatalog: ProductCatalogReducer,
      product: ProductReducer,
      shoppingcart: ShoppingCartReducer      
    }, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }