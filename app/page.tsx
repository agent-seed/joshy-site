"use client"
import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import {Card, CardFooter, Image, Button} from "@nextui-org/react";

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title()}>Make&nbsp;</h1>
				<h1 className={title({ color: "violet" })}>beautiful&nbsp;</h1>
				<br />
				<h1 className={title()}>
					websites regardless of your design experience.
				</h1>
				<h2 className={subtitle({ class: "mt-4" })}>
					Beautiful, fast and modern React UI library.
				</h2>
			</div>

			<div className="flex gap-3">
				<Link
					isExternal
					as={NextLink}
					href={siteConfig.links.docs}
					className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
				>
					Documentation
				</Link>
				<Link
					isExternal
					as={NextLink}
					className={buttonStyles({ variant: "bordered", radius: "full" })}
					href={siteConfig.links.github}
				>
					<GithubIcon size={20} />
					GitHub
				</Link>
			</div>

			<div className="mt-8 flex">
			<Card
			isFooterBlurred
			radius="lg"
			className="border-none"
			>
			<Image
				alt="Woman listing to music"
				className="object-cover"
				height={400}
				src="https://images.unsplash.com/photo-1634834300387-8015d9fb7550"
				width={400}
			/>
			<CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
				<p className="text-tiny text-white/80">A bunch of placeholder text</p>
				<div>
					<Button className="text-tiny text-white padding-10" variant="solid" color="primary" radius="lg" size="sm">
					Buy
					</Button>
					<Button className="text-tiny text-white" variant="bordered" color="primary" radius="lg" size="sm">
					Info
					</Button>
				</div>	
			</CardFooter>
			</Card>

			<Card
			isFooterBlurred
			radius="lg"
			className="border-none"
			>
			<Image
				alt="Woman listing to music"
				className="object-cover"
				height={400}
				src="https://images.unsplash.com/photo-1634834300387-8015d9fb7550"
				width={400}
			/>
			<CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
				<p className="text-tiny text-white/80">A bunch of placeholder text</p>
				<Button className="text-tiny text-white" variant="faded" color="primary" radius="lg" size="sm">
				Info
				</Button>
			</CardFooter>
			</Card>

			<Card
			isFooterBlurred
			radius="lg"
			className="border-none"
			>
			<Image
				alt="Woman listing to music"
				className="object-cover"
				height={400}
				src="https://images.unsplash.com/photo-1634834300387-8015d9fb7550"
				width={500}
			/>
			<CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
				<p className="text-tiny text-white/80">A bunch of placeholder text</p>
				<Button className="text-tiny text-white" variant="ghost" color="primary" radius="lg" size="sm">
				Info
				</Button>
			</CardFooter>
			</Card>
			</div>
		</section>
	);
}
