import Image from "next/image";
import { Wrench } from "lucide-react";
import logoMark from "../../../public/brand/logo-mark.png";

// Standalone on purpose — no Navbar/Footer here, since if the site is in
// maintenance mode, nav links pointing at pages that might currently be
// broken/incomplete would be misleading. See middleware.ts for how traffic
// gets routed here.
export default function MaintenancePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-cream px-6 py-20 text-center md:px-12">
      <div className="relative flex h-40 w-40 items-center justify-center">
        <div aria-hidden="true" className="absolute h-40 w-40 rounded-full bg-[#FFF9F6] shadow-inner" />
        <Image src={logoMark} alt="Nolubabalo Rixana" className="relative h-28 w-28 object-contain" />
      </div>

      <Wrench size={22} className="mt-6 text-rose" aria-hidden="true" />
      <h1 className="section-title mt-3">Down for a Quick Refresh</h1>
      <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-mid">
        This site is having some quick maintenance done and will be back shortly. Thanks
        for your patience.
      </p>

      <a href="mailto:ubabalorixana02@gmail.com" className="btn-solid mt-8">
        Email Me Directly
      </a>
    </main>
  );
}
