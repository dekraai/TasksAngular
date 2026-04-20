import { TestBed } from '@angular/core/testing';

import { TasklogService } from './tasklog.service';

describe('TasklogService', () => {
  let service: TasklogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TasklogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
