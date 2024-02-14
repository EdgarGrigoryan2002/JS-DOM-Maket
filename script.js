let body = document.body;
body.style = (`
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: sans-serif;
`);

let block = document.querySelector(".block");
block.style = (`
            width:100%;
            min-height: 800px;
            background-image: url('https://ewscripps.brightspotcdn.com/dims4/default/90b9902/2147483647/strip/true/crop/749x421+0+39/resize/1280x720!/quality/90/?url=https%3A%2F%2Fewscripps.brightspotcdn.com%2F80%2F32%2Fde7b68044100b42ced92667e5c57%2Fcoffee.jpg');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            background-attachment: fixed;`);

let header = document.createElement("header");
header.style = (`
            width: 100%;
            height: 100px;
            background-color: #e9e1d6;
            display: flex;
            justify-content: space-around;
            align-items: center;`);
block.appendChild(header);

let logo = document.createElement("div");
logo.style = (`
            width: 130px;
            height: 90px;`);
header.appendChild(logo);

let img = document.createElement("img");
img.setAttribute("src", "https://mir-s3-cdn-cf.behance.net/project_modules/fs/52b49685328041.5d7898901293c.jpg");
img.style = (`
            width:100%;
            height: 90px;
            cursor: pointer;`)
logo.appendChild(img);

let menu = document.createElement("div");
menu.style = (`
            width: 800px;
            height: 90px;
            display: flex;
            justify-content: space-between;
            align-items: center;`);
header.appendChild(menu);
let ul = document.createElement("ul");
ul.style = (`
            width: 100%;
            height: 90px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            list-style: none;
            font-size: 17px;`);
menu.appendChild(ul);

let arr = [];
for(let i = 0; i < 6; i++){
    var li = document.createElement("li");
    li.style.cursor = "pointer";
    arr.push(li);      
};
arr[0].innerHTML = "Home";
arr[1].innerHTML = "This is Us";
arr[2].innerHTML = "Menu";
arr[3].innerHTML = "Online Order";
arr[4].innerHTML = "Contact Us";

for(let i = 0; i < arr.length; i++){
    ul.appendChild(arr[i]);
};

let d = document.createElement("div");
d.style = (`width: 110px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            cursor: pointer;`);
menu.appendChild(d)
let nkar = document.createElement("img");
nkar.style = (`width: 30px; 
            height: 30px`);
nkar.setAttribute("src", "https://cdn-icons-png.flaticon.com/512/1946/1946429.png");
d.appendChild(nkar);
let text = document.createElement("p");
text.innerHTML = "Log In";
d.appendChild(text);

let section = document.createElement('div');
block.appendChild(section);
section.style = (`width: 100%;
            height: 700px;
            display: flex;
            align-items:center;`);
let d2 = document.createElement('div');
d2.style = (`width: 620px;
            height: 350px;`)
let p1 = document.createElement('p');
p1.style = (`width: 400px;
            text-align: center;
            color: white;
            font-size: 20px;
            font-family: sans-serif`)
p1.innerHTML = "Cafe & Restaurant Est. 2035";
d2.appendChild(p1);
section.appendChild(d2);

let h1 = document.createElement('h1');
h1.style = (`width: 620px;
             height: 60px;
            text-align: center;
            color: white;
            font-size: 60px;`);
h1.innerHTML = "Your Go-to Spot for";
d2.appendChild(h1);
let hh = document.createElement('h1');
hh.innerHTML = "Delicious Eats & Coffee";
hh.style = (`width: 730px;
            height: 80px;
            text-align: center;
            color: white;
            font-size: 60px;`);
d2.appendChild(hh)

let kojakner = document.createElement('div');
kojakner.style = (`width: 530px;
                height: 200px;
                display: flex;
                justify-content: space-around;`);
d2.appendChild(kojakner);

