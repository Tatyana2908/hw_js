/**
 * Created by 1 on 13.03.2016.
 */
//now create array of items
var questionArray = ['question 1','question 2','question 3'];

// now create an array of answers:
var answersArray = ['answer option 1','answer option 2','answer option 3'];


for(var i=0;i<questionArray.length;i++) {
    var questionNode = document.createElement("LI");                 // Create a <li> node
    var questionTextNode = document.createTextNode(questionArray[i]);         // Create a text node
    questionNode.appendChild(questionTextNode);                              // Append the text to <li>
    document.getElementById("myList").appendChild(questionNode);     // Append <li> to <ul> with id="myList"

    // this is the inner list container UL
    var answerList = document.createElement("UL");                 // Create a <li> node

    // loop over all answers
    for(var j=0;j<answersArray.length;j++) {
    //create LI element
        var answerItem = document.createElement("LI");                 // Create a <li> node
        var answerText = document.createTextNode(answersArray[j]);         // Create a text node
        // add the text to LI item
        answerItem.appendChild(answerText);                              // Append the text to <li>
        // add the LI item into the UL
        answerList.appendChild(answerItem);                              // Append the text to <li>

    }
    // add the UL inside the previous question LI
    questionNode.appendChild(answerList);
}