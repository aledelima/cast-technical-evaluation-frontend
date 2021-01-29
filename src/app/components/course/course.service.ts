import { CategoryDto } from './../category/dto/category-dto';
import { CategoryService } from './../category/category.service';
import { CourseDto } from './dto/course-dto.model';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

import { MatSnackBar } from '@angular/material/snack-bar/';
import { CourseNewDto } from './dto/course-new-dto.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  baseUrl = "http://localhost:8080/api/courses";

  categories: CategoryDto[];

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient,
    private categoryService: CategoryService) {
      this.categoryService.findAll().subscribe(categoryDtos => {
        this.categories=categoryDtos;
      });
    }

  findAll(): Observable<CourseDto[]> {
    return this.http.get<CourseDto[]>(this.baseUrl);
  }

  findById(id: string): Observable<CourseDto> {
    return this.http.get<CourseDto>(`${this.baseUrl}/${id}`);
  }

  search(str: string): Observable<CourseDto[]> {
    return this.http.get<CourseDto[]>(`${this.baseUrl}/search/${str}`);
  }

  create(courseNewDto: CourseNewDto): Observable<CourseDto> {
    return this.http.post<CourseDto>(this.baseUrl, courseNewDto);
  }

  update(courseNewDto: CourseNewDto): Observable<CourseDto> {
    return this.http.put<CourseDto>(`${this.baseUrl}/${courseNewDto.id}`, courseNewDto);
  }

  delete(course: CourseDto): Observable<CourseDto> {
    return this.http.delete<CourseDto>(`${this.baseUrl}/${course.id}`);
  }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

}
