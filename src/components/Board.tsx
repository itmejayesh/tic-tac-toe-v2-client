"use client";
import React, {useMemo, useRef, useState} from "react";
import SquareTile from "./SquareTile";
import {useAppContext} from "@/context/AppContext";
import WinnerName from "./WinnerName";

type TileRow = [number[], number[], number[]];

// Define the initial state of the game board
const initialTiles: TileRow = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];

const Board = () => {
	const {gameState, setGameState, setCurrentPlayer, setWinner} = useAppContext();
	const determineWinner = useMemo(() => {
		const winnerOfTheGame = () => {
			// Check rows
			for (let i = 0; i < gameState.length; i++) {
				if (
					gameState[i][0] === gameState[i][1] &&
					gameState[i][1] === gameState[i][2]
				) {
					return gameState[i][0];
				}
			}

			// Check columns
			for (let i = 0; i < gameState.length; i++) {
				if (
					gameState[0][i] === gameState[1][i] &&
					gameState[1][i] === gameState[2][i]
				) {
					return gameState[0][i];
				}
			}

			//check diagonals
			if (gameState.length) {
				if (
					gameState[0][0] === gameState[1][1] &&
					gameState[1][1] === gameState[2][2]
				) {
					return gameState[0][0];
				}
			}
			return "draw";
		};
		return winnerOfTheGame;
	}, [gameState]);

	// Ensure gameState is properly initialized before accessing its properties
	React.useEffect(() => {
		if (gameState !== initialTiles && gameState !== null) {
			const winnerOfGame = determineWinner();
			setWinner(winnerOfGame);
			console.log("Winner:", winnerOfGame);
		}
	}, [gameState, setWinner, determineWinner]);

	// Set the initial game state when the component mounts
	React.useEffect(() => {
		setGameState(initialTiles);
		setCurrentPlayer("circle");
	}, [setGameState, setCurrentPlayer]);

	return (
		<div className="flex flex-col justify-center items-center gap-y-5">
			<div className="grid grid-cols-3">
				{gameState?.map((arr: number[], rowIndex: number) =>
					arr.map((e, colIndex) => (
						<SquareTile id={rowIndex * 3 + colIndex} key={rowIndex * 3 + colIndex} />
					))
				)}
			</div>

			<WinnerName />
		</div>
	);
};

export default Board;
