
let addBtn = document.getElementById("add")

addBtn.addEventListener("click",()=>{
      const tltTxt = document.getElementById("title").value

      if(tltTxt === "") {
        alert("Title cannot be empty")
        return
      }
    const descTxt = document.getElementById("content").value

    let cardVle = `   <li><div class="card"> <h1>${tltTxt}</h1>${descTxt}</div></li>`

    const ul = document.querySelector("ul")
    ul.innerHTML +=cardVle
    

   localStorage.setItem(tltTxt , descTxt)

 
     location.reload()
   
})


for (let index = 0; index < localStorage.length; index++) {
    const key = localStorage.key(index);
    let value = localStorage.getItem(key )
      
    let cardVle = `   <li><div class="card"> <div class="status"><h1>${key}</h1>  <button class="deletBtn"data-key="${key}"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS10cmFzaDItaWNvbiBsdWNpZGUtdHJhc2gtMiI+PHBhdGggZD0iTTEwIDExdjYiLz48cGF0aCBkPSJNMTQgMTF2NiIvPjxwYXRoIGQ9Ik0xOSA2djE0YTIgMiAwIDAgMS0yIDJIN2EyIDIgMCAwIDEtMi0yVjYiLz48cGF0aCBkPSJNMyA2aDE4Ii8+PHBhdGggZD0iTTggNlY0YTIgMiAwIDAgMSAyLTJoNGEyIDIgMCAwIDEgMiAydjIiLz48L3N2Zz4="  id="delet"></div>${value}</div></li>`

    const ul = document.querySelector("ul")
    ul.innerHTML +=cardVle
    
   document.querySelectorAll(".deletBtn").forEach(btn=>{
        btn.addEventListener("click",(e)=>{
            const key = e.currentTarget.getAttribute("data-key")
            localStorage.removeItem(key)
            location.reload()
        })
    
})

document.getElementById("bin").addEventListener("dblclick",()=>{
    localStorage.clear()
    location.reload()
})

}