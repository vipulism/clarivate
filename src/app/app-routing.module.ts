import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { DashboardComponent } from './modules/dashboard/dashbord.component';

const routes: Routes = [
  { path:'',
    component:LayoutComponent,
    children:[
        {
          path:'',
          loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
        },
        {
          path: '', 
          loadChildren: () => import('./modules/Item-list/item-list.module').then(m => m.ItemListModule)
        },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
