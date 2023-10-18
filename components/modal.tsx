"use client";

import { useState } from "react";
import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import {Image} from "@nextui-org/react";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import { button as buttonStyles } from "@nextui-org/theme";

export const MyModal = () => {
const {isOpen, onOpen, onOpenChange} = useDisclosure();
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
}