import MessageForm from "@/components/MessageForm"
import { Toaster } from "sonner"

const Home = () => {
  return (
<>
    <Toaster richColors position="top-right" />
    <MessageForm/>
</>
  )
}

export default Home