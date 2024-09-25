<script>
import Navbar from './components/Navbar.vue';
</script>

<template>
  <section id="main-section">
    <section id="content-section">
      <Navbar language="en" />
      <NuxtPage />
    </section>
    <section id="footer-section">
      <Footer />
    </section>
  </section>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap');

body {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  overflow-y: scroll;
}

.newsreader {
  font-family: "Newsreader", serif;
  font-optical-sizing: auto;
  font-weight: bold;
  font-style: normal;
}

.merriweather {
  font-family: "Merriweather", serif;
  font-optical-sizing: auto;
  font-weight: bold;
  font-style: normal;
}

#main-section {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
}

#content-section {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 100%;
  width: 100%;
  max-width: 80vw;
}

#footer-section {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-width: 20vw;
}

main::-webkit-scrollbar {
  display: none;
}

nav {
  font-family: 'Courier New', Courier, monospace;
}

main {
  margin: 0 auto;
  padding: 0 1em;
  max-width: 900px;
  max-height: 100vh;
  overflow-y: scroll;
  scrollbar-width: none;
}

main img {
  max-width: 100%;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
}

@media (max-width: 1200px) {
  body {
    height: 100vh;
    overflow-y: scroll;
  }

  main {
    max-height: unset;
    padding: unset;
    overflow: hidden;
    overflow-x: scroll;
    max-width: 600px;
  }

  #main-section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 96vh;
  }

  #content-section {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 50px;
    width: 100vw;
  }

  main {
    width: 100%;
    max-width: 100vw;
  }
}

table {
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 400px;
}

table thead tr {
  background-color: black;
  color: #ffffff;
  text-align: left;
}

table th, table td {
  padding: 12px 15px;
}

table tbody tr {
    border-bottom: 1px solid #dddddd;
}

table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
}

table tbody tr:last-of-type {
    border-bottom: 2px solid black;
}

table tbody tr.active-row {
    font-weight: bold;
    color: #009879;
}


</style>