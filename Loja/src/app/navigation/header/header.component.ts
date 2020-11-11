import { Component, OnInit } from '@angular/core';
import { car } from '../../component/car/car';
import { Router } from '@angular/router';
import { Category } from '../../models/category.model';
import { categoryService } from '../../services/catefory/category.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class headerComponent implements OnInit{

  constructor() { }
  ngOnInit(): void {

  }
}
