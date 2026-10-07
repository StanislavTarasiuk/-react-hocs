import { useState } from 'react';
import './App.css';
import EntitiesList from './EntitiesList';
import EntityDetails from './EntityDetails';
import { fetchUsers, fetchUser } from '../api';

function App() {
  const [selectedEntity, setSelectedEntity] = useState(null)

  return (
    <div>
      <EntitiesList
        onEntityDetailsClick={setSelectedEntity}
        fetchMethod={fetchUsers}
        propsToDisplay={{ name: 'Name', username: 'Username', email: 'Email' }} />
      {selectedEntity && (
        <EntityDetails
          fetchMethod={fetchUser}
          params={selectedEntity}
          propsToDisplay={{
            name: 'Name', username: 'Username', email: 'Email',
            address: 'Address', city: 'City', street: 'Street', suite: 'Apartments',
            phone: 'Phone'
          }}
        />
      )}
    </div>
  );
}

export default App;
