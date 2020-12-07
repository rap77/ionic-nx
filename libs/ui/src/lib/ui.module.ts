import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Route } from '@angular/router'
import { PrimeNgModule } from './prime-ng/prime-ng.module'
import { IonicUiModule } from './ionic-ui/ionic-ui.module'

export const uiRoutes: Route[] = []

@NgModule({
  imports: [CommonModule, RouterModule, IonicUiModule, PrimeNgModule],
  exports: [IonicUiModule, PrimeNgModule],
})
export class UiModule {}
