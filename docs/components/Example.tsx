import { useState } from "preact/hooks";

export const Example = (props) => {
  let { callbackFunction, codeExample } = props;
  // callbackFunction = eval(callbackFunction);
  const [output, setOutput] = useState(callbackFunction());

  console.log(callbackFunction);
  return (
    <div class="example">
      {/* <pre>
        <code lang="js">{codeExample}</code>
      </pre> */}

      {JSON.stringify(callbackFunction)}

      <output>{output}</output>

      <button
        onClick={() => {
          console.log("boop");
        }}
      >
        Refresh
      </button>
    </div>
  );
};
