document.getElementById('formTask').onsubmit=function(event){
event.preventDefault();
const inputNode=document.getElementById('inputTask');
const taskText = inputNode.value.trim();
if(taskText!==''){
    addTask(taskText);
}
}


document.getElementById('saveBtn').addEventListener('click', function(event){
    event.preventDefault();
    const taskList = document.getElementById('task');
    for (let task of tasks){
        const task={
            text: taskItem.childNode[0]
        }
    }

})
function addTask(taskText){
    const taskList = document.getElementById('tasks');
    const taskItem=document.createElement('li');
    tas
}