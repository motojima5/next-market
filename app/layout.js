import "./globals.css"
import Footer from "./components/footer";
import Header from "./components/header";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
