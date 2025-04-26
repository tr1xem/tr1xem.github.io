import type { AlternativeLink } from "@/types/links";
import { baseUrl, mail } from "@/data/constants";

export const alterativeLinks: Array<AlternativeLink> = [
	{
		name: "Discord",
		image: "/images/socialLogos/discordLogo.webp",
		url: `${baseUrl}/socials/discord`,
		type: "link",
		style: {
			color: "#5865F2",
		},
	},
	{
		name: "Twitch",
		image: "/images/socialLogos/twitchLogo.webp",
		url: `${baseUrl}/socials/twitch`,
		type: "link",
		style: {
			color: "#823FE6",
		},
	},
	{
		name: "Instagram",
		image: "/images/socialLogos/instagram.webp",
		url: `${baseUrl}/socials/instagram`,
		type: "link",
		style: {
			background:
				"radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
			WebkitBackgroundClip: "text",
			MozBackgroundClip: "text",
			backgroundClip: "text",
			WebkitTextFillColor: "transparent",
		},
	},
	{
		name: "Threads",
		image: "/images/socialLogos/threads.webp",
		url: `${baseUrl}/socials/threads`,
		type: "link",
		style: {
			color: "#d3d3d3",
		},
	},
	{
		name: "GitHub",
		image: "/images/socialLogos/github.webp",
		url: `${baseUrl}/socials/github`,
		type: "link",
		style: {
			color: "#a7a7a7",
		},
	},
	{
		name: "Telegram",
		image: "/images/socialLogos/telegramLogo.webp",
		url: `${baseUrl}/socials/telegram`,
		type: "link",
		style: {
			color: "#268EC3",
		},
	},
	{
		name: "X (Twitter)",
		image: "/images/socialLogos/twitter.webp",
		url: `${baseUrl}/socials/x`,
		type: "link",
		style: {
			color: "#1A8CD8",
		},
	},
	{
		name: "Revolt",
		image: "/images/socialLogos/revoltLogo.webp",
		url: `${baseUrl}/socials/revolt`,
		type: "link",
		style: {
			color: "#E6404C",
		},
	},
	{
		name: "Mastodon",
		image: "/images/socialLogos/mastodon.webp",
		url: `${baseUrl}/socials/mastodon`,
		type: "link",
		style: {
			color: "#5840d6",
		},
	},
	{
		name: "Steam",
		image: "/images/socialLogos/steam.webp",
		url: `${baseUrl}/socials/steam`,
		type: "link",
		style: {
			color: "#152e5b",
		},
	},
	{
		name: "Matrix",
		image: "/images/socialLogos/matrix.webp",
		url: `${baseUrl}/socials/matrix`,
		type: "link",
		style: {
			color: "#a7a7a7",
		},
	},
	{
		name: "Mail",
		image: "/images/socialLogos/mail.webp",
		url: mail,
		type: "mail",
		style: {
			color: "#c5221f",
		},
	},
];
