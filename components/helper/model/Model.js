import React, { useState } from 'react';
// import { showModel, hideModel } from './../../../keyboard-shortcut/keys';

export default function Model(props) {
  const overlay = {
    width: '100vw',
    height: '100vh',
    position: 'absolute',
    backgroundColor: '#00000040',
    display: 'flex',
    alignItems: `${props.x}`,
    justifyContent: `${props.y}`,
    top: '0',
    left: '0',
  };
  const modelContainer = {
    width: `${props.width}`,
    height: 'auto',
    padding: '1rem',
    backgroundColor: '#fff',
  };

  const button = {
    border: 'none',
    outline: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
  };

  const [model, setModel] = useState();
  const hideModel = () => {
    setModel(false);
  };
  const showModel = () => {
    setModel(true);
  };
  return (
    <>
      {!model ? (
        <button onClick={showModel}>{props.btnText}</button>
      ) : (
        <div style={overlay}>
          <div className="model_box" style={modelContainer}>
            <div
              className="model_footer"
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            >
              <button style={button} onClick={hideModel}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.25 0.75L0.75 7.25M0.75 0.75L7.25 7.25"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="model_body">{props.children}</div>
          </div>
        </div>
      )}
    </>
  );
}
