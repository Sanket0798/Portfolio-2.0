import { Roboto_Mono, Roboto_Flex, Orbitron } from "next/font/google";
import "./styles/globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Configure the fonts with desired weights
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"], // Adjust weights as needed
  variable: "--font-roboto-mono",
});

const orbitron = Orbitron({
  subsets: ['latin'], // Choose the subset as per your project requirements
  weight: ['400', '700'], // Include specific weights, e.g., 400, 700
});

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
    "1000",
  ], // Adjust weights as needed
  variable: "--font-roboto-flex",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${robotoMono.variable} ${robotoFlex.variable} font-sans antialiased pt-[28px] pb-[28px]`}
      >
         <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
