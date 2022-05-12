
window.onresize = function(){
    setOpenScreenSize()
}

function setOpenScreenSize(){
    const container = document.getElementById("home");
    const navbar = document.getElementById("nav");
    container.style.minHeight = window.innerHeight - navbar.offsetHeight + "px";
    container.style.paddingTop = navbar.offsetHeight*2 + "px";
}
setOpenScreenSize();

function chooseCWeek(cw){
    let showCon = document.getElementById("showCw");
    let text;
    switch(cw){
        case 1:
            text = `<div id="week1">
            <table>
                <tr>
                    <th>&lt;head&gt;&lt;/head&gt;</th>
                    <td>The head tag is an element in HTML files that can contain metadata (data about data) and script calls.</td>
                </tr>
                <tr>
                    <th>&lt;body&gt;&lt;/body&gt;</th>
                    <td>The &lt;body&gt; tag in HTML is used to define the main content present inside an HTML page. It is always enclosed within &lt;html&gt;tag. The &lt;body&gt; tag is the last child of &lt;html&gt; tag. A body tag contains starting as well as an ending tag.</td>
                </tr>
                <tr>
                    <th>&lt;title&gt;&lt;/title&gt;</th>
                    <td>The &lt;title&gt; tag in HTML is used to define the title of HTML document. It sets the title in the browser toolbar. It provides the title for the web page when it is added to favorites. It displays the title for the page in search engine results.
                    <br><b>Note:You can NOT have more than one &lt;title&gt; element in an HTML document.</b> </td>
                </tr>
                <tr>
                    <th>&lt;link&gt;&lt;/link&gt;</th>
                    <td>The &lt;link&gt; tag in HTML is used to define a link between a document and an external resource. The link tag is mainly used to link to external style sheets. This element can appear multiple times but it goes only in the head section. The link element is empty, it contains attributes only. The values in the link element denote how the item being linked to & is related to the containing document.</td>
                </tr>
                <tr>
                    <th>&lt;script&gt;&lt;/script&gt;</th>
                    <td>The head tag is an element in HTML files that can contain metadata (data about data) and script calls.</td>
                </tr>
                <tr>
                    <th>&lt;a&gt;&lt;/a&gt;</th>
                    <td>
                        The &lt;a&gt; tag (anchor tag) in HTML is used to create a hyperlink on the webpage. This hyperlink is used to link the webpage to other web pages. It’s either used to provide an absolute reference or a relative reference as its “href” value.
                    </td>
                </tr>
                <tr>
                    <th>&lt;img&gt;</th>
                    <td>
                        HTML &lt;img&gt; tag is used to add image inside webpage/website. Nowadays website does not directly add images to a web page, as the images are linked to web pages by using the <img> tag which holds space for the image.
                    </td>
                </tr>
                <tr>
                    <th>&lt;table&gt;&lt;/table&gt;</th>
                    <td>
                        The &lt;table&gt; HTML element represents tabular data — that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data.
                    </td>
                </tr>
                <tr>
                    <th>&lt;ul&gt;&lt;/ul&gt;</th>
                    <td>
                        In this article, we will know the HTML &lt;ul&gt; Tag & its implementation. The &lt;ul&gt; tag in HTML is used to define the unordered list item in an HTML document. It contains the list items &lt;li&gt; element. The &lt;ul&gt; tag requires an opening and closing tag. By using CSS style you can easily design an unordered list.
                    </td>
                </tr>
                <tr>
                    <th>&lt;div&gt;&lt;/div&gt;</th>
                    <td>
                        The div tag is known as Division tag. The div tag is used in HTML to make divisions of content in the web page like (text, images, header, footer, navigation bar, etc). Div tag has both open(&lt;div&gt;) and closing (&lt;/div&gt;) tag and it is mandatory to close the tag. The Div is the most usable tag in web development because it helps us to separate out data in the web page and we can create a particular section for particular data or function in the web pages.
                    </td>
                </tr>
            </table>
                    </div>`
            break;
        case 2:
            text = `<div id="week2">
            <table>
                <tr>
                    <th>aniamtion</th>
                    <td>use for control your animation
                    <br><b>use with @keyframes</b>
                    </td>
                </tr>
                <tr>
                    <th>@keyframes</th>
                    <td>
                        <div class="content">
                            <p>create your own animation</p>
                        </div>
                        <br>
                        <div class="example">
                            <p>animation : run 2s linear infinite</p>
                            <div class="redbox linear"></div>
                            <p>aniamtion : run 2s ease-in infinite</p>
                            <div class="bluebox ease-in"></div>
                            <p>animation : run 2s ease-in-out infinite</p>
                            <div class="greenbox ease-in-out"></div>
                            <p>animation : run 2s ease-out infinite</p>
                            <div class="orangebox ease-out"></div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th>transition</th>
                    <td>use when hovering, on focus, etc.
                    </td>
                </tr>
                <tr>
                    <th>:hover</th>
                    <td>
                        <div class="content">
                            <p>when element is hovered, run this code</p>
                        </div>
                        <div class="example">
                            <p>transition : 2s;</p>
                            <div class="redbox hover"></div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th>:focus</th>
                    <td>
                        <div class="content">
                            <p>when element is on focus, run this code</p>
                        </div>
                        <div class="example">
                            <label for="name">Name</label>
                            <input class="focus" type="text">
                        </div>
                    </td>
                </tr>
            </table>
        </div>`
            break;
        case 3:
            text = `<div id="week3">
            <table>
                <tr>
                    <th>position</th>
                    <td>absolute, fixed,  realative, static, sticky</td>
                </tr>
                <tr>
                    <th>position: static;</th>
                    <td class="relative">
                        <div class="static"> 	Static positioned elements are not affected by the top, bottom, left, and right properties.

                        An element with position: static; is not positioned in any special way; it is always positioned according to the normal flow of the page:</div>
                    </td>
                </tr>
                <tr>
                    <th>position: absolute</th>
                    <td class="relative">
                        <div class="relative">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque commodi qui aliquid sequi neque, distinctio officia suscipit, blanditiis fugit ea dignissimos. Distinctio perspiciatis hic corporis, tempore fuga possimus natus, libero a doloribus amet laudantium. Blanditiis repellendus dicta nostrum doloremque, dolorum quisquam ut laudantium maiores ducimus fugiat consequatur eos quasi quae ipsum neque distinctio mollitia non? Dicta culpa perspiciatis maiores ad minima atque repudiandae nobis laboriosam quis, similique doloremque rerum praesentium sapiente alias vitae voluptates. Debitis, rerum. Nihil rem sit deserunt aliquid repellendus perferendis, placeat nostrum alias magni ab consectetur fugiat vel dolorem nemo, quo recusandae earum harum non beatae nobis.
                            <div class="absolute">
                                This is an absolute
                                (right:0; top:0;)
                            </div>
                        </div>
                    <b>Notes: An absolute element needs relative element to cover it</b>
                    </td>
                </tr>
                <tr>
                    <th>position:relative</th>
                    <td class="relative">
                        <div class="relative">
                            An element with position: relative; is positioned relative to its normal position.

                            Setting the top, right, bottom, and left properties of a relatively-positioned element will cause it to be adjusted away from its normal position. Other content will not be adjusted to fit into any gap left by the element.
                        </div>
                    </td>
                </tr>
                <tr>
                    <th>position: fixed</th>
                    <td class="relative">
                        <div id="fixed" class="fixed">
                            This is fixed element (top: 50%; left:0;)
                        </div>
                        <button id="fixed_button"
                        onclick="showFixed()">Show fixed</button>
                    </td>
                </tr>
                <tr>
                    <th>position:sticky</th>
                    <td class="relative">
                        <div class="relative">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. A harum fugit illo voluptate laborum cum quam. Sequi, ducimus maiores! Praesentium sequi soluta 
                            <div class="sticky">position:sticky (top:0;)</div> beatae ab inventore quod consequatur suscipit minus? Vel corporis quos deleniti ab sapiente enim ipsam tenetur id iure minima nisi expedita praesentium amet animi quaerat, sed laborum atque suscipit tempora repudiandae ut? Dicta aspernatur ducimus dolorem blanditiis, pariatur atque dolores optio maiores quibusdam corporis enim omnis praesentium architecto saepe voluptate non qui obcaecati soluta et asperiores. Nostrum dolorem in similique sequi vel laudantium reprehenderit, quisquam obcaecati omnis, officiis voluptates, sunt aperiam dolores! Cum ut suscipit saepe? Consequuntur!
                        </div>
                    </td>
                </tr>
            </table>
        </div>`
            break;
        case 4:
            text = `<div id="week4">
            <table>
                <tr>
                    <th>display</th>
                    <td>flex, grid</td>
                </tr>
                <tr>
                    <th>display: flex;</th>
                    <td class="relative">
                        <div class="flex">
                            <p>flex-direction : row</p>
                            <div class="row">
                                <div class="redbox"></div>
                                <div class="bluebox"></div>
                                <div class="greenbox"></div>
                            </div>
                            <p>flex-direction : column</p>
                            <div class="column">
                                <div class="redbox"></div>
                                <div class="bluebox"></div>
                                <div class="greenbox"></div>
                            </div>
                            <p>justify-content:center</p>
                            <div class="jf-center">
                                <div class="redbox"></div>
                                <div class="bluebox"></div>
                                <div class="greenbox"></div>
                            </div>
                            <p>justify-content:space-around</p>
                            <div class="jf-around">
                                <div class="redbox"></div>
                                <div class="bluebox"></div>
                                <div class="greenbox"></div>
                            </div>
                            <p>justify-content:space-evenly</p>
                            <div class="jf-evenly">
                                <div class="redbox"></div>
                                <div class="bluebox"></div>
                                <div class="greenbox"></div>
                            </div>
                            <p>align-items:flex-start</p>
                            <div class="ai-fs">
                                <div class="redbox"></div>
                                <div class="bluebox"></div>
                                <div class="greenbox"></div>
                            </div>
                            <p>align-items:center</p>
                            <div class="ai-center">
                                <div class="redbox"></div>
                                <div class="bluebox"></div>
                                <div class="greenbox"></div>
                            </div>
                            <p>align-items:flex-end</p>
                            <div class="ai-fe">
                                <div class="redbox"></div>
                                <div class="bluebox"></div>
                                <div class="greenbox"></div>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th>display: grid</th>
                    <td class="relative">
                        <div class="grid">
                            <p>grid-template-columns: repeat(count, size)</p>
                            <div class="tem-col">
                                <div class="redbox"></div>
                                <div class="bluebox"></div>
                                <div class="greenbox"></div>
                                <div class="orangebox"></div>
                            </div>
                            <p>grid-template-rows: repeat(count, size)</p>
                            <div class="tem-row">
                                <div class="redbox"></div>
                                <div class="bluebox"></div>
                                <div class="greenbox"></div>
                                <div class="orangebox"></div>
                            </div>
                            <p>grid-columns: start / end</p>
                            <div class="column">
                                <div class="redbox"></div>
                                <div class="bluebox"></div>
                                <div class="greenbox"></div>
                                <div class="orangebox"></div>
                            </div>
                            <p>grid-rows: start / end</p>
                            <div class="row">
                                <div class="redbox"></div>
                                <div class="bluebox"></div>
                                <div class="greenbox"></div>
                                <div class="orangebox"></div>
                            </div>
                            <p>row-gap: 100px</p>
                            <div class="rg">
                                <div class="redbox"></div>
                                <div class="bluebox"></div>
                                <div class="greenbox"></div>
                                <div class="orangebox"></div>
                            </div>
                            <p>column-gap: 100px</p>
                            <div class="cg">
                                <div class="redbox"></div>
                                <div class="bluebox"></div>
                                <div class="greenbox"></div>
                                <div class="orangebox"></div>
                            </div>
                        </div>
                    </td>
                </tr>
            </table>
        </div>`
            break;
        case 5:
            text = `<div id="week4">
            <table>
                <tr>
                    <th>Javascript</th>
                    <td>
                        JavaScript is a dynamically typed language. This means that you don’t need to specify the variable’s type in the declaration like other static typed languages such as Java or C#.
                    </td>
                </tr>
                <tr>
                    <th>Let's say "Hello World!"</th>
                    <td>
                        console.log("Hello World!")
                    </td>
                </tr>
                <tr>
                    <th>var valueName = value</th>
                    <td>
                        <p>Global scoped or function scoped. The scope of the var keyword is the global or function scope. It means variables defined outside the function can be accessed globally, and variables defined inside a particular function can be accessed within the function.

                        </p>
                    </td>
                </tr>
                <tr>
                    <th>let valueName = value</th>
                    <td>
                        block scoped: The scope of a let variable is only block scoped. It can’t be accessible outside the particular block ({block}).
                    </td>
                </tr>
                <tr>
                    <th>const valueName = value</th>
                    <td>
                        block scoped: When users declare a const variable, they need to initialize it, otherwise, it returns an error. The user cannot update the const variable once it is declared. 
                    </td>
                </tr>
                <tr>
                    <th><p>document.getElementById("element's id")</p></th>
                    <td>
                        keep the element as variable
                    </td>
                </tr>
            </table>
        </div>`
            break;
        case 6:
            text = `<div class="week6">
            <table>
                <tr>
                    <th>if-else</th>
                    <td>
                        <p>if( condition ){<br>&emsp;code here <br>}</p>
                        <p><b>Note:condition is true, false; when condition is true code will run</b></p>
                    </td>
                </tr>
                <tr>
                    <th>loop</th>
                    <td>
                        <p><b>For Loop</b></p>
                        <p>for(statement1; statement2; statement3){<br>&emsp;code here<br>}</p>
                        <p>for(a in array){<br>&emsp;a = child in array<br>}</p>
                        <p><b>While loop</b></p>
                        <p>while(statement1){<br>&emsp;code run until statement1 is false<br>}</p>
                    </td>
                </tr>
            </table>
        </div>`
            break;
    }
    showCon.innerHTML = text
}
chooseCWeek(1)

