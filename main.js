//module
                // import User , {printName,printAge} from "./userA.js";
                // let userin = new User('Hamza',19)

                // var show=document.getElementById('inprint')
                // var show1 =document.getElementById('inprinta')

                // show.innerHTML=printName(userin)
                // show1.innerHTML=printAge(userin)

                // console.log(userin.print())

//======================================================

        //JSON

const text = [
        {
        "Name":"ahmad",
        "Last":"noori",
        "Departement":"BCS",
        "ID":312313,
        "Phone":789383,
        "Email":"example@gmail.com",
        "Image":"israial.img"
        },
        {
            "Name":"Ali",
            "Last":"noori",
            "Departement":"BCS",
            "ID":312313,
            "Phone":789383,
            "Email":"example@gmail.com",
            "Image":"israial.img"
        },
        {
            "Name":"Hamza",
            "Last":"noori",
            "Departement":"BCS",
            "ID":312313,
            "Phone":789383,
            "Email":"example@gmail.com",
            "Image":"israial.img"
        },
        {
            "Name":"Noori",
            "Last":"noori",
            "Departement":"BCS",
            "ID":312313,
            "Phone":789383,
            "Email":"example@gmail.com",
            "Image":"israial.img"
        }
]
var placeholder =document.querySelector('#data_show');
var out = "";
// console.log(text[0])

const arl = text.length
var i=0;
var j=1;
while(i<arl){
    out +=`
    <tr>
    <td>${j++}</td>
    <td>${text[i].Name}</td>
    <td>${text[i].Last}</td>
    <td>${text[i].Departement}</td>
    <td>${text[i].ID}</td>
    <td>${text[i].Phone}</td>
    <td>${text[i].Email}</td>
    <td>${text[i].Image}</td>
    </tr>
    `
    i++
    // console.log(out)
    placeholder.innerHTML=out; 
}