
function App(){
  let firstName = "Thitiwut"
  let lastName = "Ekwisit"
  let birthDay = new Date('10/18/1995')
  let currDate = new Date();
  let diffYear = currDate.getFullYear() - birthDay.getFullYear() -1
  let diffMonth =  Math.round((currDate.getTime()-birthDay.getTime())/(1000*3600*24*365)) %12;
  let diffDay = Math.round((currDate.getTime()-birthDay.getTime())/(1000*3600*24)) % 365 % 31;
  console.log(diffMonth)

  const h1Style = {
    backgroundColor : "blue"
  } 
  const pStyle = {
    color : "red"
  }

  return (
    <div className="App">
        <h1 style = {h1Style}>First name : {firstName}, Last name : {lastName}</h1>
        <p style = {pStyle}>Age is {currDate.getFullYear() - birthDay.getFullYear()}</p>
        <h2>Information</h2>
        <p>Year is : {diffYear}</p>
        <p>Month is : {diffMonth}</p>
        <p>Day is : {diffDay}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);  