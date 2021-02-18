// what is the path to the JSON file?
const apiURL = "../hoteldata.json";

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((myList) => {
    //Once it comes back, display it to the console.
    console.log(myList);
    let myImageTag = document.createElement("img");
    myImageTag.src = myList[0].photo;
    
    let myCaptionTag = document.createElement("figcation");
    myCaptionTag.textContent = myList[0].name;
    
    let myFigureTag = document.createElement("figure");
    myFigureTag.appendChild(myImageTag);
    myFigureTag.appendChild(myCaptionTag);
    
    
    document.getElementById('myCards').appendChild(myCaptionTag);
}); //end of "then" fat arrow function