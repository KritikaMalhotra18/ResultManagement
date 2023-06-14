import { TestBed } from '@angular/core/testing';

import { StudentApiConnectionService } from './student-api-connection.service';

describe('StudentApiConnectionService', () => {
  let service: StudentApiConnectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentApiConnectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
