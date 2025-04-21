import {Component, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Message } from 'primeng/api';
import {CategorieVehiculeService} from "../../shared-assurance/services/categorieVehicule.service";
import {Router} from "@angular/router";
import {RecaputilatifComponent} from "../recaputilatif/recaputilatif.component";
import {CategorieVehicule} from "../../shared-assurance/model/categorieVehicule.model";
import {MessageService} from "primeng/api";
import {createMask} from "@ngneat/input-mask";

@Component({
	selector: 'app-souscripition',
	templateUrl: './souscripition.component.html',
	styleUrls: ['./souscripition.component.scss']
})
export class SouscripitionComponent implements OnInit {
	@ViewChild(RecaputilatifComponent) recaputilatifComponent: RecaputilatifComponent | undefined;

	showRecap = false;
	ouvrirRecaputilatif: boolean = false;
	formulaireSouscription!: FormGroup;
	optionsCategorie: any[] = [];
	messages: Message[] = [];
	loading: boolean = false;
	tabIndex: number = 0;
	isLoadingCategorie!: boolean;
	categorieVehiculeOptions: { label: any; value: any }[] = [];

	constructor(
		private router: Router,
		private fb: FormBuilder,
		private categorieVehiculeService:CategorieVehiculeService,
		private readonly messageService : MessageService
	) {}

	ngOnInit(): void {
		this.initialiserFormulaire();
		this.listerCategorieVehicule();

	}

	initialiserFormulaire(): void {
		this.formulaireSouscription = this.fb.group({
			nom: ['', Validators.required],
			prenom: ['', Validators.required],
			telephone: ['', Validators.required],
			email: ['', [Validators.required, Validators.email]],
			adresse: ['', Validators.required],
			ville: ['', Validators.required],
			numeroIdentite: ['', Validators.required],
			datePremiereCirculation: ['', Validators.required],
			numeroImmatriculation: ['', Validators.required],
			couleur: ['', Validators.required],
			nombreSieges: [null, [Validators.required, Validators.min(1)]],
			nomnbrePortes: [null, [Validators.required, Validators.min(1)]],
			categorieId: [null, Validators.required]
		});
	}
	soumettreFormulaire() {
		Object.keys(this.formulaireSouscription.controls).forEach(key => {
			const control = this.formulaireSouscription.get(key);
			control?.markAsTouched();
		});
		if (this.formulaireSouscription.valid) {
			if (this.recaputilatifComponent) {
				this.recaputilatifComponent.creerSouscription();
			}
		} else {
			this.messages = [{ severity: 'error', detail: 'Veuillez remplir tous les champs obligatoires avant de soumettre le formulaire.' }];
		}
	}
	ouvrirRecaputilatifComponent() {
			this.ouvrirRecaputilatif = true;
	}
	fermerRecapitulatif() {
		this.ouvrirRecaputilatif = false;
	}
	onSouscriptionCreee(response: any) {
		this.messageService.add({ severity: 'info', summary: 'Souscription effectuée', detail: 'Souscription effectuée'})
		this.formulaireSouscription.reset();
	}

	onSouscriptionNonCreee(response: any) {
		this.messageService.add({ severity: 'error', summary: 'Souscription echouée', detail: 'Souscription echouée'})
		this.formulaireSouscription.reset();
	}


	listerCategorieVehicule(): void {
		this.categorieVehiculeService.listerCategorieVehicule().subscribe({
			next: (data: CategorieVehicule[]) => {
				this.categorieVehiculeOptions = data.map(categorie => ({
					label: categorie.description,
					value: categorie.id
				}));
				this.isLoadingCategorie = false;
			},
			error: (err) => {
				console.error('Erreur lors du chargement des catégories :', err);
				this.isLoadingCategorie = false;
			}
		});
	}
	updateDateFormControl(dateSelected: Date) {
		this.formulaireSouscription.get('datePremiereCirculation')?.setValue(dateSelected);

	}
	modifierdatePremiereCirculation($event: any) {
		const input: string = $event.target.value;
		const datePremiereCirculation: Date = this.formulaireSouscription.get('datePremiereCirculation')?.value;

		if (!isNaN(datePremiereCirculation?.getFullYear()) && input.substring(6, 7) === '0') {
			const annee = Number('20' + input.substring(8, 10))
			this.formulaireSouscription.get('datePremiereCirculation')?.setValue(new Date(annee, datePremiereCirculation.getMonth(), datePremiereCirculation.getDate()))
		}
	}
	dateInputMask = createMask<Date>({
		alias: 'datetime',
		inputFormat: 'dd/mm/yyyy',
		parser: (value: string) => {
			const values = value.split('/');
			const year = +values[2];
			const month = +values[1] - 1;
			const date = +values[0];
			return new Date(year, month, date);
		},
	});
}
