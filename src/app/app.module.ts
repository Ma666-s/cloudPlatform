import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { SharedComponent } from './shared/shared.component';
import { ProductComponent } from './product/product.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { TwoWayComponent } from './two-way/two-way.component';
import { BuyComponent } from './buy/buy.component';
import { ChildComponent } from './child/child.component';
import { PipesComponent } from './pipes/pipes.component';
import { ParentComponent } from './parent/parent.component';
import { IProductComponent } from './iproduct/iproduct.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PropertybindingComponent,
    SharedComponent,
    ProductComponent,
    NgIfComponent,
    NgForComponent,
    DropdownComponent,
    FooterComponent,
    TwoWayComponent,
    BuyComponent,
    ChildComponent,
    PipesComponent,
    ParentComponent,
    IProductComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
