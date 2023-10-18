import { title } from "@/components/primitives";
import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
export default function AboutsitePage() {
	return (
		<div>
			<h1 className={title()}>About the site</h1>
			<div className="mt-8">
				<Link
					isExternal
					className="flex items-center gap-1 text-current"
					href="https://agentseed.org"
					title="Agentseed's website"
					>
					<span className="text-default-600">Built by</span>
					<p className="text-primary">Agentseed</p>
				</Link>
				<Link
					isExternal
					className="flex items-center gap-1 text-current"
					href="https://nextui.org"
					title="NextUI"
					>
					<span className="text-default-600">Built with</span>
					<p className="text-primary">NextUI</p>
				</Link>
				<Link
					isExternal
					className="flex items-center gap-1 text-current"
					href="https://nextjs.org"
					title="NextJS"
					>
					<span className="text-default-600">And</span>
					<p className="text-primary">NextJS</p>
				</Link>
				<Link
					isExternal
					className="flex items-center gap-1 text-current"
					href="https://interserver.net"
					title="InterServer"
					>
					<span className="text-default-600">Running on</span>
					<p className="text-primary">InterServer</p>
					<span className="text-default-600">hardware</span>
				</Link>
				<Link
					isExternal
					className="flex items-center gap-1 text-current"
					href="https://cloudflare.com"
					title="Cloudflare"
					>
					<span className="text-default-600">DDos protection by</span>
					<p className="text-primary">Cloudflare</p>
				</Link>
				<Link
					isExternal
					className="flex items-center gap-1 text-current"
					href="https://placekitten.com"
					title="Placekitten"
					>
					<span className="text-default-600">Development placeholders by</span>
					<p className="text-primary">Placekittens</p>
				</Link>
				<Link
					isExternal
					className="flex items-center gap-1 text-current"
					href="https://unsplash.com"
					title="Unsplash"
					>
					<span className="text-default-600">and</span>
					<p className="text-primary">Unsplash</p>
				</Link>
			</div>
			<div className="gap-3 mt-8">
				<Link as={NextLink} href={'mailto:admin@agentseed.org'} className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}>
					Contact dev
				</Link>
			</div>
		</div>
	);
}
