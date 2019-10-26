import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { DyfiauthGuard } from '../login/dyfiauth.guard';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        canActivate: [DyfiauthGuard],
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: 'tab2',
        canActivate: [DyfiauthGuard],
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          }
        ]
      },
      {
        path: 'addcommitte',
        canActivate: [DyfiauthGuard],
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/addcommittee/addcommittee.module').then(m => m.AddcommitteePageModule)
          }
        ]
      },
      {
        path: 'committee/:id',
        canActivate: [DyfiauthGuard],
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/committee/committee.module').then(m => m.CommitteePageModule)
          }
        ]
      },
      {
        path: 'editcommittee/:id',
        canActivate: [DyfiauthGuard],
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/editcommittee/editcommittee.module').then(m => m.EditcommitteePageModule)
          }
        ]
      },
      {
        path: 'committeeaddmember/:id',
        canActivate: [DyfiauthGuard],
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/committeeaddmember/committeeaddmember.module').then(m => m.CommitteeaddmemberPageModule)
          }
        ]
      },
      {
        path: 'tab3',
        canActivate: [DyfiauthGuard],
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
      },
      {
        path: 'addmember',
        canActivate: [DyfiauthGuard],
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/addmember/addmember.module').then(m => m.AddmemberPageModule)
          }
        ]
      },
      {
        path: 'tab4',
        canActivate: [DyfiauthGuard],
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab4/tab4.module').then(m => m.Tab4PageModule)
          }
        ]
      },
      {
        path: 'chat',
        canActivate: [DyfiauthGuard],
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab4/chat/chat.module').then(m => m.ChatPageModule)
          }
        ]
      },
      {
        path: 'tab5',
        canActivate: [DyfiauthGuard],
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab5/tab5.module').then(m => m.Tab5PageModule)
          }
        ]
      },
      {
        path: 'tab6',
        canActivate: [DyfiauthGuard],
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab6/tab6.module').then(m => m.Tab6PageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
