import { Routes } from '@angular/router';

import { SpracheComponent } from './kognitiv/sprache/sprache.component';
import { NavigationComponent } from './kognitiv/navigation/navigation.component';
import { ScreenreaderComponent } from './kognitiv/screenreader/screenreader.component';
import { FarbenComponent } from './sehen/farben/farben.component';
import { KontrastComponent } from './sehen/kontrast/kontrast.component';
import { SkalierungComponent } from './sehen/skalierung/skalierung.component';
import { ScreenreaderComponent as SehenScreenreaderComponent } from './sehen/screenreader/screenreader.component';
import { ElementeComponent } from './motorik/elemente/elemente.component';
import { TastaturComponent } from './motorik/tastatur/tastatur.component';
import { HomeComponent } from './home/home.component';
import { ManuellComponent } from './testen/manuell/manuell.component';
import { AutomatischComponent } from './testen/automatisch/automatisch.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'sehen',
    children: [
      { path: 'farben', component: FarbenComponent },
      { path: 'kontrast', component: KontrastComponent },
      { path: 'skalierung', component: SkalierungComponent },
      { path: 'screenreader', component: SehenScreenreaderComponent },
    ],
  },
  {
    path: 'kognitiv',
    children: [
      { path: 'sprache', component: SpracheComponent },
      { path: 'navigation', component: NavigationComponent },
      { path: 'screenreader', component: ScreenreaderComponent },
    ],
  },
  {
    path: 'motorik',
    children: [
      { path: 'elemente', component: ElementeComponent },
      { path: 'tastatur', component: TastaturComponent },
    ],
  },
  {
    path: 'testen',
    children: [
      { path: 'manuell', component: ManuellComponent },
      { path: 'automatisch', component: AutomatischComponent },
    ],
  },
];
