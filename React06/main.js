const people = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
  }, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
  }, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
  }, {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'chemist',  
  }, {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
  }]

  function getProfession(){
      let newPeople = people;
      let listProfession = newPeople.reduce((prev,curr)=>{
        if(!prev.includes(curr.profession)){
            prev.push(curr.profession)
        }
        return prev
      },[])
      console.log("list is ", listProfession)
      return listProfession;
  }

function App(){
    const [scientist, setScientist] = React.useState(people)
    const [filterText, setFilterText] = React.useState("")
    // const finalList = scientist.filter(el => el.profession ==='chemist')
    // console.log(finalList)
    const professionList = Array.from(new Set(scientist.map(el=>el.profession)))
    // const professionList = getProfession();
    // console.log(professionList)
    console.log(getProfession())
    return (
        <div className = "app">
            {professionList.map(el=>(<button key={el} onClick={()=>setFilterText(el)}>{el}</button>))}
            <button onClick={()=>setFilterText('')} >ALL</button>
            {/* {scientist.map(el=>(<button>{el.profession}</button>))} */}
            <ul>
                {/* { finalList.map(el=>(<PersonCard key = {el.id} person={el} />))} */}
                {scientist.filter(el=>filterText?(el.profession===filterText):true).map(el=>(<PersonCard key = {el.id} person={el} />))}
                {/* {scientist.filter(el=>el.profession===filterText).map(el=>(<PersonCard key = {el.id} person={el} />))} */}
            </ul> 
        </div>
    )
}

function PersonCard(props){
    const {person : {name, profession}} = props
    return (
        <li>{name} , {profession}</li>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);  