function createProfile()
{
  const avatarStyle = {
    borderRadius : "50%",
  }
  return (
    <div className="profile">
      <img style = {avatarStyle} src = "https://images.unsplash.com/photo-1579463148228-138296ac3b98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" />
      <h3>Julienne Moore</h3>
      <p style = {{color : 'grey'}}>Julienne.Moore@company.com</p>
    </div> 
  )   
}

function CreateMenu(prop){
  console.log(prop)
  const {name, value} =prop
    return (
      <div className="menu" style={{flexGrow :"1"}}>
        <h3>{value}</h3>
        <p style = {{color : 'grey'}}>{prop.name}</p>
      </div>
    )      
}

function App() {
  const appStyle = 
    {
      backgroundColor : "white",
      textAlign : "center",
      width  : "400px",
      margin : "auto",
      border : "red",
      borderRadius : "10px",
      /* height: 100vh; */
    }
    return (
      <div className="App" style = {appStyle}>
          {createProfile()}
          <div style = {{display : "flex", flexDirection :"row"}}>
           <CreateMenu value="34" name="aaa"/>
          </div>
          
      </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);  