let btn = document.createElement('button');
btn.innerHTML = "Order Now";
btn.style = (`width: 160px;
            height: 50px;
            color: white;
            background: none;
            border: 1px solid white;
            font-size: 20px;
            cursor: pointer;`);
kojakner.appendChild(btn);
let btn2 = document.createElement('button');
btn2.innerHTML = "Our Menu";
btn2.style = (`width: 160px;
            height: 50px;
            color: white;
            background: none;
            border: 1px solid white;
            font-size: 20px;
            cursor: pointer;`);

kojakner.appendChild(btn2);

let d3 = document.createElement('div');
d3.style = (`width: 620px;
            height: 350px;`);

let section2 = document.createElement('div');
section2.style = (`width: 100%;
                height: 70px;
                background-color: #5E695E;
                display: flex;
                justify-content: space-between;
                align-items: center;`);

block.appendChild(section2);

let leftimg = document.createElement('div');
let nkar2 = document.createElement('img');
nkar2.setAttribute('id', 'left');
nkar2.setAttribute('src', "https://cdn-icons-png.flaticon.com/512/271/271220.png");
nkar2.style = (`width: 30px;
                height: 30px;
                cursor: pointer`);
section2.appendChild(nkar2)
let centr = document.createElement('div');
let sp = document.createElement('span');
let sp2 = document.createElement('span');
let sp3 = document.createElement('span');
sp.innerHTML = "Daily Deal";
sp.style = (`color: white;
            font-size: 20px;`);
sp2.innerHTML = "|";
sp2.style = (`color: white;
            margin-left: 20px;
            font-size: 20px;`);
sp3.innerHTML = "Coffee & Pastry $3.99";
sp3.style = (`color: white;
            margin-left: 20px;
            font-size: 20px;`);
centr.appendChild(sp);
centr.appendChild(sp2);
centr.appendChild(sp3);
section2.appendChild(centr)

let rightimg = document.createElement('div');
let nkar3 = document.createElement('img');
nkar3.setAttribute('id', "right");
nkar3.setAttribute('src', 'https://cdn4.iconfinder.com/data/icons/geomicons/32/672374-chevron-right-512.png');
nkar3.style = (`width: 30px;
                height: 32px;
                cursor: pointer`);
section2.appendChild(nkar3)


let left = document.querySelector('#left');
let right = document.querySelector('#right');
left.addEventListener("click", ()=>{
    sp.innerHTML = "Daily Deal";
    sp3.innerHTML = "Coffee & Pastry $3.99";
    section2.style.background = "#727C72";
    section2.style.transition = "2.5s";
setInterval(() => {
section2.style.background = "#5E695E"
}, 4000);

})
right.addEventListener("click", ()=>{
  sp.innerHTML = "Weekend Brunch";
  sp3.innerHTML = "Saturday 9am - 2pm";
  section2.style.background = "#727C72";
  section2.style.transition = "2.5s";
        setInterval(() => {
            section2.style.background = "#5E695E";
        }, 4000);
})

 setInterval(() => {
    sp.innerHTML = "Weekend Brunch";
    sp3.innerHTML = "Coffee & Pastry $3.99";
}, 4000);
setInterval(() => {
    sp.innerHTML = "Daily Deal";
    sp3.innerHTML = "Coffee & Pastry $3.99";
}, 8000);

let section3 = document.createElement('div');
section3.style = (`width: 100%;
                min-height: 500px;
                display: flex;
                justify-content: center;
                align-items: center;`);

body.appendChild(section3);

let content = document.createElement('div');
content.style = (`width: 700px;
                height: 590px;
                background-color: white;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;`);
section3.appendChild(content);
let d4 = document.createElement('div'); 
d4.style = (`width: 400px;
            display: flex;
            justify-content: start`);
let text1 = document.createElement('h1');
text1.innerHTML = "Eat.";
text1.style = (`font-size: 50px`);
d4.appendChild(text1);
content.appendChild(d4);

