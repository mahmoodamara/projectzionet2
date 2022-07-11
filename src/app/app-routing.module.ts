import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './admin/body/body.component';
import { ChatAdminComponent } from './admin/chat-admin/chat-admin.component';
import { DashbordComponent } from './admin/dashbord/dashbord.component';
import { MessageComponent } from './admin/message/message.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { ProductsComponent } from './admin/products/products.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { ChatUserComponent } from './chat-user/chat-user.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path:'',pathMatch:'full',redirectTo:'login'},
  { path:'login', component:LoginComponent},
  {path:'sidebar',component:SidebarComponent},
  {path:'dashbord',component:DashbordComponent},
  {path:'message',component:MessageComponent},
  {path:'body',component:BodyComponent},
  {path:'adminProducts',component:ProductsComponent},
  {path:'productForm',component:ProductFormComponent},
  {path:'messages',component:MessageComponent},
  {path:'chat-user',component:ChatUserComponent},
  {path:'home',component:HomeComponent},
  {path:'chat-admin',component:ChatAdminComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
