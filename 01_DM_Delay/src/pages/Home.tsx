import MessageForm from "@/components/MessageForm"
import { Toaster } from "sonner"

const Home = () => {
  return (
<>
    <Toaster richColors position="top-center" />
    <MessageForm/>
</>
  )
}

export default Home