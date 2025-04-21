import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";
import {MenuItem, PrimeNGConfig} from "primeng/api";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Compte} from "../../model/compte.model";
import {AuthService} from "../../services/auth.service";

interface Langue {
	name: string;
	code: string;
	abreviation: string;
}

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

	public isCollapsed = true;
	langues: Langue[] = [];
	langueSelectionnee!: Langue;
	formLangue!: FormGroup;
	utilisateurConnecte!: Compte | null;

	constructor(private router: Router,
				private translateService: TranslateService,
				private primeNGConfig: PrimeNGConfig,
				private formBuilder: FormBuilder,
				) {
	}

	ngOnInit() {

	}

	goToAccueil() {
		this.router.navigate(['accueil']);
	}

	vasToEspace() {
		this.router.navigate(['souscription']);
	}

	vaToEspace() {
		this.router.navigate(['simulation']);
	}
}
