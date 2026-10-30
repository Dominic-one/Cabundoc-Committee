import { Component } from "@angular/core";
import { UI } from "../../services/ui";
import { PreviewDialog } from "../../services/preview-dialog";
@Component({
  standalone: true,
  imports: [...UI, PreviewDialog],
  templateUrl: "./reports.html",
})
export class Reports {
  dialog = "";
}
