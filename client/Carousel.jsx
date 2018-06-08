import React from 'react';
import SwipeableViews from 'react-swipeable-views';
const styles = {
  slide: {
    padding: 15,
    minHeight: 100
  }
};


class Carousel extends React.Component{
  render()
  {
    return(
      <SwipeableViews>
     <div >
         <img height="500px" width="100%" src="https://www.stratoscale.com/wp-content/uploads/Kubernetes-logo.png" alt="helping hearts"/>
     </div>
     <div style={Object.assign({}, styles.slide, styles.slide2)}>
       <img height="500px" width="100%" src="https://www.stratoscale.com/wp-content/uploads/Kubernetes-logo.png"/>
     </div>

   </SwipeableViews>
    );
  }
}
export default Carousel;
