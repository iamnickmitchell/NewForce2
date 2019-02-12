// const legoCreation = {
//     creator: creatorName,
//     color: creationColor,
//     shape: creationShape,
//     creation: creationName
// }

// Some starter code
document.querySelector(".lego_save").addEventListener("click", () => {
    const creatorName = document.querySelector("#creatorName").value;
    const creationColor = document.querySelector("#creationColor").value;
    const creationShape = document.querySelector("#creationShape").value;
    const creationName = document.querySelector("#creationName").value;

    // Once you have collected all the values, build your data structure
    const legoToSave = {
        creator: creatorName,
        color: creationColor,
        shape: creationShape,
        name: creationName
    }
    createLego(legoToSave).then(() => {
        printLego();
      });
})

const buildSingleLego = singleTaskObject => {
    return `<div>
      <label>
        <input type="checkbox" />
        <span>${singleTaskObject.creator}</span>
        <p>${singleTaskObject.color}</p>
        <p>${singleTaskObject.shape}</p>
        <p>${singleTaskObject.name}</p>
      </label>
    </div>`;
  };

const createLego = taskObject => {
    return fetch("http://localhost:8088/legoCreation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(taskObject)
    });
  };

const printLego = () => {
    document.querySelector("#lego").innerHTML = "";
    getAllLego().then(allTasks => {
      allTasks.forEach(singleTask => {
        document.querySelector("#lego").innerHTML += buildSingleLego(
          singleTask
        );
      });
    });
  };


const getAllLego = () => {
    return fetch("http://localhost:8088/legoCreation").then(legoCreation =>
      legoCreation.json()
    );
  };

printLego();
