import Image from "next/image";
import Link from "next/link";

export default function DiscordStatus() {
	return (
		<div className="flex flex-col items-center justify-center mt-4">
			<div className="inline-flex flex-wrap items-center justify-center gap-2">
				<Image
					src="https://api.statusbadges.me/badge/status/885063317079592961?label=Currently&labelColor=5865F2"
					alt="Discord Status"
					width={0}
					height={0}
					className="w-auto h-auto"
				/>

				<Image
					src="https://api.statusbadges.me/badge/playing/885063317079592961?label=Currently&labelColor=5865F2"
					alt="Currently Playing"
					width={0}
					height={0}
					className="w-auto h-auto"
				/>

				<Image
					src="https://api.statusbadges.me/badge/vscode/885063317079592961?label=Currently&labelColor=5865F2"
					alt="Currently Coding"
					width={0}
					height={0}
					className="w-auto h-auto"
				/>

				<Link
					href="https://api.statusbadges.me/openspotify/885063317079592961"
					target="_blank"
					rel="noopener"
				>
					<Image
						src="https://api.statusbadges.me/badge/spotify/885063317079592961?label=Listening%20to"
						alt="Currently Listening to..."
						width={0}
						height={0}
						className="w-auto h-auto"
					/>
				</Link>
			</div>
		</div>
	);
}
