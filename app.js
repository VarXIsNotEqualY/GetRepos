
var n = document.getElementById('Uname');
    document.getElementById('button').addEventListener('click',lUs)
function lUs(){
    var xhr = new XMLHttpRequest();
        xhr.open('GET','https://api.github.com/users/'+n.value+'/repos',true)
        
        xhr.onload = function(){
            if(this.status == 200){
                var repos = JSON.parse(this.responseText);
                console.log(repos[1].name)
                var output = ''

                for(var i in repos){
                    output += 
                    "<div class='user'>"+
                    '<ul>' +
                    '<li>'+repos[i].name+'</li>' +
                    '</ul>'+'</div>'
            } 
        document.getElementById('repos').innerHTML = output;                   
        }
    }
        xhr.send()
}
