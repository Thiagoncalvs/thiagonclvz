// INPUT ITENS DO PORTFOLIO
// var ObjPort = {"myObject": [
//     {
//         title: 'Pedro_Paulo_Assessoria_Esportiva',
//         path: "url(./IMG/Pedro.png)",
//         url: "https://thiagoncalvs.github.io/Client-Data/"
//     },
//     {
//         title: '#1',
//         path: "url(./IMG/Frame4.png)",
//         url: "/"
//     },
//     { 
//         title: "#2",
//         path: "url(./IMG/Frame4.png)",
//         url: "/"
//     },
//     { 
//        title: "#3",
//        path: "url(./IMG/Frame4.png)",
//        url: "/"
//     },
//     { 
//        title: "#4",
//        path: "url(./IMG/Frame4.png)",
//        url: "/"
//     }
//     ]
//     }

    // var count1 = Object.keys(ObjPort.myObject).length
    
    //alert(count);
    
    // var container= document.getElementById('media-scroll');
    
    // for(var i=0;i<count1;i++){
    //     console.log(jsonObj.myObject[i]);
      
    //     var obj= ObjPort.myObject[i];
    //     var button = "<a href="+obj.url+"><div title="+obj.title+" class='media-element' style='background-image:"+obj.path+";'></div></a>";
        
    //     container.innerHTML
    //     +=button;
    // }


// fetch("datas.json").then((response) => {
//     response.json().then((dados) => {
//         dados.ObjPort.map((ObjPort) => {
//             console.log(ObjPort)
//         })
//     })
// })
// console.log(response)

const resposta = fetch("datas.json").then(respostaData => {
    return respostaData.json();
}).then(jsonData => {
    var count = Object.keys(jsonData.myObject).length

    var container1 = document.getElementById('media-scroll');

    for(var i = 0 ; i < count ; i++){
        var obj = jsonData.myObject[i];
        var button = "<a href="+obj.url+"><div title="+obj.title+" class='media-element' style='background-image:"+obj.path+";'></div></a>";
        // var button = "<a>"+obj.title+"</a></br>"

        container1.innerHTML +=button;
    }

}).catch(erro => {
    console.log('Deu um erro: ' + erro);
});