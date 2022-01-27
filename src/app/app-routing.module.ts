import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { BlogComponent } from "./blog/blog.component";
import { ContactComponent } from "./contact/contact.component";
import { CourseComponent } from "./course/course.component";
import { HomeComponent } from "./home/home.component";


 const appRoutes: Routes=[
  {path:'', redirectTo:'/home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'course',component:CourseComponent},
  {path:'blog',component:BlogComponent},
  {path:'contact',component:ContactComponent},
 ];

@NgModule({
  imports:[RouterModule.forRoot(appRoutes)],
  exports:[RouterModule]
})
export class AppRoutingModule{

}
