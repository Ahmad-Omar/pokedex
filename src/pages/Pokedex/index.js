import React from "react";
import "./style.css";
import pokedexpic from "../../assets/images/pokedex.png";

function Pokedex() {
  return (
    <div className="pokedex">
      <div className="wrapper">
        <h2 className="pokedex-title">
          800 <span>Pokemons</span> for you to choose your favorite
        </h2>
        <input
          className="input-find"
          type="text"
          placeholder="Find your pokémon..."
        />
        <div className="select-filter">
          <select name="tipo">
            <option selected disabled>
              Tipo
            </option>
            <option>Fire</option>
            <option>Normal</option>
            <option>Electric</option>
            <option>Water</option>
          </select>

          <select name="Ataque">
            <option selected disabled>
              Ataque
            </option>
            <option>Fire</option>
            <option>Normal</option>
            <option>Electric</option>
            <option>Water</option>
          </select>

          <select name="Experiencia">
            <option selected disabled>
              Experiencia
            </option>
            <option>Fire</option>
            <option>Normal</option>
            <option>Electric</option>
            <option>Water</option>
          </select>
        </div>
        <section className="pokemons-list">
          <div className="pokemon">
            <div className="pokemon-details">
              <h4>Pyroar</h4>
              <div className="attack-defense">
                <div className="attack">
                  <span className="attack-value">419</span>
                  <span className="attack-lable">Attack</span>
                </div>
                <div className="defense">
                  <span className="defense-value">49</span>
                  <span className="defense-lable">Defense</span>
                </div>
              </div>
              <div className="grass-poison">
                <span className="grass">Grass</span>
                <span className="poison">Poison</span>
              </div>
            </div>
            <div className="pokemon-picture">
              <img src={pokedexpic} alt="Pokedex" />
            </div>
          </div>
          <div className="pokemon">
            <div className="pokemon-details">
              <h4>Pyroar</h4>
              <div className="attack-defense">
                <div className="attack">
                  <span className="attack-value">419</span>
                  <span className="attack-lable">Attack</span>
                </div>
                <div className="defense">
                  <span className="defense-value">49</span>
                  <span className="defense-lable">Defense</span>
                </div>
              </div>
              <div className="grass-poison">
                <span className="grass">Grass</span>
                <span className="poison">Poison</span>
              </div>
            </div>
            <div className="pokemon-picture">
              <img src={pokedexpic} alt="Pokedex" />
            </div>
          </div>
          <div className="pokemon">
            <div className="pokemon-details">
              <h4>Pyroar</h4>
              <div className="attack-defense">
                <div className="attack">
                  <span className="attack-value">419</span>
                  <span className="attack-lable">Attack</span>
                </div>
                <div className="defense">
                  <span className="defense-value">49</span>
                  <span className="defense-lable">Defense</span>
                </div>
              </div>
              <div className="grass-poison">
                <span className="grass">Grass</span>
                <span className="poison">Poison</span>
              </div>
            </div>
            <div className="pokemon-picture">
              <img src={pokedexpic} alt="Pokedex" />
            </div>
          </div>
          <div className="pokemon">
            <div className="pokemon-details">
              <h4>Pyroar</h4>
              <div className="attack-defense">
                <div className="attack">
                  <span className="attack-value">419</span>
                  <span className="attack-lable">Attack</span>
                </div>
                <div className="defense">
                  <span className="defense-value">49</span>
                  <span className="defense-lable">Defense</span>
                </div>
              </div>
              <div className="grass-poison">
                <span className="grass">Grass</span>
                <span className="poison">Poison</span>
              </div>
            </div>
            <div className="pokemon-picture">
              <img src={pokedexpic} alt="Pokedex" />
            </div>
          </div>
          <div className="pokemon">
            <div className="pokemon-details">
              <h4>Pyroar</h4>
              <div className="attack-defense">
                <div className="attack">
                  <span className="attack-value">419</span>
                  <span className="attack-lable">Attack</span>
                </div>
                <div className="defense">
                  <span className="defense-value">49</span>
                  <span className="defense-lable">Defense</span>
                </div>
              </div>
              <div className="grass-poison">
                <span className="grass">Grass</span>
                <span className="poison">Poison</span>
              </div>
            </div>
            <div className="pokemon-picture">
              <img src={pokedexpic} alt="Pokedex" />
            </div>
          </div>
          <div className="pokemon">
            <div className="pokemon-details">
              <h4>Pyroar</h4>
              <div className="attack-defense">
                <div className="attack">
                  <span className="attack-value">419</span>
                  <span className="attack-lable">Attack</span>
                </div>
                <div className="defense">
                  <span className="defense-value">49</span>
                  <span className="defense-lable">Defense</span>
                </div>
              </div>
              <div className="grass-poison">
                <span className="grass">Grass</span>
                <span className="poison">Poison</span>
              </div>
            </div>
            <div className="pokemon-picture">
              <img src={pokedexpic} alt="Pokedex" />
            </div>
          </div>
          <div className="pokemon">
            <div className="pokemon-details">
              <h4>Pyroar</h4>
              <div className="attack-defense">
                <div className="attack">
                  <span className="attack-value">419</span>
                  <span className="attack-lable">Attack</span>
                </div>
                <div className="defense">
                  <span className="defense-value">49</span>
                  <span className="defense-lable">Defense</span>
                </div>
              </div>
              <div className="grass-poison">
                <span className="grass">Grass</span>
                <span className="poison">Poison</span>
              </div>
            </div>
            <div className="pokemon-picture">
              <img src={pokedexpic} alt="Pokedex" />
            </div>
          </div>
          <div className="pokemon">
            <div className="pokemon-details">
              <h4>Pyroar</h4>
              <div className="attack-defense">
                <div className="attack">
                  <span className="attack-value">419</span>
                  <span className="attack-lable">Attack</span>
                </div>
                <div className="defense">
                  <span className="defense-value">49</span>
                  <span className="defense-lable">Defense</span>
                </div>
              </div>
              <div className="grass-poison">
                <span className="grass">Grass</span>
                <span className="poison">Poison</span>
              </div>
            </div>
            <div className="pokemon-picture">
              <img src={pokedexpic} alt="Pokedex" />
            </div>
          </div>
          <div className="pokemon">
            <div className="pokemon-details">
              <h4>Pyroar</h4>
              <div className="attack-defense">
                <div className="attack">
                  <span className="attack-value">419</span>
                  <span className="attack-lable">Attack</span>
                </div>
                <div className="defense">
                  <span className="defense-value">49</span>
                  <span className="defense-lable">Defense</span>
                </div>
              </div>
              <div className="grass-poison">
                <span className="grass">Grass</span>
                <span className="poison">Poison</span>
              </div>
            </div>
            <div className="pokemon-picture">
              <img src={pokedexpic} alt="Pokedex" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Pokedex;
