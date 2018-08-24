import { TestBed, inject, async } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { HeroService } from './hero.service';
import {MessageService} from './message.service';

describe('HeroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroService, MessageService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should be created', async(inject([HeroService, MessageService, HttpTestingController], (service: HeroService, httpClient: HttpTestingController, messageService: MessageService) => {
    expect(service).toBeTruthy();
  })));
});
