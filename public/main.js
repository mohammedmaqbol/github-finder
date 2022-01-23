const api_url  = "https://api.github.com/users/";
const search   =  document.getElementById('search');
search.addEventListener("click", fetchData);
       async function fetchData(){
                const inputValue = document.getElementById('input').value;
                if(inputValue){
                    const username = inputValue.split(' ').join('');
                    const user = api_url + username;
                    const res = await fetch(user)
                    .then((res)=> res.json())
                    .then((data) => { console.log(data);
                        let tab =  
                            `<tr> 
                                <td>${data.name} </td><br>
                                <td>${data.bio} </td><br>
                                <img src=${data.avatar_url}>     
                            </tr>`;
                        document.getElementById("employees").innerHTML = tab;
                    })
                }else{
                    alert("Enter User Name")
                }
            }


         

           


