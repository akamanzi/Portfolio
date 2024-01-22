import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  private info = {
    about_me: "Software engineer, proficient in backend and API development using both C#, .Net framework and Flask and Python. Passionate about using technology to solve real-world problems and helping organizations to deliver values to their customers.",
    basic_info: {
      age: "30",
      email: "kamstan6@gmail.com",
      phone: "613-700-3000",
      address: "Ottawa, Canada",
      languages: "English"
    }
  }
  constructor() { }
  getAboutInfo(){
    return this.info
  }
}
