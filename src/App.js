import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import PortfolioSection from "./PortfolioSection";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import FooterSection from "./FooterSection";
import CopyRightSection from "./CopyRightSection";
import PortfolioModels from "./PortfolioModels";

const App= () => (
    <><NavBar />
    <Header />
    <PortfolioSection />
    <AboutSection /> 
    <ContactSection />
    <FooterSection />
    <CopyRightSection />
    <PortfolioModels title="LOG CABIN" imgSrc="https://sylhare.github.io/Type-on-Strap/assets/img/portfolio/cabin.png" modelNo="portfolioModal1"/>
    <PortfolioModels title="TASTY CAKE" imgSrc="https://sylhare.github.io/Type-on-Strap/assets/img/portfolio/cake.png" modelNo="portfolioModal2" />
    <PortfolioModels title="CIRCUS TENT" imgSrc="https://sylhare.github.io/Type-on-Strap/assets/img/portfolio/circus.png" modelNo="portfolioModal3"/>
    <PortfolioModels title="CONTROLLER" imgSrc="https://sylhare.github.io/Type-on-Strap/assets/img/portfolio/submarine.png" modelNo="portfolioModal4"/>
    <PortfolioModels title="LOCKED SAFE" imgSrc="https://sylhare.github.io/Type-on-Strap/assets/img/portfolio/safe.png" modelNo="portfolioModal5"/>
    <PortfolioModels title="SUBMARINE" imgSrc="https://sylhare.github.io/Type-on-Strap/assets/img/portfolio/submarine.png" modelNo="portfolioModal6"/>
    </>
)

export default App;