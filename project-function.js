<!DOCTYPE html>
<html>
    <head>
        <title>Kayden CV</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta charset="UTF-8">
        <link rel="stylesheet" href="project-style.css">
        <link rel="icon" href="hinhanh\man.png">
        <link rel="preconnect" href="">
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
        <script src="project-function.js"></script>
        
    </head>
    <body>
        <header>
            <div class="wrapper">
                    <a href="#" class="logo">Portfolio</a>
            </div>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="#About">About </a></li>
                <li><a href="#Project">Projects</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>
        </header>
        <section class="outer_top_container">
            <section class="top_container" >
                <div class="textBanner">
                    <h2>There are <br><span>JavaScript Projects</span></h2>
                    <a href="#firstProject" class="abtme">Let's go</a>
                </div>
                <div>
                    <img src="hinhanh/javascript-creator.png" alt="javascript-creator">
                </div>
            </section>
        
        <section>
            <div class="heading" id="firstProject">
                <h2>Fractorialize</h2>
            </div>

            <div class="Fractorialize-content">
                <div class="Fractorialize-contentbox">
                    <h2>What is fractorial ?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                    <input type="button" class="Button" onclick="factorialize()" value="Click me">
                </div>

                <div class="Fractorialize-pic">
                   <img src="/hinhanh/giphy.gif" alt="">
                </div>
            </div>
        </section>

        <section>
            <div class="heading">
                <h2>Calculating</h2>
            </div>
                <table class="calTable">
                    <tr>
                        <td>Sum of continuous numbers</td>
                        <td><input type="button" class="calButton" onclick="valueN()" value="Click me"></td>
                    </tr>
                    <tr>
                        <td>Sum of odd and even numbers</td>
                        <td><input type="button" class="calButton" onclick="OddandEven()" value="Click me"></td>
                    </tr>
                </table>
                
        
        </section>

        <section>
            <div class="heading">
                <h2>String Handling</h2>
            </div>
            <div>
                <table class="calTable">
                    <tr>
                        <td>Find letter in string</td>
                        <td><input type="button" class="calButton" onclick="letterFind()" value="Click me"></td>
                    </tr>
                    <tr>
                        <td>Find vowels in string</td>
                        <td><input type="button" class="calButton" onclick="vowelFind()" value="Click me"></td>
                    </tr>
                    <tr>
                        <td>Panlindrome</td>
                        <td><input type="button" class="calButton" onclick="Palindrome()" value="Click me"></td>
                    </tr>
                </table>
        </section>     

        <section class="id-container">
            <div>
                <div class="heading">
                    <h2>ID Checker</h2>
                </div>
                <table class="ID-checker">
                    <tr>
                        <td><input type="text" id="id-display" class="id-display-box"></td>
                        <td><ion-icon name="arrow-forward-outline" class="id-Button" onclick="intCalc()"></ion-icon></td>
                    </tr>
                </table>
            </div>
            <div>
                <div class="heading">
                    <h2>ID Info</h2>
                </div>
                <table class="ID-checker2">
                    <tr>
                        <td>Sex :</td>
                        <td><input type="text" id="sex" class="id-secdisplay-box" disabled></td>
                    </tr>
                    <tr>
                        <td>Age :</td>
                        <td><input type="text" id="age" class="id-secdisplay-box" disabled></td>
                    </tr>
                    <tr>
                        <td>Birthday :</td>
                        <td><input type="text" id="birthday" class="id-secdisplay-box" disabled></td>
                    </tr>
                    <tr>
                        <td>Specific Day :</td>
                        <td colspan="3"><input type="text" id="spe-day" class="id-secdisplay-box" disabled></td>
                    </tr>
                </table>
            </div>
        </section>

        <section>
            <iframe id="mapFrame" src="https://www.google.com/map?q=Yliopistokatu36Lappeenranta&output=embed" width="50%" height="300px" frameBorder="0"></iframe>
        </section>

        <section>
    
            <div class="heading" id="firstProject">
                <h2>Google Map</h2>
            </div>
        
            <div id="googleMap"></div>
        </section>
        
        
        <script>
        function myMap() {
        var mapProp= {
          center:new google.maps.LatLng(51.508742,-0.120850),
          zoom:5,
        };
        var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
        }
        </script>
        
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyACgo898LLP-K9tkZ2WeDFw14ePzMmv-iI&callback=myMap"></script>
        
        

</html>
