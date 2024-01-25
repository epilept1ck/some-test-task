import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [state, setState] = useState('');
  const [resp, setResp] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${state}`)
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, [state]);
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <nav className="header">
            <div>
              <button
                type="button"
                className="button"
                onClick={() => setState("posts")}
              >
                <p className="p-text">Posts</p>
              </button>
            </div>
            <div>
              <button type="button" className="button"> onClick={() => setState("comments")}
                <p className="p-text">Comments</p>
              </button>
            </div>
            <div>
              <button type="button" className="button">
                <p className="p-text">Albums</p>
              </button>
            </div>
            <div>
              <button type="button" className="button">
                <p className="p-text">Photos</p>
              </button>
            </div>
          </nav>
          <hr className="hr" />
          
        </div>
      </div>
      {resp.map((i) => {
        return <pre className="">{JSON.stringify(i)}</pre>
      })}
    </>
  );
}

export default App;


