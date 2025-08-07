import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WuduComponent } from './wudu/wudu.component';
import { FajrComponent } from './fajr/fajr.component';
import { ZuhrComponent } from './zuhr/zuhr.component';
import { AsrComponent } from './asr/asr.component';
import { MaghribComponent } from './maghrib/maghrib.component';
import { IshaComponent } from './isha/isha.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { ExtrasComponent } from './extras/extras.component';

const routes: Routes = [
  {path:"wudu", component:WuduComponent},
  {path:"salah/fajr",component:FajrComponent},
  {path:"salah/zuhr",component:ZuhrComponent},
  {path:"salah/asr",component:AsrComponent},
  {path:"salah/maghrib", component:MaghribComponent},
  {path:"salah/isha", component:IshaComponent},
  {path:"", redirectTo:"/home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"extras", component:ExtrasComponent},
  {path:"**", component:ErrorComponent, pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
