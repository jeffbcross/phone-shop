import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'tuskphone-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhonesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
