import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl} from '@angular/forms'
import { NgSelectConfig } from '@ng-select/ng-select';
//import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  items = [];
  selected = [];

  constructor(private config: NgSelectConfig){
    this.config.notFoundText = 'Custom not found';
    this.config.appendTo = 'body';
    this.config.bindValue = 'value';
  }

  ngOnInit(): void {
    this.items = [
      {id: 1, name: 'Glutén', value: 'Gluten'},
      {id: 2, name: 'Rákfélék', value: 'Crustaceans'},
      {id: 3, name: 'Tojás', value: 'Eggs'},
      {id: 4, name: 'Haj', value: 'Fish'},
      {id: 5, name: 'Földimogyoró', value:'Peanuts'},
      {id: 6, name: 'Laktóz, tej', value:'Lactose, milk'},
      {id: 7, name: 'Szója', value:'Soya'},
      {id: 8, name: 'Mogyoró', value:'Tree nuts'},
      {id: 9, name: 'Szulfitok', value:'Sulphits'},
      {id: 10, name: 'Mustár', value:'Mustard'},
      {id: 11, name: 'Zeller', value:'Celery'},
      {id: 12, name: 'Szezámmag', value:'Sesame'},
      {id: 13, name: 'Kén-dioxid', value:'Lupin'},
      {id: 14, name: 'Puhatestűek', value:'Mollucs'},
      {id: 30, name: 'Vegetáriánus', value:'Vegaterian'},
      {id: 31, name: 'Vegán', value:'Vegan'},
      {id: 32, name: 'Egészséges', value:'Healthy'},
      {id: 33, name: 'Paleo', value:'Paleo'},
      {id: 34, name: 'Cukormentes', value:'SugarFree'},
    ];
    /*this.selected = [
      {id: 1, name: 'Glutén'},
      {id: 8, name: 'Vegán'}
    ];*/
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