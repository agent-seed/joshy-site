"use client"
import NextLink from "next/link";
import { Link } from "@nextui-org/link";
// import { Snippet } from "@nextui-org/snippet";
// import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { HeartFilledIcon } from "@/components/icons";
import {Card, CardFooter, Image, Button} from "@nextui-org/react";

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title()}>placeholder&nbsp;</h1>
				<h1 className={title({ color: "violet" })}>accent&nbsp;</h1>
				<br />
				<h1 className={title()}>
					the rest of the sentence
				</h1>
				<h2 className={subtitle({ class: "mt-4" })}>
					A short description of the product
				</h2>
			</div>

			<div className="flex gap-3">
				<Link as={NextLink} href={siteConfig.links.donate} className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}>
					<HeartFilledIcon size={20} />
					Donate
				</Link>
				<Link as={NextLink} className={buttonStyles({ variant: "bordered", radius: "full" })} href={siteConfig.links.about}>
					About us
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
				height={300}
				src="http://placekitten.com/400/300"
				width={400}
			/>
			<CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
				<p className="text-tiny text-white/80">A bunch of placeholder text</p>
				<div>
					<Button className="text-tiny text-white padding-10" variant="solid" color="primary" radius="lg" size="sm">
					Buy
					</Button>
					&nbsp;
					<Button className="text-tiny text-white" variant="bordered" color="primary" radius="lg" size="sm">
					Info
					</Button>
				</div>	
			</CardFooter>
			</Card>
			&nbsp;
			&nbsp;
			<Card
			isFooterBlurred
			radius="lg"
			className="border-none"
			>
			<Image
				alt="Woman listing to music"
				className="object-cover"
				height={300}
				src="http://placekitten.com/400/300"
				width={400}
			/>
			<CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
				<p className="text-tiny text-white/80">A bunch of placeholder text</p>
				<div>
					<Button className="text-tiny text-white padding-10" variant="solid" color="primary" radius="lg" size="sm">
					Buy
					</Button>
					&nbsp;
					<Button className="text-tiny text-white" variant="bordered" color="primary" radius="lg" size="sm">
					Info
					</Button>
				</div>	
			</CardFooter>
			</Card>
			&nbsp;
			&nbsp;
			<Card
			isFooterBlurred
			radius="lg"
			className="border-none"
			>
			<Image
				alt="Woman listing to music"
				className="object-cover"
				height={300}
				src="http://placekitten.com/400/300"
				width={400}
			/>
			<CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
				<p className="text-tiny text-white/80">A bunch of placeholder text</p>
				<div>
					<Button className="text-tiny text-white padding-10" variant="solid" color="primary" radius="lg" size="sm">
					Buy
					</Button>
					&nbsp;
					<Button className="text-tiny text-white" variant="bordered" color="primary" radius="lg" size="sm">
					Info
					</Button>
				</div>	
			</CardFooter>
			</Card>
			</div>
			<div className="gap-3 text-center">
				<h1 className={title({ class: "mt-4" })}>Title</h1>
				<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p>
			</div>
		</section>
	);
}