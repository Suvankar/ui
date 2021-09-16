import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, Subject, throwError} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import {FileDetails} from '../../models/file';
import {FileCount, FileInformation, FileOtherDetails} from '../../models/fileOtherdetails';


@Injectable({
  providedIn: 'root'
})
export class Lookupservice {

  filesUrl = 'http://localhost:8888/files';
  baseUrl = 'http://localhost:8888/';


  constructor(private http: HttpClient) { }

  getAllFiles( ){
    return this.http.get<FileDetails[]>(this.filesUrl ).pipe(
      catchError(this.handleError)
    );
  }

  handleError(){
    return null;
  }
  public postOtherDetails(uuid: string, filedetails: FileOtherDetails) {
    const HTTPOptions: object = {

      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),

      responseType: 'json'
    };
    return this.http.post<FileOtherDetails>(this.filesUrl + '/' + uuid + '/details', JSON.stringify(filedetails)
      , HTTPOptions);
  }

  public postJson2CSV(jsonString: string) {
    const HTTPOptions: object = {

      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),

      responseType: 'json'
    };
    return this.http.post<any>(this.baseUrl + '/conversion/json2csv' , JSON.stringify(jsonString)
      , HTTPOptions);
  }

  public getOtherDetails(uuid: string) {
    return this.http.get<FileOtherDetails>(this.filesUrl + '/' + uuid + '/details').pipe(
      catchError(this.handleError)
    );
  }

  public getFileDetails(uuid: string) {
    return this.http.get<FileInformation>(this.filesUrl + '/' + uuid + '/information').pipe(
      catchError(this.handleError)
    );
  }

  public getFileCont(userId: string) {
    return this.http.get<FileCount>('http://localhost:8888' + '/user/'+userId+'/files/counts').pipe(
      catchError(this.handleError)
    );
  }

}
