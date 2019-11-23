import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/docs'
  },
  {
    path: 'docs',
    loadChildren: () => import('./docs/docs.module').then(m => m.DocsModule)
  },
  {
    path: 'basic',
    loadChildren: () => import('./basic/basic.module').then(m => m.BasicModule)
  },
  {
    path: 'formula',
    loadChildren: () => import('./formula/formula.module').then(m => m.FormulaModule)
  },
  {
    path: 'visible',
    loadChildren: () => import('./visible/visible.module').then(m => m.VisibleModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/docs'
  }
];
