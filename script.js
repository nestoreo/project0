const allComms = document.getElementById("comments")

function newComment() {
    const message = document.getElementById("message").value
    const username = document.getElementById("username").value
    if (message.replace(/ /g, '')==""||username.replace(/ /g, '')=="")
    {
      return;
    }
    const comment = document.createTextNode("Comment: "+message)
    const user=document.createTextNode("By: "+username)

    //creating the todo item in our unorderedlist
    const comments = document.createElement("li")
    comments.appendChild(comment)
    comments.appendChild(document.createElement("br"))
    comments.appendChild(user)

    //creates todo text
    allComms.appendChild(comments)

    document.getElementById("message").value=""
    document.getElementById("username").value=""
}
