import './App.css';

function App() {

    const crearDigitos = () => {
        const digitos = [];
        for(let x = 1; x < 10; x++){
            digitos.push(
                <button key={x}>{x}</button>
            )
        }

        return digitos;
    }



    return (
        <div className="App" >
            <div className='calculadora'>
                <div className='resultado'>

                    <span>(0)</span>0
                </div>

                <div className='operadores'>
                    <button>/</button>
                    <button>*</button>
                    <button>+</button>
                    <button>-</button>

                    <button>DEL</button>
                </div>
                
                <div className='digitos'>
                    { crearDigitos() }
                    <button>0</button>
                    <button>.</button>
                    <button>=</button>
                </div>
            </div>

        </div>
    );
}

export default App;