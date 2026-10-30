import { Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UI, previewRole } from "../../services/ui";
import { PreviewDialog } from "../../services/preview-dialog";
import { PreviewDataService } from "../../services/preview-data.service";
@Component({
  standalone: true,
  imports: [...UI, PreviewDialog],
  templateUrl: "./task-detail.html",
})
export class TaskDetail {
  role = previewRole();
  private data = inject(PreviewDataService);
  task =
    this.data.tasks.find(
      (t) => t.id === inject(ActivatedRoute).snapshot.paramMap.get("id"),
    ) || this.data.tasks[0];
  dialog = "";
  feedback = false;
}
