import type { LeadRecord, LeadStatus } from "../../lib/leads";
import { useI18n } from "../../i18n";

type Props = {
  leads: LeadRecord[];
  onStatusChange?: (id: string, status: LeadStatus) => void;
  showType?: boolean;
};

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleString();
  } catch {
    return iso;
  }
}

function contactLabel(lead: LeadRecord) {
  return (
    lead.data.contactPerson ||
    lead.data.name ||
    lead.data.organizationName ||
    lead.data.company ||
    "—"
  );
}

function countryLabel(lead: LeadRecord) {
  return lead.data.country || "—";
}

export default function LeadsTable({ leads, onStatusChange, showType = true }: Props) {
  const { content } = useI18n();
  const { common } = content;
  const t = common.leadsTable;
  const types = common.leadTypes;
  const statuses = common.leadStatuses;

  if (leads.length === 0) {
    return (
      <div className="card border-dashed border-slate-200 bg-slate-50 text-center text-sm text-slate-500">
        {t.noData}
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-slate-200">
      <table className="w-full min-w-[640px] text-left text-sm">
        <thead className="bg-slate-50 text-xs font-semibold uppercase text-slate-500">
          <tr>
            <th className="px-3 py-3">{t.date}</th>
            {showType && <th className="px-3 py-3">{t.type}</th>}
            <th className="px-3 py-3">{t.country}</th>
            <th className="px-3 py-3">{t.contact}</th>
            <th className="px-3 py-3">{t.status}</th>
            <th className="hidden px-3 py-3 sm:table-cell">{t.source}</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {leads.map((lead) => (
            <tr key={lead.id} className="bg-white">
              <td className="whitespace-nowrap px-3 py-3 text-xs text-slate-500">
                {formatDate(lead.submittedAt)}
              </td>
              {showType && (
                <td className="px-3 py-3 font-medium text-navy">{types[lead.type]}</td>
              )}
              <td className="px-3 py-3">{countryLabel(lead)}</td>
              <td className="px-3 py-3">{contactLabel(lead)}</td>
              <td className="px-3 py-3">
                {onStatusChange ? (
                  <select
                    value={lead.status}
                    onChange={(e) => onStatusChange(lead.id, e.target.value as LeadStatus)}
                    className="rounded border border-slate-200 px-2 py-1 text-xs"
                  >
                    {(Object.keys(statuses) as LeadStatus[]).map((s) => (
                      <option key={s} value={s}>
                        {statuses[s]}
                      </option>
                    ))}
                  </select>
                ) : (
                  <span className="text-xs font-medium text-slate-600">{statuses[lead.status]}</span>
                )}
              </td>
              <td className="hidden px-3 py-3 text-xs text-slate-400 sm:table-cell">{lead.sourcePath}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
