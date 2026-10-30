import { Component } from "@angular/core";
import { UI } from "../../services/ui";
@Component({
  standalone: true,
  imports: [...UI],
  templateUrl: "./welcome.html",
})
export class Welcome {}
