"use client";

import { type MouseEvent } from "react";
import { PROFILE } from "@/lib/data";
import { scrollToTarget } from "@/lib/scroll";

const css = `
.hero{position:relative;min-height:100svh;overflow:clip;isolation:isolate;background:var(--paper)}
.hero-ghost{position:absolute;left:50%;top:clamp(110px,22svh,260px);transform:translateX(-50%);z-index:-1;margin:0;
  font-weight:800;letter-spacing:-.05em;line-height:.8;white-space:nowrap;font-size:clamp(84px,16.5vw,320px);
  color:transparent;-webkit-text-stroke:1.2px rgba(13,13,13,.16);user-select:none;
  animation:ghost-in 1.8s var(--ease) both .1s}
@keyframes ghost-in{from{opacity:0;letter-spacing:.02em}to{opacity:1;letter-spacing:-.05em}}
.hero-stage{position:absolute;left:50%;bottom:0;height:min(96svh,1040px);aspect-ratio:768/960;transform:translateX(-50%);mix-blend-mode:multiply;
  animation:stage-in 1.6s var(--ease) both}
@keyframes stage-in{from{opacity:0;transform:translate(-50%,28px)}to{opacity:1;transform:translate(-50%,0)}}
.hero-video{display:block;width:100%;height:100%;object-fit:cover;
  -webkit-mask-image:linear-gradient(90deg,transparent,#000 9%,#000 91%,transparent);
  mask-image:linear-gradient(90deg,transparent,#000 9%,#000 91%,transparent)}
.hero-copy{position:absolute;left:var(--gutter);bottom:clamp(40px,10svh,120px);z-index:2;max-width:min(36vw,520px)}
.hero-kicker{font:500 12px/1.4 var(--font-mono);text-transform:uppercase;letter-spacing:.02em;color:var(--mute);margin:0 0 18px}
.hero-kicker b{color:var(--ink);font-weight:500}
.h1{margin:0;font-weight:700;letter-spacing:-.045em;line-height:.95;font-size:clamp(48px,6.2vw,108px)}
.hero-line{display:block;overflow:hidden;padding-bottom:.06em;margin-bottom:-.06em}
.hero-line>span{display:block;animation:line-up 1.2s var(--ease) both;animation-delay:calc(.25s + var(--i) * .1s)}
@keyframes line-up{from{transform:translateY(105%)}to{transform:none}}
.hero-roles{margin:20px 0 0;color:var(--ink-2);font-size:15px;line-height:1.5;max-width:34ch}
.hero-ctas{display:flex;flex-wrap:wrap;gap:10px;margin-top:26px}
.hero-fade{animation:fade-up 1.2s var(--ease) both;animation-delay:calc(.5s + var(--i) * .08s)}
@keyframes fade-up{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}
.hero-side{position:absolute;right:var(--gutter);bottom:clamp(40px,10svh,120px);z-index:2;display:flex;flex-direction:column;align-items:flex-end;gap:18px;text-align:right}
.hero-side p,.hero-scroll span{margin:0;font:500 12px/1.5 var(--font-mono);text-transform:uppercase;color:var(--mute)}
.snd{position:relative;width:46px;height:46px;border-radius:50%;background:var(--ink);color:#fff;display:grid;place-items:center;
  transition:transform .5s var(--ease),box-shadow .5s var(--ease)}
.snd:hover{transform:translateY(-2px) scale(1.04);box-shadow:0 14px 30px -12px rgba(13,13,13,.55)}
.snd svg{display:block}
.snd-ping{position:absolute;inset:0;border-radius:50%;box-shadow:0 0 0 1.5px var(--ink);animation:ping 1.8s var(--ease) infinite;pointer-events:none}
@keyframes ping{0%{transform:scale(1);opacity:.55}100%{transform:scale(1.9);opacity:0}}
.hero-scroll{display:inline-flex;align-items:center;gap:10px}
.hero-scroll i{width:1px;height:34px;background:var(--line);position:relative;overflow:hidden}
.hero-scroll i::after{content:"";position:absolute;left:0;top:-40%;width:1px;height:40%;background:var(--ink);animation:drip 2.2s var(--ease) infinite}
@keyframes drip{to{top:100%}}
@media (max-width:899px){
  .hero{display:flex;flex-direction:column;padding-top:var(--nav-h);min-height:auto}
  .hero-ghost{top:calc(var(--nav-h) + 6svh)}
  .hero-stage{position:relative;left:auto;bottom:auto;transform:none;height:62svh;max-height:640px;margin:0 auto;animation-name:stage-in-m}
  @keyframes stage-in-m{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:none}}
  .hero-copy{position:relative;left:auto;bottom:auto;max-width:none;padding:28px var(--gutter) 56px}
  .hero-side{position:absolute;right:var(--gutter);top:calc(var(--nav-h) + 62svh - 64px);bottom:auto}
  .hero-side p,.hero-scroll{display:none}
}
@media (min-width:900px) and (max-width:1180px){.hero-copy{max-width:40vw}.h1{font-size:clamp(44px,5.6vw,72px)}}
`;

export default function Hero() {
  const go = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollToTarget(id);
  };

  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <style>{css}</style>
      <p className="hero-ghost" aria-hidden="true">
        {PROFILE.firstName.toUpperCase()}
      </p>

      <div className="hero-stage">
        <div className="hero-monogram" role="img" aria-label="Monograma de Nátaly">NC</div>
      </div>

      <div className="hero-copy">
        <p className="hero-kicker hero-fade" style={{ ["--i" as string]: 0 }}>
          <b>{PROFILE.name}</b> · {PROFILE.location}
        </p>
        <h1 id="hero-title" className="h1">
          <span className="hero-line">
            <span style={{ ["--i" as string]: 0 }}>{PROFILE.role.split(" ").slice(0, -1).join(" ")}</span>
          </span>
          <span className="hero-line">
            <span style={{ ["--i" as string]: 1 }}>
              <em>{PROFILE.role.split(" ").slice(-1)[0]}.</em>
            </span>
          </span>
        </h1>
        <p className="hero-roles hero-fade" style={{ ["--i" as string]: 1 }}>
          {PROFILE.roles.slice(1).join(" / ")}
        </p>
        <div className="hero-ctas">
          <a href="#work" className="btn btn-primary hero-fade" style={{ ["--i" as string]: 2 }} onClick={(e) => go(e, "#work")}>
            Ver iniciativas
          </a>
          <a href="#contact" className="btn btn-ghost hero-fade" style={{ ["--i" as string]: 3 }} onClick={(e) => go(e, "#contact")}>
            Hablemos
          </a>
        </div>
      </div>

      <div className="hero-side hero-fade" style={{ ["--i" as string]: 5 }}>
        <p>
          Singularity
          <br />
          {PROFILE.current.title} @ {PROFILE.current.org}
        </p>
        <a href="#about" className="hero-scroll" onClick={(e) => go(e, "#about")}>
          <span>Explora</span>
          <i aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
