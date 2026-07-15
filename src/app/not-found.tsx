import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-page flex min-h-[50vh] flex-col items-center justify-center text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-healing-teal/10 text-healing-teal">
          <Icon name="compass" className="h-8 w-8" aria-hidden />
        </span>
        <h1 className="mt-6 text-3xl font-bold text-navy md:text-4xl">Page not found</h1>
        <p className="mt-3 max-w-md text-ink/70">
          The page you&apos;re looking for may have moved. Let&apos;s help you find your way back.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/">Back to home</Button>
          <Button href="/find-a-doctor" variant="secondary">Find a doctor</Button>
        </div>
        <nav className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-ink/60" aria-label="Helpful links">
          <Link href="/cancer-types" className="hover:text-teal">Cancer types</Link>
          <Link href="/treatments" className="hover:text-teal">Treatments</Link>
          <Link href="/book-appointment" className="hover:text-teal">Book appointment</Link>
          <Link href="/contact" className="hover:text-teal">Contact</Link>
        </nav>
      </div>
    </section>
  );
}
