import type { FeeGuide } from "@/types/cms";
import { cn } from "@/lib/utils";

const feeTypeLabels: Record<string, string> = {
  hourly: "Hourly Rate",
  fixed: "Fixed Fee",
  cfa: "No Win, No Fee",
  "legal-aid": "Legal Aid",
};

const feeTypeColors: Record<string, string> = {
  hourly: "bg-blue-50 text-blue-700",
  fixed: "bg-green-50 text-green-700",
  cfa: "bg-amber-50 text-amber-700",
  "legal-aid": "bg-purple-50 text-purple-700",
};

interface FeeTableProps {
  guide: FeeGuide;
}

export default function FeeTable({ guide }: FeeTableProps) {
  return (
    <div className="space-y-8">
      {guide.services.map((service) => (
        <div key={service.name} className="bg-white rounded-xl border border-[#0f172a]/8 overflow-hidden shadow-sm">
          {/* Service header */}
          <div className="px-6 py-4 bg-[#faf9f7] border-b border-[#0f172a]/8 flex items-start gap-3">
            <div className="flex-1">
              <div className="flex items-center gap-3 flex-wrap">
                <h3 className="font-semibold text-[#0f172a] text-base">{service.name}</h3>
                <span
                  className={cn(
                    "text-xs px-2.5 py-0.5 rounded-full font-medium",
                    feeTypeColors[service.type]
                  )}
                >
                  {feeTypeLabels[service.type]}
                </span>
              </div>
              <p className="text-[#0f172a]/60 text-sm mt-1">{service.description}</p>
            </div>
          </div>

          {/* Fee table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#0f172a]/5">
                  <th
                    scope="col"
                    className="px-6 py-3 text-left font-semibold text-[#0f172a]/60 text-xs uppercase tracking-wider"
                  >
                    Fee Type / Grade
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left font-semibold text-[#0f172a]/60 text-xs uppercase tracking-wider"
                  >
                    Fee Range
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left font-semibold text-[#0f172a]/60 text-xs uppercase tracking-wider hidden md:table-cell"
                  >
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#0f172a]/5">
                {service.ranges.map((range, i) => (
                  <tr key={i} className="hover:bg-[#faf9f7] transition-colors">
                    <td className="px-6 py-4 font-medium text-[#0f172a]">
                      {range.label}
                    </td>
                    <td className="px-6 py-4 text-[#0f172a]/80">
                      {range.fromGBP === 0 ? (
                        <span className="font-semibold text-[#c9a84c]">£0 upfront</span>
                      ) : (
                        <span>
                          <span className="font-semibold">
                            £{range.fromGBP.toLocaleString()}
                          </span>
                          {range.toGBP && (
                            <span className="text-[#0f172a]/50">
                              {" "}– £{range.toGBP.toLocaleString()}
                            </span>
                          )}
                          {range.unit && (
                            <span className="text-[#0f172a]/40 text-xs ml-1">
                              {range.unit === "per-hour" ? "/hr" : range.unit === "per-matter" ? " per matter" : " per document"}
                            </span>
                          )}
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-[#0f172a]/50 text-xs hidden md:table-cell">
                      {range.notes ?? "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer notes */}
          <div className="px-6 py-3 bg-[#faf9f7] border-t border-[#0f172a]/5 space-y-1">
            <p className="text-[#0f172a]/50 text-xs">{service.vatNote}</p>
            {service.disbursementsNote && (
              <p className="text-[#0f172a]/50 text-xs">{service.disbursementsNote}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
