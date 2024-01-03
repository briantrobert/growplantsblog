import Landing from "@/components/landing";
import Section1 from "@/components/section1";
import Section2 from "@/components/section2";
import getCategories from "@/components/services/otherServices";
import Format from "@/layout/format";

export default async function Home() {


  const { data, isLoading, isError } = await getCategories('/categories');
  
  return (
    <Format>
      <Landing />
      <Section1 data={data}/>
      <Section2 data={data}/>
    </Format>
  )
}
