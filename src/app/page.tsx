import { PageHeader } from "@/components/layout/page-header";

export default function Home() {
  return (
    <main>
      <PageHeader />

      {/* Hero Section */}
      <section
        className="h-screen"
        style={{
          backgroundImage: "url(/hero-background.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      ></section>
    </main>
  );
}
