<template>
    <Home />
    <About/>
    <Techstack/>
    <Experiance/>
</template>

<style>
  ::-webkit-scrollbar {
    display: none;
  }
  body::-webkit-scrollbar {
    display: none;
  }
  body {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    overflow-x: hidden;  /* Hide horizontal overflow */
    overflow-y: auto;  /* Allow vertical scrolling */
    height: 100vh;  /* Ensure body takes full viewport height */
    margin: 0;  /* Remove default margin */
  }
  html {
    height: 100%;  /* Ensure html takes full viewport height */
    overflow-x: hidden;  /* Hide horizontal overflow */
  }
</style>
