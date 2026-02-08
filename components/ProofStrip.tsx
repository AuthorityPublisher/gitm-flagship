const proofPoints = [
  { label: "Clinic Revenue", value: "$3M+" },
  { label: "Hotel Venture", value: "$3.5M" },
  { label: "Dean Chitren Partnership", value: "$380K+" },
  { label: "TCF Generated", value: "$27K" },
  { label: "RTD Subscribers", value: "17,000+" },
  { label: "Dr. Nick Instagram", value: "297K" },
  { label: "Objection Box Elite", value: "#1 All-Time" },
  { label: "Education Invested", value: "$250K+" },
  { label: "Patients Treated", value: "10,000+" },
  { label: "Sales Collected", value: "$1M+" },
];

export function ProofStrip() {
  return (
    <div className="overflow-hidden bg-navy py-4">
      <div className="animate-scroll flex gap-12 whitespace-nowrap">
        {[...proofPoints, ...proofPoints].map((point, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="text-sm font-bold text-gold">{point.value}</span>
            <span className="text-xs text-white/50">{point.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
