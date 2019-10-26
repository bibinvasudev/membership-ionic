import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import appconfig from '../app.config';
import { Observable } from 'rxjs';
import { Member } from '../tab3/Member';
import { MyDetail } from './MyDetail';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(
        private http: HttpClient
    ) { }

    membersAddedByMe(loggedInUserId: string): Observable<Member[]> {
        return this.http.get<Member[]>(`${appconfig.apidomain}/members?created_by=${loggedInUserId}`)
    }

    bannerImage(): Observable<{ data: string }> {
        return this.http.get<{ data: string }>(`${appconfig.apidomain}/config/banner_image`)
    }

    getMyDetail(): Observable<MyDetail> {
        return this.http.get<MyDetail>(`${appconfig.apidomain}/members/me`)
    }
}