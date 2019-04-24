import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Phone } from '@tuskphone/data-access-interfaces';

@Component({
  selector: 'tuskphone-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhonesComponent {
  phones$: Observable<Phone[]>;
  constructor(http: HttpClient) {
    this.phones$ = http.get<Phone[]>('/api/phones');
  }
}
