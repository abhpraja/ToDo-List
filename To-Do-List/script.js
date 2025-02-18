// let isDarkMode = false;

// const toggleTheme = () => {
//  isDarkMode = !isDarkMode;

//  document.body.className = isDarkMode ? "dark" : "light";
//  document.button.className = isDarkMode ? "btn-dark" : "btn-light"
// }

// document.querySelector(".toggle-btn").addEventListener("click", toggleTheme);


const inputBox = document.getElementById("input-box");
const listContainer = document.querySelector(".list-container");

function addTask() {
    // Check if input is empty

    if (inputBox.value === "") {
        alert("You must write something!");
    } else {
        // Create a new list item and add the input value
        const li = document.createElement("li");
        li.className = "";
        li.textContent = inputBox.value;
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);

        // Append to the list
        listContainer.appendChild(li);

        // Clear the input box after adding
        inputBox.value = "";
    }

}

listContainer.addEventListener("click", function(e) {
    e.preventDefault;
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false)
