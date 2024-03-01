import { CallToAction } from "../components/CalltoAction";
import { Shortener } from "../components/Shortener";
import { Boost } from "../components/Boost";
import { Statistics } from "../components/Statistics";

const Home = () => {
  return (
    <main className='relative text-center space-y-6'>
      <CallToAction />

      <div className='bg-off-white'>
        <Shortener />
        <Statistics />
        <Boost />
      </div>
    </main>
  )
}

export default Home;
