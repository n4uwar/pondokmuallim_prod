import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
          loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          }
       ]
    },
     {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      }
      ]
    },

      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      }
      ]
        
      },
      {
         path: 'noti',
         children: [
           {
             path: '',
             loadChildren: () => import('../noti/noti.module').then(m => m.NotiPageModule)
       }
       ]
     },,
     {
        path: 'user',
        children: [
          {
            path: '',
            loadChildren: () => import('../user/user.module').then(m => m.UserPageModule)
      }
      ]
    },
       {
         path: '',
         redirectTo: '/tabs',
        pathMatch: 'full'
      }
    ]
  },
   {
    path: '',
     redirectTo: '/tabs',
    pathMatch: 'full'
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
