let inputs = document.getElementById("inp");
let text = document.querySelector(".text"); 
function Add()
{
   if(inputs.value=="")
    {
        alert("Please Enter the Task.....");
    } 
    else
    {
        let newEle = document.createElement("ul");
        newEle.innerHTML =`${inputs.value}<i class="fa-solid fa-trash" style="color: #ff3d3d;" aria-hidden="true"></i>`;
        text.appendChild(newEle);
        inputs.value = "";
        newEle.querySelector("i").addEventListener("click",remove);
        function remove()
        {
            newEle.remove();
        }
    }
}