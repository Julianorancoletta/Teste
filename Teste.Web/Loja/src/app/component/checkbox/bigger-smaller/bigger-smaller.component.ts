import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bigger-smaller',
  template: `
  <div class= "form-group">
    <label>Order </label>
    <select class= "form-control" >
      <option value="0"> Maior para menor  </option >
      <option value="1"> Menor para Maior </option>
    </select>
  </div>
  `
})
export class BiggerSmallerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


}

