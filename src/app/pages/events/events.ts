import { Component, inject } from "@angular/core";
import { UI, previewRole } from "../../services/ui";
import { PreviewDialog } from "../../services/preview-dialog";
import { PreviewDataService } from "../../services/preview-data.service";
@Component({
  standalone: true,
  imports: [...UI, PreviewDialog],
  templateUrl: "./events.html",
})
export class Events {
  role = previewRole();
  private data = inject(PreviewDataService);
  events = this.data.events;
  form = false;
  dialog = "";
}
