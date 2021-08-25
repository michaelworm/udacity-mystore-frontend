import {NgModule} from "@angular/core"
import {BrowserModule} from "@angular/platform-browser"
import {HttpClientModule} from "@angular/common/http"

import {AppComponent} from "./app.component"
import {ProductListComponent} from "./components/product-list/product-list.component"
import {ProductItemComponent} from "./components/product-item/product-item.component"
import {HeaderComponent} from "./layout/header/header.component"
import {AppRoutingModule} from "./app-routing.module"
import {CartComponent} from "./components/cart/cart.component"

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductItemComponent,
    HeaderComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
