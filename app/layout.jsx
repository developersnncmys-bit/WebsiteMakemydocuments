import { Plus_Jakarta_Sans } from 'next/font/google'
import Script from 'next/script'
import LayoutShell from './LayoutShell'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export const metadata = {
  title: 'MakeMyDocuments – Trusted Document Services, Bangalore',
  description: 'Fast, reliable document services — PAN card, passport, visa, agreements, and more. Click it, Get it.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jakarta.className} suppressHydrationWarning>
        {/* Google Analytics (gtag) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QN4189EDG5"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-QN4189EDG5');
        `}</Script>

        {/* Meta (Facebook) Pixel */}
        <Script id="fb-pixel" strategy="afterInteractive">{`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '865961251883214');
          fbq('track', 'PageView');
        `}</Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img height="1" width="1" style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=865961251883214&ev=PageView&noscript=1"
            alt="" />
        </noscript>

        {/* Bing UET */}
        <Script id="bing-uet" strategy="afterInteractive">{`
          (function(w,d,t,r,u){
            var f,n,i;w[u]=w[u]||[],f=function(){
              var o={ti:"56340877", enableAutoSpaTracking: true};
              o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")
            },
            n=d.createElement(t),n.src=r,n.async=1,
            n.onload=n.onreadystatechange=function(){
              var s=this.readyState;
              s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)
            },
            i=d.getElementsByTagName(t)[0];
            i.parentNode.insertBefore(n,i)
          })(window,document,"script","//bat.bing.com/bat.js","uetq");
        `}</Script>

        {/* Twitter (X) Pixel */}
        <Script id="twitter-pixel" strategy="afterInteractive">{`
          !function(e,t,n,s,u,a){
            e.twq||(s=e.twq=function(){
              s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
            },s.version='1.1',s.queue=[],u=t.createElement(n),
            u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
            a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))
          }(window,document,'script');
          twq('config','onik3');
        `}</Script>

        {/* LinkedIn Insight Tag */}
        <Script id="linkedin-partner" strategy="afterInteractive">{`
          _linkedin_partner_id = "7447820";
          window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
          window._linkedin_data_partner_ids.push(_linkedin_partner_id);
        `}</Script>
        <Script id="linkedin-insight" strategy="afterInteractive">{`
          (function(l) {
            if (!l) {
              window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
              window.lintrk.q=[];
            }
            var s = document.getElementsByTagName("script")[0];
            var b = document.createElement("script");
            b.type = "text/javascript"; b.async = true;
            b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
            s.parentNode.insertBefore(b, s);
          })(window.lintrk);
        `}</Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img height="1" width="1" style={{ display: 'none' }}
            alt=""
            src="https://px.ads.linkedin.com/collect/?pid=7447820&fmt=gif" />
        </noscript>

        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  )
}
