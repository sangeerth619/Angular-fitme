import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
// import { CartComponent } from './cart/cart.component';
import { CartComponent } from './cart/cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';

import { AuthService } from './auth/auth.service';
import { JewelryModule } from './jewelry/jewelry.module';
import { MainLayoutComponent } from './main-layout/main-layout.component'; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    CartComponent,
    HomeComponent,
    ProductListComponent,
    ProductDetailComponent,
    MainLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    JewelryModule, 
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
