const datas = [{ name: "Shubham" }];

function callBack(){
    return datas;
}

function displayStatus(status){
    const st=document.querySelector("#show_status");

(status)? st.style.display='display': st.style.display='none'

}

// By callback

const getDataByCallBack=(callback)=>{
 const res = fetch("https://jsonplaceholder.typicode.com/todos/100") 
 .then((data)=>{
 if(data.ok)
 {
     // call callback at a condition
     displayStatus(data.ok)
    console.log(callback())
 }
 })

}

getDataByCallBack(callBack);


// By promise
const getDataByPromise = () => {
  return new Promise((resolve, reject) => {
    const res = fetch("https://jsonplaceholder.typicode.com/todos/100") // replace 100 by 1000 for error
      .then((res) => {
          displayStatus(res.ok)
        if (res.status == "200") {
            // send data
          resolve(res.json());

        } else {
          reject("Some error occured");
        }
      });
      
  });
  
};

getDataByPromise()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));





// by async / await

 const myAsyncFunc=async ()=>{
const data=await getDataByPromise() // wait here till getDataByPromise() is done
return data

 }



function func()
{
    
myAsyncFunc()
.then(data=>console.log(data))
.catch(err=>console.log(err))





console.log("called after async function ")
}

func()