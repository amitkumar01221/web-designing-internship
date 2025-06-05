const userNameTextField = document.getElementById('username')
const addUserBtn = document.getElementById('addUser')
const recordata=document.getElementById('records')

// data store
let userArray=[];
let edit_id=null;
//1 st part
addUserBtn.onclick =()=>{
	const name =userNameTextField.value
	//alert(name)
    // data insert
	if(edit_id != null){
		userArray.splice(edit_id,1,{'username':name})
		edit_id=null
		addUserBtn.innerText='adduser'

	}else{
		userArray.push({username:name})

	}

    savedata(userArray) // function call
    userNameTextField.value=''
}
// 2nd part
//console.log(userArray)
function savedata(userArray){
    const strData = JSON.stringify(userArray)
    //console.log(strData)
    localStorage.setItem("username",strData)
    displayData()
}
// 3rd get localstorage
const dataget=localStorage.getItem('username')
//console.log(dataget)
// 4 string can obj
if(dataget!=null){
    userArray=JSON.parse(dataget)
}
function displayData(){
    let data=''
    userArray.forEach((item,index)=>{
        // console .log(index)
        data +=`<tr>
        <td>${index+1}</td>
        <td>${item.username}</td>
        <td>
            <a href="#" onclick="editinfo(${index})">Edit</a>
            <a href="#" onclick="deleteinfo(${index})">delete</a>
        </td>
        </tr>`
        

    })
    recordata.innerHTML=data
}
displayData()
function deleteinfo(id){
    // alert(id)
    userArray.splice(id,1)
    savedata(userArray)

}
function editinfo(id) {
   // alert(id)
    edit_id = id;
    userNameTextField.value = userArray[id].username;
    addUserBtn.innerText = 'Update User';
}