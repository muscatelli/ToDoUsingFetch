import react, { useState, useEffect } from "react";


const TodoList = () => {
    const [Tarea, SetTarea] = useState("");
    const [Lista, SetLista] = useState([]);
   
    const Test = [
        { "label": "That's a test", "done": false },
        { "label": "More test", "done": false },
        { "label": "Im Week trying", "done": false }
    ]
    const url2 = "https://assets.breatheco.de/apis/fake/todos/user/carlosemclb"

    useEffect(() => {
        UpdateData(); 
     },[])

    
   
    /*
    useEffect(()=>{
        fetch(url2,{
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body:JSON.stringify([])
        })
        .then((res) => {
            return console.log(res)
        })
        .then(data => console.log(data))
        .catch(error => console.log(error))
    },[])
*/

    //Update Data
    const UpdateData = () => {
        fetch(url2,{
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body:JSON.stringify(Test)
        })
            .then((res) => {
                return res.json()
            })
            .then(data => console.log(data))
            .catch(error => console.log(error))
    }

    // Read Data
    useEffect(()=>{
        fetch(url2,{
            method: "GET",
            headers: {
                "content-type": "application/json"
            },
        })
        .then((res) => res.json())
        .then(data => SetLista(data))
        .catch(error => console.log(error))
    },[])
    



    const handleChange = (evento) => {
        SetTarea(evento.target.value)
    }

    const addTarea = (evento) => {
        evento.preventDefault();
        const tempLista = Lista;
        tempLista.push(Tarea)
        SetLista([...tempLista])
        console.log(Lista)
    }

    const remove = (index) => {
        const tempRemove = Lista;
        tempRemove.splice(index, 1)
        SetLista([...tempRemove])
    }

    return (

        <div className="constainer">
            <form className="row g-3" onSubmit={addTarea}>


                <div>
                    <h1>"TODO LIST!"</h1>
                </div>

                <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping"></span>
                    <input type="text" className="form-control" placeholder="Ingrese la tarea" aria-label="Username" aria-describedby="addon-wrapping" onChange={handleChange} value={Tarea} />
                </div>

                <div>
                    <button type="submit" className="btn btn-primary"   >Add</button>
                </div>

                <ul className="list-group">
                    {Lista.map((lis, index) => <li key={index}>{lis.label} <span onClick={() => remove(index)}> X </span> </li>)}

                </ul>
            </form>

        </div>

    )
}



export default TodoList;











