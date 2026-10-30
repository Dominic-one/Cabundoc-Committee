import { CommonModule } from "@angular/common";
import { RouterLink, RouterLinkActive, ActivatedRoute } from "@angular/router";
import { inject } from "@angular/core";
import {
  IonIcon,
  IonContent,
  IonModal,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonSearchbar,
} from "@ionic/angular";
import type { Role } from "./preview-data.service";
export const UI = [
  CommonModule,
  RouterLink,
  RouterLinkActive,
  IonIcon,
  IonContent,
  IonModal,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonSearchbar,
] as const;
// Reads navigation context only; it is not authentication or an access guard.
export function previewRole(): Role {
  return inject(ActivatedRoute).parent?.snapshot.data["role"] || "member";
}
