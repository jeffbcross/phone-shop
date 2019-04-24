import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Phone {
  name: string;
  id: string;
}

@Component({
  selector: 'tuskphone-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhonesComponent implements OnInit {
  phones$: Observable<Phone[]>;
  constructor(http: HttpClient) {
    this.phones$ = http.get<Phone[]>('/api/phones');
  }

  ngOnInit() {
  }

}
