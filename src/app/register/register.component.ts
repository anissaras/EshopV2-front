import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../services/user.service';
import { IUserRegister } from '../Shared/interfacs/IUserRegister';
import { PasswordsMatchValidator } from '../Shared/Validators/password_match_validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!:  FormGroup;
  isSubmitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastrService: ToastrService
  ){}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['',Validators.required],
      adresse: ['',Validators.required],
    });
  }

//formControll
get fc(){
  return this.registerForm.controls;
}
//submit part
submit(){
  this.isSubmitted = true;
  if(this.registerForm.invalid){
    alert(`le compte existe dejà!`)
    return;
  }
    alert(
    `email: ${this.fc[`email`].value},
    password: ${this.fc[`password`].value},
    nom: ${this.fc[`nom`].value},
    prenom: ${this.fc[`prenom`].value},
    adresse: ${this.fc[`adresse`].value},
    Votre compte a été bien enregistré,`
   );
  //toast
  const user : IUserRegister = {
    email: this.fc['email'].value,
    password: this.fc['password'].value,
    nom: this.fc['nom'].value,
    prenom: this.fc['prenom'].value,
    adresse: this.fc['adresse'].value,
  };
  this.toastrService.success(
    `Dear ${user.nom}, your information has been saved`);
  this.router.navigateByUrl('/login');
}
}
