import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { DashbordComponent } from './admin/dashbord/dashbord.component';
import { MessageComponent } from './admin/message/message.component';
import { BodyComponent } from './admin/body/body.component';
import { ProductsComponent } from './admin/products/products.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    DashbordComponent,
    MessageComponent,
    BodyComponent,
    ProductsComponent,
    ProductFormComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


