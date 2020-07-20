import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { UsuariosComponent } from './component/usuarios/usuarios.component';
import { FooterComponent } from './component/footer/footer.component';
import { SociosComponent } from './component/socios/socios.component';
import { ServiciosComponent } from './component/servicios/servicios.component';
import { PerfilComponent } from './component/perfil/perfil.component';
import { PerfilSocioComponent } from './component/perfil-socio/perfil-socio.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';


// Carga de imagenes
import { ImageCropperModule } from 'ngx-image-cropper';

// ver pdf
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { environment } from '../environments/environment';

const AppRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'socios', component: SociosComponent},
  {path: 'servicios', component: ServiciosComponent},
  {path: 'perfil/:uid', component: PerfilComponent},
  {path: 'perfil-socio/:uid', component: PerfilSocioComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UsuariosComponent,
    FooterComponent,
    SociosComponent,
    ServiciosComponent,
    PerfilComponent,
    PerfilSocioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot( AppRoutes ),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    FormsModule,
    ImageCropperModule,
    PdfViewerModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
