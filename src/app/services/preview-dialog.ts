import { Component, input, output } from "@angular/core";
import { UI } from "./ui";
@Component({
  selector: "app-preview-dialog",
  standalone: true,
  imports: [...UI],
  template: ` <ion-modal [isOpen]="!!title()" (didDismiss)="closed.emit()"
    ><ng-template
      ><div class="modal-body">
        <h2 style="margin-top:12px">{{ title() }}</h2>
        <p>This feature is not available yet. No changes were made.</p>
        <div class="form-actions">
          <button class="btn" (click)="closed.emit()">Close</button>
        </div>
      </div></ng-template
    ></ion-modal
  >`,
})
export class PreviewDialog {
  title = input("");
  closed = output<void>();
}
