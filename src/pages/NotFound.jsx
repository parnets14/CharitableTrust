import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="section bg-white">
      <div className="mx-auto max-w-2xl container-px py-24 text-center">
        <p className="font-display text-7xl font-extrabold text-logoBlue-600">
          404
        </p>
        <h1 className="section-title mt-4">Page not found</h1>
        <p className="mt-4 text-lg text-ink-700">
          The page you're looking for doesn't exist or may have moved. Let's get
          you back on track.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/" className="btn-primary">
            Back to Home <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/contact" className="btn-ghost">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
