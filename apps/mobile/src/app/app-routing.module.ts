import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('@ionic-nx/ui').then((m) => m.InicioPageModule),
  },
  {
    path: 'alert',
    loadChildren: () => import('@ionic-nx/ui').then((m) => m.AlertPageModule),
  },
  {
    path: 'action-sheet',
    loadChildren: () => import('@ionic-nx/ui').then((m) => m.ActionSheetPageModule),
  },
  {
    path: 'avatar',
    loadChildren: () => import('@ionic-nx/ui').then((m) => m.AvatarPageModule),
  },
  {
    path: 'botones',
    loadChildren: () => import('@ionic-nx/ui').then((m) => m.BotonesPageModule),
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
