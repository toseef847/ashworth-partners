import { ShieldCheck, Award, Users, Clock } from "lucide-react";

const signals = [
  {
    icon: ShieldCheck,
    value: "SRA Regulated",
    label: "Authorised & Regulated by the Solicitors Regulation Authority",
  },
  {
    icon: Award,
    value: "30+",
    label: "Years of Combined Partner Experience",
  },
  {
    icon: Users,
    value: "500+",
    label: "Matters Successfully Resolved",
  },
  {
    icon: Clock,
    value: "24hr",
    label: "Response Time Guarantee on All Enquiries",
  },
];

export default function TrustSignals() {
  return (
    <section
      className="bg-[#0f172a]"
      aria-labelledby="trust-signals-heading"
    >
      <h2 id="trust-signals-heading" className="sr-only">
        Why Choose Ashworth & Partners
      </h2>
      <div className="container-site py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-xl overflow-hidden">
          {signals.map((signal) => {
            const Icon = signal.icon;
            return (
              <div
                key={signal.value}
                className="bg-[#0f172a] px-6 py-7 flex flex-col items-center text-center gap-3"
              >
                <Icon
                  size={22}
                  className="text-[#c9a84c]"
                  aria-hidden="true"
                />
                <p className="font-display text-white font-semibold text-2xl leading-none">
                  {signal.value}
                </p>
                <p className="text-white/50 text-xs leading-snug max-w-[120px]">
                  {signal.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
