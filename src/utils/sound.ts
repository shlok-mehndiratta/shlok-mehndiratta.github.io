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
      
      // Default to muted if user prefers reduced motion or explicitly disabled it
      this.isMuted = savedSoundPref !== null ? savedSoundPref === 'false' : prefersReducedMotion;
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

  /**
   * 1. Haptic Ceramic Tap (Micro-Click)
   * Super-fast tactile pulse for buttons, tabs, and navigation links.
   */
  public tap(frequency = 750, duration = 0.022): void {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    const now = ctx.currentTime;
    osc.frequency.setValueAtTime(frequency, now);
    osc.frequency.exponentialRampToValueAtTime(110, now + duration);

    gain.gain.setValueAtTime(0.045, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + duration);
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

    osc.type = 'triangle';
    const now = ctx.currentTime;
    const duration = 0.035;

    const startFreq = isDark ? 520 : 360;
    const endFreq = isDark ? 280 : 640;

    osc.frequency.setValueAtTime(startFreq, now);
    osc.frequency.exponentialRampToValueAtTime(endFreq, now + duration);

    gain.gain.setValueAtTime(0.035, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

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
}

export const sound = new SoundEngine();
