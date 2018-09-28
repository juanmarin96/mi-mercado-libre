import { Injectable } from '@angular/core';
import { ApiSettingsService } from '../../shared/api-settings.service';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { tap, catchError, map } from 'rxjs/operators';
import { MessageService } from '../../shared/message.service';
import { Product } from '../model/product';

@Injectable()
export class ProductListService {
    headers: HttpHeaders;
    apiUrl: string;
    constructor(private apiSettingsService: ApiSettingsService, private http: HttpClient, private messageService: MessageService) {
        this.apiUrl = this.apiSettingsService.getApiUrl();
     }

    getProduct(productName: string): Observable<Product[]> {
        this.asignHeadersOptions()
        const url = this.apiUrl + "/search";
        const params = new HttpParams({fromString: 'q='+productName});
        return this.http.get<any>(url, { headers: this.headers, params: params })
            .pipe(
                tap(heroes => this.log('fetched all')),
                map((data) => data.results.map(x => {return new Product(x.id, x.title, x.price, x.thumbnail)})),
                catchError(this.handleError('getAll', []))
            );
    }

    private asignHeadersOptions() {
        this.headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });
    }

    private log(message: string) {
        this.messageService.add(`HeroService: ${message}`);
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}
