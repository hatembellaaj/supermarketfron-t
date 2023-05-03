import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, EditComponent, CreateComponent],
  imports: [CommonModule, ArticlesRoutingModule, FormsModule],
})
export class ArticlesModule {}
