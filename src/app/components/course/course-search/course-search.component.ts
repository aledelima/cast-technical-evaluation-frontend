import { CourseService } from './../course.service';
import { CourseDto } from './../dto/course-dto.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.css']
})
export class CourseSearchComponent implements OnInit {

  courses: CourseDto[];
  displayedColumns = ['id', 'description', 'begin', 'end', 'actions'];

  searchStr: string = '';

  constructor(private service: CourseService) { }

  ngOnInit(): void {
  }

  searchCourses() {
    this.service.search(this.searchStr).subscribe(courses => this.courses = courses);
  }

}
