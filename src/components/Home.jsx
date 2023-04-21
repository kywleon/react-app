import React from 'react'
import { Container , Box } from '@mui/material';
import Typed from 'typed.js';

const Home = () => {

    // Create reference to store the DOM element containing the animation
    const el = React.useRef(null);

    React.useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ["I'm Developer", "I'm Freelancer"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true,
      });
  
      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    });

  return (
   <Container component={'section'} maxWidth="lg">
    <Box>
      <h1>Kwok Yew Weng</h1>
      <span ref={el} />
    </Box>
   
   </Container> 
  )
}

export default Home
