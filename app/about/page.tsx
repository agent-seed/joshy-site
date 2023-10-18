"use client"
import { title } from "@/components/primitives";
import {Avatar, AvatarGroup, AvatarIcon} from "@nextui-org/react";
import {Spacer} from "@nextui-org/react";

export default function AboutPage() {
	return (
		<div className="gap-3 text-center items-center">
			<h1 className={title({ class: "mt-4" })}>Title</h1>
			<Spacer y={4}/>
			<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>
			<Spacer y={4}/>
			<h1 className={title({ class: "mt-4" })}>The Team</h1>
			<Spacer y={4}/>
			<div className="flex items-center gap-3 justify-content justify-between">
				<Avatar src="https://i.pravatar.cc/300?u=1" className="w-30 h-20 text-large" />
				<Avatar src="https://i.pravatar.cc/300?u=2" className="w-30 h-20 text-large" />
				<Avatar src="https://i.pravatar.cc/300?u=3" className="w-30 h-20 text-large" />
				<Avatar src="https://i.pravatar.cc/300?u=4" className="w-30 h-20 text-large" />
				<Avatar src="https://i.pravatar.cc/300?u=5" className="w-30 h-20 text-large" />
				<Avatar src="https://i.pravatar.cc/300?u=6" className="w-30 h-20 text-large" />
			</div>
			<Spacer y={4}/>
			<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>
		</div>
	);
}
