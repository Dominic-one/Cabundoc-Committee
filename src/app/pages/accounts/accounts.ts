import { Component, inject } from "@angular/core";
import { UI } from "../../services/ui";
import { PreviewDialog } from "../../services/preview-dialog";
import { PreviewDataService } from "../../services/preview-data.service";
@Component({
  standalone: true,
  imports: [...UI, PreviewDialog],
  templateUrl: "./accounts.html",
})
export class Accounts {
  private data = inject(PreviewDataService);
  accounts = this.data.accounts;
  form = false;
  dialog = "";
}
