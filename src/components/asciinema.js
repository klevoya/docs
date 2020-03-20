import React, { useEffect } from 'react'

const useScript = ({ ref, src, id, autoPlay }) => {
  useEffect(() => {
    console.log(ref.current)
    if(!ref.current) return
    const script = document.createElement('script');

    script.src = src;
    script.id = id;
    script.dataset.autoplay = autoPlay;
    script.dataset.size = 'small';
    script.dataset.rows = 16;
    script.async = true;

    ref.current.appendChild(script);

    return () => {
      ref.current && ref.current.removeChild(script);
    }
  }, [ref]);
};


const Asciinema = ({ id, src, autoPlay }) => {
  const ref = React.useRef()
  useScript({ ref: ref, id, src, autoPlay });

  return <div key={id} ref={ref}/>;
}

export default Asciinema