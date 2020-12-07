import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { InicioPageModule } from './pages/inicio/inicio.module'
import { AlertPageModule } from './pages/alert/alert.module'
import { ActionSheetPageModule } from './pages/action-sheet/action-sheet.module'
import { ComponentsModule } from './components/components.module'
import { IonicModule } from '@ionic/angular'

const MODULES = [
  CommonModule,
  IonicModule,
  InicioPageModule,
  AlertPageModule,
  ActionSheetPageModule,
  ComponentsModule,
]

@NgModule({
  declarations: [],
  imports: [...MODULES],
  exports: [...MODULES],
})
export class IonicUiModule {}
