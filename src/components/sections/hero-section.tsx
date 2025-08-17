"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { heroStats } from "@/lib/constants"
import { scrollToSection } from "@/utils/navigation"
import Image from "next/image"

interface HeroSectionProps {
  heroAnimated: boolean
}

export function HeroSection({ heroAnimated }: HeroSectionProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/image/bg.jpg" alt="Background" fill priority className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="mb-8">
              <h1
                className={`text-5xl lg:text-7xl font-bold mb-6 leading-tight transform transition-all duration-1000 ${
                  heroAnimated ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                MAX I & US
              </h1>
              <div
                className={`text-lg lg:text-xl leading-relaxed text-gray-200 max-w-2xl transform transition-all duration-1000 delay-300 ${
                  heroAnimated ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                <p className="mb-4">
                  Maxius là công ty bán dẫn tự phát triển duy nhất tập trung vào việc phát triển máy chủ hiệu suất cao.
                  Chúng tôi cung cấp các giải pháp chuyên biệt được điều chỉnh cho các lĩnh vực khác nhau của ngành CNTT
                  và nỗ lực xâm nhập thị trường toàn cầu với tư cách là công ty dẫn đầu trong công nghệ máy chủ.
                </p>
              </div>
              <div
                className={`text-xl font-medium text-orange-300 transform transition-all duration-1000 delay-500 ${
                  heroAnimated ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                Cùng nhau, chúng ta sẽ là những người giỏi nhất về giá trị và tốc độ.
              </div>
            </div>

            <div
              className={`flex flex-wrap gap-4 transform transition-all duration-1000 delay-700 ${
                heroAnimated ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <Button
                onClick={() => scrollToSection("about")}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Tìm hiểu thêm
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="border-2 border-white/30 hover:border-white text-black hover:bg-white/10 px-8 py-3 rounded-full font-semibold transition-all duration-300"
              >
                Liên hệ ngay
              </Button>
            </div>
          </div>

          <div
            className={`relative transform transition-all duration-1000 delay-500 ${
              heroAnimated ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-lg blur-xl" />
              <Card className="relative bg-white/5 backdrop-blur-sm border-white/10">
                <CardContent className="p-8">
                  <div className="grid grid-cols-2 gap-6">
                    {heroStats.map((stat, index) => (
                      <div
                        key={index}
                        className={`text-center transform transition-all duration-700 delay-${1000 + index * 200} ${
                          heroAnimated ? "scale-100 opacity-100" : "scale-95 opacity-0"
                        }`}
                      >
                        <div
                          className={`text-3xl font-bold mb-2 ${
                            index === 0
                              ? "text-orange-400"
                              : index === 1
                                ? "text-blue-400"
                                : index === 2
                                  ? "text-green-400"
                                  : "text-purple-400"
                          }`}
                        >
                          {stat.number}
                        </div>
                        <div className="text-sm text-gray-300">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1800 ${
          heroAnimated ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
        }`}
      >
        <button
          onClick={() => scrollToSection("about")}
          className="animate-bounce text-white/70 hover:text-white transition-colors"
        >
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
            <div className="w-1 h-3 bg-current rounded-full mt-2 animate-pulse" />
          </div>
        </button>
      </div>
    </section>
  )
}
