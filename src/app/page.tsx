
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Bot, Send, BookCopy, Cpu } from 'lucide-react';
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <Link href={href} className="text-lg hover:text-primary transition-colors">
    {children}
  </Link>
);

const PandaIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M8.5,14C7.67,14,7,13.33,7,12.5S7.67,11,8.5,11 S10,11.67,10,12.5S9.33,14,8.5,14z M15.5,14c-0.83,0-1.5-0.67-1.5-1.5S14.67,11,15.5,11S17,11.67,17,12.5S16.33,14,15.5,14z M12,9.5 C10.9,9.5,10,8.6,10,7.5C10,6.4,10.9,5.5,12,5.5s2,0.9,2,2C14,8.6,13.1,9.5,12,9.5z" />
    </svg>
);


const DexScreenerEmbed = () => (
  <div>
    <style jsx>{`
      #dexscreener-embed {
        position: relative;
        width: 100%;
        padding-bottom: 125%;
      }
      @media(min-width:1400px) {
        #dexscreener-embed {
          padding-bottom: 65%;
        }
      }
      #dexscreener-embed iframe {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border: 0;
      }
    `}</style>
    <div id="dexscreener-embed">
      <iframe src="https://dexscreener.com/osmosis/1943-factory_osmo1z6r6qdknhgsc0zeracktgpcxf43j6sekq07nw8sxduc9lg0qjjlqfu25e3_alloyed_allBTC-ibc_498A0751C798A0D9A389AA3691123DADA57DAA4FE165D5C75894505B876BA6E4?embed=1&loadChartSettings=0&info=0&chartLeftToolbar=0&chartDefaultOnMobile=1&chartTheme=dark&theme=dark&chartStyle=0&chartType=usd&interval=15"></iframe>
    </div>
  </div>
);

