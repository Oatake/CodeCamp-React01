function App() {
  const user = [
    {name : 'andy', age:25, role:"admin"},
    {name : 'adndy', age:25, role:"user"},
    {name : 'anddy', age:25, role:"user"},

  ]
  return (
    <div>
      {/* <Header /> */}
      {/* <UserInfoBox name='son' age={25} isAdmin={true} obj={{a:5,b:9}} arr={[1,5,7,9]}/> */}
      {/* <UserInfoBox name={user[0].name} age={user[0].age} role={user[0].role}/> */}
      <UserInfoContainer arrUser={user}/>
      {/* {UserInfo()}
      app */}
    </div>
  );
}



function UserInfoContainer(props){
  console.log("input is ", props)
  const{arrUser} = props
  return(
    <div className="user-container" style = {{display : 'flex', gap:"4px"}}>

      {/* <UserInfoBox name={props.arrUser[0].name} age={arrUser[0].age} role={arrUser[0].role}/>
      <UserInfoBox name={arrUser[1].name} age={arrUser[1].age} role={arrUser[1].role}/>
      <UserInfoBox name={arrUser[2].name} age={arrUser[2].age} role={arrUser[2].role}/> */}
      {
        arrUser.map(el=>{
          return <UserInfoBox name={el.name} age={el.age} role={el.role} />
        })
      }
      {
        arrUser.map(el=>(
          <UserInfoBox2 item={el} />
        ))
      }
    </div>
  )
}

function UserInfoBox2(props) {
  console.log("item is ", props)
  const {name, age ,user} = props.item
  const {item} = props
  return (
    <div className="card">
      <img src="https://www.svgrepo.com/show/530412/user.svg" alt="John" style={{ width: "100%" }} />
      <h1>{name}, {props.item.age} {item.age}</h1>
      <p className="title">CEO &amp; Founder, Example</p>
      <p>Harvard University</p>
      <p>
        <button>Contact</button>
      </p>
    </div>
  );
}

function UserInfoBox(props) {
  console.log(props)
  const {name,age} = props
  return (
    <div className="card">
      <img src="https://www.svgrepo.com/show/530412/user.svg" alt="John" style={{ width: "100%" }} />
      <h1>{props.name}, {age}</h1>
      <p className="title">CEO &amp; Founder, Example</p>
      <p>Harvard University</p>
      <p>
        <button>Contact</button>
      </p>
    </div>
  );
}

function Header(){
    return (
      <header style={{backgroundColor : "gold"}}>
          <h2>Logo</h2>
          <nav>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </nav>
      </header>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
