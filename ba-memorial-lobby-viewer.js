import { LitElement, html, css } from 'https://cdn.jsdelivr.net/npm/lit@3/+esm';
import { map } from 'https://cdn.jsdelivr.net/npm/lit@3/directives/map.js/+esm';
import { classMap } from 'https://cdn.jsdelivr.net/npm/lit@3/directives/class-map.js/+esm';

class MemorialLobbyViewer extends LitElement {
    constructor() {
        super();
        this.animation = 'Start_Idle_01';
        this.basePath = 'assets/spines/lobbies/';
        this.separateBg = false

        this.character = '';

        this._animationList = [];
        this._identifier = '';
        this._loading = true;
        this._menuOpen = false;
        this._uiHidden = false;

        this._atlasPath = '';
        this._skelPath = '';
        this._bgAtlasPath = '';
        this._bgSkelPath = '';

        this._boundShowUiOnInteract = this.showUiOnInteract.bind(this);
    }

    static properties = {
        animation: { type: String || null },
        basePath: { type: String },
        separateBg: { type: Boolean },
        
        character: { type: String },
        
        // Internal state
        _animationList: { type: Array, state: true },
        _identifier: { type: String, state: true },
        _loading: { type: Boolean, state: true },
        _menuOpen: { type: Boolean, state: true },
        _uiHidden: { type: Boolean, state: true },

        _atlasPath: { type: String, state: true },
        _skelPath: { type: String, state: true },
        _bgAtlasPath: { type: String, state: true },
        _bgSkelPath: { type: String, state: true },
        
        atlasName: { type: String || null },
        skelName: { type: String || null },
        bgAtlasName: { type: String || null },
        bgSkelName: { type: String || null },
    };

