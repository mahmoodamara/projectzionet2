import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { BodyComponent } from './admin/body/body.component';
import { ChatAdminComponent } from './admin/chat-admin/chat-admin.component';
import { DashbordComponent } from './admin/dashbord/dashbord.component';
import { MessageComponent } from './admin/message/message.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { ProductsComponent } from './admin/products/products.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { UsersComponent } from './admin/users/users.component';
import { BookCategoryComponent } from './book-category/book-category.component';
import { CartComponent } from './cart/cart.component';
import { ChatUserComponent } from './chat-user/chat-user.component';
import { FooterComponent } from './footer/footer.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SuccessPageComponent } from './success-page/success-page.component';
import { VerificationComponent } from './verification/verification.component';

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
  {path:'adminUsers',component:AdminUsersComponent},
  {path:'bookcategory',component:BookCategoryComponent},
  {path:'forget-password',component:ForgetPasswordComponent},
  {path:'verification',component:VerificationComponent},
  {path:'success-page',component:SuccessPageComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'footer',component:FooterComponent},
  {path:'cart',component:CartComponent},
  {path:'users',component:UsersComponent}








];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
