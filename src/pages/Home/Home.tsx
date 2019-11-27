import * as React from 'react';
import './Home.scss';
import Search from '../../components/Search';
export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <section className="container">
      <Search />
    </section>
  );
};

export default Home;