let d5 = document.createElement('div');
d5.style = (`width: 400px;
            display: flex;
            justify-content: start;`);
let text2 = document.createElement('p');
text2.innerHTML = "Breakfast, Lunch and Artisanal Pastries";
text2.style = (`font-size: 20px`);
d5.appendChild(text2);
content.appendChild(d5);
let d6 = document.createElement('div'); 
let text3 = document.createElement('p');
text3.innerHTML = "I'm a paragraph. Click here to add your own text and edit<br><br>.me. I’m a great place for you to tell a story and let your<br><br>users know a little more about you.";
text3.style = (`font-size: 16px;`)
d6.appendChild(text3)
content.appendChild(d6);
let d7 = document.createElement('div'); 
d7.style = (`width: 400px;
            display: flex;
            justify-content: start;
            margin-top: 20px`);
let btn3 = document.createElement('button');
btn3.innerHTML = "See More";
btn3.style = (`width: 170px;
            height: 50px;
            background: none;
            border: 1px solid black;
            font-size: 15px;
            cursor: pointer;
            `);
d7.appendChild(btn3);
content.appendChild(d7);

let ajnkar = document.createElement('div');
ajnkar.style = (`width: 725px;
                height: 590px;`);
let nkar4 = document.createElement('img');
nkar4.setAttribute('src', 'https://static.wixstatic.com/media/c837a6_b12138462b31409aaf8029cf7a2dd7ed~mv2.jpg/v1/fill/w_713,h_590,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_b12138462b31409aaf8029cf7a2dd7ed~mv2.jpg');
nkar4.style = (`width: 725px;
                height: 590px`);
ajnkar.appendChild(nkar4);
section3.appendChild(ajnkar);

let section4 = document.createElement('div');
body.appendChild(section4);
section4.style = (`width: 100%;
                height: 590px;
                background-color: white;
                display: flex;
                justify-content: center;
                align-items: center;`)
let d8 = document.createElement('div');
let nkar5 = document.createElement('img');
nkar5.setAttribute('src', "https://static.wixstatic.com/media/c837a6_1c8f21588e024e4aa589012f541f7a3b~mv2.jpg/v1/fill/w_710,h_590,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_1c8f21588e024e4aa589012f541f7a3b~mv2.jpg");
nkar5.style = (`width: 642px;
                height: 590px`);
d8.appendChild(nkar5);
section4.appendChild(d8);

let main = document.createElement('div');
main.style = (` display: flex;
                flex-direction: column;
                justify-content: center;
                `);
section4.appendChild(main)
let d9 = document.createElement('div');
d9.style = (`width: 400px;
            display: flex;
            justify-content: center;`);
let text4 = document.createElement('h1');
text4.innerHTML = "Drink.";
text4.style = (`font-size: 50px`);
d9.appendChild(text4);
main.appendChild(d9);

let d10 = document.createElement('div');
d10.style = (`width: 495px;
            display: flex;
            justify-content: center;`);
let text5 = document.createElement('p');
text5.innerHTML = "The Freshest Cup in Town";
text5.style = (`font-size: 20px;`);
d10.appendChild(text5);
main.appendChild(d10);

let d11 = document.createElement('div');
d11.style = (`width: 670px;
            display: flex;
            justify-content: center;`);
let text6 = document.createElement('p');
text6.innerHTML = "I'm a paragraph. Click here to add your own text and edit<br><br>.me. I’m a great place for you to tell a story and let your<br><br>users know a little more about you.";
d11.appendChild(text6);
main.appendChild(d11);

let d12 = document.createElement('div');
d12.style = (`width: 440px;
            display: flex;
            justify-content: center;`);
let btn4 = document.createElement('button');
btn4.innerHTML = "See More";
btn4.style = (`width: 170px;
            height: 50px;
            background: none;
            border: 1px solid black;
            font-size: 15px;
            margin-top: 30px;
            cursor: pointer;`);
