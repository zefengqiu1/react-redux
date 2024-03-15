import { AppLayout } from '@awsui/components-react';
import Routers from './routers'
import Navigation from './navigation/Navigation'
function App() {
  return (
    <div className='awsui'>
      <AppLayout
        content={<Routers />}
        navigation={<Navigation />}
        toolsHide={true}
      />
    </div >
  );
}

export default App;
