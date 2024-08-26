console.log(React.version)
console.log(ReactDOM)



function App(){

    const genRandom = ()=>Math.floor(Math.random()*100)
    const st1 = {
        color : "red",
        backgroundColor : "lime",
    }

    return (
        <div style = {{
            display : "flex", 
            justifyContent : "space-between"
            }}>
                <h1 style = {st1}>CodeCamp18 : {new Date().toDateString()}</h1>
                <h3 style = {{color : 'deeppink', backgroundColor : "gold"}}>Your lucky number is : {genRandom()}</h3>
                <p className="underline" >Lorem ipsum dolor sit amet.</p>
                
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);  