import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



//import de components
import { AboutComponent } from './components/about/about.component';
import { CreateComponent } from './components/create/create.component';
import { SallesComponent } from './components/salles/salles.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent  } from './components/error/error.component';
import { DetailComponent  } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { SearchComponent } from './components/search/search.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';



const appRoutes: Routes=[
    {path:'', component: AboutComponent},
    {path: 'about-me', component: AboutComponent},
    {path: 'salles', component: SallesComponent},
    {path: 'create', component: CreateComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'chercher/:search', component: SearchComponent},
    {path: 'salle/:id', component: DetailComponent},
    {path: 'edit-salle/:id', component: EditComponent},
    {path: 'reservation', component:ReservationComponent},
    {path: 'chercher', component: SidebarComponent},
    {path: '**', component: ErrorComponent}

];

export const appRoutingProviders: any[]=[];
export const routing: ModuleWithProviders=RouterModule.forRoot(appRoutes);

