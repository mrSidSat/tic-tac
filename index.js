var usersymbol;
        var usersym = document.getElementsByClassName("butbef");
        var count = [0,0,0,0,0,0,0,0];
        
       
        function Usersym(sym){
            
           let mrsidsat = document.getElementsByClassName("banner")[0];
           console.log(mrsidsat.children)
           for(let i=1;i<mrsidsat.children.length;i++)
           {
               mrsidsat.children[i].style.display = "none";
           }
           if(sym == 1)
           {
               usersym[0].classList.remove("butaf");
               usersym[1].classList.remove("butaf");
               usersymbol = 'X';
               useropp = 'O';
               usersym[0].classList.toggle("butaf");
               console.log(usersym[0].classList);
           }
           else{
                usersym[0].classList.remove("butaf");
                usersym[1].classList.remove("butaf");
               usersymbol = 'O';
               useropp = 'X';
               usersym[1].classList.toggle("butaf");
           }
        
            
           console.log(usersymbol);
        }
        
       
        
        var grid = document.getElementsByTagName("td");
        var r = [grid[0],grid[1],grid[2]];
        var d = [grid[2],grid[5],grid[8]];
        var l = [grid[6],grid[7],grid[8]];
        var u = [grid[0],grid[3],grid[6]];
        var d1 = [grid[0],grid[4],grid[8]];
        var d2 = [grid[2],grid[4],grid[6]];
        var vm = [grid[1],grid[4],grid[7]];
        var hm = [grid[3],grid[4],grid[5]];
        var arr = [r,d,l,u,d1,d2,vm,hm];

        console.log(grid[1]);
        for(let i = 0 ;i<6;i++)
        {
            console.log(arr[i]);
        }
        
       for(let i = 0;i<grid.length;i++)
       {
           
           
           grid[i].addEventListener("click",()=>{
            var sel = document.getElementsByClassName("sel")[0];
               if(usersymbol !=undefined && grid[i].innerHTML == '')
               {
                
               grid[i].innerText=usersymbol;
               sel.children[2].style.display = "none";
               //checktie();
               setTimeout( function(){comptoplay();
               findmaxocc();checktie()},1000);
              
               
              
               }
               else if(usersymbol ==undefined){  
                   sel.children[2].style.display = "block";
               }
           });
           
           
       }
       function comptoplay(){
          count = [0,0,0,0,0,0,0,0]
           for(let i=0;i<8;i++)
           {
               for(let j=0;j<3;j++)
               {
                   if(arr[i][j].innerHTML == usersymbol)
                   {
                       count[i]++;
                   }
               }
           }
           console.log(count);
           
       }
        function findmaxocc(){
           console.log("findmax reached");
            let op = 0;
            if(count.includes(3) == 1 && op == 0){
                var index = count.indexOf(3);
                document.getElementById("result").style.display = "block";
                //handel3(index);
                cleargrid();
                usersymbol = undefined;
                usersym[0].classList.remove("butaf");
                usersym[1].classList.remove("butaf");
                console.log(3);
                op++;
            }
            else if(count.includes(2) == 1 && op == 0){
                // let check1 = checkcounters();
                // console.log(check1);
                var index = count.indexOf(2);
                handel2(index);
                console.log(2);
                op++;
            }
            else if(count.includes(1) == 1 && op == 0){
                var index = count.indexOf(1);
                handel1(index);
                console.log(1);
                op++;
            }
       }
       function handel2(e){
           let mrsid = 0;
           console.log("handel2 reached")
        for(let j=0;j<3;j++){
                if(arr[e][j].innerHTML == "")
                {
                    arr[e][j].innerHTML = useropp;
                    console.log("a2");
                    break;
                    mrsid = 0;
                }
                else if(mrsid == 2) {
                    count[e] = 9;
                    let temp2 = count.indexOf(2);
                    if(temp2 == -1)
                    {

                        findmaxocc();
                    }
                    else{
                    handel2(temp2);
                    }

                }
                else{
                    mrsid++;
                }
            }
            
       }
       function handel1(e){
           let mrsid =0;
           console.log("reached handel1")
        for(let j=0;j<3;j++){
                if(arr[e][j].innerHTML == "")
                {
                    arr[e][j].innerHTML = useropp;
                    console.log("a1");
                    mrsid = 0;
                    break;
                    
                }
                else if(mrsid == 2)
                {
                    count[e] = 9;
                    let temp1 = count.indexOf(1);
                    if(temp1 == -1)
                    {
                        findmaxocc();
                    }
                    else{
                        handel1(temp1);
                    }
                }
                else{
                    mrsid++;
                }
            }  
       }
       function cleargrid(){
           for(let i=0;i<9;i++)
           {
               grid[i].innerHTML = "";
           }
       }
       function checktie(){
           console.log("go");
           let ctr = 0;
           for(let i=0;i<9;i++)
           {
               if(grid[i].innerHTML == usersymbol)
               {
                   ctr++;
               }
           }
           console.log(ctr);
           if(ctr == 5)
           {
               document.getElementById("tie").style.display = "block";
               cleargrid();
               usersymbol = undefined;
               usersym[0].classList.remove("butaf");
               usersym[1].classList.remove("butaf");
           }
       }