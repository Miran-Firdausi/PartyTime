import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";


export const metadata = {
  title: "Party Time",
  description: "Party snacks at prices that make celebrating even sweeter",
};


export default function Home() {
  return (
    <div>
        <Navbar />
        <Hero />
    </div>
  )
}
