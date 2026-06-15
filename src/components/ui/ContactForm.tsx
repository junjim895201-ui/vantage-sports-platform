import type { FormEvent } from "react";
import { useState } from "react";
import { useI18n } from "../../i18n";

export default function ContactForm() {
  const { content } = useI18n();
  const { contact, common } = content;
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="card border-emerald-200 bg-emerald-50 text-emerald-800">{common.formSuccessContact}</div>
    );
  }

  const f = contact.fields;

  return (
    <form className="card" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-semibold text-slate-500">
          {f.company}
          <input name="company" required className="form-input mt-1 w-full rounded-lg border border-slate-200 px-3 py-2.5 text-base" />
        </label>
        <label className="block text-sm font-semibold text-slate-500">
          {f.name}
          <input name="name" required className="form-input mt-1 w-full rounded-lg border border-slate-200 px-3 py-2.5 text-base" />
        </label>
        <label className="block text-sm font-semibold text-slate-500">
          {f.email}
          <input name="email" type="email" required className="form-input mt-1 w-full rounded-lg border border-slate-200 px-3 py-2.5 text-base" />
        </label>
        <label className="block text-sm font-semibold text-slate-500">
          {f.phone}
          <input name="phone" type="tel" className="form-input mt-1 w-full rounded-lg border border-slate-200 px-3 py-2.5 text-base" />
        </label>
        <label className="block text-sm font-semibold text-slate-500">
          {f.country}
          <input name="country" required className="form-input mt-1 w-full rounded-lg border border-slate-200 px-3 py-2.5 text-base" />
        </label>
        <label className="block text-sm font-semibold text-slate-500">
          {f.interest}
          <select name="interest" defaultValue={contact.interests[0]} className="form-input mt-1 w-full rounded-lg border border-slate-200 px-3 py-2.5 text-base">
            {contact.interests.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-semibold text-slate-500 sm:col-span-2">
          {f.message}
          <textarea
            name="message"
            required
            rows={5}
            className="mt-1 w-full resize-y rounded-lg border border-slate-200 px-3 py-2.5 text-base"
          />
        </label>
      </div>
      <p className="mt-3 text-xs text-slate-500">{contact.formNote}</p>
      <button type="submit" className="btn btn-primary mt-4 w-full sm:w-auto">
        {f.submit}
      </button>
    </form>
  );
}
