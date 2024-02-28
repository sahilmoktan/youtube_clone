import {Bell, Menu, Mic, Search, Upload, User} from "lucide-react"
import logo from "../assets/R.png"
import { Button } from "../components/Button"

const PageHeader = () => {
  return (
    <div className='flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4'>
        <div className='flex gap-4 items-center flex-shrink-0'>
            <Button variant="ghost" size="icon">
                <Menu/>
            </Button>
            <a href="/">
                <img src={logo} className='h-6'/>
            </a>
        </div>
        
        
    </div>
  )
}

export default PageHeader