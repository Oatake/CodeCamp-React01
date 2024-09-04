
function App()
{
    return (
        <div>
            <UserInfo />
            {UserInfo()}
            app
        </div>
    )
}

function UserInfo()
{
    // const user = {name : 'andy',birthYear : 2000 , isLoggined : true}
    const [user,setUser] = React.useState({
        name : 'andy', 
        birthYear : 2000 , 
        isLoggined : true,
        point : 1000,
        loginFreq : 0,
    })

    const hdlLogin = () => {
        // if(user.isLoggined == true)
        // {
        //     setUser( {...user, isLoggined:false} );
        // }
        // else setUser({...user, isLoggined:true});
        const newUser = {...user}
        newUser.isLoggined ? newUser.isLoggined=false : newUser.isLoggined= true;
        newUser.loginFreq ++;
        (newUser.loginFreq % 5)==0 ? newUser.point+=100 : null
        setUser(newUser)
    }
    
    // const addPoint = () =>
    // {
    //     const newUser = {...user}
    //     newUser.point = newUser.point + 10;
    //     setUser(newUser)

    // }
    function addPoint(){
        console.log('x')
        // const newUser = {...user}
        // newUser.point = newUser.point + 10;
        // setUser(newUser)
        // setUser({...user, point : user.point+10})
        // setUser(()=>({...user, point : user.point+10}))
        setUser((curr)=>({...curr ,point : curr.point+=10}))
        console.log(user.point)
        setUser((curr)=>({...curr ,point : curr.point+=10}))
        console.log(user.point)

    }

    return(
        <div>
            <p>UserInfo</p>
            <p>Name : {user.name}</p>
            <p>age : {new Date().getFullYear() - user.birthYear}</p>
            <p>point : {user.point}</p>

            {/* ถ้า login vs ไม่ login */}
            {/* {user.isLoggined ? <button onClick={hdlLogin}>Logoff</button> : <button onClick={hdlLogin}>Login</button>} */}
            {/* สร้างปุ่ม add point ทีละ 10 point โดยยปุ่มจะแสดงเมื่อ login เท่านั้น  */} 
            {/* {user.isLoggined ? <button onClick={addPoint}>Add</button> : null} */}

             {/* ถ้า login vs ไม่ login */}
             {user.isLoggined ? (
                // use React.Fragment instead of <div> for easy to decolate page
                <React.Fragment>  
                    <button onClick={hdlLogin}>Logoff</button>
                    <button onClick={addPoint}>Add</button>    
                </React.Fragment>
             ) : 
                <button onClick={hdlLogin}>Login</button>} 
            <hr />
            {/* ถ้า login vs ไม่ login */}
            {user.isLoggined ? <p>Welcome {user.name}</p> : <p >Please login</p> }
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);  