    static get styles() {
        return css`
            :host {
                display: block;
                position: relative;
                aspect-ratio: var(--ba-memorial-lobby-viewer-aspect-ratio, 296/211);
                background: var(--ba-memorial-lobby-viewer-background, #ECF5F9);
                box-sizing: border-box;

                max-height: 90vh;
                max-height: 90lvh;

                contain: style;
            }

            #spine-container {
                position: absolute;
                inset: 0;
            }

            .ui-hidden {
                cursor: pointer;
            }

            button, select {
                block-size: 44px;
                padding: 0 12px;
                border-radius: 4px;
                border: 0;
                font: inherit;

                background-color: var(--ba-memorial-lobby-viewer-base-color, hsl(214 36% 100% / 100%));
                color: var(--ba-memorial-lobby-viewer-inverted-color, hsl(214 36% 30% / 100%));
                box-shadow: 0 2px 4px hsl(0 0 0 / 20%);

                display: flex;
                align-items: center;
                justify-content: center;

                transition: 120ms scale cubic-bezier(.25,.1,.39,1.2);

                &:disabled {
                    opacity: 0.38;
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

                &[aria-pressed='true'] {
                    background-color: var(--ba-memorial-lobby-viewer-inverted-color, hsl(214 36% 30% / 100%));
                    color: var(--ba-memorial-lobby-viewer-base-color, hsl(214 36% 100% / 100%));
                }
            }

            #menu {
                position: absolute;
                top: calc(44px + 12px + 8px);
                right: 20px;
                padding: 10px;
                background-color: var(--ba-memorial-lobby-viewer-menu-color, hsl(0 0 100 / 70%));
                border-radius: 8px;
                transform: skew(-10deg);
                
                display: flex;
                gap: 6px;
                z-index: 20;
            }

            #menu > button {
                inline-size: 48px;
                padding: 0;
                background-color: var(--ba-memorial-lobby-viewer-inverted-color, hsl(214 36% 30% / 100%));
                color: var(--ba-memorial-lobby-viewer-base-color, hsl(214 36% 100% / 100%));
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
    }

    static shadowRootOptions = { mode: 'open', delegatesFocus: true }

    get spineContainer() {
        return this.renderRoot?.querySelector('#spine-container') ?? null;
    }

    get spineRenderer() {
        return this.renderRoot?.querySelector('#spine-skeleton-main') ?? null;
    }

    get spineRendererBg() {
        return this.renderRoot?.querySelector('#spine-skeleton-bg') ?? null;
    }

    connectedCallback() {
        super.connectedCallback()
        this._identifier = `${this.character}-memorial-lobby`

        this.atlasName ??= `${this.transformCharacterNameToFileName(this.character)}_home.atlas`;
        this.skelName ??= `${this.transformCharacterNameToFileName(this.character)}_home.skel`;
        this.bgAtlasName ??= `${this.transformCharacterNameToFileName(this.character)}BG_home.atlas`;
        this.bgSkelName ??= `${this.transformCharacterNameToFileName(this.character)}BG_home.skel`;

        this._atlasPath = `${this.basePath}${this.character}/${this.atlasName}`
        this._skelPath = `${this.basePath}${this.character}/${this.skelName}`

        this._bgAtlasPath = `${this.basePath}${this.character}/${this.bgAtlasName}`
        this._bgSkelPath = `${this.basePath}${this.character}/${this.bgSkelName}`
    }

    disconnectedCallback() {
        // Clean up spine renderer to prevent memory leaks
        this.spineRenderer.dispose();
        if (this.separateBg) this.spineRendererBg.dispose();
        super.disconnectedCallback();
    }

    async firstUpdated() {
        await this.spineRenderer.whenReady;
        if (this.separateBg) await this.spineRendererBg.whenReady;

        this._loading = false
        this._animationList = this.spineRenderer.skeleton.data.animations.map((animation) => animation.name)

        this.updateAnimations()
    }

    updated(changed) {
        if (changed.has('animation')) {
            if (this._loading) return;
            this.updateAnimations()
        }
        if (changed.has('_uiHidden')) {
            if (this._uiHidden) {
                this.spineContainer.addEventListener('click', this._boundShowUiOnInteract)
                this.spineContainer.addEventListener('keydown', this._boundShowUiOnInteract)
                this.spineContainer.focus()
            }
        }
    }

    updateAnimations() {
        this.spineRenderer.state.setAnimation(0, this.animation, false)
        if (this.spineRenderer.state.tracks[1] === null) {
            this.spineRenderer.state.setAnimation(1, 'Idle_01', true)
        }
        if (this.animation.startsWith('Start_Idle') || this.animation === 'Dummy') {
            this.spineRenderer.state.setEmptyAnimation(1)
        }

        if (!this.separateBg) return;
        const newBg = this.animation.startsWith('Start_Idle') ? 'Start_Idle_01' : 'Idle_01'
        if (newBg !== this.spineRendererBg.state.tracks[0].animation.name) {
            this.spineRendererBg.state.setAnimation(0, newBg, false);
        }
    }

    restartAnimations() {
        this.spineRenderer.state.setAnimation(0, this.animation, false)
        if (this.animation.startsWith('Start_Idle') || this.animation === 'Dummy') {
            this.spineRenderer.state.setEmptyAnimation(1)
        } else {
            this.spineRenderer.state.setAnimation(1, 'Idle_01', true)
        }

        if (!this.separateBg) return;
        const newBg = this.animation.startsWith('Start_Idle') ? 'Start_Idle_01' : 'Idle_01'
        this.spineRendererBg.state.setAnimation(0, newBg, false);
    }

    transformCharacterNameToFileName(name) {
        name = name.replace('ch', 'CH')
        name = name.charAt(0).toUpperCase() + name.slice(1)
        return name
    }

    showUiOnInteract() {
        this._uiHidden = false
        this.spineContainer.removeEventListener('click', this._boundShowUiOnInteract)
        this.spineContainer.removeEventListener('keydown', this._boundShowUiOnInteract)

        this.updateComplete.then(() => {
            this.renderRoot?.querySelector('#hide-ui-btn').focus()
        });
    }
    
    render() {
        const rootClasses = {
            'ui-hidden': this._uiHidden
        };

        return html`
            <div id='spine-container' class=${classMap(rootClasses)} tabIndex='0'>
                ${this.separateBg ? html`<spine-skeleton
                    id='spine-skeleton-bg'
                    identifier='${this._identifier}-bg'
                    atlas=${this._bgAtlasPath}
                    skeleton=${this._bgSkelPath}
                    bounds-x="-1776"
                    bounds-y="0"
                    bounds-width="3552"
                    bounds-height="2532"
                    scale="1.15"
                    clip
                ></spine-skeleton>`: html``}
                <spine-skeleton
                    id='spine-skeleton-main'
                    identifier=${this._identifier}
                    atlas=${this._atlasPath}
                    skeleton=${this._skelPath}
                    bounds-x="-1776"
                    bounds-y="0"
                    bounds-width="3552"
                    bounds-height="2532"
                    scale="1.15"
                    clip
                ></spine-skeleton>
            </div>
            <div id='ui' ?hidden=${this._uiHidden}>
                <button
                    id='menu-button'
                    title='Toggle animation controls'
                    aria-pressed=${this._menuOpen}
                    aria-controls='menu'
                    @click=${() => {this._menuOpen=!this._menuOpen}}
                >
                    Menu
                </button>
                <div id='menu' role="group" aria-label="Animation controls" ?hidden=${!this._menuOpen}>
                    <select
                        ?disabled=${this._loading}
                        id="animation"
                        value=${this.animation}
                        @change=${(ev) => this.animation = ev.target.value}
                        aria-label='Select an animation'>
                        ${map(this._animationList, (item) => html`<option value=${item} ?selected=${item===this.animation}>${item}</option>`)}
                    </select>
                    <button title='Restart animation' id='restart-animation-btn' ?disabled=${this._loading} @click=${() => {this.restartAnimations()}}>
                        <svg xmlns='http://www.w3.org/2000/svg' role='presentation' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-refresh-cw-icon lucide-refresh-cw'><path d='M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8'/><path d='M21 3v5h-5'/><path d='M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16'/><path d='M8 16H3v5'/></svg>
                    </button>
                    <button title='Hide UI' id='hide-ui-btn' @click=${() => {this._uiHidden=!this._uiHidden}}>
                        <svg xmlns='http://www.w3.org/2000/svg' role='presentation' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-maximize2-icon lucide-maximize-2'><path d='M15 3h6v6'/><path d='m21 3-7 7'/><path d='m3 21 7-7'/><path d='M9 21H3v-6'/></svg>
                    </button>
                </div>
            </div>
            ${this._loading ?
                html`<div
                    aria-label='Content is loading...'
                    aria-live='polite'
                    role='progressbar'
                    class='loader'></div>` : undefined}
        `;
    }
}

customElements.define('ba-memorial-lobby-viewer', MemorialLobbyViewer);
