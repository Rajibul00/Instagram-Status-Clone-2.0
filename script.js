let arr =[
    {dp:'https://images.unsplash.com/photo-1650389176833-8dbb23d0d8f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    statuss:'https://images.unsplash.com/photo-1693724315464-781ede3a4767?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
},{
    dp:'https://images.unsplash.com/photo-1693859507588-e69572086bde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    statuss:'https://images.unsplash.com/photo-1693562575575-46b7c52795ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
},
{
    dp:'https://images.unsplash.com/photo-1693087521630-cf9f3cc662ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1430&q=80',
    statuss:"https://images.unsplash.com/photo-1693249646175-8b21fe05acc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
},
{
    dp:'https://plus.unsplash.com/premium_photo-1689980103779-5087791a9104?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    statuss:'https://images.unsplash.com/photo-1692842717781-022ea74e2498?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
}
];
let a = "";

arr.forEach(function(elem,indx){

    a = a + `<div class="circle" ><img id="${indx}" src="${elem.dp}"  alt="a image">                 
</div>`


}
)
document.getElementById('dpsection').innerHTML=a

let statuss2 =     document.getElementById('status')


document.getElementById('dpsection').addEventListener('click',function(dets){
let  stylei = arr[dets.target.id].statuss


statuss2.style.backgroundImage=`url(${stylei})`
statuss2.style.display='block';

    statuss2.style.display='block';
    setTimeout(() => {
        statuss2.style.display='none';

    }, 3000);

})


    
    
