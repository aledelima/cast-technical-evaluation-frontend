import { CourseUpdateComponent } from './components/course/course-update/course-update.component';
import { CourseDeleteComponent } from './components/course/course-delete/course-delete.component';
import { CourseCreateComponent } from './components/course/course-create/course-create.component';
import { CourseListComponent } from './components/course/course-list/course-list.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { CourseSearchComponent } from './components/course/course-search/course-search.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "courses",
    component: CourseListComponent
  },
  {
    path: "courses/search",
    component: CourseSearchComponent
  },
  {
    path: "courses/create",
    component: CourseCreateComponent
  },
  {
    path: "courses/delete/:id",
    component: CourseDeleteComponent
  },
  {
    path: "courses/update/:id",
    component: CourseUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
