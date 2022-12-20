import React, { useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import "./App.css";

function AnimatedExample() {
  return <ProgressBar variant="success" animated now={45} />;
}

function App() {

  const [id, setId] = useState(1);
  const [img, setImg] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg");
  const [nome, setNome] = useState("bulbasaur");
  const [type1, setType1] = useState("grass");
  const [hp,setHp] = useState("45");
  const [attack, setAttack] = useState("49");
  const [defense, setDefense] = useState("49");
  const [sAttack, setSAttack] = useState("65");
  const [sDefense, setSDefense] = useState("65");
  const [speed, setSpeed] = useState("45");
  const [exp, setExp] = useState(" 64");
  

  const pesquisar = e => {
    e.preventDefault();
    const pesquisar = e.target[0].value;

    fetch('https://pokeapi.co/api/v2/pokemon/'+pesquisar)
    .then(response => response.json())
    .then(data => {
      setId(data.id)
      setNome(data.name)
      setImg(data.sprites.other.dream_world.front_default)
      setType1(data.types[0].type.name)
      setHp(data.stats[0].base_stat)
      setAttack(data.stats[1].base_stat)
      setDefense(data.stats[2].base_stat)
      setSAttack(data.stats[3].base_stat)
      setSDefense(data.stats[4].base_stat)
      setSpeed(data.stats[5].base_stat)
      setExp(data.base_experience)
      
    })
  
  }

  return (
    <div className="App">
        <div className="container">

          <div className="row mt-5  align-items-center d-flex justify-content-center">
          <div className="card col-6">

          <div className="input-group ml-3 mb-3 mt-3">
            <form class="d-flex" onSubmit={pesquisar}>
              <input type="text" className="form-control" placeholder="ID ou Nome" aria-label="ID ou Nome" aria-describedby="button-addon2" />
              <div class="d-grid gap-2 d-md-flex justify-content-md-end" >
                <button className="btn btn-primary "  type="submit" id="button-addon2"><b>OK</b></button>
              </div>
            </form>
          </div>


          <img src={img} className="card-img-top" alt="logo"/>


          <div className="card-body">
          
            <h5 className="card-title">Pokémon Número: #{id}</h5> 
            <h5 className="card-title">Nome: {nome.toLocaleUpperCase()}<br/><br/> 
              <a type="button" className="type1" disabled>{type1.toLocaleUpperCase()}</a>
            </h5>
            
            <p className="card-text">HP</p>            
            <div className='card-text' id='hp'>
              <ProgressBar variant="danger" animated now={hp} label={`${hp}`}/>
            </div>
            <p className="card-text">Ataque</p>
            <div className='card-text' id='ataque'>
              <ProgressBar variant="warning" animated now={attack} label={`${attack}`}/>
            </div>
            <p className="card-text">Defesa</p>
            <div className='card-text' id='defesa'>
              <ProgressBar variant="info" animated now={defense} label={`${defense}`}/>
            </div>
            <p className="card-text">Sp. Ataque</p>
            <div className='card-text' id='satk'>
              <ProgressBar variant="warning" animated now={sAttack} label={`${sAttack}`}/>
            </div>
            <p className="card-text">Sp. Defesa</p>
            <div className='card-text' id='sdef'>
              <ProgressBar variant="info" animated now={sDefense} label={`${sDefense}`}/>
            </div>
            <p className="card-text">Velocidade</p>
            <div className='card-text' id='speed'>
              <ProgressBar variant="success" animated now={speed} label={`${speed}`}/>
            </div>
            <p className="card-text">Exp. Base</p>
            <div className='card-text' id='exp'>
              <ProgressBar animated now={exp} label={`${exp}`}/>
            </div>
            
            
            
            
            
            
            

          </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
