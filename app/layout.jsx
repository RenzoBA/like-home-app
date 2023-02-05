import "/styles/globals.css";
import GlobalContext from "./(global-context)";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className="min-h-screen relative">
        <GlobalContext>
          <Header />
          {children}
          <Footer />
        </GlobalContext>
      </body>
    </html>
  );
}
