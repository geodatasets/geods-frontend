import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { MainNavbarComponent } from './components/main-navbar/main-navbar.component';
import { PreviewComponent } from './views/preview/preview.component';
import { NewMapComponent } from './views/new-map/new-map.component';
import { MapComponent } from './components/map/map.component';
import { MapComponent  as MapViewComponent} from './views/map/map.component';
import { NewProjectComponent } from './views/new-project/new-project.component';
import { ProjectComponent } from './views/project/project.component';
import { ListProjectsComponent } from './components/list-projects/list-projects.component';
import { CardProjectComponent } from './components/card-project/card-project.component';
import { ListGeodatasetsComponent } from './components/list-geodatasets/list-geodatasets.component';
import { ListMapsComponent } from './components/list-maps/list-maps.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainNavbarComponent,
    PreviewComponent,
    NewMapComponent,
    MapComponent,
    MapViewComponent,
    NewProjectComponent,
    ProjectComponent,
    ListProjectsComponent,
    CardProjectComponent,
    ListGeodatasetsComponent,
    ListMapsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
