<script lang="ts">
	import { onMount } from "svelte";
	import { Monitor, Moon, Sun } from "@lucide/svelte";
	import { NAV, SITE } from "../data/site";

	let open = $state(false);
	let panel = $state<HTMLElement | null>(null);
	let toggle = $state<HTMLButtonElement | null>(null);

	type Mode = "system" | "light" | "dark";
	const ORDER: Mode[] = ["system", "light", "dark"];
	const LABEL: Record<Mode, string> = {
		system: "Match system theme",
		light: "Light theme",
		dark: "Dark theme",
	};

	let mode = $state<Mode>("system");

	onMount(() => {
		// The inline bootstrap in <head> has already applied the attribute
		// before first paint; read it back so the button starts in sync.
		const attr = document.documentElement.dataset.theme;
		if (attr === "light" || attr === "dark") mode = attr;
	});

	function apply(next: Mode) {
		mode = next;
		if (next === "system") {
			delete document.documentElement.dataset.theme;
			try {
				localStorage.removeItem("theme");
			} catch {
				/* storage unavailable - the choice just won't persist */
			}
		} else {
			document.documentElement.dataset.theme = next;
			try {
				localStorage.setItem("theme", next);
			} catch {
				/* storage unavailable */
			}
		}
	}

	const cycle = () => apply(ORDER[(ORDER.indexOf(mode) + 1) % ORDER.length]);

	function close() {
		open = false;
	}

	function onKeydown(event: KeyboardEvent) {
		if (event.key === "Escape" && open) {
			close();
			toggle?.focus();
		}
	}

	// Lock background scroll while the sheet is open, and put the focus back
	// where it came from on close.
	$effect(() => {
		if (!open) return;
		const previous = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		panel?.querySelector<HTMLAnchorElement>("a")?.focus();
		return () => {
			document.body.style.overflow = previous;
		};
	});

	onMount(() => {
		// Close if the viewport grows past the mobile breakpoint, otherwise the
		// sheet stays "open" behind the desktop bar.
		const mq = window.matchMedia("(min-width: 48rem)");
		const onChange = (e: MediaQueryListEvent) => e.matches && close();
		mq.addEventListener("change", onChange);
		return () => mq.removeEventListener("change", onChange);
	});
</script>

<svelte:window onkeydown={onKeydown} />

