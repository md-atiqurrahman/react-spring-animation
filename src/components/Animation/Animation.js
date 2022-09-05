import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import { useState } from 'react';

const Animation = () => {
    const [flip, set] = useState(false);

    const { number } = useSpring({
        reset: true,
        reverse: flip,
        from: { number: 0 },
        number: 10,
        delay: 1000,
        config: config.molasses,
        onRest: () => set(!flip),
    })
    return (
        <div>
            <animated.div style={{fontSize: '40px', fontWeight: 'bold'}}>{number.to(n => n.toFixed(2))}</animated.div>
        </div>
    );
};

export default Animation;