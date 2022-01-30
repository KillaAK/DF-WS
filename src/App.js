import React, { useState } from "react";
import Routes from "./routes/routes";
import GlobalState from './GlobalState'; 

function App() {
    const [state, setState] = useState({});  
  return (
		<GlobalState.Provider value={[state, setState]}>
			<div className="bg-primary">
				<Routes />
			</div>
		</GlobalState.Provider>
	);
}

export default App;
