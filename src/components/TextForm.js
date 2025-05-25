import React, { useState } from "react";
export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    console.log("UpperCase Clicked " + text);
    // setText("text is updated")
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted into the UpperCase ", "successfully");
    document.body.style.background = "blue";
    document.body.style.color = "white";
  };
  const handleLoClick = () => {
    console.log("UpperCase Clicked " + text);
    // setText("text is updated")
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted into the LowerCase ", "successfully");
    document.body.style.background = "darkgrey";
    document.body.style.color = "white";
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
    console.log("Onchange was triggered");
  };

  const handleClearClick = () => {
    let newText = " ";
    setText(newText);
    props.showAlert("clear the text  ", "successfully");
    document.body.style.background = "green";
    document.body.style.color = "white";
  };
  const handleSentenceCase = () => {
    let newText = text
      .toLowerCase()
      .replace(/(^\s*\w|[\.\!\?]\s*\w)/g, (c) => c.toUpperCase());
    setText(newText);
    props.showAlert("Converted into the handleSentenceCase ", "successfully");
    document.body.style.background = "red";
    document.body.style.color = "white";
  };
  const handleCapitalizeCase = () => {
    // let w = text.split(" ");
    // let arr = [];
    // for(let i=0;i<w.length;i++){
    //     let ew = w[i];
    //     let tr = ew.charAt(0).toUpperCase()+ew.slice(1).toLowerCase();
    //     arr.push(tr);
    // }
    // setText(arr.join(" "));
    let words = text.split(" ");
    let newText = words
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(" ");
    setText(newText);
    props.showAlert("Converted into the handleCapitalizeCase ", "successfully");
    document.body.style.background = "yellow";
    document.body.style.color = "white";
  };
  const handleTitleCase = () => {
    let words = text.split(" ");
    let arr = [];
    for (let i = 0; i < words.length; i++) {
      let a = words[i];
      let b = a.charAt(0).toUpperCase() + a.slice(1).toLowerCase();
      arr.push(b);
    }
    setText(arr.join(" "));
    props.showAlert("Converted into the handleTitleCase ", "successfully");
    document.body.style.background = "green";
    document.body.style.color = "white";
  };

  const handleAlternativeUpper = () => {
    let words = text.split(" ");
    let updatedWords = words.map((word) => {
      let transformed = "";
      for (let i = 0; i < word.length; i++) {
        // transformed +=
        //   i % 2 === 0
        //     ? word.charAt(i).toUpperCase()
        //     : word.charAt(i).toLowerCase();
        if (i % 2 == 0) {
          transformed += word.charAt(i).toUpperCase();
        } else {
          transformed += word.charAt(i).toLowerCase();
        }
      }
      return transformed;
    });
    setText(updatedWords.join(" "));
    props.showAlert(
      "Converted into the handleAlternativeUpper ",
      "successfully"
    );
    document.body.style.background = "red";
    document.body.style.color = "white";
  };

  const handleCopyText = () => {
    // console.log("text copied");
    // alert("text copied");
    let t = document.getElementById("myBox");
    t.select();
    navigator.clipboard.writeText(t.value);
    props.showAlert("Text is Copied to ClipBoard ", "successfully");
    document.body.style.background = "white";
    document.body.style.color = "black";
  };
  const handleExraSpaces = () => {
    // alert("sfds");
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert(" Remove the Extra Spaces", "successfully");
    document.body.style.background = "black";
    document.body.style.color = "white";
  };

  const handleDownloadText = () => {
    const element = document.createElement("a");
    const file = new Blob([text], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "textform-output.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
    props.showAlert("Text file downloaded", "successfully");
    document.body.style.background = "#0d6efd"; // Optional background change
    document.body.style.color = "white";
  };

  const [tex, setTex] = useState("Copy Text");
  return (
    <>
      <div>
        <div className="mb-3">
          <h1>
            {props.heading} {props.mode === "dark" ? "light" : "dark"}
          </h1>
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "light" : "dark"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="switchCheckDefault"
              onClick={props.toggleMode}
            />
            <label className="form-check-label" htmlFor="switchCheckDefault">
              {props.message}
            </label>
          </div>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="10"
          ></textarea>
          <button
            className="btn btn-outline-primary mx-1 "
            onClick={handleUpClick}
          >
            UpperCase
          </button>
          <button
            className="btn btn-outline-secondary mx-1 "
            onClick={handleLoClick}
          >
            LowerCase
          </button>
          <button
            className="btn btn-outline-success mx-1 "
            onClick={handleClearClick}
          >
            clear Text
          </button>

          <button
            className="btn btn-outline-danger mx-1 "
            onClick={handleSentenceCase}
          >
            {" "}
            Sentence Case
          </button>
          <button
            className="btn btn-outline-warning mx-1 "
            onClick={handleCapitalizeCase}
          >
            Capitalized Text
          </button>
          <button
            className="btn btn-outline-info mx-1 "
            onClick={handleTitleCase}
          >
            Title Text
          </button>
          <button
            className="btn btn-outline-light mx-3 "
            onClick={handleCopyText}
          >
            {tex}
          </button>
          <button
            className="btn btn-outline-danger mx-3 "
            onClick={handleExraSpaces}
          >
            Remove Extra Spaces
          </button>
          <button
            className="btn btn-outline-primary mt-2"
            onClick={handleDownloadText}
          >
            Download Text
          </button>

          <button
            className="btn btn-outline-danger dn-5"
            onClick={handleAlternativeUpper}
          >
            Alternative upper letters
          </button>
        </div>
      </div>
      <div className="container my-3">
        <h1>add the summary</h1>
        <p>
          {text.split(" ").length - 1} words and {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter the text at textForm and then u will see the preview here"}
        </p>
      </div>
    </>
  );
}
