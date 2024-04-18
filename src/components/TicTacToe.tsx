import React from "react";
import Board from "./Board";

const TicTacToe = () => {
	return (
		<section className="flex flex-col justify-center items-center gap-y-4">
			<h1 className="text-4xl font-semibold">tictactoe</h1>
			<p className="text-sm">
				Room Code: <span className="font-semibold">vsdjksd</span>
			</p>
			<Board />
		</section>
	);
};

export default TicTacToe;
