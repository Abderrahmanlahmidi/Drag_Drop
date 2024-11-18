let lists = document.querySelectorAll(".list");
let boxes = document.querySelectorAll(".box");
let full_name = document.querySelectorAll(".full_name");
let post_title = document.querySelectorAll(".post_title");
let birthday = document.querySelectorAll(".birthday");

const fetchData = async () => {
    const jsonFileUrl = "./data.json";

    try {
        const response = await fetch(jsonFileUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();


        data.team.forEach((member, index) => {
            if (full_name[index]) full_name[index].textContent = member.name;
            if (post_title[index]) post_title[index].textContent = member.post;
            if (birthday[index]) birthday[index].textContent = member.birthday;
        });

    } catch (error) {
        console.error("Error fetching data:", error.message);
    }
};

fetchData();

lists.forEach(list => {
    
    list.addEventListener("dragstart", function (e) {
        const selected = e.target;

        boxes.forEach(box => {
            box.addEventListener("dragover", function (e) {
                e.preventDefault();
            });

            box.addEventListener("drop", function () {
                box.appendChild(selected);
            });
        });
    });
});
