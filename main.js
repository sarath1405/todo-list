var input = document.getElementById('input');
var button1 = document.querySelector('#button1');
var list = document.querySelector('#list');

var k =0;
var arr = [];
 
button1.addEventListener('click', () =>{
    if(input.value === ''){
        alert('Item name cant be empty..!');
    }
    else {
        arr.push(input.value);
        var node = document.createElement('li');
        var del = document.createElement("button");
        del.innerHTML = '<i class="fas fa-trash" style="color:black; font-size:20px" ></i>';
        node.appendChild(document.createTextNode(arr[arr.length-1]));
        list.appendChild(node);
        node.setAttribute('id',k);
        del.setAttribute('class','delete-items');
        k++;
        var id;
        del.addEventListener('click',()=>{
            id = parseInt(node.id);
            node.parentNode.removeChild(node);
        },false);
        node.appendChild(del);
        input.value = '';
    }
})








