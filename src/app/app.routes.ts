import { Routes } from '@angular/router';
import { TopnavbarComponent } from './folder/topnavbar/topnavbar.component';
import { SecondnavbarComponent } from './folder/secondnavbar/secondnavbar.component';
import { BodyComponent } from './folder/body/body.component';
export const routes: Routes = [
    { path: 'Topnavbar', component: TopnavbarComponent },
    { path: 'secondnavbar', component: SecondnavbarComponent },
    { path: 'body', component: BodyComponent },



];
