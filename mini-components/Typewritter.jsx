/* eslint-disable react/prop-types */
import { useEffect } from 'react';

// eslint-disable-next-line react/prop-types
const TxtType = ({ el, toRotate, period }) => {
  let loopNum = 0;
  let txt = '';
  let isDeleting = false;
  console.log(toRotate);

  const tick = () => {
    // eslint-disable-next-line react/prop-types
    const i = loopNum % toRotate?.length;
    const fullTxt = toRotate[i];

    if (isDeleting) {
      // eslint-disable-next-line react/prop-types
      txt = fullTxt?.substring(0, txt.length - 1);
    } else {
      txt = fullTxt?.substring(0, txt.length + 1);
    }

    el.innerHTML = '<span className="wrap">' + txt + '</span>';

    let delta = 200 - Math.random() * 100;

    if (isDeleting) {
      delta /= 2;
    }

    if (!isDeleting && txt === fullTxt) {
      delta = period;
      isDeleting = true;
    } else if (isDeleting && txt === '') {
      isDeleting = false;
      loopNum++;
      delta = 500;
    }

    setTimeout(() => {
      tick();
    }, delta);
  };
  tick();
//   useEffect(() => {
//     tick();
//   }, []);

  return <span className="wrap"></span>;
};

const Typewriter = ({data}) => {
  useEffect(() => {
    const elements = document.getElementsByClassName('typewrite');

    for (let i = 0; i < elements.length; i++) {
      const toRotate = elements[i].getAttribute('data-type');
      const period = elements[i].getAttribute('data-period');
      console.log(toRotate);
      if (toRotate) {
        TxtType({ el: elements[i], toRotate: JSON.parse(toRotate), period });
      }
    }

    // INJECT CSS
    // const css = document.createElement('style');
    // css.type = 'text/css';
    // css.innerHTML = '.typewrite > .wrap { border-right: 0.08em solid #1b73f4}';
    // document.body.appendChild(css);
  }, []);

  return (
    <div>
      <span className="typewrite" data-type='["Text to type...", "Another text...", "More text..."]' data-period="2000"></span>
    </div>
  );
};

export default Typewriter;