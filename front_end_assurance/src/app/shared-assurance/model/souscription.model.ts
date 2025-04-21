import {CategorieVehicule} from "./categorieVehicule.model";

/**
 * Classe representant les données du requérent.
 * */
export class Souscription{
	nom: string | undefined;
	prenom: string | undefined;
	telephone: string | undefined;
	email: string | undefined;
	numeroIdentite: number | undefined;
	adresse: string | undefined;
	ville: string | undefined;
	datePremiereCirculation : Date | string |undefined ;
	numeroImmatriculation: number | undefined;
	couleur: string | undefined;
	nbPortes :number | undefined;
	nbSieges :number | undefined;
	categorieId : number | undefined;

	constructor(
		nom?: string,
		prenom?: string,
		genre?: string
	) {
	}
}
