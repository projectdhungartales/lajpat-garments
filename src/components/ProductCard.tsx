interface ProductCardProps {
  title: string;
  description: string;
  icon: string;
  bgColor?: string;
  lightBg?: string;
  textColor?: string;
  borderColor?: string;
}

export default function ProductCard({ title, description, icon, bgColor = "from-blue-500 to-blue-600", lightBg = "bg-blue-50", textColor = "text-blue-900", borderColor = "from-blue-200 to-blue-100" }: ProductCardProps) {
  return (
    <div className={`group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition p-6 ${lightBg}`}>
      {/* Gradient Border Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${borderColor} rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300`}></div>
      
      {/* Soft Inner Content */}
      <div className="absolute inset-0.5 bg-gradient-to-br via-white rounded-2xl z-0"></div>
      
      {/* Gradient Accent Glow */}
      <div className={`absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br ${bgColor} rounded-full blur-3xl opacity-15 group-hover:opacity-25 transition duration-300`}></div>
      
      <div className="relative z-10">
        <div className="text-6xl mb-4 group-hover:scale-110 transition duration-300">{icon}</div>
        <h3 className={`text-xl font-bold ${textColor} mb-2 group-hover:translate-y-0.5 transition`}>{title}</h3>
        <p className="text-slate-600 text-sm mb-4 leading-relaxed">{description}</p>
        <button className={`${textColor} font-semibold hover:opacity-70 transition text-sm group-hover:translate-x-1 duration-300`}>
          Learn More →
        </button>
      </div>
    </div>
  );
}
