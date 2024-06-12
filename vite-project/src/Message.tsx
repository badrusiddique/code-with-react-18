import * as React from "react";

function Message() {
  const [showAlert, setShowAlert] = React.useState(false);

  const handleClick = (value: boolean) => {
    setShowAlert(value);
  };

  return (
    <div>
      <button className="btn btn-primary m-2" onClick={() => handleClick(true)}>
        Click Me
      </button>
      {showAlert && (
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          <strong>Holy guacamole!</strong> You should check in on some of those
          fields below.
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() => handleClick(false)}
          ></button>
        </div>
      )}
    </div>
  );
}

export default Message;
