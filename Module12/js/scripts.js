// what is the path to the JSON file?
const apiURL = "/Module12/hoteldata.json";

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((myList) => {
    //Once it comes back, display it to the console.
    console.log(myList);

    for (i = 0; i < myList.length; i++) {
    let myImageTag = document.createElement("img");
    myImageTag.src = myList[i].photo;

    let myCaptionTag = document.createElement("figcaption");
    myCaptionTag.textContent = myList[i].name;

    let myFigureTag = document.createElement("figure");
    myFigureTag.appendChild(myImageTag);
    myFigureTag.appendChild(myCaptionTag);

    let theIconLeftTag = document.createElement("ion-icon");
    theIconLeftTag.name = "car";

    let theAddress1Tag = document.createElement("p");
    theAddress1Tag.textContent = myList[i].address[0];

    let theAddress2Tag = document.createElement("p");
    theAddress2Tag.textContent = myList[i].address[1];

    let theIconRightTag = document.createElement("ion-icon");
    theIconRightTag.name = "call";

    let thePhoneTag = document.createElement("p");
    thePhoneTag.textContent = myList[i].phone;
    
    let theSpanLeftTag = document.createElement("span");
    theSpanLeftTag.appendChild(theIconLeftTag);
    theSpanLeftTag.appendChild(theAddress1Tag);
    theSpanLeftTag.appendChild(theAddress2Tag);

    let theSpanRightTag = document.createElement("span");
    theSpanRightTag.appendChild(theIconRightTag);
    theSpanRightTag.appendChild(thePhoneTag);

    let theCardDiv = document.createElement("div");
    theCardDiv.appendChild(theSpanLeftTag);
    theCardDiv.appendChild(theSpanRightTag);

    let theCardSection = document.createElement("section");
    theCardSection.appendChild(myFigureTag);
    theCardSection.appendChild(theCardDiv);

    document.getElementById('myCards').appendChild(theCardSection);
    }
}); //end of "then" fat arrow function