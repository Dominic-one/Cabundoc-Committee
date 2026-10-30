import { Component, inject } from "@angular/core";
import { UI, previewRole } from "../../services/ui";
import { TaskCard } from "../../services/task-card";
import { PreviewDataService } from "../../services/preview-data.service";
@Component({
  standalone: true,
  imports: [...UI, TaskCard],
  templateUrl: "./home.html",
})
export class Home {
  role = previewRole();
  private data = inject(PreviewDataService);
  person = this.data.people[this.role];
  tasks =
    this.role === "member"
      ? this.data.tasks.slice(0, 3)
      : this.data.tasks.slice(4);
  events = this.data.events.slice(0, 2);
}
