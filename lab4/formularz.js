/*focus event*/
document.querySelector('input[type="email"]').addEventListener("focus",
    (event) => {
        event.target.style.backgroundColor = "gray";
    }
);

/*po wybraniu innego miejsca na ktorym byl focus ustawiony*/
document.querySelector('input[type="email"]').addEventListener('blur',
    (event) => {
        event.target.style.backgroundColor = '';
    }
);

var count = 0;
var textAreaWheel = document.createElement("input");
textAreaWheel.setAttribute('class', 'countWheel');
textAreaWheel.setAttribute('type', 'text');
textAreaWheel.style.setProperty('text-align', 'center');
textAreaWheel.style.setProperty('background-color', 'beige');
textAreaWheel.style.setProperty('border', 'none');
document.querySelector(".mainContainer").appendChild(textAreaWheel);

document.addEventListener("wheel",
    () => {
        count++;
        document.querySelector(".countWheel").value = 'obroty: ' + count;
    }
);