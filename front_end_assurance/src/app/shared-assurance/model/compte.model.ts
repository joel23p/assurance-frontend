import {Requerant} from "./requerant.model";

export class Compte {
	nomUtilisateur: string;
	requerant: Requerant;

	constructor(nomUtilisateur: string, requerant: Requerant) {
		this.nomUtilisateur = nomUtilisateur;
		this.requerant = requerant;
	}
}
