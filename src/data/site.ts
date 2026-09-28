/**
 * All site content in one place. Components read from here so copy changes
 * never mean touching markup.
 */

export interface ProjectEntry {
	/** The problem that prompted the work. Rendered as the card kicker. */
	problem: string;
	title: string;
	description: string;
	tech: string[];
	/**
	 * Only set when a stranger can actually reach the destination. Private
	 * mesh services deliberately have no link.
	 */
	link?: string;
	linkLabel?: string;
	/** Accent token name for the card's doodle and chip tint. */
	accent: "love" | "gold" | "rose" | "pine" | "foam" | "iris";
}

export const SITE = {
	title: "Deb's Portfolio — Cloud & SRE in the Making",
	description:
		"Deb (ghost) — BCA student working toward cloud engineering, DevOps and SRE. Private-by-default infrastructure, and the problems behind it.",
	domain: "aboutme.debnerd.in",
	url: "https://aboutme.debnerd.in",
	name: "Deb",
	handle: "ghost",
	role: "Cloud, DevOps & SRE in the making",
	location: "Durgapur, India",
	tagline:
		"Everything I run sits on a private network with no port open to the internet.",
	links: {
		// Codeberg is the primary remote. GitHub is a read-only mirror.
		codeberg: "D3B-0x0",
		codebergUrl: "https://codeberg.org/D3B-0x0",
		github: "D3B-0x0",
		githubUrl: "https://github.com/D3B-0x0",
		blog: "https://blog.debnerd.in",
		email: "d3b@tutamail.com",
		discord: "@pingnoob",
		linkedin: "deb69420",
		linkedinUrl: "https://www.linkedin.com/in/deb69420/",
		mastodon: "deb69420",
		mastodonUrl: "https://mastodon.social/@deb69420",
	},
} as const;

export const NAV = [
	{ label: "About", href: "#about" },
	{ label: "Work", href: "#projects" },
	{ label: "Skills", href: "#skills" },
	{ label: "Contact", href: "#contact" },
] as const;

export const PROJECTS: ProjectEntry[] = [
	{
		problem:
			"Everything I run was one port scan away from being somebody else's problem.",
		title: "A network with no front door",
		description:
			"Every service I run sits inside a WireGuard mesh and is reachable only from my own devices. The machine hosting them admits two ports — SSH and the tunnel itself — so there is nothing for a scanner to knock on. TLS terminates inside the mesh, which means no certificate renewal on a box that faces the internet.",
		tech: [
			"WireGuard mesh",
			"Tailnet lock",
			"Mesh-issued TLS",
			"Peer relay",
			"Exit node",
		],
		accent: "foam",
	},
	{
		problem: "Password reuse across a homelab is still password reuse.",
		title: "One identity, one place to revoke",
		description:
			"A self-hosted OIDC provider fronts everything I run, so leaking one service's password does not leak the rest of the stack. Passkeys instead of passwords, signups closed, and a single control point if I ever need to cut access.",
		tech: ["OIDC / OAuth2", "PKCE", "Passkeys", "Closed registration"],
		accent: "love",
	},
	{
		problem: "A backup I had never restored was just a rumour.",
		title: "Backups I actually verify",
		description:
			"Nightly snapshots to object storage, driven by a timer I can read in one sitting. Mutable state is deliberately excluded and databases are dumped instead of copied. The part that matters is the restore — I run them, because an untested backup is a hypothesis.",
		tech: [
			"restic",
			"S3-compatible object storage",
			"Database dumps",
			"Restore drills",
		],
		accent: "gold",
	},
	{
		problem:
			"My ISP hands every customer the same address, and half my traffic stalls.",
		title: "Making a CGNAT line usable",
		description:
			"Residential NAT meant inbound connections were simply not an option, and outbound IPv4 fought with egress that lived in another country. I moved the workload onto a dual-stack mesh, proved the IPv6 path with throughput and MTU tests instead of assuming, and put the exit node wherever the NAT wasn't.",
		tech: [
			"CGNAT",
			"IPv6",
			"Path MTU discovery",
			"Exit node routing",
			"Happy Eyeballs",
		],
		accent: "pine",
	},
	{
		problem: "Search engines keep a log of you. Mine keeps nothing.",
		title: "Search I can read the source of",
		description:
			"Self-hosted metasearch with a cache layer in front. No query log leaves the machine, no third-party script loads into the page, and I can read exactly which upstream engines are answering and which are quietly rate-limiting me.",
		tech: ["SearXNG", "Valkey", "Docker Compose"],
		accent: "iris",
	},
	{
		problem: "A static site should not need a server.",
		title: "This site has no origin",
		description:
			"Built with Astro and compiled down to static files, served from the edge as a Worker. No runtime, no origin to scale, and almost no JavaScript — the whole page ships a few kilobytes of script, because the animations are CSS.",
		tech: ["Astro", "Svelte islands", "Tailwind CSS", "Cloudflare Workers"],
		accent: "rose",
		link: "https://codeberg.org/D3B-0x0/website",
		linkLabel: "Source for this site on Codeberg",
	},
];

