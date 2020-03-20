import { TestBed } from '@angular/core/testing';

import { DataBackupService } from './data-backup.service';

describe('DataBackupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataBackupService = TestBed.get(DataBackupService);
    expect(service).toBeTruthy();
  });
});
