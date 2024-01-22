import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [NgbNavModule, CommonModule, RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  navItems = {
    logo_name : "CREATIVE CV",
    menu_items: ["ABOUT", "SKILLS", "PORTFOLIO", "EXPERINCE", "CONTACT"],
  }
  banner_content = {
    author_name: "Arnold Kamanzi",
    summary : "A passionate full stack developer skilled in both backend, frontend and API development."
  }
}
