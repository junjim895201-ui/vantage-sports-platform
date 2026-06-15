import { useCallback, useState } from "react";
import Seo from "../components/seo/Seo";
import LeadsTable from "../components/ui/LeadsTable";
import LocalizedLink from "../components/ui/LocalizedLink";
import PageHero from "../components/ui/PageHero";
import { exportLeadsJson, getLeads, updateLeadStatus, type LeadStatus } from "../lib/leads";
import { useI18n } from "../i18n";

export default function DistributorCrmPage() {
  const { content } = useI18n();
  const { distributorCrm, common } = content;
  const [leads, setLeads] = useState(() => getLeads());
  const stats = {
    total: leads.length,
    new: leads.filter((l) => l.status === "new").length,
    distributor: leads.filter((l) => l.type === "distributor").length,
    contact: leads.filter((l) => l.type === "contact").length,
  };

  const refresh = useCallback(() => setLeads(getLeads()), []);

  function handleExport() {
    const blob = new Blob([exportLeadsJson()], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `vantage-leads-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function handleStatusChange(id: string, status: LeadStatus) {
    updateLeadStatus(id, status);
    refresh();
  }

  return (
    <>
      <Seo
        title={distributorCrm.seo.title}
        description={distributorCrm.seo.description}
        path="/distributor-crm"
        keywords={common.seoKeywords.distributorCrm}
        noindex
      />
      <PageHero title={distributorCrm.title} subtitle={distributorCrm.subtitle} />

      <section className="section">
        <div className="container-main">
          <p className="max-w-3xl text-sm text-slate-600">{distributorCrm.intro}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {distributorCrm.features.map((f) => (
              <div key={f.title} className="card">
                <h3 className="font-semibold text-navy">{f.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-main">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-xl font-bold text-navy">{distributorCrm.pipelineTitle}</h2>
            <div className="flex flex-wrap gap-2">
              <button type="button" onClick={refresh} className="btn btn-secondary text-sm">
                {common.leadsTable.refresh}
              </button>
              <button type="button" onClick={handleExport} className="btn btn-primary text-sm">
                {common.leadsTable.exportJson}
              </button>
            </div>
          </div>
          <ol className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {distributorCrm.pipelineSteps.map((step, i) => (
              <li key={step} className="card flex items-center gap-2 text-sm">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy text-xs font-bold text-white">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
          <div className="mt-6 grid gap-3 sm:grid-cols-4">
            <div className="card text-center">
              <p className="text-2xl font-bold text-navy">{stats.total}</p>
              <p className="text-xs text-slate-500">{common.leadsTable.total}</p>
            </div>
            <div className="card text-center">
              <p className="text-2xl font-bold text-gold">{stats.new}</p>
              <p className="text-xs text-slate-500">{common.leadsTable.newLeads}</p>
            </div>
            <div className="card text-center">
              <p className="text-2xl font-bold text-navy">{stats.distributor}</p>
              <p className="text-xs text-slate-500">{common.leadTypes.distributor}</p>
            </div>
            <div className="card text-center">
              <p className="text-2xl font-bold text-navy">{stats.contact}</p>
              <p className="text-xs text-slate-500">{common.leadTypes.contact}</p>
            </div>
          </div>
          <p className="mt-4 text-xs text-slate-500">{common.leadsTable.localStorageNote}</p>
          <div className="mt-5">
            <LeadsTable leads={leads} onStatusChange={handleStatusChange} />
          </div>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <LocalizedLink to="/distributor-program#apply" className="btn btn-primary w-full sm:w-auto">
              {common.distributorApplication}
            </LocalizedLink>
            <LocalizedLink to="/club-testing-database" className="btn btn-secondary w-full sm:w-auto">
              {common.leadsTable.viewDatabase}
            </LocalizedLink>
          </div>
        </div>
      </section>
    </>
  );
}
