import { async, TestBed } from '@angular/core/testing';
import { FeaturePhonesModule } from './feature-phones.module';

describe('FeaturePhonesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeaturePhonesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FeaturePhonesModule).toBeDefined();
  });
});
