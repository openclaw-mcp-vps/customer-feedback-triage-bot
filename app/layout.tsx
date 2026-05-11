import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FeedbackTriage – Smart routing of feedback to right teams",
  description: "Analyzes customer feedback and automatically routes to appropriate team with urgency scoring. Built for customer success and product teams."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="9f77a5bf-c006-4f41-aeda-83a9e04f066a"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
