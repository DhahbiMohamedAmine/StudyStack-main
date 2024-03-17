import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  public signForm!: FormGroup;

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
      type: "user",
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
    return this.http.get<any>('http://localhost:3000/signup').pipe(
      map((users: any[]) => {
        const lastUser = users.length > 0 ? users[users.length - 1] : null;
        const lastId = lastUser ? lastUser.id : 0;
        return parseInt(lastId) + 1;
      })
    );
  };
  
  

  signUp = () => {
    if (this.signForm.valid) {
      this.http.post<any>('http://localhost:3000/signup', this.signForm.value)
        .subscribe((res: any) => {
          alert('Inscription réussie');
          this.signForm.reset();
          this.router.navigate(['login']);
        }, (error) => {
          console.error('Error during signup:', error);
        
        });
    } else {
      alert('Veuillez corriger les erreurs dans le formulaire avant de soumettre.');
    }
  };
  
}