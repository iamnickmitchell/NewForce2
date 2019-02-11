//   1. In the event listener, use the value that the user typed in to build an object representing a coffee drink
//   2. The object should have the following properties: name (aka what the user typed in), barrista (a string of your name), and coffee shop location (make something up)
//   3. POST the object to the database

document.querySelector("#submit-btn").addEventListener("click", () => {
  const input1 = document.querySelector("#inputBox1").value;
  const input2 = "Nick";
  const input3 = "Huntington";
  console.log(input1, input2, input3);

  const inputData = {
    name: input1,
    barrista: input2,
    shopLocation: input3
  };

  createDrink(inputData).then(() => {
    printDrinks();
  });
});

const buildSingleDrink = singleTaskObject => {
  return `<div>
    <label>
      <input type="checkbox" />
      <span>${singleTaskObject.name}</span>
      <p>${singleTaskObject.barrista}</p>
      <p>${singleTaskObject.shopLocation}</p>
    </label>
  </div>`;
};

const printDrinks = () => {
  document.querySelector("#drinks").innerHTML = "";
  getAllDrinks().then(allTasks => {
    allTasks.forEach(singleTask => {
      document.querySelector("#drinks").innerHTML += buildSingleDrink(
        singleTask
      );
    });
  });
};

const createDrink = taskObject => {
  return fetch("http://localhost:8088/coffeeDrinks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(taskObject)
  });
};

const getAllDrinks = () => {
  return fetch("http://localhost:8088/coffeeDrinks").then(tasks =>
    tasks.json()
  );
};

printDrinks();
