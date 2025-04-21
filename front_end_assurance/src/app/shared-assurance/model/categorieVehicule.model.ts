/**
 * Classe representant les données du requérent.
 * */
export class CategorieVehicule{
	id : bigint | undefined;
	libelle: string | undefined;
	description: string | undefined;

	constructor(
		nomProduit?: string,
		garantiesIncluses?: string,
	) {
	}
}
