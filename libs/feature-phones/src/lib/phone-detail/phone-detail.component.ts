import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'tuskphone-phone-detail',
  templateUrl: './phone-detail.component.html',
  styleUrls: ['./phone-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhoneDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
