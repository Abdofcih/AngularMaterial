import { NgModule } from '@angular/core';

import {MatToolbarModule, MatCardModule, MatIconModule, MatButtonModule} from '@angular/material';
import {MatTableModule} from '@angular/material/table';

const materialComponents = [
 MatCardModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatTableModule
]

@NgModule({
  imports: [materialComponents],
  exports: [materialComponents]
})
export class MaterialModule { }
