import Banner from "@/components/Banner/Banner";
import DreamJob from "@/components/LandDreamJob/DreamJob";
import HighPayingCareer from "@/components/PathToHighPay/HighPayingCareer";
import SuccessStories from "@/components/SuccessStories/SuccessStories";
import TicketToSucess from "@/components/TicketToSucess/TicketToSucess";
import Image from "next/image";

export default function Home() {
  return (
  <>
 <Banner/>
 <TicketToSucess/>
 <HighPayingCareer/>
 <DreamJob/>
 <SuccessStories/>

  </>
  );
}
