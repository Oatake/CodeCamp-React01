
function App(){
    const borderStyle ={
        paddingLeft : "20px",
        border : "solid",
        borderRadius : "8px",
        marginLeft : "30px",
        marginRight : "30px",
        marginBottom : "30px",
        backgroundColor : "#343a46",
      } 
      return (
        <div style = {{backgroundColor : '#23272f', color : 'white', padding : "10px"}}>
          <h1>Quick Start</h1>
          <p>Welcome to the React documentation! This page will give you an introduction to the 80% of React concepts that you will use on a daily basis.</p>
          <div style = {borderStyle}>
              <h3>You will learn</h3>
              <ul>
                <li>How to create and nest components</li>
                <li>How to add markup and styles</li>
                <li>How to display data</li>
                <li>How to render conditions and lists</li>
                <li>How to respond to events and update the screen</li>
                <li>How to share data between components</li>
              </ul>
          </div>
        </div>
        
      )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);  