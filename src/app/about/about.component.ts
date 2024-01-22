import { Component } from '@angular/core';
import { AboutService } from "../about.service";
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  info: any
  constructor(private aboutService: AboutService) {
    
  }
  ngOnInit(){
    this.info = this.aboutService.getAboutInfo();
  }
}
