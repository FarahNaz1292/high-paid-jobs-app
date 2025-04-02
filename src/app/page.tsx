import Banner from "@/components/Banner/Banner";
import CareerConsultationForm from "@/components/CareerConsulattion/CareerConsultaionForm";
import PricingPlans from "@/components/CareerFreedom/PricingPlans";
import WhyChooseUs from "@/components/ChooseUs/WhyChooseUs";
import CountdownTimer from "@/components/CounterSection/CountDownTimmer";
import DreamJob from "@/components/LandDreamJob/DreamJob";
import HighPayingCareer from "@/components/PathToHighPay/HighPayingCareer";
import FAQSection from "@/components/QAndA/FAQSection";
import Footer from "@/components/Shared/Footer/Footer";
import SuccessStories from "@/components/SuccessStories/SuccessStories";
import TicketToSucess from "@/components/TicketToSucess/TicketToSucess";


export default function Home() {
  return (
  <>
 <Banner/>
 <TicketToSucess/>
 <HighPayingCareer/>
 <DreamJob/>
 <SuccessStories/>
 <WhyChooseUs/>
 <PricingPlans/>
 <FAQSection/>
 <CountdownTimer/>
 <CareerConsultationForm/>
 <Footer/>

  </>
  );
}
