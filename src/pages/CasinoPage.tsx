import { useNavigate } from "@solidjs/router";
import ChevronLeft from "../assets/chevron.svg";
import "./CasinoPage.css";

const CasinoPage = () => {
  const navigate = useNavigate();

  return (
    <div class="casino-page">
      <div class="casino-header">
        <button onClick={() => navigate(-1)}>
          <img src={ChevronLeft} alt="Go back button" />
        </button>
        <h2>Casino - name</h2>
      </div>

      <div class="game">Gra</div>
    </div>
  )
}

export default CasinoPage;