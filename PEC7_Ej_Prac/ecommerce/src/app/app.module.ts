import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,  ReactiveFormsModule, } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleItemComponent } from './article-item/article-item.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ArticleNewTemplateComponent } from './article-new-template/article-new-template.component';
import { ArticleNewReactiveComponent } from './article-new-reactive/article-new-reactive.component';

//Importem el servei
import { ArticleServiceService } from './services/article-service.service';

//HTTPCLIENTMODULE
import { HttpClientModule } from '@angular/common/http';
import { ArticleListComponent } from './article-list/article-list.component';

//Pipe imagen por defecto
import { DefaultImagePipe } from './pipes/default-image.pipe';

//Login y register
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticleItemComponent,
    NavbarComponent,
    ArticleNewTemplateComponent,
    ArticleNewReactiveComponent,
    ArticleListComponent,
    DefaultImagePipe,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
    HttpClientModule                                                       
  ],
  providers: [ArticleServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
