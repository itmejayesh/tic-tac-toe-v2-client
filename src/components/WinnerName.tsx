"use client";
import React from "react";
import {TextGenerateEffect} from "./ui/text-generate-effect";
import {useAppContext} from "@/context/AppContext";

function WinnerName() {
	const {winner} = useAppContext();
	const words = `here is our finner ${winner}`;
	return (
		<div className="text-wrap pb-4 w-full text-center">
			{winner !== "draw" ? (
				<TextGenerateEffect words={words} className=" capitalize" />
			) : (
				<>
					<TextGenerateEffect words={"hello"} className=" capitalize" />
				</>
			)}
		</div>
	);
}

export default WinnerName;
