import { LitElement, html, css, type PropertyValues } from "lit";
import { customElement, property, state, query } from "lit/decorators.js";
import { map } from "lit/directives/map.js";
import { classMap } from "lit/directives/class-map.js";

import type { SpineWebComponentSkeleton } from "@esotericsoftware/spine-webcomponents";
import "@esotericsoftware/spine-webcomponents";

@customElement("ba-memorial-lobby-viewer")
export class MemorialLobbyViewer extends LitElement {
  @property({ type: String })
  animation: string | null = "Start_Idle_01";

  @property({ type: Number })
  aspectRatioW: number = 16;

  @property({ type: Number })
  aspectRatioH: number = 9;

  @property({ type: String })
  basePath = "assets/spines/lobbies/";

  @property({ type: Boolean })
  separateBg = false;

  @property({ type: String })
  character = "";

  @property({ type: String })
  atlasName: string | null = null;

  @property({ type: String })
  skelName: string | null = null;

  @property({ type: String })
  bgAtlasName: string | null = null;

  @property({ type: String })
  bgSkelName: string | null = null;

  @state() _uniqueId = crypto.randomUUID();
  @state() _animationList: string[] = [];
  @state() _identifier = "";
  // @state() _fullscreen = false;
  @state() _loading = true;
  @state() _menuOpen = false;
  @state() _uiHidden = false;
  @state() _atlasPath = "";
  @state() _skelPath = "";
  @state() _bgAtlasPath = "";
  @state() _bgSkelPath = "";

  @query("#spine-container")
  private spineContainer!: HTMLDivElement;

  @query("#spine-skeleton-main")
  private spineRenderer!: SpineWebComponentSkeleton;

  @query("#spine-skeleton-bg")
  private spineRendererBg?: SpineWebComponentSkeleton;

  static styles = css`
    :host {
      display: block;
      position: relative;
      aspect-ratio: var(--ba-memorial-lobby-viewer-aspect-ratio);
      background: var(--ba-memorial-lobby-viewer-background, #ecf5f9);
      box-sizing: border-box;

      max-height: 90vh;
      max-height: 90lvh;

      contain: strict;

      font-family: "Noto Sans", sans-serif, meiryo, meiryo ui, Yu Gothic,
        YuGothic;
    }

    #spine-container {
      position: absolute;
      inset: 0;
    }

    .ui-hidden {
      cursor: pointer;
    }

    button,
    select,
    input[type="number"] {
      block-size: 44px;
      padding: 0 12px;
      border-radius: 4px;
      border: 0;
      font: inherit;

      background-color: var(
        --ba-memorial-lobby-viewer-base-color,
        hsl(214 36% 100% / 100%)
      );
      color: var(
        --ba-memorial-lobby-viewer-inverted-color,
        hsl(214 36% 30% / 100%)
      );
      box-shadow: 0 2px 4px hsl(0 0 0 / 20%);

      display: flex;
      align-items: center;
      justify-content: center;

      transition: 120ms scale cubic-bezier(0.25, 0.1, 0.39, 1.2);

      &:disabled {
        opacity: 0.38;
      }
    }

    input.aspect-ratio-input {
      text-align: center;
      font: inherit;
      width: calc(2ch + 0.25rem);
    }

    @media (pointer: fine) {
      input.aspect-ratio-input {
        width: calc(2ch + 1rem);
        padding-inline-end: 0;
      }
    }

    button {
      font-size: 1.25em;
      font-weight: 700;
      padding: 0 20px;
      &:not(:disabled) {
        cursor: pointer;
      }
      &:not(:disabled):active {
        scale: 0.925;
      }
    }

    select {
      inline-size: auto;
    }

    #menu-button {
      position: absolute;
      top: 12px;
      right: 20px;
      transform: skew(-10deg);

      z-index: 20;

      &[aria-pressed="true"] {
        background-color: var(
          --ba-memorial-lobby-viewer-inverted-color,
          hsl(214 36% 30% / 100%)
        );
        color: var(
          --ba-memorial-lobby-viewer-base-color,
          hsl(214 36% 100% / 100%)
        );
      }
    }

    #menu {
      position: absolute;
      top: calc(44px + 12px + 8px);
      right: 20px;
      padding: 10px;
      background-color: var(
        --ba-memorial-lobby-viewer-menu-color,
        hsl(0 0 100 / 70%)
      );
      border-radius: 8px;

      flex-wrap: wrap;

      display: flex;
      justify-content: flex-end;
      gap: 6px;
      z-index: 20;
    }

    #menu > button {
      inline-size: 48px;
      padding: 0;
    }

    .primary-btn {
      background-color: var(
        --ba-memorial-lobby-viewer-inverted-color,
        hsl(214 36% 30% / 100%)
      );
      color: var(
        --ba-memorial-lobby-viewer-base-color,
        hsl(214 36% 100% / 100%)
      );
    }

    hr {
      border-color: var(
        --ba-memorial-lobby-viewer-subtle-color,
        hsl(214 10% 50% / 20%)
      );
      margin-inline-start: 0;
      margin-inline-end: 0;
    }

    .loader {
      position: absolute;
      border-radius: 50%;
      top: 50%;
      left: 50%;
      margin-top: -16px;
      margin-left: -16px;
      height: 32px;
      width: 32px;
      border-width: 3px;
      border-style: solid;
      border-color: hsl(189 100 50 / 0.25);
      border-top-color: hsl(189 100 50 / 1);
      animation: loader 1s linear infinite;
      z-index: 99;
    }

    @keyframes loader {
      to {
        transform: rotate(360deg);
      }
    }

    [hidden] {
      display: none !important;
    }
  `;

