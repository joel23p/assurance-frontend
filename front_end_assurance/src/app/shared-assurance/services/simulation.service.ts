import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {URLS} from "../urls";
import {Observable} from "rxjs";
import {Compte} from "../model/compte.model";
import {environment} from "../../../environments/environment";

@Injectable({
	providedIn: 'root'
})
export class SimulationService {
	apiUrL: string = environment.apiUrl
	constructor(private http: HttpClient) {
	}

	/**
	 * Créer une simulation
	 * @Param simulation
	 * */
	simuler(simulation : any) : Observable<any> {
		return this.http.post<any>(this.apiUrL + URLS.simulation, simulation)
	}

}
