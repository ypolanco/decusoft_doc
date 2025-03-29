import Cards from "../client/components/Cards";
import Footer2 from "../client/components/Footer2";
import PageTitle1 from "../client/components/PageTitle1";

export default function Home() {

  const headerTitle ="Decusoft Support"


  const helpDeskArticles = [
    {
      id: 1,
      title: "Network Connectivity Issues",
      introduction: "Learn how to troubleshoot network problems.",
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
      sections: [
        {
          heading: "Common Solutions",
          content: "Run as administrator and check system requirements."
        }
      ]
    },
    {
      id: 3,
      title: "Yeaaaaaaa baby",
      introduction: "Learn how to troubleshoot network problems.",
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
      <Cards data={helpDeskArticles}/>
      <Footer2/>
    </div>
  );
}
