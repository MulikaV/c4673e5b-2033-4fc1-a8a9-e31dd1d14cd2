"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleMinimal from '@/components/navigation/NavbarStyleMinimal';
import SplitHero from '@/components/sections/layouts/hero/SplitHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import BigNumberTokenomics from '@/components/sections/layouts/tokenomics/BigNumberTokenomics';
import FooterLogo from '@/components/footer/FooterLogo';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
      <NavbarStyleMinimal
        logoSrc="/images/logo.svg"
        logoWidth={150}
        logoHeight={40}
        buttonText="Shop Retro"
        onButtonClick={() => console.log('Shop Retro clicked!')} 
      />

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <SplitHero
          title="Welcome to RetroVault"
          subtitle="Your gateway to classic gaming"
          primaryButtonText="Shop Now"
          secondaryButtonText="Learn More"
          onPrimaryButtonClick={() => console.log('Shop Now clicked!')}
          onSecondaryButtonClick={() => console.log('Learn More clicked!')}
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
        <HowToBuy3D
          title="How to Buy"
          steps={[
            {title: "Browse the catalog", description: "Explore our curated retro titles and bundles.", image: '/images/browse.png', position: 'left', isCenter: true},
            {title: "Add to cart", description: "Choose your favorites and proceed to checkout.", image: '/images/cart.png', position: 'center', isCenter: false},
            {title: "Checkout securely", description: "Review order and receive confirmation and shipping details.", image: '/images/checkout.png', position: 'right', isCenter: true}
          ]}
        />
      </div>

      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <BigNumberTokenomics
          title="Our Stats"
          description="We highlight strong relationships with trusted suppliers and verify playability to ensure a satisfying retro gaming experience."
          kpiItems={[
            { value: "120+", description: "Games in Catalog" },
            { value: "400+", description: "Items Tested Weekly" },
            { value: "4.7/5", description: "Average Rating" },
            { value: "15k+", description: "Orders Shipped" }
          ]}
        />
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogo
          logoSrc="/images/logo.svg"
          logoAlt="RetroVault"
          logoText="RetroVault"
          columns={[
            {title: "Explore", items: [{label: "About Us", onClick: () => console.log('About Us clicked!')}, {label: "Shop", onClick: () => console.log('Shop clicked!')}]},
            {title: "Support", items: [{label: "Help Center", onClick: () => console.log('Help Center clicked!')}, {label: "Contact", onClick: () => console.log('Contact clicked!')}]},
            {title: "Legal", items: [{label: "Privacy Policy", onClick: () => console.log('Privacy Policy clicked!')}, {label: "Terms of Service", onClick: () => console.log('Terms of Service clicked!')}]}
          ]}
          copyrightText="© 2023 RetroVault. All rights reserved."
          onPrivacyClick={() => console.log('Privacy clicked.')}
        />
      </div>
    </SiteThemeProvider>
  );
}