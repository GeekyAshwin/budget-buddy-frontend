import { Component } from '@angular/core';
import {LayoutComponent} from "../../layout/layout.component";

@Component({
  selector: 'app-add-expense',
  standalone: true,
    imports: [
        LayoutComponent
    ],
  templateUrl: './add-expense.component.html',
  styleUrl: './add-expense.component.css'
})
export class AddExpenseComponent {

}