<header class="nav">
	<div class="shell nav__inner">
		<a class="brand" href="#top" aria-label={`${SITE.name} — home`}>
			<span class="brand__dot" aria-hidden="true"></span>
			<span class="brand__name">{SITE.handle}</span>
		</a>

		<div class="nav__end">
			<!--
				Three-state theme switch. The icon shows the mode you are in;
				the accessible name says what the click will do next, so the
				control is unambiguous to a screen reader.
			-->
			<button
				class="nav__theme"
				type="button"
				onclick={cycle}
				aria-label={`Theme: ${LABEL[mode]}. Switch to ${LABEL[ORDER[(ORDER.indexOf(mode) + 1) % ORDER.length]].toLowerCase()}.`}
				title={LABEL[mode]}>
				{#if mode === "light"}
					<Sun size={17} strokeWidth={1.75} aria-hidden="true" />
				{:else if mode === "dark"}
					<Moon size={17} strokeWidth={1.75} aria-hidden="true" />
				{:else}
					<Monitor size={17} strokeWidth={1.75} aria-hidden="true" />
				{/if}
			</button>

			<nav class="nav__links" aria-label="Sections">
				{#each NAV as item (item.href)}
					<a class="nav__link" href={item.href}>{item.label}</a>
				{/each}
				<a
					class="btn btn--primary nav__cta"
					href={SITE.links.codebergUrl}
					target="_blank"
					rel="noopener noreferrer">Codeberg</a>
			</nav>

			<button
				bind:this={toggle}
				class="nav__toggle"
				type="button"
				aria-expanded={open}
				aria-controls="mobile-menu"
				onclick={() => (open = !open)}>
				<span class="sr-only">{open ? "Close menu" : "Open menu"}</span>
				<svg
					width="20"
					height="20"
					viewBox="0 0 20 20"
					aria-hidden="true"
					focusable="false">
					{#if open}
						<path
							d="M4 4 L16 16 M16 4 L4 16"
							stroke="currentColor"
							stroke-width="1.75"
							stroke-linecap="round" />
					{:else}
						<path
							d="M3 6 H17 M3 10 H17 M3 14 H17"
							stroke="currentColor"
							stroke-width="1.75"
							stroke-linecap="round" />
					{/if}
			</svg>
		</button>
	</div>
</header>

{#if open}
	<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
	<div class="sheet" id="mobile-menu" bind:this={panel}>
		<nav class="shell sheet__inner" aria-label="Sections">
			{#each NAV as item, i (item.href)}
				<a
					class="sheet__link"
					style={`--stagger: ${i}`}
					href={item.href}
					onclick={close}>{item.label}</a>
			{/each}
			<a
				class="btn btn--primary sheet__cta"
				style={`--stagger: ${NAV.length}`}
				href={SITE.links.codebergUrl}
				target="_blank"
				rel="noopener noreferrer"
				onclick={close}>Codeberg</a>
		</nav>
	</div>
{/if}

<style>
	.nav {
		position: sticky;
		inset-block-start: 0;
		z-index: 50;
		background-color: color-mix(
			in oklab,
			var(--color-base) 82%,
			transparent
		);
		backdrop-filter: blur(12px);
		border-block-end: 1px solid var(--color-highlight-low);
	}

	.nav__inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		min-block-size: 4rem;
	}

	.brand {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		text-decoration: none;
		color: var(--color-text);
		font-family: var(--font-mono);
		font-size: 0.9375rem;
		font-weight: 500;
	}

	.brand__dot {
		inline-size: 0.625rem;
		block-size: 0.625rem;
		border-radius: var(--radius-pill);
		background-color: var(--color-love-ink);
	}

	.nav__end {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.nav__theme {
		display: grid;
		place-items: center;
		inline-size: 2.75rem;
		block-size: 2.75rem;
		flex: none;
		border-radius: var(--radius-pill);
		border: 1px solid var(--color-highlight-med);
		background-color: var(--color-surface);
		color: var(--color-subtle);
		transition:
			color 150ms ease,
			background-color 150ms ease,
			border-color 150ms ease;
	}

	.nav__theme:hover {
		color: var(--color-text);
		border-color: var(--color-highlight-high);
		background-color: var(--color-overlay);
	}

	.nav__links {
		display: none;
		align-items: center;
		gap: 0.25rem;
	}

	.nav__link {
		padding: 0.5rem 0.75rem;
		border-radius: var(--radius-pill);
		text-decoration: none;
		color: var(--color-subtle);
		font-size: 0.9375rem;
		transition:
			color 150ms ease,
			background-color 150ms ease;
	}

	.nav__link:hover {
		color: var(--color-text);
		background-color: var(--color-overlay);
	}

	.nav__cta {
		margin-inline-start: 0.5rem;
		min-block-size: 2.25rem;
		padding-inline: 1rem;
		font-size: 0.875rem;
	}

	.nav__toggle {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		inline-size: 2.75rem;
		block-size: 2.75rem;
		border-radius: var(--radius-pill);
		border: 1px solid var(--color-highlight-med);
		background-color: var(--color-surface);
		color: var(--color-text);
	}

	.sheet {
		position: fixed;
		inset: 4rem 0 0;
		z-index: 40;
		background-color: var(--color-base);
		overflow-y: auto;
	}

	.sheet__inner {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		padding-block: 1.5rem;
	}

	.sheet__link {
		padding: 0.875rem 0.25rem;
		text-decoration: none;
		color: var(--color-text);
		font-size: 1.5rem;
		font-weight: 600;
		letter-spacing: -0.02em;
		border-block-end: 1px solid var(--color-highlight-low);
		opacity: 0;
		animation: enter 400ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
		animation-delay: calc(var(--stagger, 0) * 60ms);
	}

	.sheet__cta {
		margin-block-start: 1.5rem;
		opacity: 0;
		animation: enter 400ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
		animation-delay: calc(var(--stagger, 0) * 60ms);
	}

	@keyframes enter {
		from {
			opacity: 0;
			transform: translateY(8px);
		}
		to {
			opacity: 1;
			transform: none;
		}
	}

	.sr-only {
		position: absolute;
		inline-size: 1px;
		block-size: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip-path: inset(50%);
		white-space: nowrap;
	}

	@media (min-width: 48rem) {
		.nav__links {
			display: flex;
		}

		.nav__toggle {
			display: none;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.sheet__link,
		.sheet__cta {
			animation-duration: 1ms;
			animation-delay: 0ms;
		}
	}
</style>
