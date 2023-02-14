import React, { useRef, useState } from 'react';

export default function Playground(props) {
  const elemRef = useRef(null);
  const dragProps = useRef();
  const contRef = useRef(null);
  const [boundaryStatus, setBoundaryStatus] = useState(false);

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
    const { left, top } = elemRef.current.getBoundingClientRect();
    const boundary = {
      left: contRef.current.getBoundingClientRect().left,
      right: contRef.current.getBoundingClientRect().right - contRef.current.getBoundingClientRect().left - 150,
      top: contRef.current.getBoundingClientRect().top,
      bottom: contRef.current.getBoundingClientRect().bottom - contRef.current.getBoundingClientRect().top - 80
    };
    let xTranslate;
    const xMovement = clientX - dragProps.current.dragStartX + dragProps.current.dragStartLeft - contRef.current.getBoundingClientRect().left;
    let yTranslate;
    const yMovement = dragProps.current.dragStartTop + clientY - dragProps.current.dragStartY - contRef.current.getBoundingClientRect().top;
    if (boundaryStatus) {
      if (left + xMovement < boundary.left) {
        xTranslate = left - boundary.left;
      } else if (xMovement >= boundary.right) {
        xTranslate = boundary.right;
      } else {
        xTranslate = xMovement;
      }
      if (top + yMovement < boundary.top) {
        yTranslate = top - boundary.top;
      } else if (yMovement > boundary.bottom) {
        yTranslate = boundary.bottom;
      } else {
        yTranslate = yMovement;
      }
    } else {
      xTranslate = xMovement;
      yTranslate = yMovement;
    }
    elemRef.current.style.transform = `translate(${xTranslate}px,
     ${yTranslate}px)`;
  };

  const stopDragging = () => {
    window.removeEventListener('mousemove', startDragging, false);
    window.removeEventListener('mouseup', stopDragging, false);
  };

  const resetHandle = () => {
    elemRef.current.style.transform = `translate(${0}px,
     ${0}px)`;
  };

  const boundaryHandle = () => {
    if (boundaryStatus) {
      setBoundaryStatus(false);
    } else {
      setBoundaryStatus(true);
    }
  };

  return (
    <div className='container'>
      <div className='row flex-wrap'>
        <div className='column-full'>
          <h1 style={{ color: 'white' }}>DRAGGABLE DIV</h1>
        </div>
        <div className='column-full' style={{ textAlign: 'end', marginRight: '5%', marginBottom: '20px' }}>
          <div style={{ marginBottom: '10px' }}>
            <input type="checkbox" name="boundary" id="boundary" onChange={boundaryHandle} />
            <label htmlFor="boundary" style={{ color: 'white' }}> Boundary</label>
          </div>
          <div>
            <input type="reset" value="Reset" onClick={resetHandle} style={{ width: '65px', height: '30px' }} />
          </div>
        </div>
        <div className='column-full'>
          <div className='pg-moving-div-container' ref={contRef}>
            <div className='pg-moving-div-box text-center' onMouseDown={initialiseDrag} ref={elemRef} />
          </div>
        </div>
      </div>
    </div>
  );
}
