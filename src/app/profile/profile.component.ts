import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, Form } from '@angular/forms';

import { UserService, AuthenticationService, AlertService } from '../_services';
//import { User } from '../_models/user';
import { first } from 'rxjs/operators';


@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder, 
        private router: Router,
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private alertService: AlertService
        ){
            //meg kell vizsgálni, hogy a felhasználó be van e már lépve, mert ha igen, akkor a kezdőoldal töltődjön be
            /*if(this.authenticationService.currentUserValue){
                this.router.navigate(['/home']);
            }*/
        }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            username: ['', Validators.required],
            password: ['', Validators.required],
        });
        }

    get f() { return this.registerForm.controls; }
        
    onSubmit(){
        //rákattintott a felhasználó a Regisztráció gombra
        this.submitted = true;

        //invalid űrlap esetén itt meg is állunk
        if(this.registerForm.invalid){
            return;
        }

        this.loading = true;
        //ha azonban sikeres az űrlap kitöltése, akkor megtörténik afelhasználó regisztrációja
        /*this.userService.register(this.registerForm.value).pipe(first()).subscribe( data => {
            
        },*/
        this.alertService.success('Sikeres előregisztráció! :)', true);
        this.router.navigate(['/search']);
        //ha valamiért mégsem sikeres a regisztrációs folyamat, hibaüzenetet kell küldeni a felhasználónak
        /*error => {
            this.alertService.error(error);
            this.loading = false;
        });*/
    }
}
