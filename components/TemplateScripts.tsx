import Bootstrap from "@/components/Bootstrap";
import Script from "next/script";

const TemplateScripts: React.FC = () => {
  return (<>
    <Script src="https://cdnjs.cloudflare.com/ajax/libs/Counter-Up/1.0.0/jquery.counterup.min.js" strategy="beforeInteractive" />
    <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" strategy="beforeInteractive" />
    <Script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js" strategy="beforeInteractive" />
    <Script src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.2.0/jquery.magnific-popup.min.js" strategy="beforeInteractive" />
    <Script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.14.0/jquery-ui.min.js" strategy="beforeInteractive" />
    <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.imagesloaded/5.0.0/imagesloaded.pkgd.min.js" strategy="beforeInteractive" />
    <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.isotope/3.0.6/isotope.pkgd.min.js" strategy="beforeInteractive" />
    <Script src="/js/main.js" strategy="beforeInteractive" />
    <Bootstrap />
  </>)
}


export default TemplateScripts;