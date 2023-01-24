import Footer from "@/components/Footer";
import Header from "@/components/Header";
import GlobalContext from "./(global-context)";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <GlobalContext>
          <Header />
          {children}
          <Footer />
        </GlobalContext>
      </body>
    </html>
  );
}
