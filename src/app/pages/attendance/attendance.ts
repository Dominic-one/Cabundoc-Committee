import { Component, inject } from "@angular/core";
import { UI, previewRole } from "../../services/ui";
import { PreviewDataService } from "../../services/preview-data.service";
@Component({
  standalone: true,
  imports: [...UI],
  templateUrl: "./attendance.html",
})
export class AttendancePage {
  role = previewRole();
  private data = inject(PreviewDataService);
  rows =
    this.role === "member"
      ? [this.data.attendance[0], this.data.attendance[3]]
      : this.data.attendance;
}
