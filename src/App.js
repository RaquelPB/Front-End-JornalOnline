import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LivingSection from "./components/LivingSection";

const newsData = {
  headerNews: [
    {
      title: "Israeli Strike Targets Hamas Leadership in Qatar, a Close U.S. Ally",
      description: "The Gulf nation of Qatar has been trying to negotiate a cease-fire in Gaza. The attack threatened to destabilize those peace efforts.",
      imageUrl: "https://th.bing.com/th/id/R.cd57d5839a9f8306286db546f6d6f9d1?rik=WJPExE%2fBoOKdqw&pid=ImgRaw&r=0&sres=1&sresct=1"
    },
    {
      title: "Hamas Fighters Claim Responsibility for Bus Stop Shooting in Jerusalem",
      description: "Israeli officials said the attack at the crowded bus stop spurred, in part, the decision to launch targeted strikes against Hamas leaders in Qatar.",
      imageUrl: "https://th.bing.com/th/id/R.cd57d5839a9f8306286db546f6d6f9d1?rik=WJPExE%2fBoOKdqw&pid=ImgRaw&r=0&sres=1&sresct=1"
    }
  ],
  mainLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/New_york_times_logo.png/320px-New_york_times_logo.png",
  footerNews: [
    {
      title: "10 Unforgettable Looks at the MTV Video Music Awards",
      description: "Marc Jacobs and Sofia Coppola's Very Stylish Friendship",
      imageUrl: "https://th.bing.com/th/id/R.cd57d5839a9f8306286db546f6d6f9d1?rik=WJPExE%2fBoOKdqw&pid=ImgRaw&r=0&sres=1&sresct=1"
    },
    {
      title: "The Restaurant List 2025",
      description: "What’s New in School Lunchrooms: Less Sugar, More From Scratch",
      imageUrl: "https://th.bing.com/th/id/R.cd57d5839a9f8306286db546f6d6f9d1?rik=WJPExE%2fBoOKdqw&pid=ImgRaw&r=0&sres=1&sresct=1"
    }
  ]
};

export default function App() {
  return (
    <>
      <Header news={newsData.headerNews} logo={newsData.mainLogo} />
      <LivingSection></LivingSection>
      {/* Aqui o conteúdo principal */}
      <Footer news={newsData.footerNews} />
    </>
  );
}
