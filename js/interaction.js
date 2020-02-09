function open_a_group(item) {

    var group = item.id

    var groups = document.getElementsByClassName("workout_button");
    for (var i=0; i<groups.length; i++) {
        groups[i].classList.remove("lefted");
    }
    var myobj = document.getElementsByClassName("workout_button")[group];
    myobj.classList.add("lefted");
}

function open_a_workout(item) {
    
    var id = item.name

    var group_container = document.getElementById("workout-list-page")
    var workout_container = document.getElementById(id)
    group_container.classList.add("lefted")
    document.body.classList.add("lightened")
    workout_container.classList.add("centered")
}

function complete_a_set(item) {
    var setobject = item

    if (setobject.classList.contains("selected")) {
        setobject.classList.remove("selected")
        debug("Took back set " + item.id)
    } else {
        setobject.classList.add("selected")
        debug("Completed set " + item.id)
    }

    save_state()
}

function show_an_image(item) {
    var exo = item

    if (exo.classList.contains("expanded")) {
        exo.classList.remove("expanded")
    } else {
        exo.classList.add("expanded")
    }
}