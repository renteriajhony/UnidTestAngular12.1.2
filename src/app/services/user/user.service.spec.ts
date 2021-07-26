/* tslint:disable:no-unused-variable */


import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { UserService } from './user.service';
import { of, throwError } from 'rxjs';

describe('Service: User', async () => {

  let httpClientSpy: { get: jasmine.Spy };
  let userService: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService, HttpClient]
    });

    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    userService = new UserService(httpClientSpy as any);

  });

  it('should ...', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  describe('Metodos de tutorial', async () => {

    it('Should getUsers() return data users', async () => {
      const dataUser = [
        {
          "id": 1,
          "name": "Leanne Graham",
          "username": "Bret",
          "email": "Sincere@april.biz",
          "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
              "lat": "-37.3159",
              "lng": "81.1496"
            }
          },
          "phone": "1-770-736-8031 x56442",
          "website": "hildegard.org",
          "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
          }
        }
      ];

      httpClientSpy.get.and.returnValue(of(dataUser));

      userService.getUsers().subscribe(user => {
        expect(user[0]['username']).toEqual('Bret');
      });



    });


    it('Should reteurn expected users (HttpClient called once)', async () => {
      const expectedUsers = [
        { id: 1, name: 'A' },
        { id: 2, name: 'B' },
      ];

      httpClientSpy.get.and.returnValue(of(expectedUsers));
      userService.getUsersTest();

      expect(userService.users.length).toBe(2);
      expect(userService.users[0]['name']).toEqual('A');
      expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');

    });

    it('Should return an error when the server returns a 404', async () => {
      const errorRespose = new HttpErrorResponse({
        error: 'User test 404 error',
        status: 404,
        statusText: 'Not found'
      });

      httpClientSpy.get.and.returnValue(throwError(errorRespose));

      userService.getUsersTest();
      expect(userService.users).toBeNull;

    });

  });

});
