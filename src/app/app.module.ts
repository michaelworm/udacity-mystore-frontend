import {NgModule} from "@angular/core"
import {BrowserModule} from "@angular/platform-browser"
import {HttpClientModule} from "@angular/common/http"
import {FormsModule} from "@angular/forms"

import {AppRoutingModule} from "./app-routing.module"
import {AppComponent} from "./app.component"
import {HeaderComponent} from "./layout/header/header.component"
import {ProductListComponent} from "./components/product-list/product-list.component"
import {ProductItemComponent} from "./components/product-item/product-item.component"
import {CartComponent} from "./components/cart/cart.component";
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { ProductItemDetailComponent } from './components/product-item-detail/product-item-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductItemComponent,
    HeaderComponent,
    CartComponent,
    CartItemComponent,
    ProductItemDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
