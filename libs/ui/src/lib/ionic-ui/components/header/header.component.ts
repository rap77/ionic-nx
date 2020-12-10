import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'rp-ui-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() titulo

  ngOnInit(): void {}
}
