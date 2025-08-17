import { Server, Cpu, Layers, Link, Mail, Phone, ExternalLink } from "lucide-react"
import type { NavigationItem, FeatureItem, StatItem, ContactItem, BusinessArea } from "@/types"

export const navigationItems: NavigationItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "features", label: "Features" },
  { id: "contact", label: "Contact" },
]

export const heroStats: StatItem[] = [
  { number: "1000+", label: "Đối tác doanh nghiệp" },
  { number: "25+", label: "Năm kinh nghiệm" },
  { number: "100+", label: "Bằng sáng chế" },
  { number: "50+", label: "Giải thưởng" },
]

export const businessAreas: BusinessArea[] = [
  {
    number: "1",
    title: "Bán dẫn tự sản xuất",
    description: "Tự sản xuất",
    highlight: "Tự sản xuất",
  },
  {
    number: "2",
    title: "Sản xuất và bán máy chủ hiệu suất cao với bán dẫn tự sản xuất",
    description: "Hiệu suất cao",
    highlight: "Hiệu suất cao",
  },
  {
    number: "3",
    title: "Xây dựng trung tâm dữ liệu Blockchain hoạt động dựa trên máy chủ hiệu suất cao",
    description: "Blockchain IDC",
    highlight: "Blockchain IDC",
  },
  {
    number: "4",
    title: "Thiết lập giải pháp liên quan đến",
    description: "Blockchain (IPFS)",
    highlight: "Blockchain (IPFS)",
  },
]

export const features: FeatureItem[] = [
  {
    icon: Server,
    title: "Sản phẩm",
    subtitle: "Máy chủ hiệu suất cao",
    description:
      "Máy chủ hiệu suất cao với nhiều khả năng dịch vụ mở rộng. Xây dựng IDC; kết hợp công nghệ lưu trữ mới nhất áp dụng cho các thiết bị I/O khác nhau. Các giải pháp Blockchain đa dạng, bao gồm IPFS.",
    additionalText:
      "Maxius sẽ tiếp tục phát triển như một công ty trong thị trường toàn cầu bằng cách cung cấp nhiều sản phẩm và giải pháp đa dạng.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Cpu,
    title: "Công nghệ",
    subtitle: "Hệ thống tự phát triển",
    description:
      "Dựa trên hơn 20 năm kinh nghiệm nghiên cứu và công nghệ, chúng tôi là công ty duy nhất tại Hàn Quốc sản xuất máy chủ HPC sử dụng bán dẫn hệ thống tự phát triển.",
    additionalText:
      "Cung cấp các giải pháp chuyên biệt cho trung tâm dữ liệu thông minh trong ngành CNTT. Với các dịch vụ của chúng tôi, Maxius nỗ lực cung cấp các sản phẩm và giải pháp khác biệt.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Layers,
    title: "Ứng dụng",
    subtitle: "Giải pháp đa lĩnh vực",
    description:
      "Các sản phẩm đa dạng của Maxius được sử dụng cho phân tích AI/gen, edge computing, trung tâm IDC, cũng như các giải pháp khác nhau được sử dụng cho phân tích dữ liệu lớn.",
    additionalText:
      "Các chức năng xử lý phân tán và IPFS IDC. Maxius sẽ cung cấp các sản phẩm và giải pháp có thể phục vụ cho các lĩnh vực khác nhau thông qua R&D và giao tiếp.",
    gradient: "from-green-500 to-teal-500",
  },
  {
    icon: Link,
    title: "Blockchain",
    subtitle: "Lưu trữ và dịch vụ",
    description: "Lưu trữ và dịch vụ được sử dụng trong Metaverse. Dịch vụ lưu trữ và ứng dụng IPFS trong Web3.0.",
    additionalText:
      "Maxius cung cấp cả H/W và S/W, được tối ưu hóa cho lưu trữ phi tập trung để phù hợp với nhu cầu khách hàng và tạo ra giá trị gia tăng tốt nhất.",
    gradient: "from-purple-500 to-pink-500",
  },
]

export const achievementStats: StatItem[] = [
  {
    number: "1000+",
    label: "Đối tác doanh nghiệp",
    sublabel: "Bao gồm chính phủ, giáo dục, sản xuất",
  },
  {
    number: "250+",
    label: "Đối tác giáo dục",
    sublabel: "KAIST, SNU, các trường đại học hàng đầu",
  },
  {
    number: "120+",
    label: "Đối tác sản xuất",
    sublabel: "Samsung, LG, Hanwha Systems",
  },
  {
    number: "350+",
    label: "Đối tác truyền thông",
    sublabel: "Các công ty phát sóng và truyền thông",
  },
]

export const contactItems: ContactItem[] = [
  { icon: Mail, title: "Công ty", contact: "support@maxius.io", href: "mailto:support@maxius.io" },
  { icon: ExternalLink, title: "Bảo hành", contact: "Tìm hiểu thêm", href: "#" },
  { icon: Phone, title: "Hỗ trợ kỹ thuật", contact: "support@maxius.io", href: "mailto:support@maxius.io" },
]
