import Topnav from "../../components/Topnav";
import Jumbotron from "../../components/Jumbotron";
import Intro from "../../components/Intro";
import Profil from "../../components/Profil";
import Fitur from "../../components/Fitur";
import Harga from "../../components/Harga";
import Template from "../../components/Template";

const MainLayout = () => {
  return (
    <div className="relative">
      <Topnav />
      <Jumbotron />  
      <Intro />
      <Profil />
      <Fitur />
      <Harga />
      <Template />
    </div>
  )
}

export default MainLayout