export default function StatsSection() {
  const stats = [
    { label: "Retail Partners", value: "500+" },
    { label: "Cities Served", value: "25+" },
    { label: "Years Experience", value: "26" },
    { label: "Daily Output", value: "2k Mtrs" },
  ];

  return (
    <section className="bg-blue-50 py-12 border-y border-teal-100">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, i) => (
          <div key={i}>
            <div className="text-3xl font-bold text-blue-900 mb-1">{stat.value}</div>
            <div className="text-sm text-teal-700 font-medium uppercase">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
