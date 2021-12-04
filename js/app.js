var form = document.getElementById("form")

form.addEventListener("submit", function(e){
    e.preventDefault()
    var title = document.getElementById("title").value
    var body = document.getElementById("body").value

    $.post("https://jsonplaceholder.typicode.com/posts",{title:title,body:body}, function(data){
        console.log(data)
    })
    
})



// function request(){
//     fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(function(response){
//         return response.json()
//     })
//     .then((response) => {
//         var result = document.getElementById("result")
//         var item =""
//         console.log(response)
//         response.array.forEach (element => {
//             item = "User Id:" + element.userId + "id:1" + element.id +"title:" + element.title + "<br><br>"
//         })
//         console.log(item)
//         result.append(item)
//     });
// }