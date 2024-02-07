

function addTask() {
    var inputTask = document.getElementById('inputTask');
    var listTasks = document.getElementById('listTasks');


    if (inputTask.value.trim() !== "") {
        var li = document.createElement('li');
        li.textContent = inputTask.value;
        listTasks.appendChild(li);
        inputTask.value = '';
        //Creo il button per cancellare

        var deleteButton = document.createElement('button');
        /* deleteButton.classList.add('cestino'); */
        deleteButton.setAttribute('id', 'cestino');

        var iconPhoto = document.createElement('img');
        iconPhoto.setAttribute('id', 'img1');
        iconPhoto.src = "https://www.gstatic.com/images/icons/material/system/2x/delete_black_48dp.png";

        deleteButton.appendChild(iconPhoto);
        deleteButton.addEventListener("click", function() {
            this.parentNode.remove();
        });
        li.appendChild(deleteButton);

        li.addEventListener('click', function(e) {
            e.preventDefault();
            // this.parentNode.removeChild(this); 
            if (!this.classList.contains("barrato")) {
                this.classList.add("barrato");
            } else {
                this.classList.remove("barrato");
            }
        })
    } else {
        alert('inserisci un task valido');
    }
    console.log(li);
       
}


