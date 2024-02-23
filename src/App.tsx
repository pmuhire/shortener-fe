import { CallToAction } from "./components/CalltoAction";
import { Header } from "./components/Header";
import { Shortener } from "./components/Shortener";
import { Boost } from "./components/Boost";
import { Footer } from "./components/Footer";
import { Statistics } from "./components/Statistics";

export default function App() {
  return (
    <div className='overflow-clip'>
      <Header />
      <main className='relative text-center space-y-6'>
        <CallToAction />

        <div className='bg-off-white'>
					<Shortener />
					<Statistics />
					<Boost />
				</div>
      </main>
      <Footer />
    </div>
  )
}