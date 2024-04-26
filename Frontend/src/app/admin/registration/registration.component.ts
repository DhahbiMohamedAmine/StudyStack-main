import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser'; 
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public signForm!: FormGroup;
  password!:any;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}
  resid: any;

  ngOnInit(): void {
   
    this.resid = 0;
  

    this.signForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      mobile: ['', Validators.required],
      type: "professeur",
      id: this.resid.toString()
    });
  

    this.calculId().subscribe(newId => {
      console.log("new", newId);
      

      this.signForm.patchValue({
        id: newId.toString()
      });
    });
  }
  
  calculId = (): Observable<number> => {
    return this.http.get<any>('http://localhost:3000/users').pipe(
      map((users: any[]) => {
        const lastUser = users.length > 0 ? users[users.length - 1] : null;
        const lastId = lastUser ? lastUser.id : 0;
        return parseInt(lastId) + 1;
      })
    );
  };
  
  

  signUp = () => {
    if (this.signForm.valid) {
      this.http.post<any>('http://localhost:3000/users', this.signForm.value)
        .subscribe((res: any) => {
          alert('Registration completed successfully');
          this.sendPassword(this.signForm.value.email,this.signForm.value.password)
          this.signForm.reset();
         
         
        }, (error) => {
          console.error('Error during signup:', error);
          // Handle error on the client side if needed
        });
    } else {
      alert('Please fix the errors in the form before submitting.');
    }
    
   
  };
  sendPassword = (mail:any,pw:any) => {
          
    const email =mail;
  
  
            this.password = pw;
            const templateParams = {
              to_email: email,
              subject: 'Accés à votre compte',
              body: this.password,
              type:"Professeur"
            };
            console.log(templateParams);
            emailjs.send('service_mgwkd3n', 'template_uh4a0jq', templateParams, "7Dn6x4ZJ1tWizWNrI")
              .then((response: any) => {
                console.log('E-mail envoyé avec succès:', response);
                alert('E-mail envoyé avec succès.');
                
              })

  };
  
  
}