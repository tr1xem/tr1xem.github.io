import TopReposCollapsible from "@/components/collapsibles/TopReposCollapsible";
import AboutMeCollapsible from "@/components/collapsibles/AboutMeCollapsible";
import MainLinkButton from "@/components/MainLinkButton";
import DiscordStatus from "@/components/DiscordStatus";
import Collapsible from "@/components/Collapsible";
import MusicPlayer from "@/components/MusicPlayer";
import CustomSelect from "@/components/Select";
import Loading from "@/components/Loading";
import Socials from "@/components/Socials";
import NamePic from "@/components/NamePic";
import Footer from "@/components/Footer";

import Script from "next/script";
import Image from "next/image";
import Link from "next/link";

import { alterativeLinks } from "@/data/alternativeLinks";

import { getCodeBlock } from "@/scripts/aboutMeHighlight";
import { mainContentId } from "@/data/constants";
import { mainLinks } from "@/data/mainLinks";
import { catVariants } from "@/data/oneko";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "@/styles/home.css";

interface Data {
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Home({ searchParams }: Data) {
	let currentVariant = ((await searchParams).neko || "maia") as string;

	if (!catVariants.includes(currentVariant)) currentVariant = "maia";

	return (
		<div>
			<Loading />

			<div
				id={mainContentId}
				style={{
					display: "none",
				}}
			>
				<CustomSelect
					options={catVariants.map((variant) => ({
						label: variant.charAt(0).toUpperCase() + variant.slice(1),
						value: variant,
						default: currentVariant
							? variant === currentVariant
							: variant === "maia",
						icon: `/images/oneko/heads/${variant}.png`,
						lazy: true,
					}))}
					type="link"
					query="neko"
					className="absolute top-2 left-2"
					placeholder="Cat Variant"
				/>

				<NamePic />

				<Socials />

				<MusicPlayer />

				<DiscordStatus />

				<AboutMeCollapsible codeBlock={getCodeBlock()} />


				<Collapsible title="Alternative Links">
					<div>
						{alterativeLinks.map((link) => (
							<div key={link.name} className="flex">
								<Image
									src={link.image}
									alt={`${link.name} Logo`}
									width={15}
									height={15}
									className="rounded-[4px] mr-[5px] object-contain"
								/>
								<p>
									<span className="font-bold">{link.name}</span>:{" "}
									<Link
										href={
											link.type === "mail" ? `mailto:${link.url}` : link.url
										}
										target="_parent"
										rel="noopener"
										className="font-bold hover:brightness-[0.8]"
										style={link.style}
									>
										{link.url}
									</Link>
								</p>
							</div>
						))}
					</div>
				</Collapsible>

				<Collapsible title="GitHub Stats">
					<div className="flex flex-wrap items-center justify-center">
						<embed
							className="p-[5px] w-auto align-top rounded-xl max-md:w-[100%]"
							type="text/html"
							src="https://github-readme-stats-lac-sigma.vercel.app/api?username=tr1xem&show_icons=true&theme=tokyonight&include_all_commits=true&count_private=true"
						/>
						<embed
							className="p-[5px] w-auto align-top rounded-xl max-md:w-[100%]"
							type="text/html"
							src="https://github-readme-stats-lac-sigma.vercel.app/api/top-langs/?username=tr1xem&theme=tokyonight"
						/>
						<embed
							className="p-[5px] w-auto align-top rounded-xl max-md:w-[100%]"
							src="https://github-readme-streak-stats-two-ruddy.vercel.app/?user=tr1xem&theme=radical"
						/>
					</div>
				</Collapsible>

				<TopReposCollapsible />

				{mainLinks.map((link) => (
					<MainLinkButton
						key={link.url}
						title={link.name}
						href={link.url}
						alt={link.name}
					/>
				))}

				<Footer />
			</div>

			<link
				rel="stylesheet"
				href="https://unpkg.com/highlightjs@9.16.2/styles/atom-one-dark.css"
			/>

			<Script src="/js/oneko.js" />
		</div>
	);
}
