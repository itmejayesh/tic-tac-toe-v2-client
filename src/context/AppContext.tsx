"use client";
import {createContext, ReactNode, useContext, useState} from "react";

type AppContextType = {
	currentPlayer: string | null;
	setCurrentPlayer: (player: string | null) => void;
	playerOneName: string | null;
	setPlayerOneName: (name: string | null) => void;
	playerTwoName: string | null;
	setPlayerTwoName: (name: string | null) => void;
	isLoading: boolean;
	setLoading: (loading: boolean) => void;
	gameState: any | null;
	setGameState: (state: any) => void;
	winner: string | undefined;
	setWinner: (winner: string | undefined) => void;
};

const initialContextValues: AppContextType = {
	currentPlayer: null,
	setCurrentPlayer: () => {},
	playerOneName: null,
	setPlayerOneName: () => {},
	playerTwoName: null,
	setPlayerTwoName: () => {},
	isLoading: false,
	setLoading: () => {},
	gameState: [[], [], []],
	setGameState: () => {},
	winner: undefined,
	setWinner: () => {},
};

const AppContext = createContext<AppContextType>(initialContextValues);

export const AppContextProvider = ({children}: {children: ReactNode}) => {
	//GAME STATE
	const [gameState, setGameState] = useState<any | null>([]);
	const [winner, setWinner] = useState<string | undefined>(undefined);

	//Player Informations
	const [currentPlayer, setCurrentPlayer] = useState<string | null>(null);
	const [playerOneName, setPlayerOneName] = useState<string | null>(null);
	const [playerTwoName, setPlayerTwoName] = useState<string | null>(null);

	//For Loading screen
	const [isLoading, setLoading] = useState<boolean>(false);

	return (
		<AppContext.Provider
			value={{
				currentPlayer,
				setCurrentPlayer,
				playerOneName,
				setPlayerOneName,
				playerTwoName,
				setPlayerTwoName,
				isLoading,
				setLoading,
				gameState,
				setGameState,
				winner,
				setWinner,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => {
	const context = useContext(AppContext);
	if (context === undefined) {
		throw new Error("useAppContext must be used within an AppContextProvider");
	}

	return context;
};
