import React from "react";

const controllers = props => {
  const { locked, closed, toggleLocked, toggleClosed } = props;

  return (
    <div className="controllers panel" data-testid="controllers">
      <button
        data-testid="locks"
        disabled={!closed}
        onClick={toggleLocked}
        className="toggle-btn"
      >
        {locked ? "Unlock Gate" : "Lock Gate"}
      </button>
      <button
        data-testid="openSezMe"
        disabled={locked}
        onClick={toggleClosed}
        className="toggle-btn"
      >
        {closed ? "Open Gate" : "Close Gate"}
      </button>
    </div>
  );
};

export default controllers;