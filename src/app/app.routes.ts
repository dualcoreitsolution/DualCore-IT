import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Service } from './pages/service/service';
import { Technologies } from './pages/technologies/technologies';
import { Blog } from './pages/blog/blog';
import { Contact } from './pages/contact/contact';
import { Career } from './pages/career/career';
import { Project } from './pages/project/project';

export const routes: Routes = [
  { path: '', component: Home },
  { path: '**', redirectTo: '' },
  { path: 'about', component: About },
  { path: 'service', component: Service },
  { path: 'technologies', component: Technologies },
  { path: 'blog', component: Blog },
  { path: 'contact', component: Contact },
  { path: 'career', component: Career },
  { path: 'project', component: Project },



];
