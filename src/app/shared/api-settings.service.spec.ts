import { TestBed } from '@angular/core/testing';

import { ApiSettingsService } from './api-settings.service';

describe('ApiSettingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiSettingsService = TestBed.get(ApiSettingsService);
    expect(service).toBeTruthy();
  });
});
