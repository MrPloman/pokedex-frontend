import React from "react";
import "./ModalComponent.scss";

export const ModalComponent = ({config}) => {
  return (
    <>
      <div className="modal">
        <div className="modal-box">
          <div className="modal-box-title">
            <h3>{config.title}</h3>
          </div>
          <div className="modal-box-description">
            <p>{config.message}</p>
          </div>
          <div className="modal-box-actions">
            {config.actions.map((a) => (
              <button
                key={a.label}
                onClick={() => {
                  a.action();
                }}
              >
                {a.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
