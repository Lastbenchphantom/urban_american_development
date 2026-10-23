import { Container } from "../components/layout/Container";
import { Breadcrumbs } from "../components/layout/Breadcrumbs";
import { SectionHeading } from "../components/ui/SectionHeading";
import { LEADERSHIP, DEPARTMENTS } from "../data/leadership";

export function LeadershipPage() {
  const directors = LEADERSHIP.filter(
    (p) => p.role === "Chairman" || p.role === "Managing Director" || p.role === "Director & HR Personnel"
  );
  const otherLeaders = LEADERSHIP.filter(
    (p) => p.role !== "Chairman" && p.role !== "Managing Director" && p.role !== "Director & HR Personnel"
  );

  return (
    <div className="min-h-screen bg-white">
      <Container className="py-20">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Leadership", href: "/leadership" },
          ]}
        />
        <SectionHeading
          title="Leadership &amp; Team"
          subtitle="Board of directors and departments"
          align="left"
        />
        <p className="text-slate-600 leading-relaxed mb-10 max-w-2xl">
          The following names and roles are published on the official website.
          Where contact details are redacted on the source, they are shown as
          "Contact for details" and not fabricated.
        </p>

        <div className="mb-16">
          <h3 className="text-lg font-bold text-navy-900 mb-6">Board of Directors</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {directors.map((person) => (
              <article
                key={person.id}
                className="rounded-xl border border-slate-200 bg-white p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  {person.image ? (
                    <img
                      src={person.image}
                      alt={person.imageAlt || person.name}
                      className="w-14 h-14 rounded-full object-cover"
                      onError={(e) => {
                        e.target.src = "/images/placeholder-person.svg";
                      }}
                    />
                  ) : (
                    <div className="w-14 h-14 rounded-full bg-slate-200 flex items-center justify-center">
                      <span className="text-slate-500 font-medium">
                        {person.name.split(" ").map((n) => n[0]).join("")}
                      </span>
                    </div>
                  )}
                  <div>
                    <h4 className="text-base font-bold text-navy-900">{person.name}</h4>
                    <p className="text-sm text-slate-500">{person.role}</p>
                  </div>
                </div>
                {person.email ? (
                  <p className="text-sm text-slate-600 mb-1">
                    <a href={`mailto:${person.email}`} className="text-navy-700 hover:underline">
                      {person.email}
                    </a>
                  </p>
                ) : null}
                <p className="text-sm text-slate-600">
                  <span className="font-semibold text-navy-700">Phone:</span>{" "}
                  {person.phone}
                </p>
                <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                  {person.bio}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-lg font-bold text-navy-900 mb-6">Other Leadership</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherLeaders.map((person) => (
              <article
                key={person.id}
                className="rounded-xl border border-slate-200 bg-white p-6 hover:shadow-md transition-shadow"
              >
                <h4 className="text-base font-bold text-navy-900 mb-1">{person.name}</h4>
                <p className="text-sm text-slate-500 mb-2">{person.role}</p>
                {person.email ? (
                  <p className="text-sm text-slate-600 mb-1">
                    <a href={`mailto:${person.email}`} className="text-navy-700 hover:underline">
                      {person.email}
                    </a>
                  </p>
                ) : null}
                <p className="text-sm text-slate-600">
                  <span className="font-semibold text-navy-700">Phone:</span>{" "}
                  {person.phone}
                </p>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                  {person.bio}
                </p>
              </article>
            ))}
          </div>
        </div>

        <SectionHeading
          title="Departments"
          subtitle="Administration and departments"
          align="left"
          className="mt-16 mb-6"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {DEPARTMENTS.map((dept) => (
            <div
              key={dept.id}
              className="rounded-xl border border-slate-200 bg-white p-6 hover:shadow-md transition-shadow"
            >
              <h4 className="text-lg font-bold text-navy-900 mb-1">
                {dept.name}
              </h4>
              <p className="text-sm text-slate-600 mb-2">{dept.lead}</p>
              {dept.phone && (
                <p className="text-sm text-slate-600 mb-1">
                  <span className="font-semibold text-navy-700">Phone:</span>{" "}
                  {dept.phone}
                </p>
              )}
              {dept.email && (
                <p className="text-sm text-slate-600 mb-1">
                  <a
                    href={`mailto:${dept.email}`}
                    className="text-navy-700 hover:underline"
                  >
                    {dept.email}
                  </a>
                </p>
              )}
              <p className="mt-3 text-xs text-slate-400 uppercase tracking-wider">
                Source-confirmed
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-xl bg-slate-50 p-8">
          <p className="text-sm text-slate-500 mb-2">
            <strong>Note:</strong> This page presents publicly listed names and
            roles from the official website. Biographies beyond the two
            director messages are not publicly available. Contact details shown
            as "Contact for details" are redacted on the source and are not
            fabricated.
          </p>
        </div>
      </Container>
    </div>
  );
}
