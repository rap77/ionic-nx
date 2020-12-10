import { Component } from '@angular/core'

@Component({
  selector: 'ionic-nx-root',
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent {
  title = 'chat'

  hello(titulo: string) {
    console.log('Hola desde Aqui! ' + titulo)
  }
}
