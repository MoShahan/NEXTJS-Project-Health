import React, { useEffect, useState } from "react";

// var totalFields: Array<any> = [];

const Test = () => {
  const [numberOfExtraFields, setNumberOfExtraFields] = useState<number>(0);
  // change top of add another button
  // change height of modal container
  // difference in top of each hreading and body == 99
  // heading - 540
  // body - 591
  // delete - 599
  const [totalFields, setTotalFields] = useState<Array<any>>([])

  useEffect(() => {
    var tempTotalFields = [];
    // settotalFields([])
    for (let i = 1; i < numberOfExtraFields + 1; i++) {
      tempTotalFields.push(
        <div style={{ position: "absolute" }}>
          <h6
            style={{
              top: 40 + i * 60,
              background: "red",
              position: "absolute",
            }}
          >
            Project Name
          </h6>
          <input
            style={{
              width: 300,
              top: 40 + i * 60,
              background: "blue",
              position: "absolute",
            }}
            type="text"
            placeholder="Enter..."
          />
          <h6
            style={{
              top: 40 + i * 60,
              background: "green",
              position: "absolute",
            }}
          >
            Utilization
          </h6>
          <input
            style={{
              width: 200,
              top: 40 + i * 60,
              background: "yellow",
              position: "absolute",
            }}
            type="text"
            placeholder="0"
          />
          <button
            style={{ position: "absolute", top: 40 + i * 60 }}
            onClick={handleDelete}
          >
            DELETE
          </button>
          <hr />
        </div>
      );
    }
    // console.log(totalFields);
    // console.log(numberOfExtraFields);
    setTotalFields(tempTotalFields)
  }, [numberOfExtraFields]);

  const handleAdd = () => {
    setNumberOfExtraFields((prev) => prev + 1);
  };

  const handleDelete = () => {
    // console.log("Handle Delete is called");
    if (numberOfExtraFields > 0) {
      setNumberOfExtraFields((prev) => prev - 1);
      // console.log("IF === ", numberOfExtraFields);
    }
  };

  return (
    <div>
      <button onClick={handleAdd}>ADD ANOTHER</button>
      {totalFields.map((field: any) => field)}
    </div>
  );
};

export default Test;
