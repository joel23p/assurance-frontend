import {NgModule} from "@angular/core";

import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {DropdownModule} from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {MessageService} from "primeng/api";
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {CommonModule} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
	imports: [
		InputTextModule,
		PasswordModule,
		DropdownModule,
		ButtonModule,
		MessagesModule,
		MessageModule,
		ProgressSpinnerModule
	],
	exports: [
		CommonModule,
		InputTextModule,
		PasswordModule,
		DropdownModule,
		ButtonModule,
		MessagesModule,
		MessageModule,
		ProgressSpinnerModule,
		TranslateModule
	],
	providers: [
		MessageService
	]
})
export class SharedAssuranceModule {}
