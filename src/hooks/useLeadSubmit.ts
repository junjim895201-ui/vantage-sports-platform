import type { FormEvent } from "react";
import { useLocation } from "react-router-dom";
import { captureFormData, saveLead, type LeadType } from "../lib/leads";
import { useI18n } from "../i18n";

export function useLeadSubmit(type: LeadType) {
  const { locale } = useI18n();
  const location = useLocation();

  return function handleLeadSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    saveLead({
      type,
      locale,
      sourcePath: location.pathname,
      data: captureFormData(form),
    });
  };
}
