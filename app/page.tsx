import Ferdigheter from "@/components/Ferdigheter";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Prosjekter } from "@/components/Prosjekter";
import AgeTimer from "@/components/functions/AgeTimer";
// import ChatBot from "@/components/functions/ChatBot";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <AgeTimer />
      <Ferdigheter />
      <Prosjekter />
      <Footer />
      {/* <ChatBot
        assistantId="asst_Jq2fZnHlFsVzEhGUrE0Oks5Y"
        name="Chelsea Expert"
      /> */}
    </main>
  );
}
