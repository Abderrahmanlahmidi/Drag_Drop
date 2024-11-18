let lists = document.querySelector(".list");
let searchBar = document.getElementById("searchBar");
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
        <div draggable="true" class="max-w-xs cursor-pointer rounded-lg border-[1px] border-gray-700 dark:border-gray-600 bg-gray-800 dark:bg-gray-800">
          <div class="px-6 py-4">
             <div class="full_name font-semibold text-2xl mb-2 text-blue-400">${element.name}</div>
             <p class="post_title text-white dark:text-gray-200 text-lg">${element.post}</p>
             <p class="text-gray-400 dark:text-gray-300 text-sm">Birthday: <span class="font-medium birthday">${element.birthday}</span></p>
          </div>
         </div>
        `;
    })

    lists.innerHTML = htmlString;
};

searchBar.addEventListener("keyup", (e) => {
    const searchString = e.target.value.toLowerCase();
    const filteredData = profilePersonData.team.filter((item) => {
        return (
            item.name.toLowerCase().includes(searchString) 
        );
    });
    addData(filteredData);
});

loadData();











