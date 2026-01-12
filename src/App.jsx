import Footer from './components/footer/footer.jsx';
import TabsContainer from './components/tabs/tabs-cnt';
import UIStateProvider from './context/ui-state/uiStateProvider';
import UserUI from './components/user-ui/user-ui';
import LoadingScreen from './components/loading-screen/loading.jsx';

export default function App() {

  return (
    <>
        <UIStateProvider>

          <UserUI />

          <TabsContainer />

          <Footer />
          
        </UIStateProvider>
    </>
  );
}
