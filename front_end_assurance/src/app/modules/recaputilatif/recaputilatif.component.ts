import {Component, EventEmitter, Input, OnInit, Output, OnChanges} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {SouscriptionService} from "../../shared-assurance/services/souscription.service";
import {Souscription} from "../../shared-assurance/model/souscription.model";
import {finalize} from "rxjs";
import {MessageService} from "primeng/api";
import {DatePipe} from "@angular/common";

@Component({
	selector: 'app-recaputilatif',
	templateUrl: './recaputilatif.component.html',
	styleUrls: ['./recaputilatif.component.scss']
})
export class RecaputilatifComponent implements OnInit, OnChanges {
	@Input() data: any;
	@Input() visible: boolean = false;
	@Output() confirmerClick = new EventEmitter<void>();
	@Output() annulerClick = new EventEmitter<void>();
	@Output() souscriptionCreee = new EventEmitter<any>();
	@Input() optionsCategorie: { label: string, value: number }[] = [];
	@Output() souscriptionNonCreee = new EventEmitter<any>();


	souscription: Souscription = new Souscription();
	isLoading: boolean = false;
	messages: any[] = [];
	label!: string;
	formulaireRecaputilatif!: FormGroup;

	constructor(
		private fb: FormBuilder,
		private souscriptionService: SouscriptionService,
		private readonly messageService: MessageService,
		private datePipe : DatePipe
	) {}

	ngOnInit(): void {
		this.formulaireRecaputilatif = this.fb.group({
			datePremiereCirculation: [''],
			numeroImmatriculation: [''],
			couleur: [''],
			nombreSieges: [''],
			nomnbrePortes: [''],
			categorieId: [''],
			nom: [''],
			prenom: [''],
			telephone: [''],
			email: [''],
			numeroIdentite: [''],
			adresse: [''],
			ville: ['']
		});

		this.mapDataToSouscription();
		this.label = this.optionsCategorie.find(categorie => categorie.value === this.data.categorieId)?.label || 'Non renseignée'

	}

	ngOnChanges(): void {
		if (this.data) {
			this.mapDataToSouscription();
		}

		if(this.optionsCategorie && this.data){
			this.label = this.optionsCategorie.find(categorie => categorie.value === this.data.categorieId)?.label || 'Non renseignée'
		}
	}

	mapDataToSouscription(): void {
		if (!this.data) return;

		const date = new Date(this.data.datePremiereCirculation);
		const formattedDate = this.datePipe.transform(date,"yyyy/MM/dd");

		this.souscription = {
			nom: this.data.nom,
			prenom: this.data.prenom,
			telephone: this.data.telephone,
			email: this.data.email,
			numeroIdentite: this.data.numeroIdentite,
			adresse: this.data.adresse,
			ville: this.data.ville,
			datePremiereCirculation: formattedDate as string,
			numeroImmatriculation: this.data.numeroImmatriculation,
			couleur: this.data.couleur,
			nbPortes: this.data.nomnbrePortes,
			nbSieges: this.data.nombreSieges,
			categorieId: Number(this.data.categorieId)

		};
	}


	annuler() {
		this.annulerClick.emit();
	}

	creerSouscription(): void {
		this.isLoading = true;
		this.messages = [];

		this.souscriptionService.faireSouscription(this.souscription)
			.subscribe({
				next: (response) => {
					this.isLoading = false;
					this.visible = false;
					this.souscriptionCreee.emit(response);
				},
				error: (err) => {
					this.isLoading = false;
					this.visible = false;
					this.messages = [];
					this.souscriptionNonCreee.emit(err);
				}
			});
	}
}
