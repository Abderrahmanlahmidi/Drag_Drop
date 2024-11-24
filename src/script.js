let lists = document.querySelector(".list");
let searchBar = document.getElementById("searchBar");
let box_1 = document.querySelector(".box_1");
let box_2 = document.querySelector(".box_2");
let box_3 = document.querySelector(".box_3");
let box_4 = document.querySelector(".box_4");
let profilePersonData = [];


const loadData = async () => {
    try {
        const res = await fetch("./data.json");
        profilePersonData = await res.json(); 
        addData(profilePersonData.team);
        
    } catch (err) {
        console.error("Error loading data:", err);
    }
};


const addData = (teamData) => {
    const htmlString = teamData.map((element) => {
        return `
        <div draggable="true" class="draggable max-w-xs cursor-all-scroll rounded-lg border-[1px] border-gray-700 dark:border-gray-600 bg-gray-800 dark:bg-gray-800" 
             data-post="${element.post}">
          <div class="px-6 py-4">
             <div class="full_name font-semibold text-2xl mb-2 text-blue-400">${element.name}</div>
             <p class="post_title text-white dark:text-gray-200 text-lg">${element.post}</p>
             <p class="text-gray-400 dark:text-gray-300 text-sm">Birthday: <span class="font-medium birthday">${element.birthday}</span></p>
          </div>
        </div>
        `;
    }).join(' ');

    lists.innerHTML = htmlString;
    enableDragAndDrop();
};



searchBar.addEventListener("keyup", (e) => {
    const searchString = e.target.value.toLowerCase();
    const filteredData = profilePersonData.team.filter((item) => {
        return (
            item.name.toLowerCase().includes(searchString) ||
            item.post.toLowerCase().includes(searchString) ||
            item.birthday.toLowerCase().includes(searchString)
        );
    });
    addData(filteredData);
});

loadData();




function dragDrop(){
    
}

