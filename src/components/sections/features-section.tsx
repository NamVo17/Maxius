import { Button } from "@/components/ui/button"
import { features, achievementStats } from "@/lib/constants"

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll transform transition-all duration-1000 translate-y-10 opacity-0">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">Tính năng nổi bật</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Khám phá các giải pháp công nghệ tiên tiến của Maxius
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-blue-500 mx-auto rounded-full mt-8" />
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group cursor-pointer animate-on-scroll transform transition-all duration-700 hover:scale-105 hover:-translate-y-2 translate-y-10 opacity-0 ${index === 0 ? "lg:scale-105" : ""}`}
              style={{ transitionDelay: `${300 + index * 200}ms` }}
            >
              <div
                className={`relative p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out bg-gradient-to-br ${feature.gradient} text-white overflow-hidden group-hover:shadow-3xl`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 transition-all duration-700 group-hover:scale-125 group-hover:bg-white/20" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12 transition-all duration-700 group-hover:scale-110 group-hover:bg-white/15" />

                <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 group-hover:scale-150 group-hover:rotate-45 group-hover:bg-white/10" />

                <div className="relative z-10">
                  <div className="w-16 h-16 flex items-center justify-center bg-white/20 rounded-2xl mb-6 group-hover:scale-125 group-hover:rotate-6 group-hover:bg-white/30 transition-all duration-500 ease-out backdrop-blur-sm">
                    <feature.icon className="h-8 w-8 text-white transition-all duration-300 group-hover:scale-110" />
                  </div>

                  <h3 className="text-2xl font-bold mb-2 transition-all duration-300 group-hover:text-white group-hover:scale-105">
                    {feature.title}
                  </h3>
                  <h4 className="text-lg font-semibold mb-4 text-white/90 transition-all duration-300 group-hover:text-white">
                    {feature.subtitle}
                  </h4>
                  <p className="text-white/80 leading-relaxed mb-4 transition-all duration-300 group-hover:text-white/95">
                    {feature.description}
                  </p>
                  <p className="text-sm text-white/70 leading-relaxed transition-all duration-300 group-hover:text-white/85">
                    {feature.additionalText}
                  </p>

                  <div className="mt-6">
                    <Button
                      variant="ghost"
                      className="bg-white/20 hover:bg-white/40 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all duration-500 ease-out backdrop-blur-sm hover:scale-110 hover:shadow-lg hover:-translate-y-1 group-hover:bg-white/35"
                    >
                      Tìm hiểu thêm
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 animate-on-scroll transform transition-all duration-1000 delay-1000 translate-y-10 opacity-0">
          <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-12 hover:shadow-lg transition-all duration-500">
            <h3 className="text-3xl font-bold text-slate-800 mb-6 text-center">Thành tựu và Con số</h3>
            <div className="grid md:grid-cols-4 gap-8">
              {achievementStats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center group cursor-pointer transition-all duration-300 hover:scale-110 hover:-translate-y-2"
                >
                  <div
                    className={`text-4xl font-bold mb-2 transition-all duration-300 group-hover:scale-125 ${
                      index === 0
                        ? "text-orange-500 group-hover:text-orange-600"
                        : index === 1
                          ? "text-blue-500 group-hover:text-blue-600"
                          : index === 2
                            ? "text-green-500 group-hover:text-green-600"
                            : "text-purple-500 group-hover:text-purple-600"
                    }`}
                  >
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium transition-colors duration-300 group-hover:text-gray-800">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-500 mt-1 transition-colors duration-300 group-hover:text-gray-600">
                    {stat.sublabel}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
