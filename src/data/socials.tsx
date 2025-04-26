import type { Social } from "@/types/socials";
import { mail } from "@/data/constants";

export const socials: Array<Social> = [
	{
		name: "Discord",
		id: "discord",
		image: "discord.webp",
		tooltip: "tr1x_em",
		type: "social",
		tooltipStyle: {
			padding: "3px",
			color: "#000",
			borderRadius: "5px",
			backgroundColor: "#3342dd",
		},
		url: "https://discord.com/users/885063317079592961",
		tooltipBorder: "3px solid #212b90",
		username: "tr1x_em"
	},
	{
		name: "Twitch",
		id: "twitch",
		image: "twitch.webp",
		tooltip: "tr1x_em",
		type: "social",
		tooltipStyle: {
			padding: "3px",
			color: "#000",
			borderRadius: "5px",
			backgroundColor: "#6b33b2",
		},
		url: "https://twitch.tv/tr1x_em",
		tooltipBorder: "3px solid #3d1d65",
		username: "tr1x_em"
	},
	{
		name: "Instagram",
		id: "instagram",
		image: "instagramLogo.webp",
		tooltip: "tr1x_em",
		type: "social",
		tooltipStyle: {
			padding: "3px",
			color: "#000",
			borderRadius: "5px",
			backgroundColor: "#e52a5d",
		},
		url: "https://instagram.com/tr1x_em",
		tooltipBorder: "3px solid #981b3d",
		username: "tr1x_em"
	},
	{
		name: "Threads",
		id: "threads",
		image: "threads.webp",
		tooltip: "tr1x_em",
		type: "social",
		tooltipStyle: {
			padding: "3px",
			color: "#fff",
			borderRadius: "5px",
			backgroundColor: "#1a1919",
		},
		url: "https://www.threads.net/@tr1x_em",
		tooltipBorder: "3px solid #000000",
		username: "tr1x_em"
	},
	{
		name: "GitHub",
		id: "github",
		image: "github.webp",
		tooltip: "tr1xem",
		type: "social",
		tooltipStyle: {
			padding: "3px",
			color: "#fff",
			borderRadius: "5px",
			backgroundColor: "#313131",
		},
		url: "https://github.com/tr1xem",
		tooltipBorder: "3px solid #000000",
		username: "tr1xem"
	},
	{
		name: "Telegram",
		id: "telegram",
		image: "telegram.webp",
		tooltip: "tr1x_em",
		type: "social",
		tooltipStyle: {
			padding: "3px",
			color: "#000",
			borderRadius: "5px",
			backgroundColor: "#2279a7",
		},
		url: "https://t.me/tr1x_em",
		tooltipBorder: "3px solid #12415a",
		username: "tr1x_em"
	},
	{
		name: "X (Twitter)",
		id: "x",
		image: "twitter.webp",
		tooltip: "tr1x_em",
		type: "social",
		tooltipStyle: {
			padding: "3px",
			color: "#000",
			borderRadius: "5px",
			backgroundColor: "#0087bb",
		},
		url: "https://x.com/tr1x_em",
		tooltipBorder: "3px solid #004f6e",
		username: "tr1x_em"
	},
	{
		name: "Revolt",
		id: "revolt",
		image: "revolt.webp",
		tooltip: "tr1x_em",
		type: "social",
		tooltipStyle: {
			padding: "3px",
			color: "#000",
			borderRadius: "5px",
			backgroundColor: "#b2303a",
		},
		url: "https://app.revolt.chat/@01HXK393ATMV4YM5G1NK5TMTBA",
		tooltipBorder: "3px solid #651b21",
		username: "tr1x_em"
	},
	{
		name: "Mastodon",
		id: "mastodon",
		image: "mastodon.webp",
		tooltip: "tr1x_em",
		type: "social",
		tooltipStyle: {
			padding: "3px",
			color: "#000",
			borderRadius: "5px",
			backgroundColor: "#4433a5",
		},
		url: "https://mastodon.social/@tr1x_em",
		tooltipBorder: "3px solid #241b58",
		username: "tr1x_em"
	},
	{
		name: "Steam",
		id: "steam",
		image: "steam.webp",
		tooltip: "tr1x_em",
		type: "social",
		tooltipStyle: {
			padding: "3px",
			color: "#b0b0b0",
			borderRadius: "5px",
			backgroundColor: "#122b60",
		},
		url: "https://steamcommunity.com/id/tr1x_em",
		tooltipBorder: "3px solid #071539",
		username: "tr1x_em"
	},
	{
		name: "Matrix",
		id: "matrix",
		image: "matrix.webp",
		tooltip: "tr1x_em",
		type: "social",
		tooltipStyle: {
			padding: "3px",
			color: "#fff",
			borderRadius: "5px",
			backgroundColor: "#313131",
		},
		url: "https://matrix.to/#/@tr1x_em:matrix.org",
		tooltipBorder: "3px solid #000000",
		username: "tr1x_em"
	},
	{
		name: "Mail",
		id: "mail",
		image: "mail.webp",
		tooltip: mail,
		type: "mail",
		tooltipStyle: {
			padding: "3px",
			color: "#000",
			borderRadius: "5px",
			backgroundColor: "#c5221f",
		},
		url: `mailto:${mail}`,
		tooltipBorder: "3px solid #8a1614",
		username: "me"
	},
];
