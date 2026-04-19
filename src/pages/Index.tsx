import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail, Phone, MapPin, ArrowUpRight, Award, GraduationCap, Sparkles, Star, Download, Code2 } from "lucide-react";
import portrait from "@/assets/portrait.jpg";
import { Button } from "@/components/ui/button";

const projects = [
  {
    n: "01",
    title: "RoadGuard AI",
    tag: "Final Year Project",
    desc: "Real-time accident detection system using CNN + LSTM to analyse live CCTV and dashcam streams. Detects collisions and sudden motion changes, then auto-dispatches alerts with video evidence and location to nearby hospitals.",
    tech: ["PyTorch", "OpenCV", "CNN", "LSTM"],
    link: "https://github.com/Ishrat-fatima67/RoadGuardAI.git",
  },
  {
    n: "02",
    title: "Masked Autoencoder (MAE)",
    tag: "Self-Supervised Learning",
    desc: "Vision Transformer-based Masked Autoencoder that learns visual representations by reconstructing images from 75% masked patches using an encoder-decoder architecture and MSE loss.",
    tech: ["ViT", "PyTorch", "Self-Supervised"],
    link: "https://github.com/Ishrat-fatima67/Masked-Autoencoder-MAE-Image-Reconstruction.git",
  },
  {
    n: "03",
    title: "Pix2Pix Image Translation",
    tag: "Generative Adversarial Network",
    desc: "Conditional GAN with U-Net generator and PatchGAN discriminator translating sketches and grayscale images into realistic, coloured outputs. Trained with adversarial + L1 loss using mixed precision.",
    tech: ["GAN", "U-Net", "PyTorch"],
    link: "https://github.com/ishrat-fatima67/Pix2Pix_Image_Translation.git",
  },
  {
    n: "04",
    title: "Image Caption Generator",
    tag: "Seq2Seq · Vision + Language",
    desc: "Seq2Seq image captioning system using ResNet50 features and an LSTM decoder to generate natural language descriptions, deployed as a Gradio/Streamlit app for real-time inference.",
    tech: ["ResNet50", "LSTM", "Streamlit"],
    link: "https://github.com/Ishrat-fatima67/Image-Caption-Generator.git",
  },
  {
    n: "05",
    title: "Full-Stack E-Learning Platform",
    tag: "MERN · Web Development",
    desc: "End-to-end e-learning platform with course management, authentication, and email workflows via Nodemailer. Built with HTML, CSS, JS, Node.js, Express and MongoDB.",
    tech: ["Node.js", "Express", "MongoDB"],
    link: "https://github.com/Ishrat-fatima67/Projects/tree/master.git",
  },
  {
    n: "06",
    title: "Peer-to-Peer Messaging",
    tag: "Networks · Systems",
    desc: "Decentralised real-time messaging app over TCP sockets. Multithreaded for concurrent chat, group messaging and broadcasting, with encrypted file sharing for secure transfer.",
    tech: ["TCP", "Multithreading", "Encryption"],
    link: "https://github.com/Ishrat-fatima67/P2P_Messaging_Application.git",
  },
];

const honours = [
  { title: "Silver Medalist", org: "FAST NUCES, Chiniot-Faisalabad" },
  { title: "Dean's List Holder", org: "FAST NUCES, Chiniot-Faisalabad" },
  { title: "Teaching Assistant", org: "Calculus · AI · Linear Algebra" },
];

const skills = {
  Languages: ["C++", "C#", "Python", "JavaScript", "HTML", "CSS", "Assembly"],
  "Frameworks & Libraries": ["PyTorch", "TensorFlow", "OpenCV", "React", "Node.js", "Streamlit", "Gradio"],
  "Tools & Platforms": ["Git", "VS Code", "Jupyter", "Oracle", "Figma", "Cisco", "Ubuntu", "DOSBox"],
};

const fadeUp: import("framer-motion").Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const } }),
};

