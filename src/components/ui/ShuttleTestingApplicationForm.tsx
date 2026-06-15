import type { FormEvent } from "react";
import { useState } from "react";
import { useI18n } from "../../i18n";

const inputClass =
  "form-input mt-1 w-full rounded-lg border border-slate-200 px-3 py-2.5 text-base";

export default function ShuttleTestingApplicationForm() {
  const { content } = useI18n();
  const { testing, common } = content;
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="card border-emerald-200 bg-emerald-50 text-emerald-800">{common.formSuccessTesting}</div>
    );
  }

  const f = testing.applicationFields;

  return (
    <form className="card" onSubmit={handleSubmit} id="shuttle-testing-form">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-semibold text-slate-500">
          {f.organizationType}
          <select name="organizationType" required className={inputClass} defaultValue="">
            <option value="" disabled>
              {common.selectType}
            </option>
            {testing.organizationTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-semibold text-slate-500">
          {f.country}
          <select name="country" required className={inputClass} defaultValue="">
            <option value="" disabled>
              {common.selectCountry}
            </option>
            {common.countries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-semibold text-slate-500">
          {f.organizationName}
          <input name="organizationName" required className={inputClass} />
        </label>
        <label className="block text-sm font-semibold text-slate-500">
          {f.contactPerson}
          <input name="contactPerson" required className={inputClass} />
        </label>
        <label className="block text-sm font-semibold text-slate-500">
          {f.whatsapp}
          <input name="whatsapp" type="tel" required className={inputClass} />
        </label>
        <label className="block text-sm font-semibold text-slate-500">
          {f.email}
          <input name="email" type="email" required className={inputClass} />
        </label>
        <label className="block text-sm font-semibold text-slate-500">
          {f.memberCount}
          <select name="memberCount" className={inputClass} defaultValue={testing.memberOptions[0]}>
            {testing.memberOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-semibold text-slate-500">
          {f.productsInterested}
          <select name="productsInterested" required className={inputClass} defaultValue={testing.productTestOptions[0]}>
            {testing.productTestOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-semibold text-slate-500 sm:col-span-2">
          {f.courtsOrStores}
          <input name="courtsOrStores" placeholder={common.courtsPlaceholder} className={inputClass} />
        </label>
        <label className="block text-sm font-semibold text-slate-500 sm:col-span-2">
          {f.message}
          <textarea
            name="message"
            rows={4}
            className="form-input mt-1 w-full resize-y rounded-lg border border-slate-200 px-3 py-2.5 text-base"
            placeholder={common.testingMessagePlaceholder}
          />
        </label>
      </div>
      <p className="mt-3 text-xs text-slate-500">{testing.applicationNote}</p>
      <button type="submit" className="btn btn-primary mt-4 w-full sm:w-auto">
        {f.submit}
      </button>
    </form>
  );
}
