import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl} from '@angular/forms'
//import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;

  constructor(){

  }

  items = [
    {id: 1, name: 'Python'},
    {id: 2, name: 'Node Js'},
    {id: 3, name: 'Java'},
    {id: 4, name: 'PHP', disabled: true},
    {id: 5, name: 'Django'},
    {id: 6, name: 'Angular'},
    {id: 7, name: 'Vue'},
    {id: 8, name: 'ReactJs'},
  ];
  selected = [
    {id: 2, name: 'Node Js'},
    {id: 8, name: 'ReactJs'}
  ];

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
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