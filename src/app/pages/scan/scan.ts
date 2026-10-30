import { Component } from "@angular/core";
import { UI, previewRole } from "../../services/ui";
import { PreviewDialog } from "../../services/preview-dialog";
@Component({
  standalone: true,
  imports: [...UI, PreviewDialog],
  templateUrl: "./scan.html",
})
export class Scan {
  role = previewRole();
  dialog = "";
}
