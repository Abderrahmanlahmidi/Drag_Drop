const lists = document.querySelectorAll(".list");
const boxes = document.querySelectorAll(".box");
const data_box = document.querySelectorAll(".data_box");


for (let i = 0; i < lists.length; i++) {

    lists[i].addEventListener("dragstart", function(e){
        let selected = e.target;

        boxes.forEach(element => {
            element.addEventListener("dragover", function(e){
                e.preventDefault();

            });
            element.addEventListener("drop", function(){
                element.appendChild(selected);
                selected = null;
            })

        });

    })
    
}