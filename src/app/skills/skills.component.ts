import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsService } from "../skills.service";
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills: any
  constructor(private skillService: SkillsService){

  }

  ngOnInit(){
    this.skills = this.skillService.getSkills();
  }
}
