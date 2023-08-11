import { Header } from "./header/Header";
import "./_Home.scss"
import { Footer } from "./footer/Footer";
import { NavBar } from "./navBar/NavBar";
import { MainContainer } from "./main/MainContainer";
import { ContactContainer } from "./contact/ContactContainer";

export function Home() {
  return (
    <div className="container-home">
        <div style={{ display: "flex" }}>
              <NavBar />
              <div style={{display: "flex", flexDirection: "column"}}>
                <Header/>
                <MainContainer/>
                <ContactContainer/>
              </div>
            </div>
        <Footer />
    </div>
  )
}
