import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../document.service';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {
  documents!: any[];

  constructor(private documentService: DocumentService) { }
  ngOnInit(): void {
    this.documentService.getDocuments().subscribe(data => {
      this.documents = data; 
    });
  }
}