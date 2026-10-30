import { Component, input } from "@angular/core";
import { UI } from "./ui";
import type { PreviewTask, Role } from "./preview-data.service";
@Component({
  selector: "app-task-card",
  standalone: true,
  imports: [...UI],
  template: ` <a
    class="task-card"
    [routerLink]="['/', role(), 'tasks', task().id]"
    ><span class="task-symbol" [class.done]="task().review === 'Approved'"
      ><ion-icon
        [name]="
          task().review === 'Approved'
            ? 'checkmark-outline'
            : 'document-text-outline'
        " /></span
    ><span class="task-body"
      ><span class="eyebrow">{{ task().committee }}</span
      ><strong>{{ task().title }}</strong
      ><span class="task-meta"
        >{{ task().due }} ·
        {{ role() === "member" ? task().progress : task().assignee }}</span
      ><span class="task-flags"
        ><span
          class="badge"
          [class.success]="task().review === 'Approved'"
          [class.warning]="
            task().review === 'Returned' || task().review === 'Awaiting review'
          "
          >{{
            task().review === "Not submitted" ? task().progress : task().review
          }}</span
        ></span
      ></span
    ><ion-icon name="chevron-forward-outline" class="muted"
  /></a>`,
})
export class TaskCard {
  task = input.required<PreviewTask>();
  role = input<Role>("member");
}
