import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./pages/about/about.component";
import { BlogComponent } from "./pages/blog/blog.component";
import { ItemComponent } from "./pages/item/item.component";
import { PortfolioComponent } from "./pages/portfolio/portfolio.component";
import { SearchComponent } from "./pages/search/search.component";
import { ServiceComponent } from "./pages/service/service.component";

const routes: Routes = [
  { path: "home", component: PortfolioComponent },
  { path: "about", component: AboutComponent },
  { path: "services", component: ServiceComponent },
  { path: "blog", component: BlogComponent },
  { path: "item/:id", component: ItemComponent },
  { path: "search/:termino", component: SearchComponent },
  { path: "**", pathMatch: "full", redirectTo: "home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
