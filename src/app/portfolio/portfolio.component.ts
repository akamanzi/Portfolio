import { Component, ViewChild, TemplateRef, inject, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})

export class PortfolioComponent {
  project_info = [
    {name: "WordCount", description: "A python clone for unix wc"},
    {name: "Udagram", description: "A travel website deploy on AWS"},
    {name: "Technical Blog", description: "A technical blog that features all things software development"}
  ]

  @Input() project_details: any;
  showDetails: boolean = false
  loadProjectModal( project_obj: any) {
    this.project_details = project_obj;
    this.showDetails = true;
  }
  
}
