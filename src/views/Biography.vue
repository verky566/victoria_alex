<template>

    <body>
    <main>
      <div id="app">
      <header>
        <h1>Biography</h1>
      </header>
        <div>
            <section>
          <p>Hello, my name is Victoria Villagomez. I've always
                been interested in technology growing up but I never had
                confidence in myself to actually learn how to code. 
                I graduated from California State University Northridge in 2018
                with a degree in Public Health. I was born and
                raised in Oxnard, CA and I currently reside in
                this mid-sized city.
            </p>
            
            </section>
        </div>
        <div>
            <h2 class="title2">Work Experience</h2>
            <div class="box">
                <div class="work_info">
                  <h3>Program Analyst</h3>
                    <h4>NAVSEA</h4>
                    <h5>2021 - Present</h5>
                </div>
                <div class="text">
                  
                    <p>Proficient in outputting reports using Navy Enterprise Resource Planning (ERP) transaction codes (T-codes) to analyze and monitor funds such as accounting, budget, obligations, and remaining funds.
                  Created financial reports and implemented new processes utilizing Microsoft Excel PivotTables, Power Query, and VBA (macros).</p>
                </div>
            </div>

            <div class="box">
                <div class="work_info">
                  <h3>Logistician</h3>
                  <h4>NAVSEA</h4>
                    <h5>2018 - 2021</h5>
                   
                </div>
                <div class="text">
                   
                    <p>Developing macros to import, convert, and aggregate various file types together. Conducting research using multiple databases.</p>
                </div>
            </div>

            <div class="box">
                <div class="work_info">
                  <h3>Internship</h3>
                  <h4>NAVSEA</h4>
                  <h5>2016 - 2018</h5>
                </div>
                <div class="text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
        </div>
        <div class="about skills">
            <h2 class="title2">Tech Skills</h2>
            <div class="box">
                <h4>HTML</h4>
                <div class="percent">
                    <div class="html"></div>
                </div>
            </div>
            <div class="box">
                <h4>CSS</h4>
                <div class="percent">
                    <div class="css3"></div>
                </div>
            </div>
            <div class="box">
                <h4>JavaScript</h4>
                <div class="percent">
                    <div class="javascript"></div>
                </div>
            </div>
            <div class="box">
                <h4>Vue3</h4>
                <div class="percent">
                    <div class="vue"></div>
                </div>
            </div>
            <div class="box">
                <h4>Application Development</h4>
                <div class="percent">
                    <div class="appdev"></div>
                </div>
            </div>
            <div class="box">
                <h4>ES6</h4>
                <div class="percent">
                    <div class="ES6"></div>
                </div>
            </div>
        </div>
  </div>
</main>
</body>
</template>

<script>



</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", SansSerif;
}

section { 
  padding: 20px;
}

body {
  background-color: lightblue;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}



.percent {
  position: relative;
  width: 100%;
  height: 6px;
  background-color: #081921;
  display: block;
  margin-top: 5px;
}
 .percent div {
  position: relative;
  top: 0;
  left: 0;
  height: 100%;
  background-color: #03a9f4;
}


.html {
  width: 90%;
}
.css3 {
  width: 70%;
}
.javascript {
  width: 60%;
}
.vue {
  width: 50%;
}
.appdev {
  width: 65%;
}
.ES6 {
  width: 68%;
}



.about {
  margin-bottom: 0px;
}
.about:last-child {
  margin-bottom: 0;
}
.title2 {
  color: #003147;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 10px;
}
p {
  color: #081921;
}
.about .box {
  display: flex;
  flex-direction: row;
  margin: 20px;
  
}
.about .box .work_info {
  min-width: 150px;
}
.about .box .work_info h5 {
  text-transform: uppercase;
  color: #848c90;
  font-weight: 600;
}
.about .box .text h4 {
  text-transform: uppercase;
  color: #2a7da2;
  font-size: 16px;
}
.skills .box {
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: 150px 1fr;
  justify-content: center;
  align-items: center;
}
.skills .box h4 {
  text-transform: uppercase;
  color: #848c90;
  font-weight: 500;
}
.skills .box .percent {
  position: relative;
  width: 100%;
  height: 10px;
  background-color: #f0f0f0;
}
.skills .box .percent div {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: #f1bfe7;
}

@media (max-width: 600px) {
  .about .box {
    flex-direction: column;
  }
  .about .box .work_info {
    margin-bottom: 5px;
  }
  .skills .box {
    grid-template-columns: repeat(1, 1fr);
  }
}

</style>




