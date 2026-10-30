import { Component, inject } from "@angular/core";
import { UI, previewRole } from "../../services/ui";
import { PreviewDataService } from "../../services/preview-data.service";
@Component({ standalone: true, imports: [...UI], templateUrl: "./more.html" })
export class More {
  role = previewRole();
  person = inject(PreviewDataService).people[this.role];
}
