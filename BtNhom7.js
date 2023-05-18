// bài 1
function bai1(){
    var btn=document.getElementById(`btn`);
btn.addEventListener(`click`, minNum);
var ent=document.getElementById(`arr`)
//gan su kien enter
ent.addEventListener("keyup", function(x) {
    if (x.key === 'Enter') {
        minNum();
    }
  });
  //gan enter xong
function minNum(){
    var arr=[];
    var str = document.getElementById(`arr`).value;
    var mang = str.split(/[,\s]+/);
    for(let i=0; i< mang.length; i++){
            if (isNaN(mang[i])){
            alert(`giá trị nhập vào là các số nguyên`);
            return;
        }
        else{
            var NumMang=parseInt(mang[i]);
            arr=[...arr,NumMang];
        }
    }
    var NumMin=Math.min(...arr);
    var maxNum=document.getElementById(`maxNum`);
    maxNum.innerHTML=`số nhỏ nhất là: ${NumMin}`;
}
}
bai1();


//bài 2
function bai2(){
    var arrGoc=document.getElementById(`mang-2`);
    var Local=document.getElementById(`num-2`);
    var vl=document.getElementById(`value-2`);
    //gan su kien enter
    vl.addEventListener("keyup", function(x) {
        if (x.key === 'Enter') {
            chen();
        }
    });
    var bt=document.getElementById(`bt`);
    //gan enter xong
    bt.addEventListener(`click`,chen);
    function chen(){
        var f=arrGoc.value;
        var ar=f.split(/[,\s]+/);
        for( let i=0; i< ar.length; i++){
        if(isNaN(ar[i])){
            ar[i]=ar[i];
        }
        else{
            var arI=parseInt(ar[i]);
            ar[i]=arI;
        } 
    }
        var vitri=parseInt(Local.value);
        if(vitri>ar.length){
            alert(`vị trí nhập vào không thuộc mảng gốc`);
        }
        else{
            var themvao=vl.value;
            var vlthemvao =themvao.split(/[,\s]+/);
            for( let i=0; i< vlthemvao.length; i++){
                
                if(isNaN(vlthemvao[i])){
                    vlthemvao[i]=vlthemvao[i];
                }
                else{
                    var Numvlthemvao=parseInt(vlthemvao[i]);
                    vlthemvao[i]=Numvlthemvao;
                }  
            }
            ar.splice(vitri, 0, ...vlthemvao);
            var mangNew=document.getElementById(`mangNew`);
            var list=ar.join(`, `);
            console.log(ar);
            console.log(list);
            var mang2 = document.createTextNode(`[`+list+`]`);
            var p = document.createElement(`span`);
            p.appendChild(mang2);
            mangNew.appendChild(p);
        }
    }
}
bai2();

//bài 3
function bai3(){
var btn=document.getElementById(`btn3`);
btn.addEventListener(`click`, typeData)
//gan su kien enter
var vl=document.getElementById(`mang3`);
vl.addEventListener("keyup", function(x) {
    if (x.key === 'Enter') {
        typeData();
    }
  });
var bt=document.getElementById(`bt`);
//gan enter xong
function typeData(){
    var str=vl.value;
    var mang3 = str.split(/[,\s]+/);
    for( let i=0; i<mang3.length; i++){
        if(isNaN(mang3[i])){
            mang3[i];
        }
        else{
            mang3[i]=parseInt(mang3[i]);
        }
    }
    for(let j=0; j<mang3.length; j++){
        var type=typeof(mang3[j]);
        var list=document.getElementById(`val`);
        var span1=document.createElement`span`;
        span1.innerHTML=mang3[j];
        list.appendChild(span1);
        var span2=document.createElement`span`;
        span2.innerHTML=`: `;
        list.appendChild(span2);
        var span3=document.createElement`span`;
        span3.innerHTML=type;
        list.appendChild(span3);
        var br = document.createElement(`br`);
        list.appendChild(br);
    }
}
}
bai3();

//bài 4
function bai4(){
    var btn=document.getElementById(`ghep`);
    btn.addEventListener(`click`, ghepMang);
    //gan su kien enter
var vl=document.getElementById(`mang2`);
vl.addEventListener("keyup", function(x) {
    if (x.key === 'Enter') {
        ghepMang();
    }
  });
var bt=document.getElementById(`bt`);
//gan enter xong
    function ghepMang(){
        var arrGhep=[];
        var arr1 = document.getElementById(`mang1`).value;
        var newArr1 = arr1.split(/[,\s]+/); 
        var arr2=vl.value;
        var newArr2 = arr2.split(/[,\s]+/);

        //kieemr tra gias trij mangr 1 cos trungf vowis gias trij mangr 2 khoong
        function test1(x){
             for( let j=0; j<newArr2.length; j++){
                 if( x===newArr2[j]){
                     return false;
                }  
            }
            return true;
        }          
        for( let i=0; i<newArr1.length; i++){
           if(test1(newArr1[i])){
            arrGhep=[...arrGhep,newArr1[i]];
           }  
        }

        //kieemr tra gias trij mang2 cos trungf vowis gias trij mangr 1 khoong
        function test2(x){
            for( let j=0; j<newArr1.length; j++){
                if( x===newArr1[j]){
                    return false;
               }  
           }
           return true;
       }          
        for (j=0; j<newArr2.length; j++){
            if(test2(newArr2[j])){
                arrGhep=[...arrGhep,newArr2[j]];
               }  
        }
        // ket thuc kiem tra

        var str=arrGhep.join(`, `)
        var span=document.createElement(span);
        span=document.createTextNode(`[`+str+`]`);
        var mangghep=document.getElementById(`mang-ghep`);
        mangghep.appendChild(span);
        var br = document.createElement(`br`);
        mangghep.appendChild(br);
    }
}
bai4();