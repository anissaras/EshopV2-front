import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http' ;

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';
import { AppRoutingModule } from './app-routing.module';
import { TrousersComponent } from './trousers/trousers.component';
import { ShirtsComponent } from './shirts/shirts.component';
import { JacketsComponent } from './jackets/jackets.component';
import { TshirtsComponent } from './tshirts/tshirts.component';
import { ShoesComponent } from './shoes/shoes.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { GlassesComponent } from './glasses/glasses.component';
import { WatchesComponent } from './watches/watches.component';
import { ItemComponent } from './item/item.component';
import { ItemListComponent } from './item-list/item-list.component';
import { SingleItemComponent } from './single-item/single-item.component';
import { SingleArticleComponent } from './single-article/single-article.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartPageComponent } from './cart-page/cart-page.component';
import { RegisterComponent } from './register/register.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { PaymentComponent } from './payment/payment.component';
import { MapComponent } from './map/map.component';
import { AssistantComponent } from './assistant/assistant.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ArticleComponent,
    TrousersComponent,
    ShirtsComponent,
    JacketsComponent,
    TshirtsComponent,
    ShoesComponent,
    ArticleListComponent,
    GlassesComponent,
    WatchesComponent,
    ItemComponent,
    ItemListComponent,
    SingleItemComponent,
    SingleArticleComponent,
    LoginComponent,
    CartPageComponent,
    RegisterComponent,
    CheckoutPageComponent,
    ReclamationComponent,
    PaymentComponent,
    MapComponent,
    AssistantComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 7000
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
