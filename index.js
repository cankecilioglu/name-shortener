// feyyaz_numan_cavlak --> snake case
// feyyaz-numan-cavlak --> kebab case
// feyyazNumanCavlak --> camel case
// FeyyazNumanCavlak --> pascal case

const expected_length = 5
const fullname = "Feyyaz Numan Cavlak"

const fullname_length = fullname.length

const split_fullname = (element) => {
    return element.split(" ")
}

const detailed_names = (arr) => arr.map((el) => {
    return {name: el, name_length: el.length}
})

const should_continue = (arr) => {
    return arr.join(" ").length > expected_length
}

if (fullname_length > expected_length) {
    let splitted = split_fullname(fullname)
    let detailed = detailed_names(splitted)
    // console.log(splitted)
    // console.log(detailed)
    for (let i = 0; i < detailed.length; i++) {
        if (!should_continue(splitted)) {
            console.log(splitted.join(" "))
            break
        }
        if (i == splitted.length - 1) {
            console.log(`${splitted[i].slice(0, expected_length)}...`)
            break
        }
        if (splitted[i].length > 3) {
            const new_word = `${splitted[i].charAt(0)}.`
            splitted[i] = new_word
        }
    }
} else {
    console.log(fullname)
}