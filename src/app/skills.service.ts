import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private technical_skills = [
    {name: "HTML", percentage: "100%"},
    {name: "CSS", percentage: "85%"},
    {name: "C#", percentage: "85%"},
    {name: "Javascript", percentage: "70%"},
    {name: "Python", percentage: "90%"},
    {name: "Angular", percentage: "65%"
  }
]
  constructor() { }
  getSkills(){
    return this.technical_skills;
  }
}
