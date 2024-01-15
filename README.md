# PAC7 - Desenvolupament front-end amb frameworks Javascript

## Dades del alumne

- asantaeugenia@uoc.edu
- Aitor Javier Santaeugenia Marí
- En aquesta PAC hem realitzat diversos exercicis;
    - L'<ins>exercici 1</ins> consta de preguntes teòriques sobre elements o directives del <code>< RouterOutlet ></code> així com a saber que son les <code>< RouteGuards ></code>. També sobre *lazy-loading* o *middlewares*.
    - L'exercici 2 consta de la creació de diferents rutes, així com la creació d'un <ins>servei</ins> *user-store* o un <ins>interceptor</ins> *article-app* per emmagatzemar el *token*, així com a emprar les *RouteGuards* per no poder accedir a la pàgina de creació d'articles.

---

<code>Repassant els punts més importants d'aquest exercici</code>
- Creació article-detail:

<div align="center">
        
 ![all_test_done](https://private-user-images.githubusercontent.com/14861253/296870931-0cd25c71-a4ae-4967-a1fd-c59364df9e06.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDUzNTM3MTMsIm5iZiI6MTcwNTM1MzQxMywicGF0aCI6Ii8xNDg2MTI1My8yOTY4NzA5MzEtMGNkMjVjNzEtYTRhZS00OTY3LWExZmQtYzU5MzY0ZGY5ZTA2LmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMTUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTE1VDIxMTY1M1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTEzNzk2MjlkYTk4OWI2M2Q2MjQ4YmM0NTBkNTIyOTMyOTYyNzAwMDFmZjcwZmVjMTViMWMzYTE3YWMyMGJmNjkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.BNiMUSXcOPT5KX1gt3KU8Uu1tghZcKwo6wkEQUS8q-k)

</div>

- Visualització de les rutes creades:
    - Podem veure les <ins>diferents rutes creades **/user/login** **/user/register** **/article/list**</ins>
    - Podem veure com, <ins>sense estar autenticats</ins> **NO** podem accedir a la creació d'un nou article a **/article/create**
    - Podem veure com <ins>després d'autenticar-se</ins>, **SI** podem accedir a **/article/create**
    - Els botons de **Login** / **Registre** <ins>desapareixen</ins> després un cop l'usuari s'ha autenticat
    - El botó <ins>**logout**</ins> apareix un cop l'usuari s'ha autenticat

<div align="center">
        
 ![all_test_done](https://private-user-images.githubusercontent.com/14861253/296873804-7316597a-c9b7-48dd-b995-df8db84591bb.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDUzNTQ5NjksIm5iZiI6MTcwNTM1NDY2OSwicGF0aCI6Ii8xNDg2MTI1My8yOTY4NzM4MDQtNzMxNjU5N2EtYzliNy00OGRkLWI5OTUtZGY4ZGI4NDU5MWJiLmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMTUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTE1VDIxMzc0OVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTdhOGY5ZGU5N2Q5NDhkYWVkMzAyZTgzYTE3MWIxOTFhNzk0NTllMTNjMWE1YmUxNmQyYTM4ZGNlN2I2ZDZiYzMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.YjVA_L0lyera7E4btUSiDl4d3llphwJgfKRyaYKS1hQ)

</div>

- Creació del <ins>**token**</ins>:

<div align="center">
        
 ![all_test_done](https://private-user-images.githubusercontent.com/14861253/296874736-7af52cb0-b926-41c4-9c06-f138334b3f55.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDUzNTU0MjYsIm5iZiI6MTcwNTM1NTEyNiwicGF0aCI6Ii8xNDg2MTI1My8yOTY4NzQ3MzYtN2FmNTJjYjAtYjkyNi00MWM0LTljMDYtZjEzODMzNGIzZjU1LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMTUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTE1VDIxNDUyNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWUzZjU1ODMwODIwZjY0N2IzZjBkOTk2ODY0OGM0MzhlMmVlN2NiZmVlZTZjZDk0YjNlYzc2Njc3MDk1NGM3ZDImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.uDvc_YC8aTDBVB4QTGYcBqmQnfFj7XG_XZA47_jf_K4)

</div>

---

- L'exercici 3 s'han de <ins>crear dos mòduls</ins>: *article-module* i *user-module* i s'ha d'<ins>aplicar **lazy-loading**</ins>.
    - Demostra del lazy-loading:

<div align="center">
        
 ![all_test_done](./PEC7_Ej_Prac//ecommerce//lazy-loading.png)

</div>

<div align="center">
        
 ![all_test_done](./PEC7_Ej_Prac//ecommerce//lazy-chunk-files.png)<br>
*No coincideixen ja que es un altre npm run start*.
 
</div>

- article-module
```ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ArticleRoutingModule } from './article-routing.module';


import { ArticleItemComponent } from './../../components/article-item/article-item.component';
import { ArticleNewReactiveComponent } from './../../components/article-new-reactive/article-new-reactive.component';
import { ArticleListComponent } from './../../components/article-list/article-list.component';
import { ArticleDetailComponent } from './../../components/article-detail/article-detail.component';
import { DefaultImagePipe } from './../../pipes/default-image.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ArticleRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    ArticleDetailComponent,
    ArticleItemComponent,
    ArticleListComponent,
    ArticleNewReactiveComponent,
    DefaultImagePipe
  ]
})

export class ArticleModule { }
```

- user-module

```ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from '../../components/user/login/login.component';
import { RegisterComponent } from '../../components/user/register/register.component';

import { UserRoutingModule } from './user-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent
  ]
})
export class UserModule { }
```

<code>Cal dir que per l'aplicació del lazy-loading vàrem haver de modificar l'arxiu angular.json i inserir "namedChunks": true per tal de poder visualitzar els noms dels mòduls.</code>

Podem anar al repositori en el següent [enllaç](https://github.com/AitorSantaeugenia/PEC7_DFFJ).

