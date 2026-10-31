className="mb-4 text-xs font-medium uppercase tracking-[.24em] text-white/60">Hi, I’m <span className="text-white">Muhammad Ali</span></motion.p>
              <motion.h1 initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2, duration: .8 }} className="font-display text-[clamp(3.4rem,8.2vw,7.7rem)] font-extrabold leading-[.91] tracking-[-.085em]">
                CREATIVE<br /><span className="text-white/85">VIDEO</span><br /><span className="text-lime-300">EDITOR<span className="text-white">.</span></span>
              </motion.h1>
              <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] uppercase tracking-[.18em] text-white/45"><span>AI Video Editor</span><i className="h-1 w-1 rounded-full bg-lime-300" /><span>UGC Creator</span><i className="h-1 w-1 rounded-full bg-lime-300" /><span>Cinematic Ads Specialist</span></div>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .5 }} className="mt-7 max-w-[480px] text-sm leading-7 text-white/55">I help DTC brands get <span className="font-semibold text-white">3× sales</span> with scroll-stopping AI UGC ads. Strategy-led creative, cinematic execution, built to make people stop, watch and act.</motion.p>
              <div className="mt-9 flex flex-wrap gap-3"><a href="#work" className="rounded-full bg-lime-300 px-6 py-3.5 text-[10px] font-bold uppercase tracking-[.15em] text-black transition hover:bg-white">Explore my work ↗</a><a href="#contact" className="rounded-full border border-white/20 px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[.15em] text-white transition hover:border-white/60">Start a project</a></div>
            </div>
            <motion.div style={{ y: heroY }} className="order-1 mx-auto w-full max-w-[470px] lg:order-2">
              <div className="relative mx-auto aspect-[.88/1] max-h-[590px] w-full overflow-hidden rounded-[48%_48%_22px_22px] border border-white/15 portrait-light soft-glow">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,transparent_20%,rgba(0,0,0,.48)_80%)]" />
                <div className="absolute left-1/2 top-[13%] h-[66%] w-[67%] -translate-x-1/2 rounded-t-[48%] portrait-shape opacity-90 shadow-[0_30px_100px_rgba(0,0,0,.55)]" />
                <div className="absolute left-1/2 top-[18%] h-[22%] w-[38%] -translate-x-1/2 rounded-[48%] bg-[#292a27] shadow-[inset_0_-8px_15px_rgba(0,0,0,.5)]" />
                <div className="absolute left-1/2 top-[27%] h-[34%] w-[31%] -translate-x-1/2 rounded-[42%_42%_48%_48%] bg-gradient-to-br from-[#c9c8bc] via-[#999b90] to-[#55584f] shadow-[inset_-12px_-5px_18px_rgba(0,0,0,.22)]">
                  <div className="absolute left-[18%] top-[39%] h-[2px] w-[17%] rounded-full bg-[#30312e]" /><div className="absolute right-[18%] top-[39%] h-[2px] w-[17%] rounded-full bg-[#30312e]" />
                  <div className="absolute left-1/2 top-[60%] h-[2px] w-[10%] -translate-x-1/2 bg-[#56534e]" /><div className="absolute left-1/2 top-[77%] h-[3px] w-[18%] -translate-x-1/2 rounded-full bg-[#514541]" />
                </div>
                <div className="absolute bottom-[-3%] left-1/2 h-[48%] w-[86%] -translate-x-1/2 rounded-t-[48%] bg-gradient-to-b from-[#e0e0d7] via-[#a9aaa1] to-[#343630]" />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/65 to-transparent" />
                <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between"><div><div className="text-[9px] uppercase tracking-[.25em] text-white/60">Creative identity</div><div className="mt-1 font-display text-xl font-semibold tracking-[-.05em]">MA<span className="text-lime-300">.</span></div></div><div className="rounded-full border border-white/30 bg-black/20 px-3 py-2 text-[9px] uppercase tracking-[.16em] backdrop-blur-md">Visual storyteller</div></div>
              </div>
              <div className="mt-4 flex items-center justify-between px-1 font-mono text-[9px] uppercase tracking-[.18em] text-white/35"><span>01 — Creative direction</span><span>PK / Worldwide</span></div>
            </motion.div>
          </div>
          <div className="absolute bottom-7 left-5 right-5 flex items-center justify-between border-t border-white/10 pt-5 sm:left-10 sm:right-10 lg:left-16 lg:right-16"><span className="font-mono text-[9px] tracking-[.2em] text-white/35">SCROLL TO EXPLORE ↓</span><div className="flex items-center gap-3 text-[9px] uppercase tracking-[.18em] text-white/35"><span className="hidden sm:inline">The next frame is yours</span><span className="h-px w-10 bg-white/20" />01 / 05</div></div>
        </section>

        <section className="relative border-y border-white/[.07] py-20">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
            <div className="grid gap-8 md:grid-cols-[.7fr_1.3fr] md:items-end">
              <SectionLabel number="01">The creative focus</SectionLabel>
              <div className="font-display text-[clamp(2.6rem,6vw,6rem)] font-bold leading-[.95] tracking-[-.075em]">
                <AnimatePresence mode="wait"><motion.div key={activeWord} initial={{ opacity: 0, y: 28, filter: "blur(8px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} exit={{ opacity: 0, y: -24, filter: "blur(8px)" }} transition={{ duration: .45 }}>{["VIRAL UGC", "CINEMATIC ADS", "AI AVATARS"][activeWord]}<span className="text-lime-300">.</span></motion.div></AnimatePresence>
              </div>
            </div>
            <p className="mt-7 max-w-xl text-sm leading-7 text-white/45 md:ml-auto">Different formats. One goal: make every second earn attention. I combine creative strategy and AI-powered production to turn ideas into ads people remember.</p>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-[1440px] px-5 py-28 sm:px-10 lg:px-16">
          <SectionLabel number="02">A little about me</SectionLabel>
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="glass soft-glow rounded-[26px] p-5">
              <div className="relative flex aspect-[1.12/1] items-end overflow-hidden rounded-[18px] bg-[radial-gradient(ellipse_at_50%_30%,#c4c6b7,#55594f_45%,#141612_78%)] p-6">
                <div className="absolute left-1/2 top-[10%] h-[74%] w-[58%] -translate-x-1/2 rounded-t-[45%] bg-gradient-to-b from-[#c9c9bf] via-[#85887e] to-[#262922] opacity-80" />
                <div className="absolute left-1/2 top-[19%] h-[34%] w-[28%] -translate-x-1/2 rounded-[45%] bg-gradient-to-br from-[#d3d1c5] to-[#66695f]" />
                <div className="relative z-10 flex w-full justify-between text-[9px] uppercase tracking-[.18em] text-white/70"><span>Independent creative</span><span>MA / 2026</span></div>
              </div>
              <div className="flex items-center justify-between px-1 pt-5"><div><div className="font-display text-xl font-semibold tracking-[-.04em]">Muhammad Ali</div><div className="mt-1 text-[10px] uppercase tracking-[.16em] text-white/40">AI Video Editor</div></div><div className="grid h-10 w-10 place-items-center rounded-full border border-lime-300/40 text-lime-300">↗</div></div>
            </motion.div>
            <div className="flex flex-col justify-center">
              <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="font-display text-[clamp(2.8rem,5.7vw,5.8rem)] font-bold leading-[.98] tracking-[-.075em]">Hello, I’m<br /><span className="text-white/45">Muhammad Ali.</span></motion.h2>
              <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: .12 }} className="mt-8 max-w-2xl text-sm leading-8 text-white/55">I’m a creative video editor and UGC specialist focused on making modern brands impossible to ignore. From the first hook to the final sound design, I build visual stories that balance entertainment, clarity and conversion. Lorem ipsum dolor sit amet, consectetur adipiscing elit. I believe great creative is not just seen — it is felt, remembered and acted on.</motion.p>
              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {[["01","CapCut Pro","Precision edits & pacing"],["02","Higgsfield AI","Cinematic AI visuals"],["03","ElevenLabs Voice","Natural voice experiences"]].map(([n,t,d])=><div key={n} className="glass rounded-2xl p-4"><div className="font-mono text-[9px] text-lime-300">{n} / TOOL</div><div className="mt-5 font-display text-base font-semibold">{t}</div><div className="mt-2 text-[10px] leading-5 text-white/40">{d}</div></div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="overflow-hidden border-y border-white/[.07] py-12">
          <div className="mx-auto mb-7 max-w-[1440px] px-5 sm:px-10 lg:px-16"><SectionLabel number="03">Technologies I work with</SectionLabel></div>
          <div className="flex w-max marquee-track">{[...tools,...tools].map((t,i)=><div key={`${t}-${i}`} className="mx-3 flex items-center gap-6 rounded-full border border-white/10 bg-white/[.025] px-6 py-4 text-[10px] font-semibold tracking-[.2em] text-white/65"><span className="text-lime-300">✳</span>{t}</div>)}</div>
        </section>

        <section id="process" className="mx-auto max-w-[1440px] px-5 py-28 sm:px-10 lg:px-16">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><SectionLabel number="04">How the work gets done</SectionLabel><h2 className="font-display text-[clamp(2.7rem,6vw,6rem)] font-bold leading-[.95] tracking-[-.08em]">Core execution<br /><span className="text-white/40">road map.</span></h2></div><p className="max-w-sm text-sm leading-7 text-white/45">A simple, repeatable process that connects audience insight with creative execution — and turns a brief into a polished deliverable.</p></div>
          <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{steps.map(([n,t,d],i)=><motion.div key={n} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: i*.08 }} className="glass group min-h-[260px] rounded-[22px] p-6 transition duration-500 hover:-translate-y-2 hover:border-lime-300/40"><div className="flex items-center justify-between"><span className="font-mono text-xs text-lime-300">{n}</span><span className="text-xl text-white/25 transition group-hover:rotate-45 group-hover:text-lime-300">↗</span></div><div className="mt-16 font-display text-xl font-semibold tracking-[-.04em]">{t}</div><p className="mt-3 text-xs leading-6 text-white/45">{d}</p></motion.div>)}</div>
        </section>

        <section id="work" className="border-y border-white/[.07] bg-[#0d0e0c] py-28">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
            <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end"><div><SectionLabel number="05">Selected creative work</SectionLabel><h2 className="font-display text-[clamp(2.8rem,6vw,6rem)] font-bold leading-[.95] tracking-[-.08em]">Made to stop<br /><span className="text-white/40">the scroll.</span></h2></div><p className="max-w-sm text-sm leading-7 text-white/45">A selection of creative directions across product, lifestyle and AI-powered storytelling. Replace each concept frame with your final video or thumbnail.</p></div>
            <div className="mt-14 grid gap-x-5 gap-y-10 md:grid-cols-2 lg:grid-cols-3">{projects.map((p,i)=><motion.article key={p.n} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: .15 }} transition={{ delay: (i%3)*.07 }} className="group">
              <ProjectVisual project={p} />
              <div className="mt-5 flex items-start justify-between gap-3"><div><div className="text-[9px] tracking-[.2em] text-white/35">{p.n} / {p.type}</div><h3 className="mt-2 font-display text-xl font-semibold tracking-[-.04em]">{p.title}</h3></div><span className="mt-1 whitespace-nowrap rounded-full border border-lime-300/25 px-3 py-1.5 font-mono text-[8px] tracking-[.12em] text-lime-300">{p.result}</span></div>
              <p className="mt-3 max-w-md text-xs leading-6 text-white/40">{p.desc}</p>
            </motion.article>)}</div>
            <div className="mt-14 border-t border-white/10 pt-6 text-center font-mono text-[9px] tracking-[.2em] text-white/30">MORE CREATIVE EXPERIMENTS IN PROGRESS — 2026</div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-[1440px] px-5 py-28 sm:px-10 lg:px-16">
          <div className="grid gap-14 lg:grid-cols-[.9fr_1.1fr]">
            <div><SectionLabel number="06">Have a project in mind?</SectionLabel><h2 className="font-display text-[clamp(3.3rem,7vw,7rem)] font-bold leading-[.9] tracking-[-.085em]">Let’s make<br />something<br /><span className="text-lime-300">unmissable.</span></h2><p className="mt-8 max-w-md text-sm leading-7 text-white/45">Tell me about your brand, your audience and what you want your next creative to achieve. Let’s make the next scroll stop here.</p><div className="mt-12 space-y-3 text-xs text-white/50"><div className="flex items-center gap-3"><span className="text-lime-300">↗</span> Available for freelance & brand collaborations</div><div className="flex items-center gap-3"><span className="text-lime-300">↗</span> Remote / Worldwide</div></div></div>
            <form onSubmit={submit} className="glass rounded-[26px] p-6 sm:p-9">
              <div className="mb-8 flex items-center justify-between"><div className="font-display text-xl font-semibold tracking-[-.04em]">Start a conversation</div><span className="font-mono text-[9px] tracking-[.15em] text-lime-300">PROJECT INQUIRY</span></div>
              <div className="grid gap-x-7 sm:grid-cols-2"><label className="mb-6 block text-[9px] uppercase tracking-[.18em] text-white/45">Your name<input required name="name" value={form.name} onChange={update} className="input-line text-sm normal-case tracking-normal" placeholder="John Smith" /></label><label className="mb-6 block text-[9px] uppercase tracking-[.18em] text-white/45">Email address<input required type="email" name="email" value={form.email} onChange={update} className="input-line text-sm normal-case tracking-normal" placeholder="john@brand.com" /></label></div>
              <label className="mb-6 block text-[9px] uppercase tracking-[.18em] text-white/45">Brand name<input name="brand" value={form.brand} onChange={update} className="input-line text-sm normal-case tracking-normal" placeholder="Your brand" /></label>
              <label className="mb-8 block text-[9px] uppercase tracking-[.18em] text-white/45">Tell me about your project<textarea required rows="4" name="message" value={form.message} onChange={update} className="input-line resize-none text-sm normal-case tracking-normal" placeholder="What are we creating together?" /></label>
              <button type="submit" className="flex w-full items-center justify-between rounded-full bg-lime-300 px-6 py-4 text-[10px] font-bold uppercase tracking-[.16em] text-black transition hover:bg-white"><span>{sent ? "Open your email app ↗" : "Send project inquiry"}</span><span className="text-lg">↗</span></button>
              <p className="mt-4 text-center text-[9px] leading-5 text-white/30">This form opens your email app with the details pre-filled. Update the recipient email in the code before publishing.</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-5 pb-8 pt-12 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center"><div className="font-mono text-[9px] uppercase tracking-[.2em] text-white/35">Independent creative partner / Pakistan & worldwide</div><a href="#home" className="text-[10px] uppercase tracking-[.18em] text-white/55 transition hover:text-lime-300">Back to top ↑</a></div>
          <div className="my-12 overflow-hidden font-display text-[clamp(3rem,12vw,11rem)] font-extrabold leading-[.85] tracking-[-.095em] text-white/[.9]">MUHAMMAD ALI<span className="text-lime-300">.</span></div>
          <div className="flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-[9px] uppercase tracking-[.16em] text-white/30 sm:flex-row"><span>© 2026 Muhammad Ali. All rights reserved.</span><span>Designed with intention. Edited to perform.</span><span>MA / 001</span></div>
        </div>
      </footer>
    </div>
  );
  }
