import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { businessAreas } from "@/lib/constants"
import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll transform transition-all duration-1000 translate-y-10 opacity-0">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">Về chúng tôi</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-blue-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-on-scroll transform transition-all duration-1000 delay-300 -translate-x-10 opacity-0">
            <div className="relative">
              <Image
                src="/image/about.jpg"
                alt="Maxius Technology"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl object-cover w-full h-96"
              />
              <Card className="absolute -bottom-6 -right-6 bg-white shadow-xl">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-orange-500 mb-1">25+</div>
                  <div className="text-sm text-gray-600">Năm kinh nghiệm</div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="animate-on-scroll transform transition-all duration-1000 delay-500 translate-x-10 opacity-0">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Lĩnh vực kinh doanh chính</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Maxius tập trung vào bốn lĩnh vực kinh doanh cốt lõi, từ phát triển bán dẫn đến xây dựng hệ thống
                  Blockchain hiện đại.
                </p>
              </div>

              <div className="space-y-6">
                {businessAreas.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 animate-on-scroll transform transition-all duration-700 translate-x-5 opacity-0"
                    style={{ transitionDelay: `${800 + index * 200}ms` }}
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {item.number}
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700 leading-relaxed">
                        {item.number}.{" "}
                        <span>
                          {item.title} <span className="font-semibold text-orange-600">{item.highlight}</span>
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <Button className="bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  Xem chi tiết
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
