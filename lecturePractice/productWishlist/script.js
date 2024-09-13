let poneCount=0;
let ptwoCount=0;
let pthreeCount=0;
let tbodyEl;


function addtoList(indicator){
    switch (indicator){
        case '1' :
            poneCount++;
            let shirtlistEl= document.getElementById('shirtlist').value
            tbodyEl= document.getElementById('shirtbody') 
            tbodyEl.innerHTML +=`
                <tr>
                    <td> ${poneCount}</td>
                    <td> ${shirtlistEl}</td>
                    <td> </td>
                </tr>
        
            `;
            // uptable();
            break;
        case '2' :
            ptwoCount++;
            let denimlistEl= document.getElementById('denimlist').value
            tbodyEl= document.getElementById('denimbody') 
            tbodyEl.innerHTML +=`
                <tr>
                    <td> ${ptwoCount}</td>
                    <td> ${denimlistEl}</td>
                    <td> </td>
                </tr>
        
            `;
            break;
        case '3' :
            pthreeCount++;
            let shoelistEl= document.getElementById('shoelist').value
            tbodyEl= document.getElementById('shoebody') 
            tbodyEl.innerHTML +=`
                <tr>
                    <td> ${pthreeCount}</td>
                    <td> ${shoelistEl}</td>
                    <td> </td>
                </tr>
        
            `;

            break;
    }
    
}
