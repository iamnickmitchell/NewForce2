// vanilla.innerHTML = "<p></p>"
// jMagic.html()

// $("#button").on("keyup", () => {
//     console.log("you clicked.")
// }
// )



// Add the jQuery CDN to your HTML file


// ------- ONE ------//
// Copy and paste the following HTML into your index.html file:
// <article id="blog-article"></article>

// Use jQuery to select your article element by its id

// $("#blog-article")

// Use the .html() method to give your article Element the following HTML contents:
// - An h3  element with a made-up blog title
// - A p element with some lorem ipsum text

$("#blog-article").html("<h3>blog, blog, blog</h3><p>Help me, Obi-Wan Kenobi. You're my only hope. What's this? What is what?!? He asked you a question... What is that? Help me, Obi-Wan Kenobi. You're my only hope. Help me, Obi-Wan Kenobi. You're my only hope. Oh, he says it's nothing, sir. Merely a malfunction. Old data. Pay it no mind. Who is she? She's beautiful. I'm afraid I'm not quite sure, sir. Help me, Obi-Wan Kenobi... I think she was a passenger on our last voyage. A person of some importance, sir -- I believe. Our captain was attached to... Is there more to this recording? Behave yourself, Artoo. You're going to get us in trouble. It's all right, you can trust him. He's our new master.</p>")

// jNewElement.addClass("jMagic");
// console.log(jNewElement)

// newElement.id = "new-id";
// console.log(newElement);

// jNewElement.attr("id", "jquery-thing")

// $("#jquery-container").append(jNewElement);
// $("#save-btn").click(() => {
//  const inputValue = $("#text-input").val();
//  console.log(inputValue)
// })

// ------ TWO ------//
// Copy and paste the following code into your HTML file:
// <input type="text" id="name-input">
// <button id="submit-button"></button>
// <div id="outout"></div>

// Add a click event to the button. When the user clicks on it, use the .val() method to get the value of the #name-input element

// $("#submit-button").click(() => {
//  const inputValue = $("#name-input").val();
//  console.log(inputValue)
// })

// Once you've captured the user's input, use the .text() property to add some text to the #output div

$("#submit-button").click(() => {
    const inputValue = $("#name-input").val();
    console.log(inputValue)
    $("#outout").text(inputValue);
   })
