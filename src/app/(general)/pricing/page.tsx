import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Page",
  description: "This is the Pricing page",
  keywords: ["Pricing us", "Sobre nosotros", "Conócenos"],
};

export default function PricingPage() {
  return (
    <>
      <span className="text-7xl">Pricing Page</span>
    </>
  );
}
