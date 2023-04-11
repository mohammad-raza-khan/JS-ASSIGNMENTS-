
//  1   
function addNumberTo(n) {
    return function(x) {
      return n + x;
    }
  }

  const addFiveTo = addNumberTo(5);
  console.log(addFiveTo(3)); 
  console.log(addFiveTo(7)); 
  
//  2   

function searchArray(arr, val) {
    if (arr.length === 0) {
      return false;
    }
    if (arr[0] === val) {
      return true;
    }
    return searchArray(arr.slice(1), val);
  }
  
  const myArray = [1, 2, 3, 4, 5];
  console.log(searchArray(myArray, 3)); 
  console.log(searchArray(myArray, 6)); 

  

//   3   

function addParagraph(text) {
    const newParagraph = document.createElement("p");
    newParagraph.textContent = text;
    document.body.appendChild(newParagraph);
  }
  
  addParagraph("Hello, world!");
  

//   4   

function addListItem(text) {
    const newListItem = document.createElement("li");
    newListItem.textContent = text;
    const list = document.getElementById("ul");
    list.appendChild(newListItem);
  }
  
  addListItem("Item added { Answer 4}");

  
//   5   

function changeBackgroundColor(element, color) {
    element.style.backgroundColor = color;
  }
  
  const myElement = document.getElementById("element");
  changeBackgroundColor(myElement, "blue");

  
// 6

function saveToLocalStorage(key, obj) {
    const objString = JSON.stringify(obj);
    localStorage.setItem(key, objString);
  }
  
  const myObjectString = { name: "Raza", age: 26};
  saveToLocalStorage("object", myObjectString);

  
// 7

function getFromLocalStorage(key) {
    const objString = localStorage.getItem(key);
    const obj = JSON.parse(objString);
    return obj;
  }
  
  const retrievedObject = getFromLocalStorage("object");
  console.log(retrievedObject); 

//   8

function saveObjectToLocalStorage(obj) {
    Object.keys(obj).forEach(function(key) {
      const value = obj[key];
      localStorage.setItem(key, JSON.stringify(value));
    });
    const newObj = {};
    Object.keys(obj).forEach(function(key) {
      newObj[key] = JSON.parse(localStorage.getItem(key));
    });
    return newObj;
  }
  
  const myObject = { name: "Raza", age: 26 };
  const savedObject = saveObjectToLocalStorage(myObject);
  console.log(savedObject); 
  
