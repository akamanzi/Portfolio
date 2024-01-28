import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private technical_skills = [
    {name: "HTML", level: "Proficient"},
    {name: "CSS", level: "Proficient"},
    {name: "C#", level: "Beginner"},
    {name: "Javascript", level: "Proficient"},
    {name: "Python", level: "Proficient"},
    {name: "Angular", level: "Intermediate"}
]
  constructor() { }
  getSkills(){
    return this.technical_skills;
  }
}
