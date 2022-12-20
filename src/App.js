import React, { useState } from 'react';
import List from './list';
import { data } from './data';

function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <h2>{people.length} birthday today</h2>
      <List thelist={people} />
      <button onClick={() => setPeople([])}>Clear All</button>
    </main>
  );
}

export default App;
