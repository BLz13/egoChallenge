import UIStateProvider from './context/ui-state/uiStateProvider';
import UserUI from './components/user-ui/user-ui';

export default function App() {

  return (
    <>
        <UIStateProvider>

          <UserUI />

          
          
        </UIStateProvider>
    </>
  );
}
