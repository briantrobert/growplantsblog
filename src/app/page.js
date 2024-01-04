import Landing from "@/components/landing";
import Section1 from "@/components/section1";
import Section2 from "@/components/section2";
import Format from "@/layout/format";

export default function Home() {
  
  return (
    <Format>
      <Landing />
      <Section1/>
      <Section2/>
    </Format>
  )
}
