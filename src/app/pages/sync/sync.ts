import { Component } from "@angular/core";
import { UI, previewRole } from "../../services/ui";
@Component({
  standalone: true,
  imports: [...UI],
  templateUrl: "./sync.html",
})
export class SyncPage {
  role = previewRole();
}
