import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { ButtonModule } from 'primeng/components/button/button';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { CalendarModule } from "primeng/components/calendar/calendar";
import { PCalendarPtbrModule } from "p-calendar-ptbr";
import { SelectButtonModule } from "primeng/components/selectbutton/selectbutton";
import { DropdownModule } from "primeng/components/dropdown/dropdown"
import { CurrencyMaskModule } from "ng2-currency-mask";

import { LancamentosCadastroComponent } from './lancamentos-cadastro/lancamentos-cadastro.component';
import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import { LancamentosGridComponent } from './lancamentos-grid/lancamentos-grid.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    DataTableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    PCalendarPtbrModule,
    SelectButtonModule,
    DropdownModule,
    CurrencyMaskModule,
    RouterModule
  ],
  declarations: [
    LancamentosPesquisaComponent,
    LancamentosCadastroComponent,
    LancamentosGridComponent
  ],
  exports: [
    LancamentosPesquisaComponent,
    LancamentosCadastroComponent
  ]
})
export class LancamentosModule { }
