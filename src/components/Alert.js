import React from "react";

function Alert(props) {
  const capitalized = (word) => {
    const letter = word.toLowerCase();
    return letter.charAt(0).toUpperCase() + letter.slice(1).toLowerCase();
  };
  return (
    props.alert && (
      <div className="alert alert-success" role="alert">
        <strong>{capitalized(props.alert.type)} : </strong>
        {props.alert.msg}
      </div>
    )
  );
}
export default Alert;
