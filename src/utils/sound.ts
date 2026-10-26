/**
 * Procedural Web Audio API Sound Engine
 * Zero external audio files, 0 KB bundle download, sub-millisecond response latency.
 * Tuned specifically for minimal, tactile, Apple-grade UI micro-interactions.
 */

class SoundEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;

  constructor() {
    if (typeof window !== 'undefined') {
      // Respect accessibility preferences
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const savedSoundPref = localStorage.getItem('sound-enabled');
      
      // Default to enabled unless user has reduced motion or explicitly muted
      this.isMuted = savedSoundPref !== null ? savedSoundPref === 'false' : prefersReducedMotion;

      // Invisible power-user shortcut: Pressing 'M' toggles sound quietly without UI clutter
      window.addEventListener('keydown', (e) => {
        const activeEl = document.activeElement;
        const tagName = activeEl?.tagName;
        if (['INPUT', 'TEXTAREA', 'SELECT'].includes(tagName || '') || activeEl?.isContentEditable) {
          return;
        }
        if (e.key.toLowerCase() === 'm' && !e.metaKey && !e.ctrlKey && !e.altKey) {
          this.toggleMute();
          if (!this.isMuted) {
            this.tap();
          }
        }
      });
    }
  }

  private getContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (typeof window !== 'undefined') {
      localStorage.setItem('sound-enabled', String(!this.isMuted));
    }
    return !this.isMuted;
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  public setMuted(muted: boolean): void {
    this.isMuted = muted;
    if (typeof window !== 'undefined') {
      localStorage.setItem('sound-enabled', String(!muted));
    }
  }

  private createPanner(ctx: AudioContext, pan = 0): StereoPannerNode | null {
    if (typeof ctx.createStereoPanner === 'function') {
      const panner = ctx.createStereoPanner();
      panner.pan.setValueAtTime(Math.max(-1, Math.min(1, pan)), ctx.currentTime);
      return panner;
    }
    return null;
  }

  /**
   * 1. Haptic Ceramic Tap (Micro-Click)
   * Super-fast tactile pulse for buttons, tabs, and navigation links.
   * Auto-calculates subtle spatial panning [-0.25, +0.25] when an event or element is passed.
   * Features subtle ±2.5% organic pitch flutter to avoid repetitive acoustic fatigue.
   */
  public tap(targetOrPan?: MouseEvent | HTMLElement | number, baseFreq = 750): void {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    let pan = 0;
    if (typeof targetOrPan === 'number') {
      pan = targetOrPan;
    } else if (typeof window !== 'undefined' && targetOrPan) {
      if ('clientX' in targetOrPan) {
        // From MouseEvent
        const normX = targetOrPan.clientX / window.innerWidth;
        pan = (normX - 0.5) * 0.5; // Soft stereo span [-0.25, +0.25]
      } else if ('getBoundingClientRect' in targetOrPan) {
        // From HTMLElement
        const rect = targetOrPan.getBoundingClientRect();
        const normX = (rect.left + rect.width / 2) / window.innerWidth;
        pan = (normX - 0.5) * 0.5;
      }
    }

    // Organic micro-variation in pitch and envelope
    const pitchJitter = 1 + (Math.random() - 0.5) * 0.05; // ±2.5%
    const frequency = baseFreq * pitchJitter;
    const duration = 0.022 + (Math.random() - 0.5) * 0.003;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const panner = this.createPanner(ctx, pan);

    osc.type = 'sine';
    const now = ctx.currentTime;
    osc.frequency.setValueAtTime(frequency, now);
    osc.frequency.exponentialRampToValueAtTime(110, now + duration);

    gain.gain.setValueAtTime(0.038, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(gain);
    if (panner) {
      gain.connect(panner);
      panner.connect(ctx.destination);
    } else {
      gain.connect(ctx.destination);
    }

    osc.start(now);
    osc.stop(now + duration);
  }

  /**
   * Spatial Tap helper with explicit panning
   */
  public spatialTap(pan: number): void {
    this.tap(pan);
  }

  /**
   * Organic Tap with natural physical micro-variations
   */
  public organicTap(vary = true): void {
    if (vary) {
      this.tap();
    } else {
      // Fixed robotic pitch
      const ctx = this.getContext();
      if (!ctx || this.isMuted) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      const now = ctx.currentTime;
      osc.frequency.setValueAtTime(750, now);
      osc.frequency.exponentialRampToValueAtTime(110, now + 0.022);
      gain.gain.setValueAtTime(0.038, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.022);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.022);
    }
  }

  /**
   * 2. Physical Magnetic Snap (Light / Dark Mode Switch)
   * Dual-tone micro mechanical tick with pitch direction based on state.
   */
  public switch(isDark = true): void {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const panner = this.createPanner(ctx, 0.2); // ThemeToggle sits on the right

    osc.type = 'triangle';
    const now = ctx.currentTime;
    const duration = 0.035;

    const startFreq = isDark ? 520 : 360;
    const endFreq = isDark ? 280 : 640;

    osc.frequency.setValueAtTime(startFreq, now);
    osc.frequency.exponentialRampToValueAtTime(endFreq, now + duration);

    gain.gain.setValueAtTime(0.032, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(gain);
    if (panner) {
      gain.connect(panner);
      panner.connect(ctx.destination);
    } else {
      gain.connect(ctx.destination);
    }

    osc.start(now);
    osc.stop(now + duration);
  }

  /**
   * 3. Fluid Bubble Pop (Drawer & Accordion Expansion)
   * Bouncy, organic upward pitch sweep for expanding abstracts or BibTeX drawers.
   */
  public pop(): void {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    const now = ctx.currentTime;
    const duration = 0.038;

    osc.frequency.setValueAtTime(320, now);
    osc.frequency.exponentialRampToValueAtTime(780, now + duration);

    gain.gain.setValueAtTime(0.038, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + duration);
  }

  /**
   * 4. Harmonic Chime (Confirmation / Copied BibTeX)
   * Dual-tone consonant musical fifth with soft exponential decay.
   */
  public chime(): void {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const duration = 0.12;

    // Two harmonic notes: C6 (1046.5 Hz) and G6 (1567.98 Hz)
    [1046.5, 1568.0].forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.02);

      gain.gain.setValueAtTime(0.025, now + idx * 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + idx * 0.02);
      osc.stop(now + duration);
    });
  }

  /**
   * Harmonic Shortcut Chord (e.g. G -> R, G -> E, or ⌘K)
   * Plays sequential musical intervals for keystroke combos.
   */
  public chord(type: 'fifth' | 'third' | 'triad' = 'fifth'): void {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    let notes: number[] = [];
    let interval = 0.055;

    if (type === 'fifth') {
      notes = [440.0, 659.25]; // A4 -> E5 (Perfect 5th)
    } else if (type === 'third') {
      notes = [440.0, 554.37]; // A4 -> C#5 (Major 3rd)
    } else if (type === 'triad') {
      notes = [440.0, 554.37, 659.25]; // A Major Triad
      interval = 0.045;
    }

    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      const noteTime = now + idx * interval;
      osc.frequency.setValueAtTime(freq, noteTime);

      gain.gain.setValueAtTime(0.028, noteTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, noteTime + 0.14);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(noteTime);
      osc.stop(noteTime + 0.14);
    });
  }

  /**
   * 5. Mechanical Aperture Shutter (Archive Image Inspection)
   * Twin micro-clicks mimicking a Leica / Hasselblad shutter mechanism.
   */
  public shutter(): void {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;

    [0, 0.028].forEach((offset) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(900, now + offset);
      osc.frequency.exponentialRampToValueAtTime(140, now + offset + 0.015);

      gain.gain.setValueAtTime(0.04, now + offset);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + offset + 0.015);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + offset);
      osc.stop(now + offset + 0.015);
    });
  }

  /**
   * 6. Resonant Airy Whisper (Command Palette ⌘K Summon)
   * Low-passed resonant breath for entering the search modal.
   */
  public whisper(): void {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    const now = ctx.currentTime;
    const duration = 0.08;

    osc.frequency.setValueAtTime(420, now);
    osc.frequency.exponentialRampToValueAtTime(720, now + duration * 0.6);
    osc.frequency.exponentialRampToValueAtTime(540, now + duration);

    gain.gain.setValueAtTime(0.02, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + duration);
  }

  /**
   * 7. Inertial Scroll Detent (Leica Aperture / Apple Watch Crown Notch)
   * Ultra-short 8ms damped mechanical click.
   */
  public scrollDetent(pitch = 1100): void {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    const now = ctx.currentTime;
    const duration = 0.010;

    osc.frequency.setValueAtTime(pitch, now);
    osc.frequency.exponentialRampToValueAtTime(90, now + duration);

    gain.gain.setValueAtTime(0.022, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + duration);
  }

  /**
   * 8. Analog Workbench Atmosphere (Opt-in Laboratory Ambient Texture)
   * Procedural filtered pink/warm noise + gentle 60Hz transformer tone.
   */
  private atmosphereSource: AudioBufferSourceNode | null = null;
  private atmosphereHum: OscillatorNode | null = null;
  private atmosphereGain: GainNode | null = null;
  private isAtmosphereActive: boolean = false;

  public toggleAtmosphere(): boolean {
    if (this.isAtmosphereActive) {
      this.stopAtmosphere();
      return false;
    } else {
      this.startAtmosphere();
      return true;
    }
  }

  public getAtmosphereActive(): boolean {
    return this.isAtmosphereActive;
  }

  public startAtmosphere(): void {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;
    if (this.isAtmosphereActive) return;

    const now = ctx.currentTime;

    // Create 3 seconds of looped pink noise
    const bufferSize = ctx.sampleRate * 3;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.06;
      b6 = white * 0.115926;
    }

    const noiseSource = ctx.createBufferSource();
    noiseSource.buffer = noiseBuffer;
    noiseSource.loop = true;

    // Filter to warm low-end tape sound
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(380, now);

    // Subtle 60Hz transformer hum
    const hum = ctx.createOscillator();
    hum.type = 'sine';
    hum.frequency.setValueAtTime(60, now);

    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.0001, now);
    masterGain.gain.exponentialRampToValueAtTime(0.012, now + 1.2); // Gentle 1.2s fade-in

    noiseSource.connect(filter);
    filter.connect(masterGain);
    hum.connect(masterGain);
    masterGain.connect(ctx.destination);

    noiseSource.start(now);
    hum.start(now);

    this.atmosphereSource = noiseSource;
    this.atmosphereHum = hum;
    this.atmosphereGain = masterGain;
    this.isAtmosphereActive = true;
  }

  public stopAtmosphere(): void {
    if (!this.ctx || !this.atmosphereGain) {
      this.isAtmosphereActive = false;
      return;
    }

    const now = this.ctx.currentTime;
    this.atmosphereGain.gain.setValueAtTime(this.atmosphereGain.gain.value, now);
    this.atmosphereGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.8);

    setTimeout(() => {
      try {
        this.atmosphereSource?.stop();
        this.atmosphereHum?.stop();
        this.atmosphereSource?.disconnect();
        this.atmosphereHum?.disconnect();
        this.atmosphereGain?.disconnect();
      } catch {}
      this.atmosphereSource = null;
      this.atmosphereHum = null;
      this.atmosphereGain = null;
      this.isAtmosphereActive = false;
    }, 850);
  }
}

export const sound = new SoundEngine();
