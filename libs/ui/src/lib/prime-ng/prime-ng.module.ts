import { NgModule } from '@angular/core'
import { ButtonModule } from 'primeng/button'

const MODULES = [ButtonModule]

@NgModule({
  declarations: [],
  imports: [...MODULES],
  exports: [...MODULES],
})
export class PrimeNgModule {}
