import { checkPropTypes } from 'prop-types';
import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
Layout.propTypes = {
    children: checkPropTypes,
  };
export default Layout;