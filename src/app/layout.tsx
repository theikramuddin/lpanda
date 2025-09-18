import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: 'LPANDA - Powering Prediction with Solana Speed.',
  description: 'Powering Prediction with Solana Speed.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <video autoPlay muted loop id="background-video">
          <source src="https://res.cloudinary.com/ds0ifdrhk/video/upload/v1758190968/WhatsApp_Video_2025-09-18_at_1.28.41_PM_xwhrgs.mp4" type="video/mp4" />
        </video>
        <audio autoPlay loop>
          <source src="https://res.cloudinary.com/ds0ifdrhk/video/upload/v1758201179/nature_soprky.mp3" type="audio/mpeg" />
        </audio>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
