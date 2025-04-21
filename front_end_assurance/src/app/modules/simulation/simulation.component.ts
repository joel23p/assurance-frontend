import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Message } from 'primeng/api';
import {ProduitAssuranceService} from "../../shared-assurance/services/produitAssurance.service";
import {SimulationService} from "../../shared-assurance/services/simulation.service";
import {MessageService} from "primeng/api";
@Component({
	selector: 'app-simulation',
	templateUrl: './simulation.component.html',
	styleUrls: ['./simulation.component.scss'],
	providers: [MessageService]
})
export class SimulationComponent implements OnInit {
	formulaireSimulation!: FormGroup;
	optionsProduitAssurance: any[] = [];
	messages: Message[] = [];
	loading: boolean = false;

	constructor(
		private fb: FormBuilder,
		private produitAssuranceService: ProduitAssuranceService,
		private simulationService: SimulationService,
		private messageService : MessageService
	) {}

	ngOnInit(): void {
		this.initialiserFormulaire();
		this.listerLesProduitsAssurance();
	}

	initialiserFormulaire(): void {
		this.formulaireSimulation = this.fb.group({
			produitAssuranceId: [null, Validators.required],
			prixInitialVehicule: [null, [Validators.required, Validators.min(1)]],
			valeurActuelleVehicule: [null, [Validators.required, Validators.min(1)]],
			puissanceFiscale: [null, [Validators.required, Validators.min(1)]],
		});
	}

	listerLesProduitsAssurance(): void {
		this.produitAssuranceService.listerProduitsAssurance().subscribe({
		     next: (produits) => {
		         this.optionsProduitAssurance = produits.map((produit : any) => ({label: produit.nomProduit, value: produit.id}));
		     },
		    error: () => {
		        this.messages = [{ severity: 'error', detail: 'Erreur lors du chargement des produits d\'assurance.' }];
		    }
		 });
	}

	Simuler(){
		this.messages = [];
		if (this.formulaireSimulation.invalid) return;
		this.loading = true;
		this.simulationService.simuler(this.formulaireSimulation.value).subscribe({
			next : (response) => {
				this.loading = false
				this.formulaireSimulation.reset()
				console.log("response :", response)
				this.messageService.add({ severity: 'info', summary: "Simulatin effctuée avec succès", detail: 'Simulatin effctuée avec succès', });
			},
			error: (err) => {
				this.loading = false
				this.formulaireSimulation.reset()
				console.log("error :", err)
				this.messageService.add({ severity: 'error', summary: "Problème serveur", detail: 'Problème serveur'});
			}
		})
	}
}
