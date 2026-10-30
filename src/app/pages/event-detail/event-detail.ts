import { Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UI, previewRole } from "../../services/ui";
import { PreviewDialog } from "../../services/preview-dialog";
import { PreviewDataService } from "../../services/preview-data.service";
@Component({
  standalone: true,
  imports: [...UI, PreviewDialog],
  templateUrl: "./event-detail.html",
})
export class EventDetail {
  role = previewRole();
  private data = inject(PreviewDataService);
  event =
    this.data.events.find(
      (e) => e.id === inject(ActivatedRoute).snapshot.paramMap.get("id"),
    ) || this.data.events[0];
  rows = this.data.attendance.slice(0, 3);
  manual = false;
  dialog = "";
}
