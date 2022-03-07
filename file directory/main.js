
var loadData={
    "name":"root",
    "isfolder":true,
    "isexpanded":false,
    "folderList":[
      {
        "name":"desktop",
        "isfolder":true,
        "isexpanded":false,
        "folderList":[
          {
            "name":"package.json",
            "isfolder":false,
            "isexpanded":false
  
          },
          {
            "name":"angular.json",
            "isfolder":false,
            "isexpanded":false
  
          }
  
        ]
  
      },
      {
        "name":"documents",
        "isexpanded":false,
        "isfolder":true,
        "folderList":[
          {
            "name":"por.json",
        "isexpanded":false,
        "isfolder":false
          },
          { "name":"hello",
            "isexpanded":false,
            "isfolder":true,
            "folderList":[
              {
                "name":"popcorn.json",
                "isexpanded":false,
                "isfolder":false
  
              }
            ]
  
          }
          
        ]
      }
    ]
};

  const para = document.createElement("div");
  para.innerHTML =loadData.name;
  let element = document.getElementById("main");
  element.appendChild(para)
  element.classList.add('folder');
  element.addEventListener('click',()=>{
  loadData.isexpanded =!loadData.isexpanded ;
  if(loadData.isexpanded){
        
     
    displayFolders(loadData.folderList,element)
}
else{
    element.childNodes.forEach((eachChild)=>{
        eachChild.style.display= "none"
    })
}
  })

 


  function displayFolders(folder,element){
    console.log(folder)
    folder.forEach((eachFolder)=>{
        
        if(eachFolder.isfolder){
            console.log("yeh folder hai",eachFolder.isName)
            var newFolder = document.createElement("div");
            var folderText = document.createElement("p")
            folderText.classList.add('folder');
            folderText.innerHTML = eachFolder.name;
            newFolder.appendChild(folderText);
            element.appendChild(newFolder)
            folderText.addEventListener('click',()=>{
                eachFolder.isexpanded =!eachFolder.isexpanded ;
                if(eachFolder.isexpanded){
                     displayFolders(eachFolder.folderList,newFolder)
                }
                
              })
        }
        else{
            console.log("yeh file hai",eachFolder.isName)
            var newFile = document.createElement("div");
            newFile.classList.add('')
            newFile.innerHTML = eachFolder.name;
            element.appendChild(newFile)
          


        }
    })
  }
