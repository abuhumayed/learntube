import { Menu } from 'lucide-react'
import logo from '../assets/LearnTube__1_-removebg-preview.png'

const PageHeader = () => {
  return (
    <div className="flex gap-10 lg:gap-20 justify-between">
      <div className="flex gap-4 items-center flex-shrink-0">
        <button>
          <Menu />
        </button>
        <a href="/">
          <img src={logo} alt="" height={140} width={140} />
        </a>
      </div>
      <div></div>
      <div></div>
    </div>
  )
}

export default PageHeader
