interface ProductCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function ProductCard({ title, description, icon }: ProductCardProps) {
  return (
    <div className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition border border-slate-100 p-6">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600 text-sm mb-4">{description}</p>
      <button className="text-blue-700 font-semibold hover:text-blue-800 transition text-sm">
        Learn More →
      </button>
    </div>
  );
}
