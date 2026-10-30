import { Component, inject } from "@angular/core";
import { UI, previewRole } from "../../services/ui";
import { TaskCard } from "../../services/task-card";
import { PreviewDataService } from "../../services/preview-data.service";
@Component({
  standalone: true,
  imports: [...UI, TaskCard],
  templateUrl: "./tasks.html",
})
export class Tasks {
  role = previewRole();
  private data = inject(PreviewDataService);
  tasks =
    this.role === "member" ? this.data.tasks.slice(0, 4) : this.data.tasks;
}
