import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import Disclaimer from '@/components/Disclaimer';
import ProductHero from '@/components/product/ProductHero';
import ServiceCategories from '@/components/product/ServiceCategories';
import ApproveSection from '@/components/product/ApproveSection';
import ProductCta from '@/components/product/ProductCta';
import { IVORY, TEXT } from '@/lib/theme';

export default function ProductPage() {
  return (
    <div className="min-h-screen" style={{ background: IVORY, color: TEXT }}>
      <SiteNav />
      <ProductHero />
      <ServiceCategories />
      <ApproveSection />
      <section className="py-10 px-4 sm:px-6 lg:px-8" style={{ background: '#fff', borderTop: '1px solid #e8e4dc' }}>
        <Disclaimer />
      </section>
      <ProductCta />
      <SiteFooter />
    </div>
  );
}
