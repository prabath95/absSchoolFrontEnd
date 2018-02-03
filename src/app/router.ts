import { ModuleWithProviders }  from '@angular/core';  
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '../app/login/login.component'
import { StudentComponent } from '../app/student/student.component';
import { VieSubjectsComponent } from '../app/student/vie-subjects/vie-subjects.component';
import { AdministratorComponent } from '../app/administrator/administrator.component';
import { AddsubjectComponent } from '../app/administrator/addsubject/addsubject.component';
import { AssignSubjectComponent } from '../app/administrator/assign-subject/assign-subject.component';

export const routes: Routes = [  
    {
      path: '',
      redirectTo: '/login', pathMatch: 'full'
    },
    {
      path: 'login', 
      component : LoginComponent,
    },
    {
      path: 'student', 
      component : StudentComponent,
      children: [
          { path: '', redirectTo: 'viewSubject', pathMatch: 'full'
          },
          { path: 'viewSubject', component: VieSubjectsComponent
          }
        ]
    },
    {
      path: 'administrator', 
      component : AdministratorComponent,
      children: [
          { path: '', redirectTo: 'addSubject', pathMatch: 'full'
          },
          { path: 'addSubject', component: AddsubjectComponent
          },
          { path: 'assignSubject', component: AssignSubjectComponent
          }
        ]
    },
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes); 