import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bigger-smaller',
  template: `
  <div class="form-group row">
    <label id="title" class="col-sm-2 col-form-label">Ordenar: </label>
    <div class="col-sm-10">
      <select class= "form-control" >
      <option value="0"> Maior para menor  </option >
      <option value="1"> Menor para Maior </option>
      </select>
    </div>
  </div>
  `
})
export class BiggerSmallerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


}