  static shadowRootOptions: ShadowRootInit = {
    mode: "open",
    delegatesFocus: true,
  };

  override connectedCallback(): void {
    super.connectedCallback();
    this._identifier = `${this.character}-memorial-lobby`;

    const fileName = this.transformCharacterNameToFileName(this.character);

    this.atlasName ??= `${fileName}_home.atlas`;
    this.skelName ??= `${fileName}_home.skel`;
    this.bgAtlasName ??= `${fileName}BG_home.atlas`;
    this.bgSkelName ??= `${fileName}BG_home.skel`;

    this._atlasPath = `${this.basePath}${this.character}/${this.atlasName}`;
    this._skelPath = `${this.basePath}${this.character}/${this.skelName}`;

    this._bgAtlasPath = `${this.basePath}${this.character}/${this.bgAtlasName}`;
    this._bgSkelPath = `${this.basePath}${this.character}/${this.bgSkelName}`;

    this.updateViewerAspectRatio();
  }

  override disconnectedCallback(): void {
    // Clean up spine renderer to prevent memory leaks
    this.spineRenderer?.dispose();
    if (this.separateBg) this.spineRendererBg?.dispose();
    super.disconnectedCallback();
  }

  override async firstUpdated(): Promise<void> {
    await this.spineRenderer.whenReady;
    if (this.separateBg) await this.spineRendererBg?.whenReady;

    this._loading = false;
    if (this.spineRenderer.skeleton?.data?.animations) {
      this._animationList = this.spineRenderer.skeleton.data.animations.map(
        (animation) => animation.name
      );
    }

    this.updateAnimations();
  }

  protected override updated(changed: PropertyValues<this>): void {
    if (changed.has("animation") && !this._loading) {
      this.updateAnimations();
    }
    if (changed.has("_uiHidden")) {
      if (this._uiHidden) {
        this.spineContainer.addEventListener("click", this.showUiOnInteract);
        this.spineContainer.addEventListener("keydown", this.showUiOnInteract);
        this.spineContainer.focus();
      }
    }
    // if (changed.has("_fullscreen")) {
    //   if (document.fullscreenElement) {
    //     document.exitFullscreen();
    //     return;
    //   }
    //   this.requestFullscreen();
    // }
  }

  private updateAnimations(): void {
    if (!this.animation) return;
    if (!this.spineRenderer.state) return;

    this.spineRenderer.state.setAnimation(0, this.animation, false);
    if (this.spineRenderer.state.tracks[1] === null) {
      this.spineRenderer.state.setAnimation(1, "Idle_01", true);
    }
    if (this.animation.startsWith("Start_Idle") || this.animation === "Dummy") {
      this.spineRenderer.state.setEmptyAnimation(1);
    }

    if (!this.separateBg || !this.spineRendererBg) return;
    if (!this.spineRendererBg.state) return;
    const newBg = this.animation.startsWith("Start_Idle")
      ? "Start_Idle_01"
      : "Idle_01";
    if (newBg !== this.spineRendererBg.state.tracks[0]!.animation!.name) {
      this.spineRendererBg.state.setAnimation(0, newBg, false);
    }
  }

  private restartAnimations(): void {
    if (!this.animation) return;
    if (!this.spineRenderer.state) return;

    this.spineRenderer.state.setAnimation(0, this.animation, false);
    if (this.animation.startsWith("Start_Idle") || this.animation === "Dummy") {
      this.spineRenderer.state.setEmptyAnimation(1);
    } else {
      this.spineRenderer.state.setAnimation(1, "Idle_01", true);
    }

    if (!this.separateBg || !this.spineRendererBg) return;
    if (!this.spineRendererBg.state) return;
    const newBg = this.animation.startsWith("Start_Idle")
      ? "Start_Idle_01"
      : "Idle_01";
    this.spineRendererBg.state.setAnimation(0, newBg, false);
  }

  private transformCharacterNameToFileName(name: string): string {
    let transformedName = name.replace("ch", "CH");
    transformedName =
      transformedName.charAt(0).toUpperCase() + transformedName.slice(1);
    return transformedName;
  }

