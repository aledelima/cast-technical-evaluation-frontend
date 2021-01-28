import { CourseListComponent } from './components/course/course-list/course-list.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "list",
    component: CourseListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
