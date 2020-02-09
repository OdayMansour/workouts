function create_list(config) {
    debug("Creating list")

    var i_workout = 0
    config.workouts.forEach(workout => {
        create_workout(workout, i_workout)
        i_workout++
    });

    load_state()
}

function create_workout(workout, i_workout) {
    var id = i_workout.toString()
    debug("Creating workout " + id)

    create_workout_html(workout, i_workout)

    var i_flavor = 0
    workout.flavors.forEach(flavor => {
        create_workout_flavors(flavor, i_workout, i_flavor)
        i_flavor++
    });
}

function create_workout_html(workout, i_workout) {

    // Find templates we need
    var t_workout = document.querySelector('#t_workout')
    var t_flavor = document.querySelector('#t_flavor')

    // Create workout item and fill in name and ID
    var t_workout_applied = t_workout.content.cloneNode(true)
    var flavors = t_workout_applied.children[0].children.namedItem('flavors')
    var button = t_workout_applied.children[0].children.namedItem('X')
    button.innerText = workout["name"]
    button.id = i_workout

    // Create flavor items
    var t_flavor_applied_1 = t_flavor.content.cloneNode(true)
    t_flavor_applied_1.children[0].className = "flavor_0"
    t_flavor_applied_1.children[0].name = i_workout + ",0"
    t_flavor_applied_1.children[0].innerText = workout["flavors"][0]["name"]

    var t_flavor_applied_2 = t_flavor.content.cloneNode(true)
    t_flavor_applied_2.children[0].className = "flavor_1"
    t_flavor_applied_2.children[0].name = i_workout + ",1"
    t_flavor_applied_2.children[0].innerText = workout["flavors"][1]["name"]

    // Add flavors to the workout
    flavors.appendChild(t_flavor_applied_1)
    flavors.appendChild(t_flavor_applied_2)

    // Add workout to the list
    var workoutlist = document.querySelector('#workout-list-page')
    workoutlist.appendChild(t_workout_applied)

    debug("Creating html for workout " + i_workout)
}

function create_workout_flavors(flavor, i_workout, i_flavor) {
    var id = i_workout.toString() + "," +  i_flavor.toString()
    debug("Creating workout flavor " + id)

    create_flavor_page(flavor, i_workout, i_flavor)

    var i_exercice = 0
    flavor.exercices.forEach(exercice => {
        create_flavor_exercices(exercice, i_workout, i_flavor, i_exercice)
        i_exercice++
    });
}

function create_flavor_page(flavor, i_workout, i_flavor) {
    var id = i_workout.toString() + "," +  i_flavor.toString()
    debug("Creating page for flavor " + id)

    // Find template we need
    var t_workout_page = document.querySelector('#t_workout-page')

    // Create page from template
    var t_workout_page_applied = t_workout_page.content.cloneNode(true)
    t_workout_page_applied.children[0].id = id
    var title = t_workout_page_applied.children[0].children.namedItem('workout-title')
    title.innerText = config["workouts"][i_workout]["name"] + ", " + flavor["name"]

    document.body.appendChild(t_workout_page_applied)
}

function create_flavor_exercices(exercice, i_workout, i_flavor, i_exercice) {
    var id = i_workout.toString() + "," + i_flavor.toString() + "," + i_exercice.toString()
    debug("Creating flavor exercices " + id)
    
    create_exercice_html(exercice, i_workout, i_flavor, i_exercice)

    var i_set = 0
    exercice.sets.forEach(set => {
        create_exercice_sets(exercice, i_workout, i_flavor, i_exercice, i_set)
        i_set++
    });
}

function create_exercice_html(exercice, i_workout, i_flavor, i_exercice) {
    var id = i_workout.toString() + "," + i_flavor.toString() + "," + i_exercice.toString()
    debug("Creating html for exercice " + id)

    var parent_id = i_workout.toString() + "," + i_flavor.toString()

    // Find template we need
    var t_exercice = document.querySelector('#t_exercice')

    // Create exercice
    var t_exercice_applied = t_exercice.content.cloneNode(true)
    t_exercice_applied.children[0].id = id
    t_exercice_applied.children[0].children.namedItem('exercice-name').innerText = exercice["name"]

    document.getElementById(parent_id).appendChild(t_exercice_applied)
}

function create_exercice_sets(exercice, i_workout, i_flavor, i_exercice, i_set) {
    var id = i_workout.toString() + "," + i_flavor.toString() + "," + i_exercice.toString() + "," + i_set.toString()
    debug("Creating exercice set " + id)

    var parent_id = i_workout.toString() + "," + i_flavor.toString() + "," + i_exercice.toString()

    // Find template we need
    var t_set = document.querySelector('#t_set')

    // Create exercice
    var t_set_appled = t_set.content.cloneNode(true)
    t_set_appled.children[0].id = id
    t_set_appled.children[0].innerText = exercice["sets"][i_set]["q"]

    document.getElementById(parent_id).children.namedItem('sets').appendChild(t_set_appled)
}

function createCookie(key, value) {
    var cookie = escape(key) + "=" + escape(value) + ";max-age=31536000"
    document.cookie = cookie
}

function save_state() {
    document.cookie = ""
    
    var sets = document.getElementsByClassName('set')
    var state = '0'
    for (var i=0; i<sets.length; i++) {
        if ( sets[i].classList.contains('selected') ) {
            state = '1'
        } else {
            state = '0'
        }
        createCookie(sets[i].id, state)
    }

    var expiration_date = new Date()
    expiration_date.setFullYear(expiration_date.getFullYear() + 1)
    var expiry = 'expires=' + expiration_date.toUTCString()
    document.cookie = expiry;

    var statement = 'path=/;domain=' + window.location.hostname
    document.cookie = statement
}

function load_state() {
    var ids_raw = document.cookie.split(';')

    if ( ids_raw.length == 1) {
        return
    }

    ids_raw.forEach( id_raw => {
        id = unescape(id_raw.trim().split('=')[0])
        state = unescape(id_raw.trim().split('=')[1])
        if (state == '1') {
            console.log(id)
            document.getElementById(id).classList.add('selected')
        }
    })
}
