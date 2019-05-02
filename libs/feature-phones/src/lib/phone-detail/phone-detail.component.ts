import { Component, ChangeDetectionStrategy, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap, map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

import { Phone } from '@tuskphone/data-access-interfaces';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'tuskphone-phone-detail',
  templateUrl: './phone-detail.component.html',
  styleUrls: ['./phone-detail.component.scss']
})
export class PhoneDetailComponent {
  phone$ = this.activatedRoute.params.pipe(
    map(params => params.id),
    switchMap(id => this.http.get<Phone>(`/api/phones/${id}`))
  );
  isBrowser: boolean;

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    @Inject(PLATFORM_ID) private platformId: any
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }
}
