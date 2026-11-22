"use client";

import { useEffect, useRef } from "react";

/**
 * Ghost Mode background: a slow blue-violet domain-warped noise field drawn
 * on one full-screen WebGL quad. Loaded lazily (see GhostBackground) so it
 * never blocks the first paint; the CSS gradient under it shows until then.
 *
 * - Caps the pixel ratio and renders at reduced resolution to stay cheap.
 * - Pauses when the tab is hidden or the canvas is off screen.
 * - With prefers-reduced-motion it draws a single still frame.
 */
const VS = `attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}`;
const FS = `#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
uniform vec2 r;uniform float t;uniform vec2 m;uniform float s;
float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+1.),f.x),f.y);}
float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<5;i++){v+=a*n(p);p*=2.02;a*=.5;}return v;}
void main(){vec2 uv=gl_FragCoord.xy/r;vec2 p=gl_FragCoord.xy/r.x*1.6;float T=t*.06;
vec2 q=vec2(fbm(p+T),fbm(p+vec2(5.2,1.3)-T));vec2 w=vec2(fbm(p+3.*q+vec2(1.7,9.2)+T*1.5),fbm(p+3.*q+vec2(8.3,2.8)));
float f=fbm(p+2.5*w+m*.3);
vec3 base=vec3(.012,.02,.06);vec3 blue=vec3(.14,.27,1.);vec3 vio=vec3(.52,.3,1.);vec3 cy=vec3(.15,.78,1.);
vec3 col=mix(base,blue,smoothstep(.35,.85,f));col=mix(col,vio,smoothstep(.55,1.,w.x)*.8);col+=cy*pow(smoothstep(.6,1.,q.y),3.)*.6;
float vig=1.-smoothstep(.2,1.2,length(uv-vec2(.5,.65)));col*=mix(.25,1.,vig);col*=mix(1.,.5,s);col*=1.12;
gl_FragColor=vec4(clamp(col,0.,1.),1.);}`;

export default function GhostShader() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const g = c.getContext("webgl", { antialias: false, alpha: false, powerPreference: "low-power" });
    if (!g || g.isContextLost()) return;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const sh = (type: number, src: string) => {
      const o = g.createShader(type)!;
      g.shaderSource(o, src);
      g.compileShader(o);
      return o;
    };
    const pr = g.createProgram()!;
    g.attachShader(pr, sh(g.VERTEX_SHADER, VS));
    g.attachShader(pr, sh(g.FRAGMENT_SHADER, FS));
    g.linkProgram(pr);
    if (!g.getProgramParameter(pr, g.LINK_STATUS)) return;
    g.useProgram(pr);
    const b = g.createBuffer();
    g.bindBuffer(g.ARRAY_BUFFER, b);
    g.bufferData(g.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), g.STATIC_DRAW);
    const loc = g.getAttribLocation(pr, "p");
    g.enableVertexAttribArray(loc);
    g.vertexAttribPointer(loc, 2, g.FLOAT, false, 0, 0);
    const ur = g.getUniformLocation(pr, "r");
    const ut = g.getUniformLocation(pr, "t");
    const um = g.getUniformLocation(pr, "m");
    const us = g.getUniformLocation(pr, "s");

    let mx = 0.5, my = 0.5, tx = 0.5, ty = 0.5;
    const onMove = (e: PointerEvent) => { tx = e.clientX / innerWidth; ty = e.clientY / innerHeight; };
    const resize = () => {
      // Render at ~60% of CSS pixels: the field is soft, so nobody sees the difference.
      const d = Math.min(window.devicePixelRatio || 1, 1.25) * 0.6;
      c.width = Math.max(1, Math.round(innerWidth * d));
      c.height = Math.max(1, Math.round(innerHeight * d));
      g.viewport(0, 0, c.width, c.height);
    };
    resize();

    const t0 = performance.now();
    let raf = 0;
    let running = true;
    const draw = (now: number) => {
      mx += (tx - mx) * 0.04;
      my += (ty - my) * 0.04;
      g.uniform2f(ur, c.width, c.height);
      g.uniform1f(ut, still ? 24 : (now - t0) / 1000 + 20);
      g.uniform2f(um, mx, my);
      g.uniform1f(us, Math.min(window.scrollY / Math.max(1, innerHeight), 1) * 0.6);
      g.drawArrays(g.TRIANGLE_STRIP, 0, 4);
    };
    const loop = (now: number) => {
      draw(now);
      if (running) raf = requestAnimationFrame(loop);
    };
    const onVis = () => {
      cancelAnimationFrame(raf);
      running = !document.hidden && !still;
      if (running) raf = requestAnimationFrame(loop);
    };

    // Some GPU drivers (seen on Intel + Direct3D/ANGLE) render a broken field.
    // The field is always dark, so if the first frame comes out bright, drop
    // the canvas and keep the CSS gradient underneath.
    draw(t0);
    const px = new Uint8Array(4);
    g.readPixels(Math.floor(c.width / 2), Math.floor(c.height / 2), 1, 1, g.RGBA, g.UNSIGNED_BYTE, px);
    if (g.isContextLost() || px[0] + px[1] + px[2] > 600 || g.getError() !== g.NO_ERROR) {
      c.style.display = "none";
      return;
    }

    if (still) {
      const onResizeStill = () => { resize(); draw(t0); };
      window.addEventListener("resize", onResizeStill);
      c.dataset.ready = "";
      return () => window.removeEventListener("resize", onResizeStill);
    }

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("visibilitychange", onVis);
    raf = requestAnimationFrame(loop);
    c.dataset.ready = "";
    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("visibilitychange", onVis);
      // No loseContext() here: React StrictMode (dev) re-runs this effect on
      // the same canvas, and a lost context paints the canvas as a blank layer.
    };
  }, []);

  return <canvas ref={ref} className="gh-gl" aria-hidden="true" />;
}
