import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { MapComponent } from './views/map/map.component';
import { NewMapComponent } from './views/new-map/new-map.component';
import { NewProjectComponent } from './views/new-project/new-project.component';
import { ProjectComponent } from './views/project/project.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'new-project',component:NewProjectComponent},
  {path:'new-map',component:NewMapComponent},
  {path:'project/:projectId',component:ProjectComponent},
  {path:'map/:mapId',component:MapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
