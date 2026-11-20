import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.png",
  },
  title: "ClearPath Assist | Personal Concierge & Virtual Assistance for Employees",
  description: "Professional personal concierge and virtual assistance services for employees. We handle life's tasks — doctor appointments, groceries, travel planning, errands, and more.",
  openGraph: {
    title: "ClearPath Assist | Personal Concierge & Virtual Assistance for Employees",
    description: "Professional personal concierge and virtual assistance services for employees. We handle life's tasks so you can focus on what matters.",
    url: "https://lifeeaseconcierge.com",
    siteName: "ClearPath Assist",
    images: [
      {
        url: "https://lifeeaseconcierge.com/ASC%20Verify%20Logo.png",
        width: 500,
        height: 167,
        alt: "ClearPath Assist",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClearPath Assist | Personal Concierge & Virtual Assistance for Employees",
    description: "Professional personal concierge and virtual assistance services for employees.",
    images: ["https://lifeeaseconcierge.com/ASC%20Verify%20Logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
