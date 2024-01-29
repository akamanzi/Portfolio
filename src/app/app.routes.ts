import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NavComponent } from './nav/nav.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

export const routes: Routes = [
  { path: 'about', component:AboutComponent },
  { path: 'skills', component:SkillsComponent },
  { path: 'portfolio', component:PortfolioComponent },
];
