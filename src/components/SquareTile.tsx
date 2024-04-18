import React, {ReactElement, useState} from "react";
import {useAppContext} from "@/context/AppContext";

const circleSvg = (
	<svg
		fill="#FFFFFF"
		version="1.1"
		id="Capa_1"
		xmlns="http://www.w3.org/2000/svg"
		width="100px"
		height="100px"
		viewBox="0 0 595.021 595.021"
		strokeWidth="10px"
	>
		<g>
			<g>
				<g>
					<path
						d="M507.529,87.493c-27.264-27.264-59.022-48.672-94.396-63.635C376.489,8.358,337.588,0.5,297.511,0.5
           c-40.078,0-78.979,7.858-115.624,23.358c-35.373,14.961-67.132,36.371-94.395,63.635c-27.264,27.263-48.673,59.022-63.635,94.395
           C8.358,218.532,0.5,257.434,0.5,297.511c0,40.077,7.858,78.979,23.358,115.623c14.961,35.373,36.371,67.132,63.635,94.396
           c27.263,27.263,59.022,48.672,94.395,63.634c36.645,15.5,75.546,23.358,115.624,23.358c40.077,0,78.979-7.858,115.623-23.358
           c35.373-14.961,67.133-36.371,94.396-63.634c27.263-27.264,48.673-59.022,63.634-94.396
           c15.499-36.645,23.358-75.546,23.358-115.623c0-40.077-7.858-78.979-23.358-115.624
           C556.202,146.515,534.792,114.756,507.529,87.493z M297.511,551.682c-140.375,0-254.171-113.797-254.171-254.171
           c0-140.375,113.796-254.171,254.171-254.171c140.374,0,254.171,113.796,254.171,254.171
           C551.682,437.885,437.885,551.682,297.511,551.682z"
					/>
					<path
						d="M297.511,595.021c-40.146,0-79.112-7.872-115.818-23.397c-35.433-14.988-67.245-36.434-94.553-63.741
           c-27.31-27.31-48.755-59.122-63.742-94.555C7.872,376.623,0,337.656,0,297.511c0-40.145,7.872-79.112,23.397-115.818
           c14.987-35.432,36.433-67.245,63.742-94.553c27.308-27.309,59.12-48.755,94.553-63.742C218.399,7.872,257.366,0,297.511,0
           c40.146,0,79.112,7.872,115.817,23.397c35.435,14.988,67.247,36.434,94.555,63.742c27.31,27.31,48.755,59.123,63.741,94.553
           c15.525,36.706,23.397,75.673,23.397,115.818c0,40.144-7.872,79.11-23.397,115.817c-14.985,35.432-36.432,67.244-63.741,94.555
           c-27.31,27.31-59.122,48.755-94.555,63.741C376.623,587.149,337.656,595.021,297.511,595.021z M297.511,1
           C257.5,1,218.665,8.845,182.082,24.318c-35.314,14.937-67.02,36.311-94.236,63.528c-27.218,27.217-48.591,58.923-63.528,94.236
           C8.845,218.665,1,257.5,1,297.511s7.845,78.847,23.318,115.429c14.936,35.312,36.31,67.019,63.528,94.236
           c27.217,27.216,58.922,48.59,94.236,63.526c36.582,15.474,75.417,23.319,115.429,23.319c40.011,0,78.847-7.846,115.429-23.319
           c35.312-14.936,67.019-36.309,94.236-63.526c27.219-27.22,48.592-58.925,63.526-94.236
           c15.474-36.584,23.319-75.42,23.319-115.429c0-40.011-7.846-78.847-23.319-115.429c-14.935-35.312-36.309-67.017-63.526-94.236
           c-27.217-27.216-58.922-48.59-94.236-63.528C376.357,8.845,337.521,1,297.511,1z M297.511,552.182
           c-68.025,0-131.979-26.49-180.08-74.592C69.33,429.489,42.84,365.535,42.84,297.511c0-68.025,26.49-131.979,74.591-180.08
           S229.486,42.84,297.511,42.84c68.024,0,131.979,26.49,180.079,74.591c48.102,48.101,74.592,112.055,74.592,180.08
           c0,68.024-26.49,131.979-74.592,180.079C429.489,525.691,365.535,552.182,297.511,552.182z M297.511,43.84
           c-67.758,0-131.46,26.386-179.373,74.298S43.84,229.753,43.84,297.511s26.386,131.46,74.298,179.372
           c47.913,47.912,111.615,74.299,179.373,74.299s131.46-26.387,179.372-74.299s74.299-111.614,74.299-179.372
           s-26.387-131.46-74.299-179.373C428.971,70.226,365.269,43.84,297.511,43.84z"
					/>
				</g>
			</g>
		</g>
	</svg>
);

const crossSvg = (
	<svg
		fill="#FFFFFF"
		height="100px"
		width="100px"
		version="1.1"
		id="Capa_1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 460.775 460.775"
	>
		<path
			d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
        c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
        c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
        c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
        l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
        c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"
		/>
	</svg>
);

const SquareTile = ({id}: {id: number}) => {
	const audio = React.useRef<HTMLAudioElement | undefined>(
		typeof Audio !== "undefined" ? new Audio("/click.wav") : undefined
	);
	const [icon, setIcon] = useState<ReactElement | null>();
	const {currentPlayer, setCurrentPlayer, setGameState, winner} =
		useAppContext();

	const handleClick = () => {
		if (winner !== "draw") return;
		if (!icon) {
			if (currentPlayer === "circle") {
				setIcon(circleSvg);
			} else {
				setIcon(crossSvg);
			}
			setCurrentPlayer(currentPlayer === "circle" ? "cross" : "circle");
			setGameState((prv: any) => {
				const newState = prv.map((row: any) => [...row]);
				const rowIndex = Math.floor(id / 3);
				const colIndex = Math.floor(id % 3);
				newState[rowIndex][colIndex] = currentPlayer;
				console.log(newState);
				return newState;
			});
		}
		if (audio.current) {
			audio.current.volume = 0.2;
			audio.current?.play();
		}
	};

	return (
		<div
			onClick={handleClick}
			className={`flex justify-center items-center text-4xl size-28
         bg-gray-300 border-2 border-gray-400/30  m-2 cursor-pointer hover:bg-gray-300/80
         ${winner !== "draw" ? "cursor-not-allowed" : ""}
         `}
		>
			{icon}
		</div>
	);
};

export default SquareTile;
