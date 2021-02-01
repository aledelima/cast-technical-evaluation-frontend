import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CourseNewDto } from './../dto/course-new-dto.model';
import { CategoryService } from './../../category/category.service';
import { CourseService } from './../course.service';
import { CategoryDto } from './../../category/dto/category-dto';
import { CourseDto } from './../dto/course-dto.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course-update',
  templateUrl: './course-update.component.html',
  styleUrls: ['./course-update.component.css']
})
export class CourseUpdateComponent implements OnInit {

  formGroup: FormGroup;
  categories: CategoryDto[];

  constructor(
    private router: Router,
    private courseService: CourseService, 
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder) { 
      this.formGroup = this.formBuilder.group({
        id: ['', [Validators.required]],
        description: ['', [Validators.required]],
        begin: ['', [Validators.required]],
        end: ['', [Validators.required]],
        studentsQtd: ['', []],
        categoryId: ['', [Validators.required]]
      })
    }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.categoryService.findAll().subscribe(categories => {
      this.categories=categories;
      this.courseService.findById(id).subscribe(courseDto => {this.formGroup.patchValue(courseDto);});
    });
    
  }

  update(): void {
    this.courseService.update(this.formGroup.value).subscribe(courseDto => {
      this.courseService.showMessage("Alterações realizadas com sucesso!");
      this.router.navigate(['/courses']);
    });
  }

  cancel(): void {
    this.router.navigate(['/courses']);
  }

}
