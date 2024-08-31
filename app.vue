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
    overflow: hidden;
  }
</style>



<template>
  <Head>
      <Title>{{ "Naufal Farras Pratama" }}</Title>
      <Meta name="description" :content="'This Website telling about myself as programmer'" />
  </Head>
  <div class="flex flex-col bg-slate-200 justify-center items-center">
    
    <Header/>
    <NuxtPage :page-key="route => route.fullPath" />
    <Footer/>
  </div>
</template>
