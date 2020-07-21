/**
 * @author Parth Parmar <parth.parmar@default.ca>
 *
 */

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';

import { GlobalErrorService } from '@core/services/global-error.service';

import { ApiResponseModel } from '@core/model/api-response.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private _httpClient: HttpClient, private _globalErrorService: GlobalErrorService) {}

  getAllProducts(params: any): Observable<ApiResponseModel> {
    return this._httpClient
      .get<ApiResponseModel>(`${this._getUrl()}`, { params })
      .pipe(catchError(this._globalErrorService.handleHttepResponseError));
  }

  getAllCategories(): Observable<ApiResponseModel> {
    return this._httpClient
      .get<ApiResponseModel>(`${environment.serverUrl}categories/`)
      .pipe(catchError(this._globalErrorService.handleHttepResponseError));
  }

  getProductDetails(id: string): Observable<ApiResponseModel> {
    return this._httpClient
      .get<ApiResponseModel>(`${this._getUrl()}/${id}`)
      .pipe(catchError(this._globalErrorService.handleHttepResponseError));
  }

  private _getUrl() {
    return `${environment.serverUrl}products/`;
  }
}

// REF: https://www.lipsum.com/
// REF: https://walmart.ca
