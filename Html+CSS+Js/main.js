let ms1= {message:"what's quote"}
fetch('http://127.0.0.1:5000/predict',{
    method: 'POST',
    body: JSON.stringify(ms1),
    mode: 'cors',
    headers: {
        'Content-Type':'application/json'
    }
})
.then(r=>r.json)
.then(r=>{
    console.log(r)
})