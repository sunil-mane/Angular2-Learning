import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyFirstComponentComponent } from './my-first-component/my-first-component.component';
import { MyFirstServiceService } from './my-first-service.service';
import { CustomersComponent } from './customers/customers.component';
import { ProductsComponent } from './products/products.component';

import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponentComponent,
    CustomersComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [MyFirstServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
