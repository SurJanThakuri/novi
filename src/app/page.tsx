import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Lifecycle } from "@/components/sections/lifecycle";
import { ProductFeatures } from "@/components/sections/product-features";
import { CoreCapabilities } from "@/components/sections/core-capabilities";
import { Teams } from "@/components/sections/teams";
import { Integrations } from "@/components/sections/design-system";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full pt-16 bg-surface">
        <Hero />
        <Lifecycle />
        <ProductFeatures />
        <CoreCapabilities />
        <Teams />
        <Integrations />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