export default function Home() {
  const contractAddress = "COMING SOON..............";
  const memeImages = [
    "https://res.cloudinary.com/ds0ifdrhk/image/upload/v1758191541/WhatsApp_Image_2025-09-18_at_2.30.40_AM_1_gnmyco.jpg",
    "https://res.cloudinary.com/ds0ifdrhk/image/upload/v1758191541/WhatsApp_Image_2025-09-18_at_2.30.40_AM_tqgt3x.jpg",
    "https://res.cloudinary.com/ds0ifdrhk/image/upload/v1758191541/WhatsApp_Image_2025-09-18_at_2.30.42_AM_1_fifync.jpg",
    "https://res.cloudinary.com/ds0ifdrhk/image/upload/v1758191540/WhatsApp_Image_2025-09-18_at_2.30.39_AM_vl0p3i.jpg",
    "https://res.cloudinary.com/ds0ifdrhk/image/upload/v1758191539/WhatsApp_Image_2025-09-18_at_2.30.41_AM_1_pmffhh.jpg",
    "https://res.cloudinary.com/ds0ifdrhk/image/upload/v1758191539/WhatsApp_Image_2025-09-18_at_2.30.41_AM_ac6c12.jpg"
  ];


  return (
    <div className="flex flex-col min-h-screen font-body text-lg text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
        <nav className="container mx-auto flex items-center justify-between p-4">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold font-headline text-primary">
            <PandaIcon className="h-8 w-8" />
            LPANDA
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <NavLink href="#meme-gallery">Meme Gallery</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#how-to-buy">How to Buy</NavLink>
            <NavLink href="#roadmap">Roadmap</NavLink>
          </div>
          <Button asChild className="bg-primary hover:bg-primary/80 text-primary-foreground">
            <Link href="#">Buy Now</Link>
          </Button>
        </nav>
      </header>

      <main className="container mx-auto px-4 pt-32">
        {/* Hero Section */}
        <section className="flex flex-col-reverse md:flex-row items-center justify-center py-16 md:py-24 gap-8">
          {/* Left Column */}
          <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="font-headline text-7xl md:text-8xl font-bold text-primary flicker">
              LPANDA
            </h1>
            <p className="mt-4 text-2xl md:text-3xl text-muted-foreground max-w-xl">
              Powering Prediction with Base Speed.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg py-6">
                  <Link href="#">BUY LPANDA</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg py-6 border-2 border-foreground hover:bg-accent hover:text-accent-foreground">
                  <Link href="https://t.me/Lpanda_decentralized">TELEGRAM</Link>
              </Button>
               <Button asChild size="lg" variant="outline" className="text-lg py-6 border-2 border-foreground hover:bg-accent hover:text-accent-foreground">
                <Link href="https://x.com/Lpandatoken">X</Link>
              </Button>
              {/* <Button asChild size="lg" variant="outline" className="text-lg py-4 border-2 border-foreground hover:bg-accent hover:text-accent-foreground">
                <Link href="https://discord.gg/yuCfBCQy">DISCORD</Link>
              </Button> */}
            </div>

            <Card className="max-w-full mt-8 bg-card/50 border-2 border-dashed border-primary/50 w-full">
              <CardContent className="p-4">
                <p className="text-muted-foreground text-sm">LPANDA Contract Address</p>
                <p className="font-mono text-primary text-sm md:text-base break-all">{contractAddress}</p>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="https://res.cloudinary.com/ds0ifdrhk/image/upload/v1758189672/WhatsApp_Image_2025-09-18_at_2.30.43_AM_bbclbi.jpg"
              alt="LPANDA"
              data-ai-hint="logo abstract"
              width={400}
              height={400}
              className="rounded-full border-4 border-primary shadow-[0_0_20px_theme(colors.primary)]"
              priority
            />
          </div>
        </section>

        {/* Meme Gallery Section */}
        <section id="meme-gallery" className="py-24 max-w-4xl mx-auto">
          <h2 className="font-headline text-5xl text-primary mb-12 text-center">MEME GALLERY</h2>
          <Carousel className="w-full">
            <CarouselContent>
              {memeImages.map((src, i) => (
                <CarouselItem key={i}>
                  <Image
                    src={src}
                    alt={`Meme ${i + 2}`}
                    data-ai-hint="funny meme"
                    width={1200}
                    height={1000}
                    className="rounded-lg border-2 border-primary/30 mx-auto object-cover aspect-[3/2]"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 text-left max-w-4xl mx-auto">
          <h2 className="font-headline text-5xl text-primary mb-8 text-center">WHAT IS THE LPANDA</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-xl">
              <p>LPANDA, built on the Base blockchain, introduces a transformative vision: a universally adaptable,
decentralized options protocol designed to seamlessly support events of any scale with efficiency and precision.
Leveraging Solana's high-throughput, low-cost architecture, LPANDA's hybrid market model, inspired by
cutting-edge decentralized finance principles, delivers fluid market dynamics, automated liquidity adjustments,
and accurate pricing. This enables robust support for a wide range of events, from global phenomena to highly
specialized niches, without compromise.</p>
              
            </div>
            <Image
              src="https://res.cloudinary.com/ds0ifdrhk/image/upload/v1758191348/WhatsApp_Image_2025-09-18_at_2.30.40_AM_2_lzsunn.jpg"
              alt="LPANDA abstract image"
              data-ai-hint="abstract technology"
              width={600}
              height={600}
              className="rounded-lg border-2 border-primary/30"
            />
          </div>
        </section>

        {/* How to Buy Section */}
        <section id="how-to-buy" className="py-24 max-w-4xl mx-auto">
          <h2 className="font-headline text-5xl text-primary mb-12 text-center">HOW DO I BUY YOUR LPANDA</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-accent">1. CREATE A WALLET</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Download a crypto wallet like MetaMask or Phantom. Keep your seed phrase safer than a high score on Pac-Man.</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-accent">2. GET SOME SOL</CardTitle>
              </CardHeader>
              <CardContent>
                <p>You'll need some BASE COIN in your wallet to swap for LPANDA. Get it from a centralized exchange or a friend who owes you one.</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-accent">3. SWAP FOR LPANDA</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Go to Uniswap, paste the LPANDA contract address, and swap your BASE COIN. Welcome to the mainframe.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Roadmap Section */}
        <section id="roadmap" className="py-24 max-w-4xl mx-auto">
          <h2 className="font-headline text-5xl text-primary mb-12 text-center">LPANDA ROADMAP</h2>
          <div className="relative border-l-2 border-primary/50 pl-8 space-y-16">
            <div className="absolute -left-[11px] top-0 h-5 w-5 rounded-full bg-accent animate-pulse"></div>
            
            <div className="text-left">
              <h3 className="font-headline text-3xl text-accent mb-2">Phase 1: Boot Sequence</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Launch LPANDA Token</li>
                <li>Website V1 Launch</li>
                <li>Community Building on X & Telegram</li>
                <li>CoinGecko/CoinMarketCap Listing</li>
              </ul>
            </div>

            <div className="text-left">
              <h3 className="font-headline text-3xl text-accent mb-2">Phase 2: Overclock</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>First CEX Listings</li>
                <li>Partnerships with other retro projects</li>
                <li>Claudeputer NFT Collection Drop</li>
                <li>10,000+ Holders</li>
              </ul>
            </div>

            <div className="text-left">
              <h3 className="font-headline text-3xl text-accent mb-2">Phase 3: Mainframe Integration</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Top Tier CEX Listings</li>
                <li>Develop a simple retro P2E game</li>
                <li>IRL Merch Store</li>
                <li>Global Domination (in a friendly way)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Live Chart Section */}
        <section id="live-chart" className="py-12">
          <h2 className="font-headline text-5xl text-primary mb-8 text-center">LIVE CHART</h2>
          <Card className="max-w-4xl mx-auto bg-card/50 border-2 border-primary/50">
            <CardContent className="p-2 md:p-4">
              <DexScreenerEmbed />
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="w-full text-center py-8 mt-12 border-t border-primary/20">
        <p className="text-muted-foreground">&copy; {new Date().getFullYear()} LPANDA. All data loaded. This coin is for entertainment purposes only.</p>
      </footer>
    </div>
  );
}
    

    

    

    

    

    