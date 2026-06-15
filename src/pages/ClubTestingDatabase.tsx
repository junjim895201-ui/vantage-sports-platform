import { useCallback, useState } from "react";
import Seo from "../components/seo/Seo";
import LeadsTable from "../components/ui/LeadsTable";
import LocalizedLink from "../components/ui/LocalizedLink";
import PageHero from "../components/ui/PageHero";
import { getLeadsByType } from "../lib/leads";
import { useI18n } from "../i18n";

export default function ClubTestingDatabasePage() {
  const { content } = useI18n();
  const { clubTestingDatabase, common } = content;
  const [leads, setLeads] = useState(() => getLeadsByType("testing"));

  const refresh = useCallback(() => setLeads(getLeadsByType("testing")), []);

  const stats = {
    total: leads.length,
    clubs: leads.filter((l) => /club|academy|俱乐部|学院/i.test(l.data.organizationType || "")).length,
    shops: leads.filter((l) => /shop|店/i.test(l.data.organizationType || "")).length,
    distributors: leads.filter((l) => /distributor|分销/i.test(l.data.organizationType || "")).length,
  };

  return (
    <>
      <Seo
        title={clubTestingDatabase.seo.title}
        description={clubTestingDatabase.seo.description}
        path="/club-testing-database"
        keywords={common.seoKeywords.clubTestingDatabase}
        noindex
      />
      <PageHero title={clubTestingDatabase.title} subtitle={clubTestingDatabase.subtitle} />

      <section className="section">
        <div className="container-main">
          <p className="max-w-3xl text-sm text-slate-600">{clubTestingDatabase.intro}</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="card text-center">
              <p className="text-2xl font-bold text-navy">{stats.total}</p>
              <p className="text-xs text-slate-500">{clubTestingDatabase.statsLabels.total}</p>
            </div>
            <div className="card text-center">
              <p className="text-2xl font-bold text-navy">{stats.clubs}</p>
              <p className="text-xs text-slate-500">{clubTestingDatabase.statsLabels.clubs}</p>
            </div>
            <div className="card text-center">
              <p className="text-2xl font-bold text-navy">{stats.shops}</p>
              <p className="text-xs text-slate-500">{clubTestingDatabase.statsLabels.shops}</p>
            </div>
            <div className="card text-center">
              <p className="text-2xl font-bold text-navy">{stats.distributors}</p>
              <p className="text-xs text-slate-500">{clubTestingDatabase.statsLabels.distributors}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-main">
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-xl font-bold text-navy">{clubTestingDatabase.title}</h2>
            <button type="button" onClick={refresh} className="btn btn-secondary w-full text-sm sm:w-auto">
              {common.leadsTable.refresh}
            </button>
          </div>
          <p className="mb-4 text-xs text-slate-500">{common.leadsTable.localStorageNote}</p>
          <LeadsTable leads={leads} showType={false} />
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <LocalizedLink to="/shuttle-testing#apply" className="btn btn-primary w-full sm:w-auto">
              {common.applyFreeShuttleTesting}
            </LocalizedLink>
            <LocalizedLink to="/distributor-crm" className="btn btn-secondary w-full sm:w-auto">
              {common.leadsTable.viewCrm}
            </LocalizedLink>
          </div>
        </div>
      </section>
    </>
  );
}
