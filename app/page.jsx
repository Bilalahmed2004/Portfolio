import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Extras from "@/components/Extras";
import Reveal from "@/components/Reveal";
import { profile, skills, experience, projects, services } from "@/lib/data";

const H2 = ({ children }) => <h2 className="mb-8 font-display text-3xl font-bold sm:text-5xl md:mb-10">{children}</h2>;
const Section = ({ id, children }) => <section id={id} className="mx-auto max-w-6xl px-5 py-16 md:px-6 md:py-24">{children}</section>;

export default function Page() {
  return (
    <main>
      <Nav /><Extras />
      <Hero />

      <Section id="about">
        <div className="grid items-center gap-10 md:grid-cols-[320px_1fr] md:gap-12">
          <Reveal>
            <div className="photo relative mx-auto aspect-[4/5] w-full max-w-[260px] overflow-hidden rounded-3xl bg-gradient-to-br from-violet/40 to-cyan/30 md:max-w-none">
              <span className="absolute inset-0 grid place-items-center font-display text-7xl font-bold text-fg/70">BA</span>
              {/* Put your photo at public/profile.jpg */}
              <div role="img" aria-label="Bilal Ahmed" className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/profile.png)" }} />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <H2>Hi, I'm Bilal Ahmed</H2>
            <p className="max-w-2xl text-base leading-relaxed text-mist sm:text-lg">
              I'm a MERN stack developer from Karachi. I build responsive interfaces with reusable React components, connect them to REST APIs,
              and add CRUD and JWT authentication on the Node.js side. I work with clients on Upwork and Fiverr, so I'm used to turning a short
              brief into a working product and keeping the conversation clear along the way.
            </p>
            <p className="mt-4 text-mist">Languages: Urdu, English. Diploma in Software Engineering, Aptech (2023 to 2026).</p>
            <a href={profile.resume} download className="btn-ghost mt-8 inline-block rounded-full border border-fg/20 px-6 py-3 font-semibold transition hover:border-cyan hover:text-cyan">Download resume</a>
          </Reveal>
        </div>
      </Section>

      <Section id="skills">
        <Reveal><H2>What I work with</H2></Reveal>
        <div className="grid gap-x-12 gap-y-8 sm:grid-cols-2 md:gap-y-10">
          {Object.entries(skills).map(([group, items], i) => (
            <Reveal key={group} delay={i * 0.08}>
              <h3 className="mb-4 font-display text-xl font-semibold text-cyan">{group}</h3>
              <ul className="flex flex-wrap gap-2">
                {items.map((s) => (<li key={s} className="chip rounded-full border border-fg/10 bg-panel px-4 py-2 text-sm transition hover:border-violet">{s}</li>))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="experience">
        <Reveal><H2>Experience and education</H2></Reveal>
        <ol className="space-y-10 border-l border-fg/10 pl-8">
          {experience.map((e) => (
            <Reveal key={e.title}>
              <li className="relative">
                <span className="absolute -left-[37px] top-2 h-3 w-3 rounded-full bg-gradient-to-r from-cyan to-violet" />
                <p className="text-sm text-mist">{e.when}</p>
                <h3 className="font-display text-2xl font-semibold">{e.title}</h3>
                <p className="text-mist">{e.where}</p>
                {e.points.length > 0 && <ul className="mt-3 list-disc space-y-1 pl-5 text-mist">{e.points.map((p) => <li key={p}>{p}</li>)}</ul>}
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section id="projects">
        <Reveal><H2>Selected projects</H2></Reveal>
        <div className="divide-y divide-fg/10 border-y border-fg/10">
          {projects.map((p) => (
            <Reveal key={p.name}>
              <article className="proj group grid gap-4 py-8 transition hover:bg-fg/[0.03] md:grid-cols-[1fr_1.4fr] md:gap-6 md:px-4 md:py-10">
                <div>
                  <h3 className="font-display text-3xl font-bold transition group-hover:text-cyan md:text-4xl">{p.name}</h3>
                  <p className="mt-2 text-sm text-violet">{p.status}</p>
                  <p className="mt-3 text-sm text-mist md:mt-4">{p.tech.join(", ")}</p>
                </div>
                <div>
                  <p className="text-base leading-relaxed text-mist sm:text-lg">{p.text}</p>
                  <div className="mt-5 flex gap-6 font-semibold">
                    {p.live && <a href={p.live} target="_blank" rel="noreferrer" className="text-cyan hover:underline">Open live demo</a>}
                    {p.repo && <a href={p.repo} target="_blank" rel="noreferrer" className="hover:text-cyan">View code</a>}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="services">
        <Reveal><H2>How I can help</H2></Reveal>
        <dl className="grid gap-8 sm:grid-cols-2">
          {services.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.06}><dt className="font-display text-xl font-semibold">{t}</dt><dd className="mt-1 text-mist">{d}</dd></Reveal>
          ))}
        </dl>
      </Section>

      <Section id="contact">
        <Reveal>
          <H2>Let's build something</H2>
          <p className="mb-8 max-w-xl text-base text-mist sm:text-lg">Tell me what you need. I reply by email, and you can also hire me directly on Upwork.</p>
          <a href={`mailto:${profile.email}`} className="grad break-all font-display text-2xl font-bold sm:text-5xl">{profile.email}</a>
          <form action={`mailto:${profile.email}`} method="post" encType="text/plain" className="mt-10 grid max-w-xl gap-4">
            <label className="grid gap-1 text-sm text-mist">Your name<input name="name" required className="rounded-xl border border-fg/10 bg-panel px-4 py-3 text-fg" /></label>
            <label className="grid gap-1 text-sm text-mist">Project details<textarea name="message" rows={4} required className="rounded-xl border border-fg/10 bg-panel px-4 py-3 text-fg" /></label>
            <button className="btn-main w-fit rounded-full bg-gradient-to-r from-cyan to-violet px-7 py-3 font-semibold text-onacc transition hover:scale-105">Send message</button>
          </form>
          <p className="mt-10 flex flex-wrap gap-6 text-mist">
            <a className="hover:text-cyan" href={profile.upwork} target="_blank" rel="noreferrer">Upwork</a>
            <a className="hover:text-cyan" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="hover:text-cyan" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <a className="hover:text-cyan" href="tel:+923123910355">{profile.phone}</a>
          </p>
        </Reveal>
      </Section>
      <footer className="border-t border-fg/10 py-8 text-center text-sm text-mist">© {new Date().getFullYear()} Bilal Ahmed. Karachi, Pakistan.</footer>
    </main>
  );
}
