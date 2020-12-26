import "./CardComponent.scss";

export const CardComponent = () => {
  return (
    <div className="card">
      <div className="card-top">
        <div className="card-top-title">
          <h3>#151</h3>
        </div>
      </div>
      <div className="card-middle">
        <div className="card-middle-stroke">
          <div className="card-middle-stroke-img">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
              alt="pokemon"
            />
          </div>
        </div>
      </div>
      <div className="card-bottom">
        <h4 className="card-bottom-title">Bulbasaur</h4>
      </div>
    </div>
  );
};
