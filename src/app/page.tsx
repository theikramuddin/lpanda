
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Bot, Send, BookCopy, Cpu, ClipboardCopy, Check } from 'lucide-react';
import React, { useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { QRCodeSVG } from "qrcode.react";


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

const tokenomicsData = [
  { name: 'Public Sale', value: 12, tokens: '120M' },
  { name: 'Private Contributors', value: 10, tokens: '100M' },
  { name: 'Team & Advisors', value: 16, tokens: '160M' },
  { name: 'Ecosystem/Collaborations', value: 18, tokens: '180M' },
  { name: 'Community Incentives', value: 24, tokens: '240M' },
  { name: 'Treasury', value: 15, tokens: '150M' },
  { name: 'Marketing & Liquidity', value: 5, tokens: '50M' },
];

const tokenomicsCardsData = [
    { name: 'Public Sale', value: '12%' },
    { name: 'Private Contributors', value: '10%' },
    { name: 'Team & Advisors', value: '16%' },
    { name: 'Ecosystem/ Collaborations', value: '18%' },
    { name: 'Community Incentives', value: '24%' },
    { name: 'Treasury', value: '15%' },
    { name: 'Marketing & Liquidity', value: '5%' },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d', '#ffc658'];

export default function Home() {
  const contractAddress = "0xc67BF6Ef5f9fFC12FaFeA1AaEAd9a359F044bEF3";
  const ownerWalletAddress = "0xc67BF6Ef5f9fFC12FaFeA1AaEAd9a359F044bEF3"; // TODO: Replace with your wallet address
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const memeImages = [
    "https://res.cloudinary.com/ds0ifdrhk/image/upload/v1758191541/WhatsApp_Image_2025-09-18_at_2.30.40_AM_1_gnmyco.jpg",
    "https://res.cloudinary.com/ds0ifdrhk/image/upload/v1758191541/WhatsApp_Image_2025-09-18_at_2.30.40_AM_tqgt3x.jpg",
    "https://res.cloudinary.com/ds0ifdrhk/image/upload/v1758191541/WhatsApp_Image_2025-09-18_at_2.30.42_AM_1_fifync.jpg",
    "https://res.cloudinary.com/ds0ifdrhk/image/upload/v1758191540/WhatsApp_Image_2025-09-18_at_2.30.39_AM_vl0p3i.jpg",
    "https://res.cloudinary.com/ds0ifdrhk/image/upload/v1758191539/WhatsApp_Image_2025-09-18_at_2.30.41_AM_1_pmffhh.jpg",
    "https://res.cloudinary.com/ds0ifdrhk/image/upload/v1758191539/WhatsApp_Image_2025-09-18_at_2.30.41_AM_ac6c12.jpg"
  ];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.35;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    const label = tokenomicsData[index].name;
    const words = label.replace('/', '/ ').split(' ');

    if (words.length > 1 && (label.length > 10 || label.includes('/'))) {
        return (
            <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" fontSize="10">
                {words.map((word, i) => (
                    <tspan key={i} x={x} dy={i === 0 ? 0 : 12}>{word}</tspan>
                ))}
            </text>
        );
    }

    return (
      <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" fontSize="10">
        {label}
      </text>
    );
  };


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
            <NavLink href="#roadmap">Roadmap</NavLink>
            <NavLink href="#how-to-buy">How to Buy</NavLink>
          </div>
          <Button asChild className="bg-primary hover:bg-primary/80 text-primary-foreground">
            <Link href="#how-to-buy">Buy Now</Link>
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
                  <Link href="#how-to-buy">BUY LPANDA</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg py-6 border-2 border-foreground hover:bg-accent hover:text-accent-foreground">
                  <a href="https://t.me/Lpanda_decentralized" target="_blank" rel="noopener noreferrer">TELEGRAM</a>
              </Button>
               <Button asChild size="lg" variant="outline" className="text-lg py-6 border-2 border-foreground hover:bg-accent hover:text-accent-foreground">
                <a href="http://x.com/LPandaDEX" target="_blank" rel="noopener noreferrer">X</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg py-6 border-2 border-foreground hover:bg-accent hover:text-accent-foreground">
                <a href="https://discord.gg/PQvGZP9V6B" target="_blank" rel="noopener noreferrer">DISCORD</a>
              </Button>
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

        {/* How to Buy Section */}
        <section id="how-to-buy" className="py-24 max-w-2xl mx-auto">
          <h2 className="font-headline text-5xl text-primary mb-12 text-center">How to Buy LPANDA</h2>
          <Card className="bg-card/50 border-2 border-primary/50">
            <CardContent className="p-8 text-center flex flex-col items-center">
              <p className="text-muted-foreground mb-4">Send ETH to the following address to buy $LPANDA tokens.</p>
              
              <div className="bg-background/50 rounded-lg p-4 mb-6">
                <QRCodeSVG
                  value={ownerWalletAddress}
                  size={128}
                  bgColor="hsl(var(--background))"
                  fgColor="hsl(var(--foreground))"
                  level="L"
                  className="rounded-md"
                />
              </div>

              <p className="text-muted-foreground text-sm mb-2">Owner's Wallet Address:</p>
              <div className="relative w-full max-w-md">
                <input
                  type="text"
                  readOnly
                  value={ownerWalletAddress}
                  className="w-full bg-input border border-border rounded-md p-2 pr-12 font-mono text-sm text-foreground"
                />
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8"
                  onClick={() => copyToClipboard(ownerWalletAddress)}
                >
                  {copied ? <Check className="w-4 h-4 text-green-500" /> : <ClipboardCopy className="w-4 h-4" />}
                </Button>
              </div>

              <div className="w-full max-w-md mt-6">
                <Button 
                  size="lg" 
                  className="text-lg py-6 w-full"
                  onClick={() => window.location.href = `ethereum:${ownerWalletAddress}`}
                >
                  Buy with Wallet
                </Button>
              </div>

              <div className="text-left mt-8 space-y-4 text-muted-foreground">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">1</div>
                  <p>Click the "Buy with Wallet" button, or copy the address above, or scan the QR code.</p>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">2</div>
                  <p>Open your preferred crypto wallet (e.g., MetaMask, Trust Wallet).</p>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">3</div>
                  <p>Paste the address and enter the amount of ETH you wish to contribute.</p>
                </div>
                 <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">4</div>
                  <p>Confirm the transaction. Your $LPANDA tokens will be airdropped to your wallet after the presale ends.</p>
                </div>
              </div>
            </CardContent>
          </Card>
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

        {/* Tokenomics Section */}
        <section id="tokenomics" className="py-24 max-w-6xl mx-auto">
          <h2 className="font-headline text-5xl text-primary mb-12 text-center">TOKENOMICS</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="w-full h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={tokenomicsData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={150}
                    fill="#8884d8"
                    dataKey="value"
                    paddingAngle={5}
                  >
                    {tokenomicsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      background: "hsl(var(--background))",
                      borderColor: "hsl(var(--border))",
                      borderRadius: "var(--radius)",
                    }}
                    formatter={(value, name) => [`${value}%`, name]}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-4">
              <Table className="bg-card/50">
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-headline text-accent">Allocation</TableHead>
                    <TableHead className="font-headline text-accent text-right">Percentage</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tokenomicsData.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium flex items-center gap-2">
                       <span className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }}></span>
                      {item.name}
                    </TableCell>
                    <TableCell className="text-right">{item.value}%</TableCell>
                  </TableRow>
                  ))}
                </TableBody>
              </Table>
              <p className="text-center text-muted-foreground mt-4">Total Supply: 1,000,000,000 LPANDA</p>
            </div>
          </div>
        </section>
        
        {/* Token Distribution Section */}
        <section id="token-distribution" className="py-24 max-w-4xl mx-auto">
          <h2 className="font-headline text-5xl text-primary mb-12 text-center">Token Distribution</h2>
          <p className="text-center text-2xl text-muted-foreground mb-12">Total Supply: 1,000,000,000 LPANDA</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tokenomicsCardsData.map((item, index) => (
              <div
                key={index}
                className="p-1 rounded-lg"
                style={{ background: 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--secondary)))' }}
              >
                <div className="bg-background rounded-md p-6 h-full flex flex-col justify-center">
                  <p className="text-lg text-foreground/80 break-words">{item.name}</p>
                  <p className="text-2xl font-bold text-primary">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* Roadmap Section */}
        <section id="roadmap" className="py-24 max-w-6xl mx-auto">
          <h2 className="font-headline text-5xl text-primary mb-12 text-center">LPANDA ROADMAP</h2>
          <div className="overflow-x-auto">
            <Table className="w-full text-left bg-card/50">
              <TableHeader>
                <TableRow>
                  <TableHead className="font-headline text-accent w-1/4">Timeline</TableHead>
                  <TableHead className="font-headline text-accent w-1/4">Technical & Protocol Development</TableHead>
                  <TableHead className="font-headline text-accent w-1/4">Ecosystem & Growth</TableHead>
                  <TableHead className="font-headline text-accent w-1/4">Community & DAO Governance</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-bold">Q3 2025<br/><span className="font-normal text-muted-foreground">Phase 1: The Genesis Grove</span></TableCell>
                  <TableCell>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Mainnet Beta Launch</li>
                      <li>Bamboo Consensus (PoSA)</li>
                      <li>Native Staking & Delegation</li>
                      <li>Comprehensive Security Audit</li>
                    </ul>
                  </TableCell>
                  <TableCell>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Seedling Listings</li>
                      <li>DEX Listings on Base & Ethereum</li>
                      <li>Tier 1 CEX Applications Submitted</li>
                      <li>Initial Liquidity Partnerships</li>
                    </ul>
                  </TableCell>
                  <TableCell>
                    <ul className="list-disc list-inside space-y-1">
                      <li>The First Council</li>
                      <li>Genesis NFT Airdrop to Early Holders</li>
                      <li>LPanda Ambassador Program Launch</li>
                      <li>Litepaper v2 Publication</li>
                    </ul>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">Q4 2025<br/><span className="font-normal text-muted-foreground">Phase 2: Strengthening the Roots</span></TableCell>
                  <TableCell>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Cross-Chain Canopy Bridges</li>
                      <li>Bridges to Ethereum & BSC Live</li>
                      <li>Bridge Security Audit Completion</li>
                    </ul>
                  </TableCell>
                  <TableCell>
                    <ul className="list-disc list-inside space-y-1">
                      <li>The Grove Grant Program</li>
                      <li>$500k Ecosystem Fund Established</li>
                      <li>First 3 dApps Funded & Onboarded</li>
                    </ul>
                  </TableCell>
                  <TableCell>
                    <ul className="list-disc list-inside space-y-1">
                      <li>DAO Governance v1: The Panda Council</li>
                      <li>Snapshot Voting Live</li>
                      <li>First Community Treasury Proposal</li>
                    </ul>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">Q1 2026<br/><span className="font-normal text-muted-foreground">Phase 3: The Great Expansion</span></TableCell>
                  <TableCell>
                    <ul className="list-disc list-inside space-y-1">
                      <li>zk-Rollup Testnet: "Pandascale"</li>
                      <li>Testnet Release</li>
                      <li>SDK & Developer Toolkit Launch</li>
                    </ul>
                  </TableCell>
                  <TableCell>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Tier 1 CEX Listing</li>
                      <li>Major Top-10 Exchange Listing</li>
                      <li>Strategic DeFi Partnership Announcements</li>
                    </ul>
                  </TableCell>
                  <TableCell>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Global Hackathon: "Build the Grove"</li>
                      <li>$100k Prize Pool</li>
                      <li>Focus on DeFi & Gaming dApps</li>
                    </ul>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">Q2 2026<br/><span className="font-normal text-muted-foreground">Phase 4: Ecosystem Flourish</span></TableCell>
                  <TableCell>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Mainnet Upgrade: "The Pandamonium Fork"</li>
                      <li>zk-Rollup Mainnet Activation</li>
                      <li>{'>'}90% Reduction in Gas Fees</li>
                    </ul>
                  </TableCell>
                  <TableCell>
                    <ul className="list-disc list-inside space-y-1">
                      <li>dApp Incubator Program</li>
                      <li>10+ Live dApps on Network</li>
                      <li>Native DEX: "PandaSwap" Launch</li>
                    </ul>
                  </TableCell>
                  <TableCell>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Token Utility Expansion</li>
                      <li>NFT Marketplace: "Bamboo Gallery"</li>
                      <li>$LPANDA Merch Store Integration</li>
                    </ul>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">Q3 2026<br/><span className="font-normal text-muted-foreground">Phase 5: Optimizing the Realm</span></TableCell>
                  <TableCell>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Layer 2 Scaling & Data Availability</li>
                      <li>Advanced Data Availability Layer</li>
                      <li>Enhanced Throughput (10k+ TPS)</li>
                    </ul>
                  </TableCell>
                  <TableCell>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Enterprise Outreach: "Whitelabel Jungle"</li>
                      <li>B2B Blockchain Solutions</li>
                      <li>Public API Suite Release</li>
                    </ul>
                  </TableCell>
                  <TableCell>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Governance v2: On-Chain Democracy</li>
                      <li>On-Chain Voting Implementation</li>
                      <li>Community Treasury Management Live</li>
                    </ul>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">Q4 2026<br/><span className="font-normal text-muted-foreground">Phase 6: The Sovereign Grove</span></TableCell>
                  <TableCell>
                    <ul className="list-disc list-inside space-y-1">
                      <li>LPanda 2.0 Vision Paper</li>
                      <li>Research into AI Integration & Privacy</li>
                      <li>Long-term Tech Vision Published</li>
                    </ul>
                  </TableCell>
                  <TableCell>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Mass Adoption Campaign</li>
                      <li>Target: 1M+ Active Wallet Addresses</li>
                      <li>Global Marketing Initiatives</li>
                    </ul>
                  </TableCell>
                  <TableCell>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Full Decentralization</li>
                      <li>Core Team Token Lock & Vesting</li>
                      <li>Community-Led Foundation Established</li>
                    </ul>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
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
    

    

    

    

    

    





    



    


    

    

    

    



    

    

    

    