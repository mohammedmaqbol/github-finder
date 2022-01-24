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
                        if(data.message == "Not Found"){
                                    alert("User Not Found");
                        }else{
                            let tab =
                                `<div class="row">
                                    <div class="col-sm-6 col-md-4">
                                    <img src=" ${data.avatar_url}" alt="" class="img-rounded img-responsive" />
                                </div>
                                <div class="col-sm-6 col-md-8">
                                    <h4>${data.name}</h4>
                                    <small><cite title="">${data.location} <i class="glyphicon glyphicon-map-marker"></i></cite></small>
                                    <p>
                                        <i class="glyphicon glyphicon-envelope">${data.bio}</i>
                                        <br />
                                        <br />
                                        <i class="glyphicon glyphicon-gift"></i><a>${data.html_url}</a>
                                    </p>
                                </div>`;
                            document.getElementById("employees").innerHTML = tab;

                        }
                    
                    })
                }else{
                    alert("Enter User Name")
                }
            }


         

           



         

           


