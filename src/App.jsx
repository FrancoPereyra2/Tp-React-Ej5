import React, { useEffect, useState } from 'react';

function App() {
  const [tarea, setTarea] = useState("");
  const leerTarea = JSON.parse(localStorage.getItem('guardarLocalStorageKey')) || []
  const [listaTareas, setListaTareas] = useState(leerTarea);


  useEffect(() =>{
    localStorage.setItem('guardarLocalStorageKey' , JSON.stringify(listaTareas))
  }, [listaTareas])

  const agregarTarea = () => {
    if (tarea !== "") {
      setListaTareas([...listaTareas, tarea]);
      setTarea(""); 
    }
  };

  const eliminarTarea = (index) => {
    const nuevasTareas = listaTareas.filter((_, i) => i !== index);
    setListaTareas(nuevasTareas);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Bienvenido</h1>
      <h3>Ingresa tus tareas</h3>
      <form>
        <input 
          type="text" 
          placeholder="Tarea 1..." 
          value={tarea} 
          onChange={(e) => setTarea(e.target.value)} 
        />
        <button type="button" onClick={agregarTarea}>Agregar</button>
      </form>

      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {listaTareas.map((tarea, index) => (
          <li key={index} style={{ margin: '10px 0', display: 'flex', justifyContent: 'center' }}>
            <span style={{ marginRight: '10px' }}>{tarea}</span>
            <button onClick={() => eliminarTarea(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
