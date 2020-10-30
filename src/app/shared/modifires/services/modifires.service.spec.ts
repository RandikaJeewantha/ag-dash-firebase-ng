import { TestBed } from '@angular/core/testing';

import { ModifiresService } from './modifires.service';

describe('ModifiresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModifiresService = TestBed.get(ModifiresService);
    expect(service).toBeTruthy();
  });
});
