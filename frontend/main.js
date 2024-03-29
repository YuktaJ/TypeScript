async function refresh() {
    try {
        let res = await axios.get('http://localhost:3000');
        if (res.status === 200) {
            for (let i = 0; i < res.data.todos.length; i++) {
                ShowOnScreen(res.data.todos[i]);
            }
        }
    } catch (error) {

    }
}
refresh();
function ShowOnScreen(obj) {
    document.body.innerHTML += `<div>${obj.text}<button id='delete'>X</button></div>`
}
document.getElementById("SubmitText")?.addEventListener("submit", (event) => {
    FormSubmit(event);
})

async function FormSubmit(event) {
    event.preventDefault();
    let text = document.getElementById("name").value;
    let obj = {
        text
    }
    try {
        let res = await axios.post("http://localhost:3000/todo", obj);
        console.log(res.data.message);
        console.log(res.data.todo);
        console.log(res.data.todos);
    } catch (error) {
        console.log("error");
    }
}