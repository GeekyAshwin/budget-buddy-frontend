import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SwPush} from "@angular/service-worker";
import {error} from "@angular/compiler-cli/src/transformers/util";
import Environment from "../environments/environment";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'budget-buddy-frontend';
  constructor(private swPush: SwPush) {
  }
  ngOnInit() {
    this.requestNotificationPermission()

  }


  requestNotificationPermission() {
    this.swPush.requestSubscription({
      serverPublicKey: Environment.SERVER_PUBLIC_KEY
    }).then(data => console.log(JSON.stringify(data)))
      .catch(error => console.error(error))

  }
}
