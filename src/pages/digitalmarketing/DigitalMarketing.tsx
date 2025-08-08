import digitalHero from "../../assets/digitalHero.jpg";
import sidePhoto from "../../assets/sidephotos.jpg";
import HowItWorks from "./component/HowItWorks";
import PricingPackages from "./component/Pricing";
import ServicesSection from './component/ServicesSection';

export default function DigitalMarketing() {
  return (
    <div className="overflow-hidden">
      <div
        className="relative w-full h-[80vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${digitalHero})` }}
      >
        <div className="absolute inset-0 bg-black/70 z-10"></div>

        <div className="relative z-20 max-w-6xl w-full px-6 grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="text-white space-y-6">
            <h1 className="text-5xl font-bold leading-tight">
              Marketing Digital Axé sur les Résultats
            </h1>
            <p className="text-lg text-gray-300">
              Nous sommes spécialisés dans les stratégies qui développent votre activité grâce à :
            </p>
            <a href="#pricing" className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-base font-medium rounded shadow">
              Commencer
            </a>
          </div>

          <div className="relative mt-12 md:mt-24 hidden md:block">
            <div className="grid grid-cols-2 grid-rows-2 gap-4 transform md:translate-y-12">
              {[1, 2, 3, 4].map((_, index) => (
                <div key={index} className="relative w-full h-full">
                  <img
                    src={sidePhoto}
                    alt={`Visuel Marketing ${index + 1}`}
                    className="w-full h-full object-cover rounded-xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-black/65 rounded-xl transition duration-300 ease-in-out hover:bg-black/10"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
  <ServicesSection />
  <HowItWorks />
  <PricingPackages />



    </div>
  );
}
