let persons = new Map()

function startProgram(input) {
    input = prompt("Enter input")
    switch (input) {
        case 'insert':
            insertUser();
            break;
        case 'remove':
            deleteUser();
            break;
        case 'search':
            findUser();
            break;
        default:
            break
    }
}
startProgram();

function insertUser() {
    let insert = prompt('Enter ur username')
    persons.set('name', insert)
    persons.forEach((item,key)=>{
        console.log(`${key} : ${item}`);
    })
}

function deleteUser() {
    let dUser = prompt('Enter ur username')
    let isExists = persons.get('name');
    if(isExists == dUser) {
        console.log("Remove status :",persons.delete('name'))
    } else {
        console.log("This user is not exists to remove.")
    }
}

function findUser() {
    let fUser = prompt('Enter ur username')
    let getUser = persons.get('name')
    for (let i = 0; i < persons.size; i++) {
        if(getUser === fUser) {
            console.log(getUser,"is found");
        } else {
            console.log(getUser,"Nothing here");
        }
    }
}