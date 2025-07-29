import { Component, HostListener, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  imports: [RouterOutlet],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  online = navigator.onLine;

  @HostListener("window:online")
  onOnline() {
    this.online = true;
  }

  @HostListener("window:offline")
  onOffline() {
    this.online = false;
  }
}
