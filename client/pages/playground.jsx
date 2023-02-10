import React, { useRef } from 'react';

export default function Playground(props) {
  const elemRef = useRef(null);
  const dragProps = useRef();

  function initialiseDrag(event) {
    const { target, clientX, clientY } = event;
    const { offsetTop, offsetLeft } = target;
    const { left, top } = elemRef.current.getBoundingClientRect();
    dragProps.current = {
      dragStartLeft: left - offsetLeft,
      dragStartTop: top - offsetTop,
      dragStartX: clientX,
      dragStartY: clientY
    };

    window.addEventListener('mousemove', startDragging, false);
    window.addEventListener('mouseup', stopDragging, false);
  }

  const startDragging = ({ clientX, clientY }) => {
    elemRef.current.style.transform = `translate(${dragProps.current.dragStartLeft + clientX - dragProps.current.dragStartX - 132.5}px, ${dragProps.current.dragStartTop + clientY - dragProps.current.dragStartY - 95}px)`;
  };

  const stopDragging = () => {
    window.removeEventListener('mousemove', startDragging, false);
    window.removeEventListener('mouseup', stopDragging, false);
  };

  return (
    <div className='container'>
      <div className='row flex-wrap'>
        <div className='column-full'>
          <h1 style={{ color: 'white' }}>Movable DIV</h1>
        </div>
        <div className='column-full'>
          <div className='pg-moving-div-container'>
            <div className='pg-moving-div-box text-center' onMouseDown={initialiseDrag} ref={elemRef} >
              <h5 className='pg-moving-text'>click here</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
