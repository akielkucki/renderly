import Hero from "@/components/hero";
import SolutionSection from "@/components/about";
import Separator from "@/components/separator";
import Testimonials from "@/components/testimonials";
import ContactForm from "@/components/contact";
import ValueProp from "@/components/valueprop";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
        <div className="relative">
            <Hero/>
            <ValueProp/>
            <Separator/>

            <SolutionSection/>
            <Separator/>
            <Testimonials/>
            <Separator/>
            <ContactForm/>
            <Footer/>
        </div>
    </>
  );
}
