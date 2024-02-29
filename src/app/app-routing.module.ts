import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { ItemListComponent } from "./item-list/item-list.component";
import { GlassesComponent } from "./glasses/glasses.component";
import { HomeComponent } from "./home/home.component";
import { JacketsComponent } from "./jackets/jackets.component";
import { ItemsService } from "./services/items.service";
import { ShirtsComponent } from "./shirts/shirts.component";
import { ShoesComponent } from "./shoes/shoes.component";
import { SingleItemComponent } from "./single-item/single-item.component";
import { TshirtsComponent } from "./tshirts/tshirts.component";
import { WatchesComponent } from "./watches/watches.component";
import { TrousersComponent } from "./trousers/trousers.component";
import { SingleArticleComponent } from "./single-article/single-article.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { ReclamationComponent } from "./reclamation/reclamation.component";
import { CheckoutPageComponent } from "./checkout-page/checkout-page.component";
import { PaymentComponent } from "./payment/payment.component";
import { MapComponent } from "./map/map.component";
import { CartPageComponent } from "./cart-page/cart-page.component";

const routes: Routes = [
    { path: 'items', component: ItemListComponent},
    { path: 'items/:id', component: SingleItemComponent},
    { path: 'home', component: HomeComponent },
    { path: '', component: HomeComponent },
    { path: 'trousers', component: TrousersComponent },
    { path: 'jackets', component: JacketsComponent },
    { path: 'shirts', component: ShirtsComponent },
    { path: 'shoes', component: ShoesComponent },
    { path: 'glasses', component: GlassesComponent },
    { path: 'watches', component: WatchesComponent },
    { path: 'tshirts', component: TshirtsComponent },
    { path: 'search/:searchTerm', component:  HomeComponent },
    { path: 'articles/:id', component: SingleArticleComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'payment/:id', component: PaymentComponent },
    { path: 'cart-page', component: CartPageComponent },
    { path: 'checkout/:id', component:CheckoutPageComponent },
    { path: 'reclamer', component: ReclamationComponent },
    { path: 'map', component: MapComponent },


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
