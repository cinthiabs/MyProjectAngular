import{Routes} from '@angular/router'
import { HomeComponent } from './Navegacao/home/home.component';
import { ContatoComponent } from './Institucional/contato/contato.component';
import { SobreComponent } from './Institucional/sobre/sobre.component';
export const rootConfig: Routes = [
    {path:'', redirectTo: '/home',pathMatch:'full'},
    {path: 'home',component:HomeComponent},
    {path: 'contato',component:ContatoComponent},
    {path: 'sobre',component:SobreComponent}
];
