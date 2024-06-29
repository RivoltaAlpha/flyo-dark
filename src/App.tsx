import Header from './components/header/header';
import {Hero} from './components/main/main';
import {FeaturesGrid} from './components/main/main';
import {StayProductive} from './components/main/main';
import {Testimonials} from './components/main/main';
import {CallToAction} from './components/main/main';
import {Footer} from './components/footer/footer';





const App: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <main>
        <Hero />
        <FeaturesGrid />
        <StayProductive />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default App;