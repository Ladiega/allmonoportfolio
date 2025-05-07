import Footer from "@/components/Footer";
import CarouselBands from "@/components/CarouselBands";
import CarouselPortrait from "@/components/CarouselPortrait";

export default function Portfolio() {
  return (
    <div>
      <div className="bg-black text-white h-screen">
        <div>
          <h1 className="pt-20 text-center text-2xl">PORTAFÓLIO</h1>
        </div>

        <CarouselBands />
        <div className="bg-black">
          <CarouselPortrait />
        </div>

        <Footer />
      </div>
    </div>
  );
}