d12.appendChild(btn4);
main.appendChild(d12);

let section5 = document.createElement('div');
section5.style = (`width: 100%;
                min-height: 590px;
                display: flex;
                justify-content: center;
                align-items: center;`);

body.appendChild(section5);

let content2 = document.createElement('div');
content2.style = (`width: 698px;
                   height: 590px;
                   background-color: white;
                   display: flex;
                   flex-direction: column;
                   justify-content: center;
                   align-items: center;`);

let d13 = document.createElement('div');
d13.style = (`width: 400px;
            display: flex;
            justify-content: start`);
let text7 = document.createElement('h1');
text7.innerHTML = "Enjoy.";
text7.style = (`font-size: 50px`);
d13.appendChild(text7);
content2.appendChild(d13);

let d14 = document.createElement('div');
d14.style = (`width: 400px;
            display: flex;
            justify-content: start;`)
let text8 = document.createElement('p');
text8.innerHTML = "Make Yourself at Home";
text8.style = (`font-size: 20px`);
d14.appendChild(text8);
content2.appendChild(d14);

let d15 = document.createElement('div');
d15.style = (`width: 670px;
            display: flex;
            justify-content: center;`);
let text9 = document.createElement('p');
text9.innerHTML = "I'm a paragraph. Click here to add your own text and edit<br><br>.me. I’m a great place for you to tell a story and let your<br><br>users know a little more about you.";
d15.appendChild(text9);
content2.appendChild(d15);

let d16 = document.createElement('div');
d16.style = (`width: 400px;
            display: flex;
            justify-content: start;
            margin-top: 20px`);
let btn5 = document.createElement('button');
btn5.innerHTML = "Visit Us";
btn5.style = (`width: 170px;
            height: 50px;
            background: none;
            border: 1px solid black;
            font-size: 15px;
            margin-top: 30px;
            cursor: pointer;`);
d16.appendChild(btn5);
content2.appendChild(d16);
section5.appendChild(content2)


let ajnkar2 = document.createElement('div');
ajnkar2.style = (`width: 725px;
                height: 590px;`);
let nkarner = document.createElement('img');
nkarner.setAttribute('src', 'https://static.wixstatic.com/media/c837a6_5d9b5804b420484aa112d37fa3ce3f45~mv2.jpg/v1/fill/w_713,h_590,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_5d9b5804b420484aa112d37fa3ce3f45~mv2.jpg');
nkarner.style = (`width: 725px;
                height: 590px`);

ajnkar2.appendChild(nkarner);
section5.appendChild(ajnkar2);

let section6 = document.createElement('div');
section6.style = (`width: 100%;
                    height: 450px;
                    background-color: #FDF2E9`);
 
body.appendChild(section6);

let d17 = document.createElement('div');
d17.style = (`width: 100%;
            height: 200px;
            font-size: 30px;
            display: flex;
            justify-content: center;
            align-items: center;`);
let text10 = document.createElement('h1');
text10.innerHTML = "Drop By for a Bite.";
d17.appendChild(text10);
section6.appendChild(d17);
let glxavor2 = document.createElement('div');
glxavor2.style = (`width: 100%;
                    height: 100px;
                    display: flex;
                    justify-content: center;
                    align-items: center;`)
section6.appendChild(glxavor2);

let d18 = document.createElement('div');
d18.style = (`width: 70%;
            height: 200px;
            display: flex;
            justify-content: space-evenly;
            align-items: center;`);
          
let d19 = document.createElement('div');
d19.style = (`widht: 80px;
            height: 150px;
            display: flex;
            flex-direction: column;`);
let div1 = document.createElement('div');
let p2 = document.createElement('p');
p2.innerHTML = "Address";
p2.style = (`font-size: 25px`);
div1.appendChild(p2);
d19.appendChild(div1);
let div2 = document.createElement('div'); 
let p3 = document.createElement('p');
p3.innerHTML = '500 Terry Francois St.';
let p4 = document.createElement('p');
p4.innerHTML = "San Francisco, CA 64158";
div2.appendChild(p3);
div2.appendChild(p4);
d19.appendChild(div2);
d18.appendChild(d19);
section6.appendChild(d18);

