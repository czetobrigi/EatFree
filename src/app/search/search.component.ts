import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl} from '@angular/forms'
//import { ValueConverter } from '@angular/compiler/src/render3/view/template';
//import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  //encapsulation: ViewEncapsulation.None
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  items = [];
  selected = [];

  constructor(){
  }

  ngOnInit(): void {
    this.items = [
      {id: 1, name: 'Glutén'},
      {id: 2, name: 'Laktóz, tej'},
      {id: 3, name: 'Puhatestű'},
      {id: 4, name: 'Szulfitok'},
      {id: 5, name: 'Szója'},
      {id: 6, name: 'IR barát'},
      {id: 7, name: 'Mogyoró'},
      {id: 8, name: 'Vegán'},
    ];
    this.selected = [
      {id: 1, name: 'Glutén'},
      {id: 8, name: 'Vegán'}
    ];
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  onSubmit(){
    
  }

}


  
  /*intOrSpec = {
    specialities: [
      {name:'Glutén', selected: false, id: 1},
      {name:'Tej', selected: false, id: 2},
      {name:'Tojás', selected: false, id: 3},
      {name:'Mogyoró', selected: false, id: 4},
      {name:'Puhatestűek', selected: false, id: 5},
    ]
  }

  get specialities(){
    return this.searchForm.get('specialities');
  }

  constructor(private formBuilder: FormBuilder){
    this.searchForm = this.formBuilder.group({
      specialities: this.formBuilder,
    });
  }*/