import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [NgbNavModule, CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  navItems = {
    logo_name : "CREATIVE CV",
    menu_items: ["ABOUT", "SKILLS", "PORTFOLIO", "EXPERINCE", "CONTACT"]
  }
}
