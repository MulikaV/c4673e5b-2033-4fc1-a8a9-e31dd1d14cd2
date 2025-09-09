"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutSplitBottom from '@/components/navigation/NavbarLayoutSplitBottom/NavbarLayoutSplitBottom';
import TokenBillboardHero from '@/components/sections/layouts/hero/TokenBillboardHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import FooterLogoEmphasis from '@/components/footer/FooterLogoEmphasis';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
      <NavbarLayoutSplitBottom
        logoSrc="/images/logo.svg"
        logoWidth={150}
        logoHeight={40}
        buttonText="Shop Retro"
        onButtonClick={() => { /* Handle click event */ }}
        navItems={[
          { name: 'Hero', id: 'hero' },
          { name: 'About', id: 'about' },
          { name: 'How to Buy', id: 'how-to-buy' },
          { name: 'Tokenomics', id: 'tokenomics' },
          { name: 'Footer', id: 'footer' },
        ]}
      />
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <TokenBillboardHero
          title="Welcome to RetroVault"
          subtitle="Your gateway to classic gaming."
          contractAddress="0x123456789"
          copyButtonText="Copy Address"
          copiedText="Address copied!"
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <SocialsAbout
          title="Welcome to RetroVault — your gateway to classic gaming."
          descriptions={[
            "We curate authentic, tested retro games from NES to PS2 and collect hardware accessories, all in one friendly shop.",
            "Every title is checked for playability and condition, with clear grading and fast shipping."
          ]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D
          variant="reveal"
          steps={[
            { title: "Browse the catalog", description: "Explore our curated retro titles and bundles." },
            { title: "Add to cart", description: "Choose your favorites and proceed to checkout." },
            { title: "Checkout securely", description: "Review order and receive confirmation and shipping details." }
          ]}
        />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <TextGridTokenomics
          title="Our Key Metrics"
          description="We highlight strong relationships with trusted suppliers and verify playability to ensure a satisfying retro gaming experience."
          tokenData={[
            { value: "120+", description: "Games in Catalog" },
            { value: "400+", description: "Items Tested Weekly" },
            { value: "4.7/5", description: "Average Rating" },
            { value: "15k+", description: "Orders Shipped" }
          ]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogoEmphasis
          logoSrc="/images/logo.svg"
          logoAlt="RetroVault Logo"
          logoText="RetroVault"
          columns={[
            { items: [
              { label: "Home", onClick: () => { /* Handle click */ } },
              { label: "About", onClick: () => { /* Handle click */ } }
            ]},
            { items: [
              { label: "How to Buy", onClick: () => { /* Handle click */ } },
              { label: "Tokenomics", onClick: () => { /* Handle click */ } }
            ]},
            { items: [
              { label: "Contact", onClick: () => { /* Handle click */ } },
              { label: "Privacy Policy", onClick: () => { /* Handle click */ } }
            ]}
          ]}
          copyrightText="© 2023 RetroVault. All rights reserved."
          onPrivacyClick={() => { /* Handle Privacy click */ }}
        />
      </div>
    </SiteThemeProvider>
  );
}