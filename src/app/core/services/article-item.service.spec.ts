import { TestBed } from '@angular/core/testing';

import { ArticleItemService } from './article-item.service';

describe('ArticleItemService', () => {
  let service: ArticleItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
