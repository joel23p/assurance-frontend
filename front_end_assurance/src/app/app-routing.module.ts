import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccueilComponent} from "./modules/accueil/accueil.component";
import {SouscripitionComponent} from "./modules/souscripition/souscripition.component";
import {SimulationComponent} from "./modules/simulation/simulation.component";
import {RecaputilatifComponent} from "./modules/recaputilatif/recaputilatif.component";


const routes: Routes = [
	{
		path: '',
		children: [
			{
				path: '',
				redirectTo: 'accueil',
				pathMatch: "full"
			},
			{
				path: 'accueil',
				component: AccueilComponent
			},

			{
				path: 'souscription',
                component : SouscripitionComponent
			},
			{
				path: 'simulation',
				component : SimulationComponent
			},
			{
				path: 'recaputilatif',
				component : RecaputilatifComponent
			},
		]
	},
	{
		path: '**',
		redirectTo: ''
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
