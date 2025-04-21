import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {URLS} from "../urls";
import {Observable} from "rxjs";
import {Compte} from "../model/compte.model";
import {CategorieVehicule} from "../model/categorieVehicule.model";
import {environment} from "../../../environments/environment";

@Injectable({
	providedIn: 'root'
})
export class CategorieVehiculeService {
	apiUrl : string = environment.apiUrl
	constructor(private http: HttpClient) {
	}

	/**
	 * Récupére les categorie de vehicule
	 *
	 * @param CategorieVehicule objet contenant les categorie de vehicule
	 */
	listerCategorieVehicule(): Observable<CategorieVehicule[]> {
		return this.http.get<CategorieVehicule[]>(this.apiUrl+URLS.listerCategorieVehicule)
	}
}
