
function count(){
    let number = document.querySelectorAll(".counter")
    let button = document.getElementById("count")
    const COUNT_SPEED=100
    number.forEach(num => {
        const UpdateCounter = () => {
            let goal = Number(num.getAttribute("goal"))
            let plus = Math.floor(goal/COUNT_SPEED)
            let current = Number(num.innerText)
            if(current < goal){
                current = current + plus
                setTimeout(UpdateCounter, 1);
            }
            else{
                current = goal
                button.innerText = "Reset"
            }
            num.innerText = current
        }
        UpdateCounter()
    })
}

function checkCount(){
    let button = document.getElementById("count")
    if(button.innerText == "Click Me!"){
        count()
    }
    else if(button.innerText == "Reset"){
        let number = document.querySelectorAll(".counter")
        number.forEach(num => {
            num.innerText = 0
        })
        button.innerText = "Click Me!"
    }
}