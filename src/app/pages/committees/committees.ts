import { Component, inject } from "@angular/core";
import { UI, previewRole } from "../../services/ui";
import { PreviewDialog } from "../../services/preview-dialog";
import { PreviewDataService } from "../../services/preview-data.service";
@Component({
  standalone: true,
  imports: [...UI, PreviewDialog],
  templateUrl: "./committees.html",
})
export class Committees {
  role = previewRole();
  private data = inject(PreviewDataService);
  committees =
    this.role === "admin"
      ? this.data.committees
      : this.data.committees.slice(0, 2);
  members = false;
  creating = false;
  dialog = "";
}
