import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'rp-ui-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  componentes: Componente[] = [
    {
      icon: 'american-football',
      name: 'Action Sheet',
      redirectTo: '/action-sheet',
    },
    {
      icon: 'newspaper',
      name: 'Alert',
      redirectTo: '/alert',
    },
    {
      icon: 'beaker',
      name: 'Avatar',
      redirectTo: '/avatar',
    },
    {
      icon: 'radio-button-on',
      name: 'Botones y Routers',
      redirectTo: '/botones',
    },
  ]

  constructor() {}

  ngOnInit() {}
}

interface Componente {
  icon: string
  name: string
  redirectTo: string
}
