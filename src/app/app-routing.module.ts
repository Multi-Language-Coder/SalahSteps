import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WuduComponent } from './wudu/wudu.component';

const routes: Routes = [
  {path:"wudu", component:WuduComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
