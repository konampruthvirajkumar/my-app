import React from "react";
import Ansible from "./components/ansible.component";
import { Provider } from "react-redux";
import  store  from './redux/store';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Ansible />
      </Provider>
    </div>
  );
}

export default App;
