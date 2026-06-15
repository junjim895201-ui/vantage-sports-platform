import type { FormEvent } from "react";
import { useState } from "react";
import { useI18n } from "../../i18n";

const inputClass =
  "form-input mt-1 w-full rounded-lg border border-slate-200 px-3 py-2.5 text-base";

export default function DistributorLeadForm() {
  const { content } = useI18n();
  const { distributor, common } = content;
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="card border-emerald-200 bg-emerald-50 text-emerald-800">{common.formSuccessDistributor}</div>
    );
  }

  const f = distributor.leadFormFields;

  return (
    <form className="card" onSubmit={handleSubmit} id="distributor-lead-form">
      <div className="grid gap-4 sm:grid-cols-2">
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
            <option value={common.otherAsean}>{common.otherAsean}</option>
          </select>
        </label>
        <label className="block text-sm font-semibold text-slate-500">
          {f.company}
          <input name="company" required className={inputClass} />
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
        <label className="block text-sm font-semibold text-slate-500 sm:col-span-2">
          {f.facebookPage}
          <input name="facebookPage" type="url" placeholder={common.facebookPlaceholder} className={inputClass} />
        </label>
        <label className="block text-sm font-semibold text-slate-500 sm:col-span-2">
          {f.currentBrands}
          <input
            name="currentBrands"
            placeholder={common.distributorBrandsPlaceholder}
            className={inputClass}
          />
        </label>
        <label className="block text-sm font-semibold text-slate-500">
          {f.monthlyVolume}
          <select name="monthlyVolume" required className={inputClass} defaultValue={distributor.volumeOptions[0]}>
            {distributor.volumeOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-semibold text-slate-500">
          {f.interestedProducts}
          <select
            name="interestedProducts"
            required
            className={inputClass}
            defaultValue={distributor.productOptions[0]}
          >
            {distributor.productOptions.map((opt) => (
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
            rows={4}
            className="form-input mt-1 w-full resize-y rounded-lg border border-slate-200 px-3 py-2.5 text-base"
          />
        </label>
      </div>
      <p className="mt-3 text-xs text-slate-500">{distributor.leadFormNote}</p>
      <button type="submit" className="btn btn-primary mt-4 w-full sm:w-auto">
        {f.submit}
      </button>
    </form>
  );
}