function showCWeek(){
    let select = document.getElementById("chooseCWeek");
    chooseCWeek(Number(select.value))
}

function showFixed(){
    let fixedBlock = document.getElementById("fixed");
    let button = document.getElementById("fixed_button"); 
    if(button.innerText == "Show fixed"){
        fixedBlock.style.opacity = "1"
        button.innerText = "Hide fixed"
    }
    else if(button.innerText == "Hide fixed"){
        fixedBlock.style.opacity = "0"
        button.innerText = "Show fixed"
    }
}

function chooseEWeek(ew){
    let container = document.getElementById("showExam")
    let select = document.getElementById("chooseEWeek")
    let text;
    switch(ew){
        case 1:
            text = `<p>สร้างเว็บแนะนำตัว</p>
            <div class="require">
                <p>สิ่งที่ต้องมี</p>
                <ol>
                    <li>ปุ่มหรือรูปที่ลิ้งไป facebook</li>
                    <li>ปุ่มหรือรูปที่ลิ้งไป instagram</li>
                    <li>ปุ่มหรือรูปที่ลิ้งไป เว็บอะไรก็ได้</li>
                    <li>ปุ่มหรือรูปที่ลิ้งไป เว็บที่สร้างจากในห้องเรียน</li>
                    <li>รูปหรือวิดิโอสำหรับแนะนำตัว</li>
                    <li>table อธิบายข้อมูลพื้นฐาน</li>
                </ol>
            </div>
            <p>ตัวอย่าง</p>
            <div class="example">
                <h1>Hello, My name is Good</h1>
                <h1>I'm a free-time developer!</h1>
                <img src="https://cdn.discordapp.com/attachments/563323607627989038/962198835692699709/74496BBB-95D5-406F-AD28-1C0AD83DEE59.jpg" alt="">
                <table>
                    <tr>
                        <th>Name :</th>
                        <td>Good</td>
                    </tr>
                    <tr>
                        <th>Skill :</th>
                        <td>HTML CSS Javascript Java Python C#(Unity) C(Arduino)</td>
                    </tr>
                    <tr>
                        <th>Instagram :</th>
                        <td>good_pwr</td>
                    </tr>
                </table>
                <a target="_blank" href="https://www.facebook.com/Genstemyouth-102506674976308"><img src="./asset/examweek1/facebook.png" alt=""></a>
                <a target="_blank" href="https://www.instagram.com/genstem.youth/"><img src="./asset/examweek1/instagram.png" alt=""></a>
                <a target="_blank" href="https://goodu-dev.github.io/MyPortfolio_Good/ThaiHome.html"><img src="./asset/examweek1/browser.png" alt=""></a>
                <a target="_blank" href="https://goodu-dev.github.io/MyPortfolio_Good/ThaiHome.html"><img src="./asset/examweek1/browser.png" alt=""></a>
            </div>`
            break;
        case 2:
            text = `<p>สร้างนาฬิกา</p>
            <div class="require">
                <p>สิ่งที่ต้องมี</p>
                <ol>
                    <li>นาฬิกา</li>
                </ol>
            </div>
            <p>ตัวอย่าง</p>
            <div class="example">
                <div class="clock"></div>
            </div>`
            break;
        case 3:
            text = `<p>ทำ navbar</p>
            <div class="require">
                <p>สิ่งที่ต้องมี</p>
                <ol>
                    <li>มีรูปโลโก้</li>
                    <li>มี 4 หัวข้อ</li>
                    <li>มี drop down</li>
                </ol>
            </div>
            <p>ตัวอย่าง</p>
            <div class="example long">
                <nav>
                    <img src="./asset/image/nav.png" alt="">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li class="dropdown">
                            <a>Course</a>
                            <ul>
                                <li><a href="#cw1">Basic tags</a></li>
                                <li><a href="#cw2">Animation</a></li>
                                <li><a href="#cw3">Position</a></li>
                                <li><a href="#cw4">Display</a></li>
                                <li><a href="#cw5">Basic Js</a></li>
                                <li><a href="#cw6">If & Loop</a></li>
                            </ul>
                        </li>
                        <li class="dropdown">
                            <a>Exam</a>
                            <ul>
                                <li><a href="#ew1">exam-1</a></li>
                                <li><a href="#ew2">exam-2</a></li>
                                <li><a href="#ew3">exam-3</a></li>
                                <li><a href="#ew4">exam-4</a></li>
                                <li><a href="#ew5">exam-5</a></li>
                                <li><a href="#ew6">exam-6</a></li>
                                <li><a href="#ew7">exam-7</a></li>
                                <li><a href="#ew8">exam-8</a></li>
                                <li><a href="#ew9">exam-9</a></li>
                                <li><a href="#ew10">exam-10</a></li>
                            </ul>
                        </li>
                        <li><a href="#aboutus">About Us</a></li>
                    </ul>
                </nav>
            </div>`
            break;
        case 4:
            text = `<p>ทำ Timeline</p>
            <div class="require">
               <p>สิ่งที่ต้องมี</p>
               <ol>
                   <li>Timeline blog 3 ก้อน</li>
                   <li>ใน Blog ต้องมี 
                       <ul>
                           <li>หัวเรื่อง</li>
                           <li>เนื้อหา</li>
                           <li>รูป</li>
                       </ul>
                   </li>
                </ol>
            </div>
            <div class="example">
               <div class="timeline-cont">
                   <div class="timeline-blog right">
                       <div class="icon">
                           <img src="./asset/image/html.png" alt="">
                       </div>
                       <div class="image">
                           <img src="./asset/category/pexels-luis-del-río-15286.jpg" alt="">
                       </div>
                       <div class="content">
                           <h1>HTML Blog</h1>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, itaque consequuntur. Architecto sint molestiae placeat corporis libero labore provident quibusdam.</p>
                       </div>
                   </div>
                   <div class="timeline-blog left">
                       <div class="icon">
                           <img src="./asset/image/css.png" alt="">
                       </div>
                       <div class="image">
                           <img src="./asset/category/pexels-bithin-raj-2763927.jpg" alt="">
                       </div>
                       <div class="content">
                           <h1>CSS Blog</h1>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, itaque consequuntur. Architecto sint molestiae placeat corporis libero labore provident quibusdam.</p>
                       </div>
                   </div>
                   <div class="timeline-blog right">
                       <div class="icon">
                           <img src="./asset/image/js.png" alt="">
                       </div>
                       <div class="image">
                           <img src="./asset/category/pexels-tan-danh-1329711.jpg" alt="">
                       </div>
                       <div class="content">
                           <h1>Js Blog</h1>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, itaque consequuntur. Architecto sint molestiae placeat corporis libero labore provident quibusdam.</p>
                       </div>
                   </div>
               </div>
            </div>`
            break;
        case 5:
            text = `<p>สร้างเกม quiz</p>
            <div class="require">
                <p>สิ่งที่ต้องมี</p>
                <ol>
                    <li>คำถาม 5 ข้อ หรือมากกว่า</li>
                    <li>ช้อยคำตอบ 4 ช้อย</li>
                    <li>ตารางคะแนน</li>
                </ol>
            </div>
            <div class="example">
                <div class="game">
                   <div id="game-cont" class="game-container">
                       <div class="question">
                           <h1 id="question">Question 1</h1>
                       </div>
                       <div class="choice-container">
                           <h1 unique="c1" class="choice">Choice 1</h1>
                           <h1 unique="c2" class="choice">Choice 2</h1>
                           <h1 unique="c3" class="choice">Choice 3</h1>
                           <h1 unique="c4" class="choice">Choice 4</h1>
                       </div>
                   </div>
                   <button id="start-button" onclick="startGame()">Start Game</button>
                </div>
                <div class="scoreboard">
                    <div>
                        <h1 id="current-question">0</h1>
                        <h1>/5</h1>
                    </div>
                    <div>
                        <h1>Score:</h1>
                        <h1 id="score">0</h1>
                    </div>
                </div>
            </div>`
            break;
        case 6:
            text = `<p>สร้าง num count</p>
            <div class="require">
                <p>สิ่งที่ต้องมี</p>
                <ol>
                    <li>ตัวเลข 4 ชุด</li>
                </ol>
            </div>
            <div class="example">
                <button id="count" onclick="checkCount()">Click Me!</button>
                <div class="num-container">    
                   <div class="num-con">
                       <img src="./asset/image/css.png" alt="">
                       <h1 class="counter" goal="5483">0</h1>
                   </div>
                   <div class="num-con">
                       <img src="./asset/image/html.png" alt="">
                       <h1 class="counter" goal="2890">0</h1>
                   </div>
                   <div class="num-con">
                       <img src="./asset/image/js.png" alt="">
                       <h1 class="counter" goal="2589">0</h1>
                   </div>
                   <div class="num-con">
                       <img src="./asset/examweek1/browser.png" alt="">
                       <h1 class="counter" goal="4862">0</h1>
                   </div>
                </div>
            </div>`
            break;
        case 7:
            text = `<p>สร้าง Category ในเว็บไซต์</p>
            <div class="require">
                <p>สิ่งที่ต้องทำ</p>
                <ol>
                    <li>ทำ 3 หมวดหมู่</li>
                    <li>หมวดละ 2-3 กล่อง</li>
                </ol>
            </div>
            <div class="example">
                <div class="cate-nav">
                    <div id="tab"></div>
                    <h1 category="all" class="cate">All</h1>
                    <h1 category="html" class="cate">HTML</h1>
                    <h1 category="css" class="cate">CSS</h1>
                    <h1 category="js" class="cate">Javascript</h1>
                </div>
                <div class="cate-container">
                   <div category="html" class="cate-blog">
                       <img src="./asset/category/pexels-bithin-raj-2763927.jpg" alt="">
                       <div class="cate-content">
                           <h1>HTML</h1>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi illo temporibus libero aut in nihil suscipit quia maxime magnam. Numquam.</p> 
                       </div> 
                   </div>
                   <div category="html" class="cate-blog">
                       <img src="./asset/category/pexels-bithin-raj-2763927.jpg" alt="">
                       <div class="cate-content">
                           <h1>HTML</h1>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi illo temporibus libero aut in nihil suscipit quia maxime magnam. Numquam.</p> 
                       </div> 
                   </div>
                   <div category="css" class="cate-blog">
                       <img src="./asset/category/pexels-luis-del-río-15286.jpg" alt="">
                       <div class="cate-content">
                           <h1>CSS</h1>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi illo temporibus libero aut in nihil suscipit quia maxime magnam. Numquam.</p> 
                       </div> 
                   </div>
                   <div category="js" class="cate-blog">
                       <img src="./asset/category/pexels-tan-danh-1329711.jpg" alt="">
                       <div class="cate-content">
                           <h1>Javascript</h1>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi illo temporibus libero aut in nihil suscipit quia maxime magnam. Numquam.</p> 
                       </div> 
                   </div>
                   <div category="js" class="cate-blog">
                       <img src="./asset/category/pexels-tan-danh-1329711.jpg" alt="">
                       <div class="cate-content">
                           <h1>Javascript</h1>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi illo temporibus libero aut in nihil suscipit quia maxime magnam. Numquam.</p> 
                       </div> 
                   </div>
                   <div category="html" class="cate-blog">
                       <img src="./asset/category/pexels-bithin-raj-2763927.jpg" alt="">
                       <div class="cate-content">
                           <h1>HTML</h1>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi illo temporibus libero aut in nihil suscipit quia maxime magnam. Numquam.</p> 
                       </div> 
                   </div>
                   <div category="css" class="cate-blog">
                       <img src="./asset/category/pexels-luis-del-río-15286.jpg" alt="">
                       <div class="cate-content">
                           <h1>CSS</h1>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi illo temporibus libero aut in nihil suscipit quia maxime magnam. Numquam.</p> 
                       </div> 
                   </div>
                </div>
            </div>`
            break;
    }
    container.innerHTML = text
    if(ew == 5){
        checkAnswer()
    }
    else if(ew == 7){
        checkTab()
        showCategory()
    }
}
chooseEWeek(1)
function showEWeek(){
    let select = document.getElementById("chooseEWeek")
    chooseEWeek(Number(select.value))
}

function navCheck(){
    let buttons = document.querySelectorAll(".button")
    buttons.forEach(button =>{
        button.addEventListener("click", function(){
            let type = button.getAttribute("type")
            let unique = Number(button.getAttribute("unique"))
            if(type == "course"){
                chooseCWeek(unique)
            }
            else if(type == "exam"){
                chooseEWeek(unique)
            }
        })
    })
}
navCheck()
