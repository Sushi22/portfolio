import React from 'react';

const flipContext = React.createContext({
    flip: false,
    setFlip: () => {}
});

export default flipContext;