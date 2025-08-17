import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ExternalLink } from "lucide-react"
import { contactItems } from "@/lib/constants"

export function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16 animate-on-scroll transform transition-all duration-1000 translate-y-10 opacity-0">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">Liên hệ với chúng tôi</h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Sẵn sàng hợp tác cùng Maxius? Hãy liên hệ để khám phá các giải pháp công nghệ tiên tiến
          </p>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-orange-500 to-blue-500 mx-auto rounded-full mt-6 sm:mt-8" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <div className="animate-on-scroll transform transition-all duration-1000 delay-300 -translate-x-10 opacity-0">
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Thông tin liên hệ</h3>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                  Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn. Hãy liên hệ với chúng tôi qua các kênh dưới đây hoặc
                  gửi tin nhắn trực tiếp.
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6 mx-2 sm:mx-0">
                {contactItems.map((item, index) => (
                  <div
                    key={index}
                    className="group animate-on-scroll transform transition-all duration-700 translate-x-5 opacity-0"
                    style={{ transitionDelay: `${500 + index * 200}ms` }}
                  >
                    <a
                      href={item.href}
                      className="flex items-center space-x-3 sm:space-x-4 p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105"
                    >
                      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-500 to-blue-500 rounded-lg flex items-center justify-center">
                        <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-base sm:text-lg font-semibold text-white mb-1">{item.title}</h4>
                        <p className="text-sm sm:text-base text-gray-300 group-hover:text-orange-300 transition-colors truncate">
                          {item.contact}
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 group-hover:text-orange-400 transition-colors" />
                      </div>
                    </a>
                  </div>
                ))}
              </div>

              <Card className="bg-white/5 backdrop-blur-sm border-white/10 mx-2 sm:mx-0">
                <CardContent className="p-4 sm:p-6">
                  <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Địa chỉ văn phòng</h4>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-3 sm:mb-4">
                    5F 12-30, Simin-daero 327beon-gil, Dongan-gu, Anyang-si, Gyeonggi-do, Republic of Korea
                  </p>
                  <div className="space-y-1 sm:space-y-2">
                    <p className="text-sm sm:text-base text-gray-300">
                      <span className="font-medium">Tel:</span> 02. 851. 2662
                    </p>
                    <p className="text-sm sm:text-base text-gray-300">
                      <span className="font-medium">Fax:</span> 02. 851. 2655
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="animate-on-scroll transform transition-all duration-1000 delay-500 translate-x-10 opacity-0 mt-8 lg:mt-0 mx-2 sm:mx-0">
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Gửi tin nhắn</h3>
                <form className="space-y-4 sm:space-y-6">
                  <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Họ và tên *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        required
                        className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
                        placeholder="Nhập họ và tên"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
                        placeholder="Nhập email"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Công ty
                    </label>
                    <Input
                      id="company"
                      type="text"
                      className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
                      placeholder="Nhập tên công ty"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Tin nhắn *
                    </label>
                    <Textarea
                      id="message"
                      required
                      rows={6}
                      maxLength={500}
                      className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:ring-orange-500 focus:border-transparent resize-none text-sm sm:text-base"
                      placeholder="Nhập tin nhắn của bạn (tối đa 500 ký tự)"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm sm:text-base"
                  >
                    Gửi tin nhắn
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
