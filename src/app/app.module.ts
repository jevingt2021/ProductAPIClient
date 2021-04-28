import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from './_modules/shared.module';
import { ProductEditComponent } from './products/product-edit/product-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
