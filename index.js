function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

var startHour = random(7, 10);
var startMinute = random(10, 59);
var endHour = startHour + 8;
var endMinute = startMinute + random(30, 45);

if (endMinute > 59) {
    endHour += 1;
    endMinute -= 60;
}

var container = document.querySelector('.box_freigabe_content');
var baseElement = container.children[0].children[1].children[0].children[0].children[1].children[0].children[0];

baseElement.children[1].children[0].children[0].value = 'Ko';
baseElement.children[1].children[1].children[0].value = startHour.toString() + ':' + startMinute.toString();
baseElement.children[2].children[0].children[0].value = 'Ge';
baseElement.children[2].children[1].children[0].value = endHour.toString() + ':' + endMinute.toString();
baseElement.children[8].children[0].children[0].value = ' ';

var submitButton = baseElement.children[9].children[0].children[4].children[0].children[0];
$(submitButton).click();
