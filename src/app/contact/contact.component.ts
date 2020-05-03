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
  successProd = false;
  successPlace = false;
  isShow=false;
  isShowProd = false;
  isShowPlace = false;

  constructor(private formBuilder: FormBuilder) { }

  //Validálás, hogy hiányzik-e bármi
  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      message: ['', Validators.required]
    });
    this.newProdForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      productName: ['', Validators.required],
      message: ['', Validators.required]      
    });
    this.newPlaceForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      placeName: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  //TODO kódduplikáció elkerülésére, valami szebb megoldás... if-ben vizsgálat?
  //Ha minden rendben a Kapcsolat formon, akkor elküldhető az üzenet. Az onSubmit ezt vizsgálja.
  onSubmit(){
    //A form küldés gombjának megnyomására beállítom a submitted változó értékét true-ra, ami alapján lemegy a validáció, hogy minden rendben van-e
    this.submitted = true;

    //ha a message form invalid, nem történik semmi, egyébként pedig a success változó true-ra állítódik.
    if(this.messageForm.invalid){
      return;
    } this.success = true;
      //contactButton disabled-re állításának problémája.

  }

  onSubmitProduct(){
    this.submittedNewProd = true;

    if(this.newProdForm.invalid){
      return;
    } this.successProd = true;
  }

  onSubmitPlace(){
    this.submittedNewPlace = true;

    if(this.newPlaceForm.invalid){
      return;
    } this.successPlace = true;
  }

   //OnClick események megvalósítása a kettő gombra, azzal együtt, hogy melyik form jelenjen meg. Későbbi terv, minden form automatikus kikapcsolása, ha épp nem azt választotta a felhasználó.
  contactDisplay(){
    this.isShow = !this.isShow;
  }

 
  productDisplay(){
    this.isShowProd = !this.isShowProd;
  }

  placeDisplay(){
    this.isShowPlace = !this.isShowPlace;
  }

  

}