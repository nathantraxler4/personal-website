import NavHeader from "../components/NavHeader";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavHeader />
      {/* Main content stretches to fill remaining vertical space */}
      <main className="flex-1">
        {/* TODO: Add page content here */}
      </main>
    </div>
  );
}
