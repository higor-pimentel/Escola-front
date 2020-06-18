import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { NotFoundComponent } from './errors/not-found/not-found.component';
import { FormComponent } from './people/form/form.component';

const routes: Routes = [
    {path: 'home', loadChildren: () => import('../app/people/people.module').then(m => m.PeopleModule)},
    {path: '**', component: NotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}