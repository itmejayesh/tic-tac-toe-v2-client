import type {Metadata} from "next";
import {Montserrat} from "next/font/google";
import "./globals.css";
import {AppContextProvider} from "@/context/AppContext";

const montserrat = Montserrat({
	subsets: ["latin"],
	weight: "400",
	style: ["italic", "normal"],
});

export const metadata: Metadata = {
	title: "TicTacToe | Home",
	description: "",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning={true}>
			<body suppressHydrationWarning={true} className={montserrat.className}>
				<AppContextProvider>{children}</AppContextProvider>
			</body>
		</html>
	);
}
