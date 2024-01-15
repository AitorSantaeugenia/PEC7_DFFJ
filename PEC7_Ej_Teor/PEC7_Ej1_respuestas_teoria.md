## Exercici 1 – Preguntes teòriques

### a) Què és i com funciona l'element < RouterOutlet >?
- <code>RouterOutlet</code> forma part de l'encaminador d'*Angular* i s'utilitza per mostrar dinàmicament el component associat a la ruta activa, és a dir, renderitza el component corresponent a la ruta on s'està navegant.

```ts
<router-outlet></router-outlet>
```

### b) Per què s'utilitzen les directives routerLink i routerLinkActive? Hi ha més directives relacionades amb el router?
- <code>routerLink</code> s'utilitza en els elements *HTML* per crear enllaços de navegació. Per exemple, <code>a routerLink="/cart"</code> crearà un enllaç que navegarà a la ruta especificada.
- <code>routerLinkActive</code> s'utilitza per aplicar una classe *CSS* quan la ruta associada està activa.
- Altres directives relacionades amb el router poden ser <code>router-outlet</code>, <code>routerLinkWithHref</code>, <code>routerLinkActiveOptions</code>, etc.

```ts
<a routerLink="/inicio" routerLinkActive="active">Inicio</a>
<a routerLink="/perfil" routerLinkActive="active">Perfil</a>
```

### c) Quines diferències hi ha entre els serveis Router i ActivatedRoute? Quines funcionalitats tenen cadascun d'aquests serveis? Descriu alguns els mètodes més importants pels quals estan composts.
- <code>Router</code> s'empra per efectuar operacions de navegació i accedir a la informació sobre l'estat de la navegació. Alguns mètodes importants poden ser *navigate*, *navigateByUrl*, *navigateByData*, etc.
- <code>ActivatedRoute</code> proporciona informació sobre la ruta activa en un moment donat. Conté informació sobre els paràmetres de la ruta i les dades les seves dates així com a detalls relacionats amb la ruta actual. Alguns mètodes importants poden ser *snapshot* y *paramMap*.

### d) Què són les Route Guards? Com es fan servir les guardes a Angular? Descriu totes les guardes que hi ha a Angular (consulta la documentació oficial d'Angular)
- Les <code>Route Guards</code> son funcions que s'empren per controlar la navegació d'Angular. Permeten realitzar accions abans que una ruta sigui activada o després que sigui activada. 

    - CanActivate: Permet accedir o bloquejar l'activació de la ruta principal. S'utilitza per determinar si un usuari té permisos suficients per accedir a una determinada vista.
    - CanActivateChild: Similar a l'anterior, s'aplica en rutes secundàries niades dins d'una ruta principal. Permet o bloqueja l'activació de rutes secundàries.
    - CanDeactivate: S'usa per determinar si un usuari pot sortir de la ruta. Pot servir per mostrar un missatge quan un usuari vol abandonar la pàgina en la qual s'estan fent canvis.
    - CanLoad: S'usa per prevenir el <code>lazy loading</code> d'un mòdul. És verificada abans d'intentar carregar un mòdul per tal d'assegurar-se que l'usuari tingui els permisos necessaris o compleixi certes condicions abans de carregar dinàmicament el mòdul.

### e) Què és la càrrega Lazy dels mòduls d'Angular? Com es configura a Angular la càrrega Lazy? ( https://angular.io/guide/lazy-loading-ngmodules )
- La càrrega lazu de mòduls d'Angular és una tècnica que consisteix a carregar un mòdul només quan sigui necessari, en contra de carregar-lo a l'inici de l'aplicació, millorant el rendiment en reduir el temps de càrrega inicial. 
- Es configura emprant la funció <code>loadChildren</code> en la definició de les rutes.

```ts
const routes: Routes = [
  { path: 'modulo-lazy', loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule) },
];
```

### f) Què és/per a què són útils els middlewares en el context de node.js? On estàs usant middlewares a la nostra aplicació?
- Els *middlewares* són funcions que tenen accés a l'objecte de sol·licitud *req*, l'objecte de resposta *res* i la següent funció en el cicle de sol·licitud-resposta d'Express. Els *middlewares* s'utilitzen per acomplir tasques en el maneig d'autenticació, la validació de dades, el registre de sol·licituds, etc.