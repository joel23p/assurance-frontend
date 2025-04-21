import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {URLS} from "../urls";
import {Observable} from "rxjs";
import {Compte} from "../model/compte.model";
import {environment} from "../../../environments/environment";

@Injectable({
	providedIn: 'root'
})
export class ProduitAssuranceService {
	apiUrl : string = environment.apiUrl
	constructor(private http: HttpClient) {
	}


	/**
	 * Récupérer la liste des produits de services
	 *
	 * @param aucun
	 */
listerProduitsAssurance() : Observable<any> {
	  return this.http.get<any>(this.apiUrl+ URLS.listerProducts)
	}
}
