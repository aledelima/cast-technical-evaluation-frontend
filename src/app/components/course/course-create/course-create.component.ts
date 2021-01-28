import { CourseDto } from './../dto/course-dto.model';
import { CategoryService } from './../../category/category.service';
import { CategoryDto } from './../../category/dto/category-dto';
import { CourseNewDto } from './../dto/course-new-dto.model';
import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-create',
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.css']
})
export class CourseCreateComponent implements OnInit {

  formGroup: FormGroup;
  categories: CategoryDto[];

  constructor(private router: Router,
    private courseService: CourseService, 
    private categoryService: CategoryService,
    private formBuilder: FormBuilder) { 

      this.formGroup = this.formBuilder.group({
        description: ['', [Validators.required]],
        begin: ['', [Validators.required]],
        end: ['', [Validators.required]],
        studentsQtd: ['', []],
        categoryId: ['', [Validators.required]]
      })
    }

  ngOnInit(): void {
    this.categoryService.findAll().subscribe(categories => {
      this.categories = categories;
      this.formGroup.controls.categoryId.setValue(this.categories[0].id);
    });

  }

  create():  void {
    this.courseService.create(this.formGroup.value).subscribe(courseDto => {
      this.courseService.showMessage("Curso cadastrado com sucesso!");
      this.router.navigate(['/list']);
    },
    error => {
      this.courseService.showMessage("Erro ao cadastrar. Verifique os dados inseridos!");
    });
  }

}
