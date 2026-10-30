import type { Routes } from "@angular/router";
function screens(): Routes {
  return [
    {
      path: "home",
      loadComponent: () => import("./pages/home/home").then((m) => m.Home),
    },
    {
      path: "tasks",
      loadComponent: () => import("./pages/tasks/tasks").then((m) => m.Tasks),
    },
    {
      path: "tasks/new",
      loadComponent: () =>
        import("./pages/task-form/task-form").then((m) => m.TaskForm),
    },
    {
      path: "tasks/:id",
      loadComponent: () =>
        import("./pages/task-detail/task-detail").then((m) => m.TaskDetail),
    },
    {
      path: "events",
      loadComponent: () =>
        import("./pages/events/events").then((m) => m.Events),
    },
    {
      path: "events/:id",
      loadComponent: () =>
        import("./pages/event-detail/event-detail").then((m) => m.EventDetail),
    },
    {
      path: "scan",
      loadComponent: () => import("./pages/scan/scan").then((m) => m.Scan),
    },
    {
      path: "attendance",
      loadComponent: () =>
        import("./pages/attendance/attendance").then((m) => m.AttendancePage),
    },
    {
      path: "committees",
      loadComponent: () =>
        import("./pages/committees/committees").then((m) => m.Committees),
    },
    {
      path: "reports",
      loadComponent: () =>
        import("./pages/reports/reports").then((m) => m.Reports),
    },
    {
      path: "accounts",
      loadComponent: () =>
        import("./pages/accounts/accounts").then((m) => m.Accounts),
    },
    {
      path: "sync",
      loadComponent: () => import("./pages/sync/sync").then((m) => m.SyncPage),
    },
    {
      path: "more",
      loadComponent: () => import("./pages/more/more").then((m) => m.More),
    },
    { path: "", pathMatch: "full", redirectTo: "home" },
  ];
}
export const routes: Routes = [
  {
    path: "welcome",
    loadComponent: () =>
      import("./pages/welcome/welcome").then((m) => m.Welcome),
  },
  {
    path: "member",
    data: { role: "member" },
    loadComponent: () => import("./pages/shell/shell").then((m) => m.Shell),
    children: screens(),
  },
  {
    path: "head",
    data: { role: "head" },
    loadComponent: () => import("./pages/shell/shell").then((m) => m.Shell),
    children: screens(),
  },
  {
    path: "admin",
    data: { role: "admin" },
    loadComponent: () => import("./pages/shell/shell").then((m) => m.Shell),
    children: screens(),
  },
  { path: "**", redirectTo: "welcome" },
];
