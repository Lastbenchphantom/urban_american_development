import { useState } from "react";
import { Image } from "lucide-react";

/**
 * Project image gallery with main image and thumbnails.
 */
export function ProjectGallery({ images, className = "" }) {
  const [current, setCurrent] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className={["aspect-video rounded-xl border border-slate-200 bg-slate-100 flex flex-col items-center justify-center", className].filter(Boolean).join(" ")}>
        <Image className="w-16 h-16 text-slate-400 mb-3" />
        <p className="text-sm text-slate-600">
          Project photographs will be updated soon.
        </p>
      </div>
    );
  }

  return (
    <div className={["grid grid-cols-1 lg:grid-cols-12 gap-4", className].filter(Boolean).join(" ")}>
      <div className="lg:col-span-8 relative aspect-video rounded-xl border border-slate-200 overflow-hidden bg-slate-100">
        <img
          src={images[current].src}
          alt={images[current].alt || "Project image"}
          className="w-full h-full object-cover"
          loading="lazy"
          onError={(e) => {
            e.target.src = "/images/placeholder-project.svg";
          }}
        />
        <div className="absolute inset-0 bg-black/10" />
        <button
          onClick={(e) => {
            e.stopPropagation();
            setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-slate-700 hover:bg-white focus:outline-none focus:ring-2 focus:ring-navy-900"
          aria-label="Previous image"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-slate-700 hover:bg-white focus:outline-none focus:ring-2 focus:ring-navy-900"
          aria-label="Next image"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
      <div className="lg:col-span-4 grid grid-cols-3 gap-2">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={[
              "aspect-square rounded-lg border overflow-hidden",
              current === i ? "border-navy-900 ring-2 ring-navy-900" : "border-slate-200 hover:border-navy-900",
            ].join(" ")}
            aria-label={`Image ${i + 1}`}
            aria-current={current === i ? "true" : undefined}
          >
            <img
              src={img.src}
              alt={`${img.alt || "Project image"} ${i + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
              onError={(e) => {
                e.target.src = "/images/placeholder-project.svg";
              }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
