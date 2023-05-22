import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.scss']
})
export class ListCoursesComponent implements OnInit {

  courses: Course [] = [
    { _id: "1", name:'Angular', category: 'front-end' }
  ];
  displayedColumns = ['name','category'];

  constructor(){
    this.courses = [];
  };
  ngOnInit(): void {

  };
}