let d20 = document.createElement('div');
d20.style = (`width: 1px;
            height: 170px;
            margin-top: 50px;
            background-color: black;`);
d18.appendChild(d20);

let d21 = document.createElement('div');
d21.style = (`widht: 80px;
            height: 150px;
            display: flex;
            flex-direction: column;`);

let d22 = document.createElement('div');
let p5 = document.createElement('p');
p5.innerHTML = "Opening Hours";
p5.style = (`font-size: 25px`);
d22.appendChild(p5);
d21.appendChild(d22);
d18.appendChild(d21);

let d23 = document.createElement('div');
let p6 = document.createElement('p');
p6.innerHTML = "Mon - Fri: 9am - 6pm";
d23.appendChild(p6);

let p7 = document.createElement('p');
p7.innerHTML = "​​Saturday: 10am - 2pm";
d23.appendChild(p7);

let p8 = document.createElement('p');
p8.innerHTML = "Sunday: Closed";
d23.appendChild(p8);
d18.appendChild(d23);
d21.appendChild(d23);
glxavor2.appendChild(d18); 


let section7 = document.createElement('div');
section7.style = (`width: 100%;
                   height: 350px;
                   display: flex;`);

body.appendChild(section7);
let nkarner1 = document.createElement('div');
nkarner1.style = (`width: 20%;
                    height: 350px;
                    background-image: url('https://images.unsplash.com/photo-1604423043492-41303788de80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y3VwJTIwb2YlMjBjb2ZmZWV8ZW58MHx8MHx8&w=1000&q=80');
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position: center;`);
section7.appendChild(nkarner1);


let nkarner2 = document.createElement('div');
nkarner2.style = (`width: 20%;
                    height: 350px;
                    background-image: url('https://st.focusedcollection.com/9163412/i/650/focused_179741994-stock-photo-side-view-brunette-girl-drinking.jpg');
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position: center;`);
section7.appendChild(nkarner2);


let nkarner3 = document.createElement('div');
nkarner3.style = (`width: 20%;
                    height: 350px;
                    background-image: url('https://www.acouplecooks.com/wp-content/uploads/2019/05/Chopped-Salad-008.jpg');
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position: center;`);
section7.appendChild(nkarner3);


let nkarner4 = document.createElement('div');
nkarner4.style = (`width: 20%;
                    height: 350px;
                    background-image: url('https://ae01.alicdn.com/kf/HTB1cqJMbOMnBKNjSZFCq6x0KFXaP/Louis-Fashion-Cafe-Chairs-Cafe-Tables-Northern-Europe-Style-Chairs-Western-Restaurant-Solid-Wood-Chairs.jpg');
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position: center;`);
section7.appendChild(nkarner4);


let nkarner5 = document.createElement('div');
nkarner5.style = (`width: 20%;
                    height: 350px;
                    background-image: url('https://images.pexels.com/photos/5749111/pexels-photo-5749111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position: center;`);
section7.appendChild(nkarner5);

let section8 = document.createElement('div');
section8.style = (`width: 100%;
                    height: 500px;
                    background-color: #3D4D3D;`);

body.appendChild(section8);
let glxavor3 = document.createElement('div');
glxavor3.style = (`width: 100%;
                    height: 450px;
                    display: flex;
                    justify-content: space-around`);
section8.appendChild(glxavor3);
let div3 = document.createElement('div');
div3.style = (`width: 400px;
                height: 450px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;`);
let d24 = document.createElement('div');
d24.style = (`width: 5px;
            display: flex;
            justify-content: flex-end;`);
