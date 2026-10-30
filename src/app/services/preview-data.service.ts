import { Injectable } from "@angular/core";

export type Role = "member" | "head" | "admin";

const PEOPLE = {
  member: {
    name: "Alex Rivera",
    id: "2026-001",
    initials: "AR",
    label: "Committee member",
  },
  head: {
    name: "Jamie Santos",
    id: "FAC-001",
    initials: "JS",
    label: "Committee head",
  },
  admin: {
    name: "Taylor Cruz",
    id: "ADM-001",
    initials: "TC",
    label: "Administrator · Web",
  },
};

const COMMITTEES = [
  {
    name: "Events & Logistics",
    head: "Jamie Santos",
    members: 5,
    color: "#17665d",
    description: "Bringing every campus gathering together.",
  },
  {
    name: "Creatives & Media",
    head: "Jamie Santos",
    members: 5,
    color: "#7763b6",
    description: "Stories, visuals, and moments that matter.",
  },
  {
    name: "Community Outreach",
    head: "Morgan Reyes",
    members: 3,
    color: "#bd834b",
    description: "Small actions. Meaningful community impact.",
  },
];

const TASKS = [
  {
    id: "venue",
    title: "Prepare the venue checklist",
    committee: "Events & Logistics",
    assignee: "Alex Rivera",
    progress: "Ongoing",
    review: "Not submitted",
    due: "Oct 29, 2026",
    date: "October 29, 2026 · 5:00 PM",
    proof: false,
  },
  {
    id: "poster",
    title: "Design event announcement",
    committee: "Creatives & Media",
    assignee: "Alex Rivera",
    progress: "Pending",
    review: "Not submitted",
    due: "Oct 30, 2026",
    date: "October 30, 2026 · 5:00 PM",
    proof: false,
  },
  {
    id: "materials",
    title: "Update the registration materials",
    committee: "Events & Logistics",
    assignee: "Alex Rivera",
    progress: "Ongoing",
    review: "Returned",
    due: "Oct 27, 2026",
    date: "October 27, 2026 · 5:00 PM",
    proof: true,
  },
  {
    id: "documentation",
    title: "Document the planning session",
    committee: "Creatives & Media",
    assignee: "Alex Rivera",
    progress: "Done",
    review: "Approved",
    due: "Oct 26, 2026",
    date: "October 26, 2026 · 5:00 PM",
    proof: true,
  },
  {
    id: "attendance",
    title: "Organize attendance materials",
    committee: "Events & Logistics",
    assignee: "Sam Flores",
    progress: "Done",
    review: "Awaiting review",
    due: "Oct 28, 2026",
    date: "October 28, 2026 · 5:00 PM",
    proof: true,
  },
  {
    id: "equipment",
    title: "Check the sound equipment",
    committee: "Events & Logistics",
    assignee: "Casey Lim",
    progress: "Done",
    review: "Awaiting review",
    due: "Oct 29, 2026",
    date: "October 29, 2026 · 5:00 PM",
    proof: true,
  },
  {
    id: "program",
    title: "Finalize the program layout",
    committee: "Creatives & Media",
    assignee: "Avery Dela Cruz",
    progress: "Done",
    review: "Awaiting review",
    due: "Oct 30, 2026",
    date: "October 30, 2026 · 5:00 PM",
    proof: true,
  },
];

const EVENTS = [
  {
    id: "coordination",
    title: "Committee coordination session",
    committee: "Events & Logistics",
    day: "28",
    month: "OCT",
    date: "October 28, 2026",
    time: "9:00 AM – 12:00 PM",
    status: "Open now",
  },
  {
    id: "campus-event",
    title: "Campus event preparation",
    committee: "Creatives & Media",
    day: "29",
    month: "OCT",
    date: "October 29, 2026",
    time: "9:00 AM – 12:00 PM",
    status: "Upcoming",
  },
  {
    id: "workshop",
    title: "Media planning workshop",
    committee: "Creatives & Media",
    day: "26",
    month: "OCT",
    date: "October 26, 2026",
    time: "1:00 PM – 3:00 PM",
    status: "Closed",
  },
];

const ATTENDANCE = [
  {
    name: "Alex Rivera",
    id: "2026-001",
    event: "Committee coordination session",
    committee: "Events & Logistics",
    time: "Oct 28, 2026 · 9:02 AM",
    method: "QR",
    enteredBy: "Alex Rivera",
  },
  {
    name: "Sam Flores",
    id: "2026-002",
    event: "Committee coordination session",
    committee: "Events & Logistics",
    time: "Oct 28, 2026 · 9:04 AM",
    method: "QR",
    enteredBy: "Sam Flores",
  },
  {
    name: "Casey Lim",
    id: "2026-003",
    event: "Committee coordination session",
    committee: "Events & Logistics",
    time: "Oct 28, 2026 · 9:05 AM",
    method: "Manual",
    enteredBy: "Jamie Santos",
  },
  {
    name: "Alex Rivera",
    id: "2026-001",
    event: "Media planning workshop",
    committee: "Creatives & Media",
    time: "Oct 26, 2026 · 1:03 PM",
    method: "Manual",
    enteredBy: "Jamie Santos",
  },
];

const ACCOUNTS = [
  { name: "Alex Rivera", id: "2026-001", role: "Member", memberships: 2 },
  { name: "Sam Flores", id: "2026-002", role: "Member", memberships: 1 },
  { name: "Casey Lim", id: "2026-003", role: "Member", memberships: 1 },
  { name: "Jamie Santos", id: "FAC-001", role: "Head", memberships: 2 },
  { name: "Morgan Reyes", id: "FAC-002", role: "Head", memberships: 1 },
  { name: "Taylor Cruz", id: "ADM-001", role: "Administrator", memberships: 0 },
];

export type PreviewTask = (typeof TASKS)[number];

@Injectable({ providedIn: "root" })
export class PreviewDataService {
  readonly people = PEOPLE;
  readonly committees = COMMITTEES;
  readonly tasks = TASKS;
  readonly events = EVENTS;
  readonly attendance = ATTENDANCE;
  readonly accounts = ACCOUNTS;
}
