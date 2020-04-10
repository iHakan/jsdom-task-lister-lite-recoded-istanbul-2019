document.addEventListener("DOMContentLoaded", () => {
  // your code 
  let ul = document.getElementById("tasks");
  document.addEventListener("submit", function(e){
    e.preventDefault();
    
    //li yi olustur
    let node = document.createElement("li");
    
    //Input a girilen değeri declare et 
    let messageText = document.getElementById("new-task-description").value;
    
    //Her listenin yanına kapatma butonu oluştur
    let closeButton = document.createElement("button");
    closeButton.innerHTML = "X";
    
    //message ı li nin içine koy
    node.innerHTML = `${messageText}`;
    node.setAttribute("class","ta");
    
    //butonu listenin içine koy
    node.appendChild(closeButton);

    
    //li i ul nin içine koy
    document.getElementById("tasks").appendChild(node);
     
   });
   
   ul.addEventListener("click", function(e){
     if(e.target && e.target.matches("node.ta")){
       e.target.id = "del";
       let deleteItem = document.getElementById("del");
       ul.removeChild(deleteItem);  
     }
   })
   
});
