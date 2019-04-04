import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentWrapper } from '../../shared/component-wrapper/component-wrapper.component';
import { NgbdExamplesPage } from '../shared/examples-page/examples.component';
import { NgbdApiPage } from '../shared/api-page/api.component';

export const ROUTES = [
  { path: '', pathMatch: 'full', redirectTo: 'examples' },
  { path: '',
    component: ComponentWrapper,
    children: [
      { path: 'examples', component: NgbdExamplesPage },
      { path: 'api', component: NgbdApiPage }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class NgbdBreadcrumbModule { }
