import { CourseDto } from './../dto/course-dto.model';
import { CourseService } from './../course.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses: CourseDto[];
  displayedColumns = ['id', 'description', 'begin', 'end', 'actions'];

  constructor(private service: CourseService) { }

  ngOnInit(): void {
    this.service.findAll().subscribe(courses => this.courses = courses);
  }

}
