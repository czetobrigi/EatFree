import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  //Változók megadása a formhoz, submitted és success változók hamisak, amég az adatok validálása és a tényleges elküldés nem lesz sikeres
  messageForm: FormGroup;
  newPlaceForm: FormGroup;
  newProdForm: FormGroup;
  submitted = false;
  submittedNewProd = false;
  submittedNewPlace = false;
  success = false;

  constructor(private formBuilder: FormBuilder) { }

  //Név és üzenet megadása kötelező
  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required]
    });
    this.newPlaceForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      productName: ['', Validators.required],
      message: ['', Validators.required]
    });
    this.newProdForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      placeName: ['', Validators.required],
      message: ['', Validators.required]      
    });
  }

  //Ha minden rendben, akkor elküldhető az üzenet. Az onSubmit ezt vizsgálja.
  onSubmit(){
    this.submitted = true;
    this.submittedNewPlace = true;
    this.submittedNewProd = true;

    //ha a message form invalid, nem történik semmi, egyébként pedig a success változó true-ra állítódik.
    if(this.messageForm.invalid){
      return;
    }
    if(this.newPlaceForm.invalid){
      return;
    }
    if(this.newProdForm.invalid){
      return;
    }
    this.success = true;
  }

  //OnClick események megvalósítása a kettő gombra, azzal együtt, hogy melyik div osztály jelenjen meg.

}