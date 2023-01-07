// import {axios as service} from "../../Netease_api/service.js"
// var search=document.querySelector("#search");
// search.onclick=(e)=>{
//     e.preventDefault();
//     service.getSearchResource(search.querySelector("input").value,1,30,15)
//         .then(parseSearch(response),response=>{
//             var result=document.createElement("p");
//             result.textContent="Search failed! Response Code："+response.code;
//     })
// }


import {SearchResource, LoginCellphoneResource} from "../../Netease_api/serviceURL.js"
import serverURL from "../../backEnd_api/serverURL.js";

let search = document.querySelector(".searchForSongs");
search.querySelector("#search").addEventListener('click', getSearch);
let login = document.querySelector(".login");
login.querySelector('button').addEventListener('click', loginCellphone);
let songs;
function getSearch(e) {
    e.preventDefault();
    if (!search.querySelector('input').reportValidity()) {
        return;
    }
    let fetch_Promise = fetch(SearchResource + "?keywords=" + search.querySelector("input").value);
    fetch_Promise.then(response => {
        return response.json();
    },()=>{throw "fail to get search resource!"}).then(
        data => {
            if (data.code < 200 || data.code > 200) {
                const fail = document.createElement('p');
                fail.textContent = "Search failed! Code:" + data.code;
                document.querySelector(".searchForSongs").appendChild(fail);
            } else {
                parseSearch(data);
            }
        }).catch(error=>{
            alert(error);
    })
}

function parseSearch(res) {
    songs=res["result"]["songs"]
    let div = document.querySelector('.searchResult');
    div.innerHTML = "";
    let head = document.createElement('h2');
    head.textContent = '搜索结果:';
    div.appendChild(head);
    let i =0;
    for (const song of songs) {
        const results = document.createElement('p');
        results.textContent = song["name"];
        for(const artist of song["artists"]){
            results.textContent+=" "+artist["name"];
        }
        div.appendChild(results);
        const mark = document.createElement('button');
        mark.textContent = '收藏';
        mark.addEventListener('click',handleMark) ;
        mark.name = String(i++);
        results.appendChild(mark);
    }
}

function handleMark(e) {
    const data={
        id:songs[e.target.name]["id"],
        name:songs[e.target.name]["name"],
        artist_id:songs[e.target.name]["artists"][0]["id"],
        usr_phone:"1805143397",
    }
    const init={
        method: "POST",
        headers:{
            "Content-Type":'application/json'
    },
        mode:"no-cors",
        body: JSON.stringify(data)
    }//data for request
    let req = fetch(serverURL.mark,init);
    req.then(() => {
        const fail = document.createElement('p');
        fail.textContent = "Mark success!";
    }).catch(err=>{
        alert(err.toString());
    })
}

function loginCellphone() {
    if (!search.querySelector('input').reportValidity()) {
        return;
    }
    const data={
        cellphone:login.querySelector("#tel").value,
        password:login.querySelector("#passwd").value,
    }
    const init={
        method:"POST",
        headers:{
            "Content-Type":'application/json',
        },
        body:JSON.stringify(data),

    }//configuration for fetch
    let fetch_Promise = fetch(LoginCellphoneResource,init);
    fetch_Promise.then(response => {
        return response.json();
    }).then(data => {
            if (data.code < 200 || data.code > 200) {
                // const fail = document.createElement('p');
                // fail.textContent = "Login failed! Code:" + data.code;
                // document.querySelector(".login").appendChild(fail);
                throw ("Login failed! Code:" + data.code);
            }else {
                return fetch(serverURL.login+'?name='+data)
            }

        }
        , () => {
            // alert("response parsing failed!");
            throw ("response parsing failed!")
        }).then(response=>{
            return response.json();
        }).then(data=>{
    },()=>{
            throw ("response parsing failed!");
    }).catch(error=>{
        alert(error.toString());
    });

}
