import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:'' , redirectTo:'home' , pathMatch:'full'},
  {path:'home' , component:HomeComponent ,title:'Home'},
  {path:'about' , component:AboutComponent,title:'About'},
  {path:'contact' , component:ContactComponent,title:'Contact'},
  {path:'portofolio' , component:PortofolioComponent,title:'Portofolio'},
  {path:'**' , component:ErrorPageComponent,title:'4O4 Not Found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
