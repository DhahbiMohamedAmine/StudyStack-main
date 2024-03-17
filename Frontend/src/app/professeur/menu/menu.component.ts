import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Matiere } from 'src/app/interfaces/matiere';
import { EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  public lesmatieres: Array<Matiere> = [];

  @Output() matiereSelected: EventEmitter<Matiere> = new EventEmitter();
  public sousMatiere: Array<String> =['Flux','Courses_Link','Presence','Chat'];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<{ matiere: Array<Matiere> }>('assets/db.json').subscribe(data => {
      this.lesmatieres = data.matiere;
    });
  }

  onMatiereSelected(matiere: Matiere): void {
    this.matiereSelected.emit(matiere);
  }
  
}