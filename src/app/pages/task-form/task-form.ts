import { Component } from "@angular/core";
import { UI, previewRole } from "../../services/ui";
import { PreviewDialog } from "../../services/preview-dialog";
@Component({
  standalone: true,
  imports: [...UI, PreviewDialog],
  templateUrl: "./task-form.html",
})
export class TaskForm {
  role = previewRole();
  dialog = "";
}
