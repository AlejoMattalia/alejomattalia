import { Header } from "./header/Header";
import "./_Home.scss"
import { Footer } from "./footer/Footer";
import { NavBar } from "./navBar/NavBar";

export function Home() {
  return (
    <div className="container-home">
        <div style={{ display: "flex" }}>
              <NavBar />
              <Header/>
            </div>
        <Footer />
    </div>
  )
}
