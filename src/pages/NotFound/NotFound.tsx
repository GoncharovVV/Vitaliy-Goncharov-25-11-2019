import * as React from 'react';
import './NotFound.scss'
export interface NotFoundProps {

}

const NotFound: React.FC<NotFoundProps> = () => {
  return (
    <section className="parallax">
      <div className="container">
        <h2 className="text_center">
          Page not found
        </h2>
      </div>
    </section>
  );
}

export default NotFound;