import { Component, inject } from "@angular/core";
import { ActivatedRoute, RouterOutlet } from "@angular/router";
import { UI } from "../../services/ui";
import { PreviewDataService, Role } from "../../services/preview-data.service";
@Component({
  standalone: true,
  imports: [...UI, RouterOutlet],
  templateUrl: "./shell.html",
})
export class Shell {
  role: Role = inject(ActivatedRoute).snapshot.data["role"];
  person = inject(PreviewDataService).people[this.role];
  nav =
    this.role === "member"
      ? [
          { path: "home", label: "Home", icon: "grid-outline" },
          { path: "tasks", label: "My tasks", icon: "checkbox-outline" },
          { path: "scan", label: "Scan QR", icon: "scan-outline" },
          { path: "attendance", label: "Attendance", icon: "calendar-outline" },
          { path: "more", label: "More", icon: "ellipsis-horizontal-outline" },
        ]
      : this.role === "head"
        ? [
            { path: "home", label: "Overview", icon: "grid-outline" },
            { path: "tasks", label: "Tasks", icon: "checkbox-outline" },
            { path: "events", label: "Events", icon: "calendar-outline" },
            { path: "reports", label: "Reports", icon: "bar-chart-outline" },
            {
              path: "more",
              label: "More",
              icon: "ellipsis-horizontal-outline",
            },
          ]
        : [
            { path: "home", label: "Dashboard", icon: "grid-outline" },
            { path: "accounts", label: "Accounts", icon: "people-outline" },
            { path: "committees", label: "Committees", icon: "albums-outline" },
            {
              path: "tasks",
              label: "Task monitoring",
              icon: "checkbox-outline",
            },
            {
              path: "events",
              label: "Events & attendance",
              icon: "calendar-outline",
            },
            { path: "reports", label: "Reports", icon: "bar-chart-outline" },
            {
              path: "sync",
              label: "Review & audit",
              icon: "shield-checkmark-outline",
            },
          ];
}