export const SKILLS: { category: string; accent: string; skills: string[] }[] = [
	{
		category: "Operating systems",
		accent: "iris",
		skills: ["Fedora (daily driver)", "Debian", "systemd", "Btrfs + LUKS"],
	},
	{
		category: "Shell & scripting",
		accent: "gold",
		skills: ["Bash", "Zsh", "Git", "systemd timers"],
	},
	{
		category: "Containers",
		accent: "foam",
		skills: ["Docker", "Docker Compose", "Sidecar networking", "GPU passthrough"],
	},
	{
		category: "Networks",
		accent: "pine",
		skills: [
			"WireGuard mesh",
			"CGNAT & dual-stack",
			"Path MTU discovery",
			"Split-horizon DNS",
		],
	},
	{
		category: "Identity & security",
		accent: "love",
		skills: [
			"OIDC / OAuth2",
			"Passkeys",
			"Least-privilege firewall rules",
			"Secret management",
			"Mesh device approval",
		],
	},
	{
		category: "DevOps & reliability",
		accent: "rose",
		skills: [
			"CI/CD",
			"Docker-in-Docker runners",
			"Health checks",
			"restic backups",
			"Restore drills",
			"Structured logging",
		],
	},
	{
		category: "Databases",
		accent: "gold",
		skills: ["PostgreSQL", "Redis / Valkey", "SQLite"],
	},
	{
		category: "Languages",
		accent: "iris",
		skills: ["Bash", "C (coursework)", "Java (coursework)", "Python (learning)"],
	},
];

export const AREAS = [
	{
		title: "Linux & shell",
		body: "Daily-driver Fedora and Debian hosts, encrypted at rest. I am comfortable breaking my own systems and reading the logs that explain why.",
		accent: "iris",
	},
	{
		title: "Networks",
		body: "Mesh overlays, residential NAT, dual-stack path selection, split-horizon DNS. I test the path instead of trusting that it works.",
		accent: "foam",
	},
	{
		title: "Containers",
		body: "Compose stacks where each service carries its own tunnel sidecar, so publishing something is a deliberate act rather than an accident.",
		accent: "pine",
	},
	{
		title: "Identity & access",
		body: "One OIDC provider in front of everything, passkeys over passwords, closed registration, and secrets kept out of version control.",
		accent: "love",
	},
	{
		title: "Automation",
		body: "Backups, health checks and deploys written as scripts I can read in one sitting. If I cannot reproduce it, I do not trust it.",
		accent: "gold",
	},
	{
		title: "Reliability",
		body: "Restore drills, MTU discovery, packet-loss budgets, and logs that record what happened instead of what should have.",
		accent: "rose",
	},
] as const;

export const LEARNING = [
	"Go",
	"Python",
	"Kubernetes fundamentals",
	"How the layers actually work",
] as const;
