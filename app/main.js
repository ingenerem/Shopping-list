const placeholder = document.querySelector(".placeholder");
const textBox = document.querySelector("input");
const btn = document.querySelector(".button");
const gList = document.querySelector(".mylist");
const msg = document.querySelector(".errmsg");

btn.addEventListener("click", ()=>{
  if(textBox.value !=null && textBox.value.trim() !==""){
    if(gList.contains(placeholder))
        gList.removeChild(placeholder);
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    const deletebtn = document.createElement("button");
    deletebtn.className = "del-button"
    deletebtn.textContent = "Delete"

    deletebtn.addEventListener("click", () => {
    gList.removeChild(li); 
   if (gList.children.length === 0) {
  gList.appendChild(placeholder);
}
});
    
    checkbox.type = "checkbox";
    checkbox.className = "check"; 
    li.appendChild(checkbox);
 
    const label = document.createElement("span");
    label.textContent = textBox.value.trim();
    label.className = "list-text"; 
    li.appendChild(label);
    li.appendChild(deletebtn)

    gList.append(li);
    textBox.value="";
}

else{
        msg.textContent = "Please enter a non empty item";
        msg.classList.add("show");
         setTimeout(() => {
    msg.classList.remove("show");
    // Optional: clear text content after fade out finishes
    setTimeout(() => {
      msg.textContent = "";
    }, 1000); // matches the transition duration
  }, 6000);
}
});