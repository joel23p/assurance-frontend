import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FooterComponent} from './shared-assurance/components/footer/footer.component';
import {NavbarComponent} from './shared-assurance/components/navbar/navbar.component';
import {NgbCollapseModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ButtonModule} from "primeng/button";
import {DropdownModule} from "primeng/dropdown";
import {TranslateLoader, TranslateModule, TranslatePipe} from '@ngx-translate/core';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AccueilComponent} from './modules/accueil/accueil.component';
import {PasswordModule} from "primeng/password";
import {MessagesModule} from "primeng/messages";
import {MessageService} from "primeng/api";
import {ToastModule} from "primeng/toast";
import {JwtHelperService, JwtModule} from "@auth0/angular-jwt";
import {SplitButtonModule} from "primeng/splitbutton";
import { SouscripitionComponent } from './modules/souscripition/souscripition.component';
import { SimulationComponent } from './modules/simulation/simulation.component';
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {RippleModule} from "primeng/ripple";
import {TabViewModule} from "primeng/tabview";
import { RecaputilatifComponent } from './modules/recaputilatif/recaputilatif.component';
import {DividerModule} from "primeng/divider";
import {DialogModule} from "primeng/dialog";
import {CalendarModule} from "primeng/calendar";
import {InputMaskModule} from "@ngneat/input-mask";
import {DatePipe} from "@angular/common";

export function tokenGetter(): string {
	const token = localStorage.getItem('token');
	return token ? token : '';
}

@NgModule({
	declarations: [
		AppComponent,
		FooterComponent,
		NavbarComponent,
		AccueilComponent,
  SouscripitionComponent,
  SimulationComponent,
  RecaputilatifComponent,
	],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        NgbCollapseModule,
        ButtonModule,
        DropdownModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MessagesModule,
        ToastModule,
        PasswordModule,
        SplitButtonModule,
        JwtModule.forRoot({
            config: {tokenGetter: tokenGetter}
        }),
        TranslateModule.forRoot({
            defaultLanguage: 'FR',
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        ProgressSpinnerModule,
        RippleModule,
        TabViewModule,
        DividerModule,
        DialogModule,
        CalendarModule,
        InputMaskModule
    ],
	providers: [TranslatePipe, JwtHelperService,
		MessageService , DatePipe],
	bootstrap: [AppComponent]
})
export class AppModule {
}

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
	return new TranslateHttpLoader(http,
		'./assets/i18n/',
		'.json');
}
