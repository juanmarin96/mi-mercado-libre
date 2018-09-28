import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ApiSettingsService {

    private apiUrl: string;
    constructor() { }

    getApiUrl(){
        return this.apiUrl = environment.apiHost;
    }
}
