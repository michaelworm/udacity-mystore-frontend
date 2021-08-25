import {NgModule} from "@angular/core"
import {BrowserModule} from "@angular/platform-browser"
import { HttpClientModule } from '@angular/common/http';

import {AppComponent} from "./app.component"
import {ProductListComponent} from "./components/product-list/product-list.component"
import {ProductItemComponent} from "./components/product-item/product-item.component"

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
