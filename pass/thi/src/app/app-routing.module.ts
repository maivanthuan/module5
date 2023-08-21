import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SoTietKiemComponent} from './soTietKiem/so-tiet-kiem/so-tiet-kiem.component';
import {SoTietKiemEditComponent} from './soTietKiem/so-tiet-kiem-edit/so-tiet-kiem-edit.component';


const routes: Routes = [
  {path: 'nganhang/list', component: SoTietKiemComponent},
  {path: 'nganhang/edit/:id', component: SoTietKiemEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
