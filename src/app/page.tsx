import Popular from "@/client/components/Popular";
import Cards from "../client/components/Cards";
import Footer2 from "../client/components/Footer2";
import PageTitle1 from "../client/components/PageTitle1";
import TopicsFilter from "@/client/components/TopicsFilter";
import Title from "@/client/components/Title";

export default function Home() {

  const headerTitle ="decusoft support"


  const helpDeskArticles = [
    {
      id: 1,
      title: "Network Connectivity Issues",
      introduction: "Learn how to troubleshoot network problems.",
      ref:"/article/1",
      sections: [
        {
          heading: "Identifying Problems",
          content: "Check other devices and verify router connectivity."
        }
      ]
    },
    {
      id: 2,
      title: "Software Installation Errors",
      introduction: "Resolve errors during software installation.",
      ref:"/article/2",
      sections: [
        {
          heading: "Common Solutions",
          content: "Run as administrator and check system requirements."
        }
      ]
    },
    {
      id: 3,
      title: "Learning and development",
      introduction: "Learn how to troubleshoot network problems.",
      ref:"/article/3",
      sections: [
        {
          heading: "Identifying Problems",
          content: "Check other devices and verify router connectivity."
        }
      ]
    }
  ];

  return (
    <div className="bg-zinc-100">
      <PageTitle1 title={headerTitle} body="How can we help?"/>
      <div className="">
          <Title title="Assignment"/>
        </div>
      <Cards data={helpDeskArticles}/>
      <div className="grid grid-cols-3 container mx-auto">
        <div className="col-span-3 order-2 md:col-span-2 md-order-1">
        <Popular/>
        </div>
        <div className="col-span-3 order-1 md:col-span-1 md-order-2">
          <TopicsFilter/>
        </div>
      </div>
      <Footer2/>
    </div>
  );
}
