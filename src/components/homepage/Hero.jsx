import hero1 from "../../assets/hero1.jpg"
import hero2 from "../../assets/hero2.jpg"

function HomeHero() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div className="carousel-inner bg-secondary" style={{height:'400px'}}>
    <div className="carousel-item h-100 active">
      <img width={'100%'} src={hero1} alt="" />
    </div>
    <div className="carousel-item h-100">
    <img width={'100%'} src={hero2} alt="" />
    </div>
    <div className="carousel-item w-100">
    <img width={'100%'} src={hero1} alt="" />
    </div>
    <div className="carousel-item h-100">
    <img width={'100%'} src={hero2} alt="" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  );
}

export default HomeHero;