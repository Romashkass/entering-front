import { TestBed } from '@angular/core/testing';

import { AlgorithmService } from './algorithm.service';
import { provideHttpClient } from '@angular/common/http';

describe('AlgoService', () => {
  let service: AlgorithmService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(),]
    });
    service = TestBed.inject(AlgorithmService);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('ascending order', (done) => {
    let inputStr = '1 2 3';
    let expected = '2';
    service.useAlgorithm(inputStr).subscribe(
      (response) => {
        // toString() тут поскольку происходит какая-то js-магия и возвращаемое string значение 
        // внезапно превращается в number для сравнения со строкой
        expect(response.toString()).toEqual(expected);
        done();
      }
    )
  });

  it('random order', (done) => {
    let inputStr = '3 1 2';
    let expected = '2';
    service.useAlgorithm(inputStr).subscribe(
      (response) => {
        // toString() тут поскольку происходит какая-то js-магия и возвращаемое string значение 
        // внезапно превращается в number для сравнения со строкой
        expect(response.toString()).toBe(expected);
        done();
      }
    )
  });

  it('too many arguments', (done) => {
    let inputStr = '3 1 2 5';
    let expected = 'Should be exactly 3 arguments';
    service.useAlgorithm(inputStr).subscribe(
      (response) => {
      },
      (error) => {
        expect(error.error).toBe(expected);
        done();
      }
    )
  });

  it('too few arguments', (done) => {
    let inputStr = '3 1';
    let expected = 'Should be exactly 3 arguments';
    service.useAlgorithm(inputStr).subscribe(
      (response) => {
      },
      (error) => {
        expect(error.error).toBe(expected);
        done();
      }
    )
  });

  it('not numbers', (done) => {
    let inputStr = 'a s d';
    let expected = 'Wrong numbers';
    service.useAlgorithm(inputStr).subscribe(
      (response) => {
      },
      (error) => {
        expect(error.error).toBe(expected);
        done();
      }
    )
  });
});
