import {  Bebas_Neue,Inter} from "next/font/google";
import "./globals.css";


const inter = Inter({
  subsets: ["latin"],
  display: "swap",

})
const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"]
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={bebasNeue.className }
      >
        {children}
      </body>
    </html>
  );
}
