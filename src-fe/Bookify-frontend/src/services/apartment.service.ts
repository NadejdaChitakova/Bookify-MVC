import { SearchApartmentRequest } from './../types/searchApartmentRequest';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Apartment } from '../types/apartment';
import { Apartments } from '../types/apartments';
import { HttpHeaders } from '@angular/common/http';
import { UpdateApartmentRequest } from '../types/UpdateApartmentRequest';

@Injectable({
  providedIn: 'root'
})

export class ApartmentService {
  // headers= new HttpHeaders()
  // .set('content-type', 'application/json')
  // .set('Access-Control-Allow-Origin', '*');

  constructor(private http: HttpClient) { }

  getApartments(id:string) :Observable<Apartment> {
    const url = "http://localhost:58314/api/Apartments/GetApartmentById?id="+id;

     return this.http.get<Apartment>(url);
  }

  getAll(request: SearchApartmentRequest ) :Observable<Apartment[]> {
    const url = "http://localhost:58314/api/Apartments/GetAll";

     return this.http.post<Apartment[]>(url, request);
  }

  uploadImage(formData: FormData) : Observable<string[]>{
    const url = "http://localhost:58314/api/ApartmentImage/UploadPhoto";

    console.log("posting data")
    return this.http.post<string[]>(url, formData);
  }

  update(request: UpdateApartmentRequest) : Observable<any> {
    const url = "http://localhost:58314/api/Apartments/Update";

     return this.http.post<any>(url, request);
  }

  downloadApartmentImages(apartmentId: string) : Observable<any> {
    const url = "http://localhost:58314/api/ApartmentImage/GetApartmentImage?imageId="+apartmentId;

     return this.http.get<any>(url);
  }

  deletePhoto(apartmentImageId: string) :Observable<any>{
    const url = "http://localhost:58314/api/ApartmentImage/Delete?id="+apartmentImageId;
    console.log("delete method")
    return this.http.delete<any>(url);
  }

}
