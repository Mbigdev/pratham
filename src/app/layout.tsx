import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Script from "next/script";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pratham.example.com"),
  title: {
    default: "PRATHAM Cancer Institute — Precision care. Human strength.",
    template: "%s · PRATHAM Cancer Institute",
  },
  description:
    "PRATHAM Cancer Institute pairs compassionate specialists with precision oncology and coordinated support at every step of your cancer care journey. (Fictional demo site.)",
  keywords: [
    "cancer care",
    "oncology",
    "precision oncology",
    "second opinion",
    "PRATHAM",
  ],
  openGraph: {
    title: "PRATHAM Cancer Institute",
    description: "Precision care. Human strength.",
    type: "website",
  },
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#123D52",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="min-h-screen bg-warm-white font-sans antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        
        {/* ── Chatbase AI Chatbot Widget ── */}
        <Script
          id="chatbase-chatbot"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                if(!window.chatbase||window.chatbase("getState")!=="initialized"){
                  window.chatbase=(...arguments)=>{
                    if(!window.chatbase.q){window.chatbase.q=[]}
                    window.chatbase.q.push(arguments)
                  };
                  window.chatbase=new Proxy(window.chatbase,{
                    get(target,prop){
                      if(prop==="q"){return target.q}
                      return(...args)=>target(prop,...args)
                    }
                  })
                }
                const onLoad=function(){
                  const script=document.createElement("script");
                  script.src="https://www.chatbase.co/embed.min.js";
                  script.id="X4bHi_G8hFaJ2LcA3zYOQ";
                  script.domain="www.chatbase.co";
                  document.body.appendChild(script)
                };
                if(document.readyState==="complete"){
                  onLoad()
                }else{
                  window.addEventListener("load",onLoad)
                }
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
