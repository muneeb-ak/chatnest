import Navbar from "./components/Navbar";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'


export const metadata = {
  title: "ChatNest",
  description: "Connect with the world",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body>
         <Navbar/>
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
