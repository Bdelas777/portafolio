import { JetBrains_Mono} from "next/font/google";
import "./globals.css";
import Header from "../components/Header"
import PageTransition from "../components/PageTransition"
import StairTransition from "../components/StairTransition"
import ScrollNavigator from "../components/ScrollNavigator";

const jet = JetBrains_Mono({ subsets: ["latin"], weight: ["100","200","300","400", "500",
  "600","700","800",
],
variable: '--font-jetbrainsMono'

});

export const metadata = {
  title: "Bernardo de la Sierra  Resume",
  description: "Resume of Bernardo de la Sierra Rábago",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jet.className}>
        <Header /> 
        <StairTransition />
        <ScrollNavigator />
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
