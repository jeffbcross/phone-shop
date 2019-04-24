import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap, map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

import { Phone } from '@tuskphone/data-access-interfaces';


@Component({
  selector: 'tuskphone-phone-detail',
  templateUrl: './phone-detail.component.html',
  styleUrls: ['./phone-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhoneDetailComponent {
  phone$ = this.activatedRoute.params.pipe(
    map(params => params.id),
    switchMap(id => this.http.get<Phone>(`/api/phones/${id}`))
  );
  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {}
}