div3.appendChild(d24);
let p9 = document.createElement('p');
p9.innerHTML = "Newsletter";
p9.style.color = "white";
p9.style.fontSize = "30px";
d24.appendChild(p9);


let d25 = document.createElement('div');
d25.style = (`width: 300px;
              display: flex;
              justify-content: center`)
let p10 = document.createElement('p');
p10.innerHTML = "Stay up to date with all the latest from<br> 47th Cafe";
p10.style.color = "white";
p10.style.fontSize = "17px";
d25.appendChild(p10);
glxavor3.appendChild(div3);
div3.appendChild(d25);

let d26 = document.createElement('div');
d26.style = (`width: 100%;
            margin-left: 100px;`)
let lab = document.createElement('label');
lab.setAttribute('for', "em");
lab.innerHTML = "Email * <br><br>";
lab.style.color = "white";
lab.style.cursor = "pointer";
d26.appendChild(lab);
div3.appendChild(d26);

let demail = document.createElement('div');
demail.style = (`width: 100%;
                display: flex;
                justify-content: flex-end`)
div3.appendChild(demail);
let email = document.createElement('input');
email.setAttribute('type', 'email');
email.setAttribute('id', 'em');
email.style = (`width: 250px;
                height: 40px;
                background: none;
                border: 1px solid white;
                color: white;
                `);
demail.appendChild(email);
let btn6 = document.createElement('button');
btn6.setAttribute('id', 'btn');
btn6.style = (`width: 95px;
                height: 44px;
                background: none;
                border: 1px solid white;
                color: white;
                font-weight: bold;
                cursor: pointer;
               `);
btn6.innerHTML = "Join";
demail.appendChild(btn6);

glxavor3.appendChild(div3)

let div4 = document.createElement('div');
div4.style = (`width: 400px;
                height: 450px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                `);
let d27 = document.createElement('div');
let p11 = document.createElement('p');
p11.innerHTML = "Talk to Us";
p11.style.color = "white";
p11.style.fontSize = "30px";
d27.appendChild(p11);
div4.appendChild(d27);

let p12 = document.createElement('p');
p12.innerHTML = "123-456-7890 <br>info@mysite.com";
p12.style.color = "white";
p12.style.height = "70px"
d27.appendChild(p12);


let p13 = document.createElement('p');
p13.innerHTML = "500 Terry Francois St.<br>San Francisco, CA 94158";
p13.style.color = "white";
d27.appendChild(p13);

glxavor3.appendChild(div4);

let div5 = document.createElement('div');
div5.style = (`width: 400px;
                height: 450px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                `);
let text11 = document.createElement('h1');
text11.innerHTML = "Instagram";
text11.style = (`color: white;
                font-size: 40px;
                margin-top: 70px`);
let text12 = document.createElement('h1');
text12.innerHTML = "Facebook";
text12.style = (`color: white;
                font-size: 40px;`);
let text13 = document.createElement('h1');
text13.innerHTML = "Twitter";
text13.style = (`color: white;
                font-size: 40px;`);

div5.appendChild(text11);
div5.appendChild(text12);
div5.appendChild(text13);
glxavor3.appendChild(div5)

section8.appendChild(glxavor3);

let footer = document.createElement('div');
footer.style = (`width: 100%;
                height: 50px;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #FDF2E9`);
let foottext = document.createElement('p');
foottext.innerHTML = "© 2035 by 47th Cafe . Powered and secured by Wix";
foottext.style.textAlign = "center";
footer.appendChild(foottext);
body.appendChild(footer)

let butt = document.getElementById('btn');
let emid = document.getElementById('em');
console.log(emid);
butt.addEventListener('click', ()=>{
    if (email.value == "") {
        email.style.background = "red";
    }else {
        email.value = "";
        email.style.background = "#3A4D3E";
    }
});
emid.addEventListener('click',()=>{
       emid.style.background = "rgba(140, 245, 140, 0.521)";
    
});
