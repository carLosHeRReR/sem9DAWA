import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//importaciones de rutas externas
import { FormularioComponent } from './formulario/formulario.component';
import { CrudComponent } from './crud/crud.component';

const routes: Routes = [
  {path: '', component: CrudComponent},
  {path: 'CRUD', component: FormularioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
