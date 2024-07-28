import { useEffect, useState } from 'react';
import './App.css';
import debouncer from './utils';

function App() {
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);

  const fetchdata = async () => {
    const url = `https://api.frontendeval.com/fake/food/${input}`;
    const data = await debouncer(url);
    setList(data);
    // try {
    //   const res = await fetch(url);
    //   const data = await res.json();
    //   setList(data);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  useEffect(() => {
    if (input) {
      fetchdata();
    }
  }, [input]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <div>
        <input type="text" value={input} onChange={handleChange} />
        {list && list.length > 0 && (
          <div>
            {list.map((item, index) => {
              return <div key={index}>{item}</div>;
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
