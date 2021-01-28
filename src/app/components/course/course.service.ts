import { CourseDto } from './dto/course-dto.model';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

import { MatSnackBar } from '@angular/material/snack-bar/';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  baseUrl = "http://localhost:8080/courses"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  findAll(): Observable<CourseDto[]> {
    return this.http.get<CourseDto[]>(this.baseUrl);
  }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

}
