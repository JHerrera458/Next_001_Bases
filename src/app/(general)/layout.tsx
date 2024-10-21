import Navbar from "../../components/navbar/Navbar";

export default function GeneralLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="p-24 flex flex-col items-center bg-red-100">
        {children}
      </main>
    </>
  );
}