  private updateViewerAspectRatio = (): void => {
    this.style.setProperty(
      "--ba-memorial-lobby-viewer-aspect-ratio",
      `${this.aspectRatioW}/${this.aspectRatioH}`
    );
  };

  private toggleFullscreen = (): void => {
    // this._fullscreen = !this._fullscreen
  }

  private showUiOnInteract = (): void => {
    this._uiHidden = false;
    this.spineContainer.removeEventListener("click", this.showUiOnInteract);
    this.spineContainer.removeEventListener("keydown", this.showUiOnInteract);

    this.updateComplete.then(() => {
      this.renderRoot
        ?.querySelector<HTMLButtonElement>("#hide-ui-btn")
        ?.focus();
    });
  };

  override render() {
    const rootClasses = {
      "ui-hidden": this._uiHidden,
    };

    return html`
      <div id="spine-container" class=${classMap(rootClasses)} tabindex="0">
        ${this.separateBg
          ? html`<spine-skeleton
              id="spine-skeleton-bg"
              identifier="${this._identifier}-bg"
              atlas=${this._bgAtlasPath}
              skeleton=${this._bgSkelPath}
              bounds-x="-1920"
              bounds-y="390"
              bounds-width="3840"
              bounds-height="1908"
              scale="1.4"
              overlay-id="${this._uniqueId}"
              clip
            ></spine-skeleton>`
          : ""}
        <spine-skeleton
          id="spine-skeleton-main"
          identifier=${this._identifier}
          atlas=${this._atlasPath}
          skeleton=${this._skelPath}
          bounds-x="-1920"
          bounds-y="0"
          bounds-width="3840"
          bounds-height="2160"
          scale="1.2"
          overlay-id="${this._uniqueId}"
          clip
        ></spine-skeleton>
        <spine-overlay overlay-id="${this._uniqueId}"></spine-overlay>
      </div>
      <div id="ui" ?hidden=${this._uiHidden}>
        <button
          id="menu-button"
          title="Toggle animation controls"
          aria-pressed=${this._menuOpen}
          aria-controls="menu"
          @click=${() => {
            this._menuOpen = !this._menuOpen;
          }}
        >
          Menu
        </button>
        <div
          id="menu"
          role="group"
          aria-label="Animation controls"
          ?hidden=${!this._menuOpen}
        >
          <select
            ?disabled=${this._loading}
            id="animation"
            .value=${this.animation ?? ""}
            @change=${(e: Event) =>
              (this.animation = (e.target as HTMLSelectElement).value)}
            aria-label="Select an animation"
          >
            ${map(
              this._animationList,
              (item) =>
                html`<option value=${item} ?selected=${item === this.animation}>
                  ${item}
                </option>`
            )}
          </select>
          <hr />
          <input
            ?disabled=${this._loading}
            class="aspect-ratio-input"
            title="Aspect ratio width"
            type="number"
            min="1"
            .value=${this.aspectRatioW}
            @change=${(e: Event) =>
              (this.aspectRatioW = Number(
                (e.target as HTMLInputElement).value
              ))}
          />
          <input
            ?disabled=${this._loading}
            class="aspect-ratio-input"
            title="Aspect ratio height"
            type="number"
            min="1"
            .value=${this.aspectRatioH}
            @change=${(e: Event) =>
              (this.aspectRatioH = Number(
                (e.target as HTMLInputElement).value
              ))}
          />
          <button
            title="Update aspect ratio"
            id="update-aspect-btn"
            @click=${this.updateViewerAspectRatio}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-save-icon lucide-save"
            >
              <path
                d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"
              />
              <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" />
              <path d="M7 3v4a1 1 0 0 0 1 1h7" />
            </svg>
          </button>
          <hr />
          <button
            title="Restart animation"
            class="primary-btn"
            id="restart-animation-btn"
            ?disabled=${this._loading}
            @click=${this.restartAnimations}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="presentation"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
              <path d="M21 3v5h-5" />
              <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
              <path d="M8 16H3v5" />
            </svg>
          </button>
          <button
            title="Hide UI"
            class="primary-btn"
            id="hide-ui-btn"
            @click=${() => {
              this._uiHidden = !this._uiHidden;
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-eye-off-icon lucide-eye-off"
            >
              <path
                d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"
              />
              <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
              <path
                d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"
              />
              <path d="m2 2 20 20" />
            </svg>
          </button>
          <!-- <button
            title="Toggle fullscreen"
            class="primary-btn"
            id="fullscreen-btn"
            @click=${this.toggleFullscreen}
            disabled
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-fullscreen-icon lucide-fullscreen"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><rect width="10" height="8" x="7" y="8" rx="1"/></svg>
          </button> -->
        </div>
      </div>
      ${this._loading
        ? html`<div
            aria-label="Content is loading..."
            aria-live="polite"
            role="progressbar"
            class="loader"
          ></div>`
        : ""}
    `;
  }
}
