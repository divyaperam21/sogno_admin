import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";
import HomePage from "./page";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <SignedOut>
            <p>Sign In Below</p>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
