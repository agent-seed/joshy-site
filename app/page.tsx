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
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";

export default function Home() {
	const {isOpen, onOpen, onOpenChange} = useDisclosure();
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
					<Button className="text-tiny text-white" variant="bordered" color="primary" radius="lg" size="sm" onPress={onOpen}>
					Info
					</Button>
					<Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur" size="2xl">
						<ModalContent>
							{(onClose) => (
							<>
								<ModalHeader className="flex flex-col gap-1 items-center">Modal Title</ModalHeader>
								<ModalBody>
								<Image
									isBlurred
									// width={100}
									src="https://placekitten.com/1920/1080"
									alt="NextUI Album Cover"
									classNames="m-5"
									/>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Nullam pulvinar risus non risus hendrerit venenatis.
									Pellentesque sit amet hendrerit risus, sed porttitor quam.
								</p>
								<p>
									Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
									dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. 
									Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. 
									Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur 
									proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
								</p>
								</ModalBody>
								<ModalFooter>
								<Button color="danger" variant="light" onPress={onClose}>
									Close
								</Button>
								<Link as={NextLink} className={buttonStyles({ variant: "shadow", color: "primary" })} href={'/payment'}>
									Buy
								</Link>
								</ModalFooter>
							</>
							)}
						</ModalContent>
					</Modal>
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
					<Button className="text-tiny text-white" variant="bordered" color="primary" radius="lg" size="sm" onPress={onOpen}>
					Info
					</Button>
					<Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur" size="2xl">
						<ModalContent>
							{(onClose) => (
							<>
								<ModalHeader className="flex flex-col gap-1 items-center">Modal Title</ModalHeader>
								<ModalBody>
								<Image
									isBlurred
									// width={100}
									src="https://placekitten.com/1920/1080"
									alt="NextUI Album Cover"
									classNames="m-5"
									/>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Nullam pulvinar risus non risus hendrerit venenatis.
									Pellentesque sit amet hendrerit risus, sed porttitor quam.
								</p>
								<p>
									Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
									dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. 
									Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. 
									Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur 
									proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
								</p>
								</ModalBody>
								<ModalFooter>
								<Button color="danger" variant="light" onPress={onClose}>
									Close
								</Button>
								<Link as={NextLink} className={buttonStyles({ variant: "shadow", color: "primary" })} href={'/payment'}>
									Buy
								</Link>
								</ModalFooter>
							</>
							)}
						</ModalContent>
					</Modal>
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
					<Button className="text-tiny text-white" variant="bordered" color="primary" radius="lg" size="sm" onPress={onOpen}>
					Info
					</Button>
					<Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur" size="2xl">
						<ModalContent>
							{(onClose) => (
							<>
								<ModalHeader className="flex flex-col gap-1 items-center">Modal Title</ModalHeader>
								<ModalBody>
								<Image
									isBlurred
									// width={100}
									src="https://source.unsplash.com/random/1920x1080"
									alt="NextUI Album Cover"
									classNames="m-5"
									/>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Nullam pulvinar risus non risus hendrerit venenatis.
									Pellentesque sit amet hendrerit risus, sed porttitor quam.
								</p>
								<p>
									Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
									dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. 
									Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. 
									Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur 
									proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
								</p>
								</ModalBody>
								<ModalFooter>
								<Button color="danger" variant="light" onPress={onClose}>
									Close
								</Button>
								<Link as={NextLink} className={buttonStyles({ variant: "shadow", color: "primary" })} href={'/payment'}>
									Buy
								</Link>
								</ModalFooter>
							</>
							)}
						</ModalContent>
					</Modal>
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