const Index = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const blobY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <div className="min-h-screen bg-paper text-ink grain overflow-x-hidden">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-paper/70 border-b border-rule/40">
        <nav className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          <a href="#top" className="font-display text-2xl tracking-tight">
            Ishrat <span className="italic text-terracotta">Fatima</span>
          </a>
          <ul className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <li><a href="#about" className="hover:text-ink transition">About</a></li>
            <li><a href="#work" className="hover:text-ink transition">Work</a></li>
            <li><a href="#skills" className="hover:text-ink transition">Skills</a></li>
            <li><a href="#contact" className="hover:text-ink transition">Contact</a></li>
          </ul>
          <a href="#contact">
            <Button variant="default" className="bg-ink hover:bg-ink/90 text-paper rounded-none text-xs uppercase tracking-[0.2em] px-5 h-10">
              Get in touch
            </Button>
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section ref={heroRef} id="top" className="relative pt-36 pb-24 md:pt-44 md:pb-36 px-6 md:px-12 overflow-hidden">
        {/* Decorative floating shapes */}
        <motion.div
          style={{ y: blobY }}
          className="absolute top-32 -left-20 w-72 h-72 rounded-full bg-terracotta/15 blur-3xl animate-float-slow pointer-events-none"
          aria-hidden
        />
        <motion.div
          style={{ y: blobY }}
          className="absolute bottom-10 right-0 w-96 h-96 rounded-full bg-gold/15 blur-3xl animate-float-slower pointer-events-none"
          aria-hidden
        />

        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 md:gap-16 items-center relative">
          <motion.div
            initial="hidden" animate="show" variants={fadeUp}
            className="md:col-span-7 order-2 md:order-1"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="h-px w-12 bg-ink" />
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Portfolio · MMXXVI</span>
            </motion.div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-balance">
              <span className="reveal-line"><span style={{ animationDelay: "0.1s" }}>Crafting <em className="text-terracotta not-italic">intelligent</em></span></span>
              <br />
              <span className="reveal-line"><span style={{ animationDelay: "0.3s" }}>systems with <em className="italic">curiosity</em></span></span>
              <br />
              <span className="reveal-line"><span style={{ animationDelay: "0.5s" }}>& code.</span></span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8 max-w-xl text-base md:text-lg leading-relaxed text-muted-foreground"
            >
              I'm a final-year Computer Science student at FAST NUCES, building at the intersection of
              deep learning, computer vision and full-stack engineering — with a particular love for
              models that <em>see</em> and <em>understand</em>.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a href="#work">
                <Button className="bg-ink hover:bg-terracotta text-paper rounded-none h-12 px-7 text-xs uppercase tracking-[0.2em] transition-colors duration-500">
                  View Selected Work
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline" className="border-ink text-ink hover:bg-ink hover:text-paper rounded-none h-12 px-7 text-xs uppercase tracking-[0.2em] bg-transparent transition-colors duration-500">
                  Hire Me
                </Button>
              </a>
              <a href="/ishrat-fatima-cv.docx" download="Ishrat-Fatima-CV.docx">
                <Button variant="ghost" className="text-ink hover:bg-terracotta/10 rounded-none h-12 px-7 text-xs uppercase tracking-[0.2em] transition-colors duration-500 gap-2">
                  <Download className="w-4 h-4" /> Download CV
                </Button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.2 }}
              className="mt-14 grid grid-cols-3 gap-8 max-w-md border-t border-rule/60 pt-6"
            >
              <div>
                <div className="font-display text-3xl">06</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">Projects</div>
              </div>
              <div>
                <div className="font-display text-3xl">03</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">Honours</div>
              </div>
              <div>
                <div className="font-display text-3xl">'26</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">Graduating</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            style={{ y: portraitY }}
            initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5 order-1 md:order-2 relative"
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.4 }}
                className="absolute -inset-4 border border-ink/20" aria-hidden
              />
              <motion.div
                initial={{ opacity: 0, x: 20, y: 20 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ duration: 1, delay: 0.6 }}
                className="absolute -bottom-4 -right-4 w-32 h-32 bg-terracotta" aria-hidden
              />
              <div className="img-zoom relative w-full h-full">
                <img
                  src={portrait}
                  alt="Editorial portrait of Ishrat Fatima, Computer Science student"
                  width={896}
                  height={1152}
                  className="relative w-full h-full object-cover shadow-editorial"
                />
              </div>
              {/* <div className="absolute -left-6 top-8 -rotate-90 origin-left text-[10px] uppercase tracking-[0.4em] text-muted-foreground hidden md:block">
                Issue No. 01 — Computer Science
              </div> */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* MARQUEE strip */}
      <div className="bg-ink text-paper py-6 overflow-hidden border-y border-ink">
        <div className="marquee whitespace-nowrap font-display text-3xl md:text-4xl italic">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center gap-12 pr-12">
              {["Computer Vision", "Deep Learning", "Generative AI", "Full-Stack", "Research", "Open to Work"].map((w) => (
                <span key={w} className="flex items-center gap-12">
                  <span className="text-paper/90">{w}</span>
                  <Star className="w-5 h-5 text-terracotta fill-terracotta shrink-0" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

   {/* ABOUT */}
{/* ABOUT */}
<section
  id="about"
  className="bg-paper-warm py-28 md:py-36 px-6 md:px-12 border-y border-rule/40"
>
  <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12">

    {/* LEFT SIDE */}
    <div className="md:col-span-4 flex flex-col justify-start">
      <div className="text-[11px] uppercase tracking-[0.35em] text-terracotta mb-6">
        § About
      </div>

      <h2 className="font-display text-4xl md:text-5xl leading-tight text-primary">
        A note from{" "}
        <em className="italic text-terracotta font-normal">the desk</em>{" "}
        of Ishrat.
      </h2>
    </div>

    {/* RIGHT SIDE */}
    <div className="md:col-span-8 relative">

      {/* Vertical Divider */}
      <div className="hidden md:block absolute left-0 top-2 bottom-2 w-px bg-rule/40"></div>

      <div className="md:pl-10 space-y-10 max-w-2xl">

        {/* QUOTE */}
        <blockquote className="font-display text-2xl md:text-3xl leading-snug text-primary">
          <span className="italic">
            “I didn't get into CS because I loved math. I got into it because I loved the idea of making something from nothing.”
          </span>
        </blockquote>

        {/* CONTENT */}
        <div className="space-y-6 text-[17px] leading-relaxed text-muted-foreground">

          <p>
            <span className="italic text-primary/90">
              That feeling—making something real from just an idea—is still what drives me.
            </span>{" "}
            I'm a Computer Science student wrapping up my degree, and I've spent the last few years building web apps that actually help people,{" "}
            <span className="text-terracotta font-medium">
              AI models that (mostly) work
            </span>
            , and cloud systems that didn’t crash on the first try.
          </p>

          <p>
            I don’t believe in sticking to one “niche.” I prefer curiosity over labels—exploring frontend, backend, AI, and infrastructure. Recently, I’ve been leaning toward{" "}
            <span className="text-terracotta font-medium">AI</span>,{" "}
            <span className="text-terracotta font-medium">Cloud</span>, and{" "}
            <span className="text-terracotta font-medium">Computer Vision</span>, though that might evolve.
          </p>

          <p className="text-primary font-medium">
            What stays constant is my{" "}
            <span className="text-terracotta">love for building and learning</span>—and I’m ready to bring both into a professional environment.
          </p>

          <p>
            Alongside development, I work as a Teaching Assistant for{" "}
            <span className="text-terracotta font-medium">Calculus</span>,{" "}
            <span className="text-terracotta font-medium">AI</span>, and{" "}
            <span className="text-terracotta font-medium">Linear Algebra</span>. I’ve also been recognized as a Silver Medalist and Dean’s List holder. Currently, I’m seeking a graduate role focused on building meaningful AI systems.
          </p>

        </div>
      </div>
    </div>
  </div>
</section>

      {/* WORK */}
      <section id="work" className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-terracotta mb-4">§ Selected Work</div>
              <h2 className="font-display text-5xl md:text-6xl leading-tight">
                Projects, <em className="italic">in print.</em>
              </h2>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">
              A curated selection of research and engineering — from generative models
              to networked systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-rule/60 border border-rule/60">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                custom={i}
                variants={fadeUp}
                className="group relative bg-paper p-8 md:p-10 hover:bg-paper-warm transition-colors duration-500 flex flex-col"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="font-display text-3xl text-terracotta">{p.n}</span>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-ink group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
                </div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-3">{p.tag}</div>
                <h3 className="font-display text-3xl md:text-4xl leading-tight mb-4">{p.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground mb-6">{p.desc}</p>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-rule/60">
                  {p.tech.map((t) => (
                    <span key={t} className="text-[10px] uppercase tracking-[0.15em] text-ink/70 px-2 py-1 border border-ink/20">
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 self-start border border-ink text-ink hover:bg-ink hover:text-paper h-10 px-5 text-[10px] uppercase tracking-[0.25em] transition-colors duration-300"
                >
                  <Code2 className="w-4 h-4" /> View Code
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="bg-ink text-paper py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs uppercase tracking-[0.3em] text-terracotta mb-4">§ Toolkit</div>
          <h2 className="font-display text-5xl md:text-6xl leading-tight mb-16">
            The <em className="italic">instruments</em> I work with.
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {Object.entries(skills).map(([cat, items], i) => (
              <motion.div
                key={cat}
                initial="hidden" whileInView="show" viewport={{ once: true }} custom={i} variants={fadeUp}
                className="border-t border-paper/30 pt-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles className="w-4 h-4 text-terracotta" />
                  <h3 className="text-xs uppercase tracking-[0.25em] text-paper/70">{cat}</h3>
                </div>
                <ul className="space-y-3 font-display text-2xl">
                  {items.map((s) => (
                    <li key={s} className="flex items-baseline gap-3">
                      <span className="text-terracotta text-sm">—</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION + HONOURS */}
      <section className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-5 h-5 text-terracotta" />
              <div className="text-xs uppercase tracking-[0.3em] text-terracotta">§ Education</div>
            </div>
            <h2 className="font-display text-4xl md:text-5xl mb-10">Where I studied.</h2>
            <div className="space-y-10">
              <div className="border-l-2 border-terracotta pl-6">
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">2022 — 2026</div>
                <h3 className="font-display text-2xl mb-1">BS Computer Science</h3>
                <p className="text-muted-foreground">National University of Computer and Emerging Sciences (FAST NUCES), Chiniot–Faisalabad Campus</p>
              </div>
              <div className="border-l-2 border-rule pl-6">
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">2020 — 2022</div>
                <h3 className="font-display text-2xl mb-1">Intermediate (ICS)</h3>
                <p className="text-muted-foreground">Daanish School Girls, Dera Ghazi Khan</p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-5 h-5 text-terracotta" />
              <div className="text-xs uppercase tracking-[0.3em] text-terracotta">§ Honours & Activities</div>
            </div>
            <h2 className="font-display text-4xl md:text-5xl mb-10">Recognition.</h2>
            <ul className="space-y-6">
              {honours.map((h) => (
                <li key={h.title} className="flex items-start gap-6 border-b border-rule/60 pb-6">
                  <span className="font-display text-3xl text-terracotta leading-none">★</span>
                  <div>
                    <h3 className="font-display text-2xl mb-1">{h.title}</h3>
                    <p className="text-sm text-muted-foreground">{h.org}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-10 p-6 bg-paper-warm border border-rule/60">
              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">Interests</div>
              <p className="font-display text-xl italic">
                Travelling · Reading · Documentaries · Video Editing · Cooking
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-gradient-paper py-24 md:py-32 px-6 md:px-12 border-t border-rule/60">
        <div className="max-w-5xl mx-auto text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-terracotta mb-6">§ Correspondence</div>
          <h2 className="font-display text-5xl md:text-7xl leading-[1.05] mb-8 text-balance">
            Let's build something <em className="italic text-terracotta">remarkable</em> — together.
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground mb-12">
            Open to graduate roles in AI / ML, Computer Vision, and Full-Stack engineering across
            Multan, Lahore and Faisalabad.
          </p>

          <div className="grid sm:grid-cols-2 gap-px bg-rule/60 border border-rule/60 max-w-3xl mx-auto text-left">
            <a href="mailto:ishratf357@gmail.com" className="bg-paper p-6 hover:bg-paper-warm transition group">
              <Mail className="w-5 h-5 text-terracotta mb-3" />
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-1">Email</div>
              <div className="font-display text-lg break-all group-hover:text-terracotta transition">ishratf357@gmail.com</div>
            </a>
            <a href="tel:+923321376787" className="bg-paper p-6 hover:bg-paper-warm transition group">
              <Phone className="w-5 h-5 text-terracotta mb-3" />
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-1">Telephone</div>
              <div className="font-display text-lg group-hover:text-terracotta transition">+92 332 1376787</div>
            </a>
            <a href="https://www.linkedin.com/in/ishrat-fatima67/" target="_blank" rel="noopener noreferrer" className="bg-paper p-6 hover:bg-paper-warm transition group">
              <Linkedin className="w-5 h-5 text-terracotta mb-3" />
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-1">LinkedIn</div>
              <div className="font-display text-lg group-hover:text-terracotta transition">/in/ishrat-fatima67</div>
            </a>
            <a href="https://github.com/Ishrat-fatima67" target="_blank" rel="noopener noreferrer" className="bg-paper p-6 hover:bg-paper-warm transition group">
              <Github className="w-5 h-5 text-terracotta mb-3" />
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-1">GitHub</div>
              <div className="font-display text-lg group-hover:text-terracotta transition">@Ishrat-fatima67</div>
            </a>
          </div>

          <div className="mt-12 flex flex-col items-center gap-6">
            <a href="/ishrat-fatima-cv.docx" download="Ishrat-Fatima-CV.docx">
              <Button className="bg-ink hover:bg-terracotta text-paper rounded-none h-12 px-8 text-xs uppercase tracking-[0.2em] transition-colors duration-500 gap-2">
                <Download className="w-4 h-4" /> Download Résumé
              </Button>
            </a>
            <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Based in Dera Ghazi Khan, Pakistan</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-rule/60 py-10 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <div>© MMXXVI · Ishrat Fatima</div>
          <div className="font-display text-base italic normal-case tracking-normal">
            "Curiosity, in print."
          </div>
          <div>Designed & built with care</div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
