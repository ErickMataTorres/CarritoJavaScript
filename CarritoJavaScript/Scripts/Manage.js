
const API_URL = "https://localhost:44322";

//const itemsPerPage = 1;
//const tablePaginator = document.getElementById("tablePaginator");
//const elements = tablePaginator.querySelectorAll("li");

//let currentPage = 1;

window.onload = LoadPage();

function LoadPage() {
    LoadTable();
    SearchInTable();
    //DisplayElements();
    //UpdatePagination();

}

function OpenModal(action) {
    let myModalTitle = document.getElementById("myModalTitle");
    myModalTitle.innerHTML = action;
}



//function DisplayElements() {
//    elements.forEach((element, index) => {
//        const start = (currentPage - 1) * itemsPerPage;
//        const end = currentPage * itemsPerPage;

//        if (index >= start && index < end) {
//            element.style.display = "page-item";
//        } else {
//            element.style.display = "none";
//        }
//    });
//}

//function UpdatePagination() {
//    const pageCount = Math.ceil(elements.length / itemsPerPage);
//    tablePaginator.innerHTML = "";

//    for (let i = 1; i <= pageCount; i++) {
//        const li = document.createElement("li");
//        li.classList.add("page-item");
//        const a = document.createElement("a");
//        a.classList.add("page-link");
//        a.innerText = i;
//        a.href = "#";
//        li.appendChild(a);

//        a.addEventListener("click", function () {
//            currentPage = i;
//            DisplayElements();
//            UpdatePagination();
//        });

//        if (i === currentPage) {
//            li.classList.add("active");
//        }

//        tablePaginator.appendChild(li);
//    }

//}




async function LoadTable() {
    try {
        const response = await fetch(API_URL + "/Roles/RolesList");
        if (!response.ok) {
            throw new Error("No se pudo completar la solicitud");
        }
        const data = await response.json();
        let tableRoles = document.getElementById("tableRoles");
        let counter = 0;
        data.map(function () {
            tableRoles.innerHTML +=
                `
                            <tr>
                                <td>${data[counter].Id}</td>
                                <td>${data[counter].Name}</td>
                                <td>${data[counter].Administrator}</td>
                                <td>
                                    <button class='btn btn-warning' data-bs-toggle='modal' data-bs-target='#myModal' onclick='OpenModal("Modify");'>Modify</button>
                                    <button class='btn btn-danger'>Delete</button>
                                    </td>
                            </tr>
                        `;
            counter++;
        });
    } catch (error) {
        console.error("Error: ", error);
    }
}

function SearchInTable() {
    const searchInput = document.getElementById("inputSearch");
    const tableBody = document.querySelector("table tbody");

    searchInput.addEventListener("input", function () {
        const textSearch = searchInput.value.toLowerCase();
        const rows = tableBody.querySelectorAll("tr");

        rows.forEach((row) => {
            const containRow = row.textContent.toLowerCase();
            if (containRow.includes(textSearch)) {
                row.style.display = "table-row";
            } else {
                row.style.display = "none";
            }
        });
    });
}