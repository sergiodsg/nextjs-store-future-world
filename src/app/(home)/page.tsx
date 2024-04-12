import { MainProducts } from "app/components/home/MainProducts";
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "✨ Future world",
  description: "Welcome to the future world!",
  keywords: ["future", "world", "ecommerce"]
}

export default function Home() {
  return (
    <main>
      <MainProducts />
    </main>
  );
}
