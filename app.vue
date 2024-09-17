<script>
import Navbar from './components/Navbar.vue';
</script>

<template>
  <section id="main-section">
    <Navbar language="en" />
    <NuxtPage />
  </section>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap');

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
}

nav {
  font-family: 'Courier New', Courier, monospace;
}

main {
  max-width: 600px;
  margin: 0 auto;
}

main img {
  max-width: 100%;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
}

@media (max-width: 1200px) {
  #main-section {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 50px;
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