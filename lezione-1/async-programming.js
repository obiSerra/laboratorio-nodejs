const asyncFnc = () => {
    return new Promise((done, reject) => {
        setTimeout(() => {
            done("DOOOONE")
        }, 1000)
    })
}


const asyncRunner = async () => {
    const val = await asyncFnc();
    console.log("hello")
    console.log(val)
}


asyncRunner()
console.log("word")