import { Component } from '@angular/core';
import {LayoutComponent} from "../../layout/layout.component";

@Component({
  selector: 'app-list-expense',
  standalone: true,
    imports: [
        LayoutComponent
    ],
  templateUrl: './list-expense.component.html',
  styleUrl: './list-expense.component.css'
})
export class ListExpenseComponent {

}
