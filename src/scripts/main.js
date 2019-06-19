// Some starter code
document.querySelector(".lego_save").addEventListener("click", () => {
    const creator = document.querySelector("#lego_creator").value
    const colorID = document.querySelector("#lego_color").value
    // Once you have collected all the values, build your data structure
    const legoToSave = {
        creator: creator,
        color: parseInt(colorID)
    }
    console.log(legoToSave)
    fetch("http://localhost:8088/legos", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(legoToSave)
})
})
