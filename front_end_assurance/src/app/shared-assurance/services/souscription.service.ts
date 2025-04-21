import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {URLS} from "../urls";
import {Observable} from "rxjs";
import {Compte} from "../model/compte.model";
import {Souscription} from "../model/souscription.model";
import {environment} from "../../../environments/environment";

@Injectable({
	providedIn: 'root'
})
export class SouscriptionService {
	apiUrl : string = environment.apiUrl
	constructor(private http: HttpClient) {
	}

	faireSouscription(souscription:Souscription | undefined): Observable<Souscription> {
		console.log("souscription : ....")
		return this.http.post<Souscription>(this.apiUrl+URLS.souscription, souscription);
	}

}
