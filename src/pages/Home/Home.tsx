import * as React from 'react';
import './Home.scss';
import Search from '../../components/Search';
// import Spinner from '../../components/Spinner/indexs';
export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  // const spinner = loading ? <Spinner /> : null;
  return (
    <section className="container">
      <Search />
      {/* {spinner} */}
    </section>
  );
};

export default Home;
