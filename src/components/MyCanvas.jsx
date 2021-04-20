import 'normalize.css/normalize.css';

import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/styles';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const useStyles = makeStyles({

});

const thumbsUpSVG = 'M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z';
const SVG_PATH = new Path2D(thumbsUpSVG);
const SCALE = 1;

const draw = (ctx, location) => {
  // ctx.fillStyle = 'red';
  ctx.shadowColor = 'cyan';
  ctx.shadowBlur = 5;
  ctx.save();
  ctx.scale(SCALE, SCALE);
  ctx.translate(location.x / SCALE, location.y / SCALE);
  // ctx.rotate(225 * (Math.PI / 180));
  ctx.fill(SVG_PATH);
  // .restore(): Canvas 2D API restores the most recently saved canvas state
  ctx.restore();
};

function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const MyCanvas = () => {
  const canvasRef = useRef(null);
  const [coordinates, setCoordinates] = useState([]);

  const handleCanvasClick = (event) => {
    const canvasObj = canvasRef.current;
    // Calculate the SVG location. 'target' is the canvas area
    // The coordinate to draw is where they clicked on the screen minus the offset
    const clickX = event.pageX;
    const clickY = event.pageY;
    const currentCoord = { x: clickX - canvasObj.offsetLeft, y: clickY - canvasObj.offsetTop };

    setCoordinates([...coordinates, currentCoord]);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const canvasObj = canvasRef.current;
      handleCanvasClick({
        // eslint-disable-next-line max-len
        pageX: randomIntFromInterval(canvasObj.offsetLeft, canvasObj.offsetWidth + (canvasObj.offsetLeft - 10)),
        // eslint-disable-next-line max-len
        pageY: randomIntFromInterval(canvasObj.offsetTop, canvasObj.offsetHeight + (canvasObj.offsetTop - 10)),
      });
    }, 5000);
    return () => clearTimeout(timer);
  });

  useEffect(() => {
    const canvasObj = canvasRef.current;
    const ctx = canvasObj.getContext('2d');
    ctx.clearRect(0, 0, canvasObj.width, canvasObj.height);

    // draw all coordinates held in state
    // eslint-disable-next-line max-len
    coordinates.forEach((coordinate) => { draw(ctx, coordinate, canvasObj.width, canvasObj.height); });
  });

  // const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  // Used for page width changes
  useEffect(() => {
    function handleResize() {
      const canvasObj = canvasRef.current;

      // eslint-disable-next-line max-len
      if (canvasObj.width !== canvasObj.clientWidth) {
        canvasObj.width = canvasObj.clientWidth;
      }
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // One time only, adjust the canvas size
  useEffect(() => {
    const canvasObj = canvasRef.current;

    if (canvasObj.width !== canvasObj.clientWidth) {
      canvasObj.width = canvasObj.clientWidth;
      canvasObj.height = canvasObj.clientHeight;
    }
  }, []);

  const handleClearCanvas = (event) => {
    setCoordinates([]);
  };

  return (
    <canvas
      className="App-canvas"
      ref={canvasRef}
      style={{ cursor: 'pointer', width: 'inherit', height: 'inherit' }}
      onClick={handleCanvasClick}
      // onMouseMove={handleCanvasClick}
    />
  );
};

export default MyCanvas;
