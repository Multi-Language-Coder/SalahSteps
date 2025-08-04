import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WuduComponent } from './wudu/wudu.component';
import { FajrComponent } from './fajr/fajr.component';

const routes: Routes = [
  {path:"wudu", component:WuduComponent},
  {path:"salah/fajr",component:FajrComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
