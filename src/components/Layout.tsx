import Footer from "./Footer";
import Navbar from "./Navbar";

type Props = { children: JSX.Element };

const Layout: React.FC<any> = ({ children }: Props) => {
  return (
    <div style={{ paddingTop: 75 }}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
