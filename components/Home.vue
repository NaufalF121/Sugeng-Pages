<script>
import TypeIt from 'typeit';
const colors = ["bg-clip-text text-transparent bg-gradient-to-bl from-yamada-light to-nijika ", "bg-clip-text text-transparent bg-gradient-to-bl from-ikuyo to-hitori", "bg-gradient-to-bl from-hitori to-yamada-light bg-clip-text text-transparent"],
colorIndex = 0;
export default {
    mounted() {
        
        new TypeIt('#interest', {
            speed: 100,
            waitUntilVisible: true,
            loop: true,
        }).type('<span class="bg-clip-text text-transparent bg-gradient-to-bl from-yamada-light to-nijika "> Software</span>')
        .pause(1000).delete(8)
        .type('<span class="bg-clip-text text-transparent bg-gradient-to-bl from-ikuyo to-hitori"> AI</span>')
        .pause(1000).delete(2)
        .type('<span class="bg-gradient-to-bl from-hitori to-yamada-light bg-clip-text text-transparent"> Data</span>')
        .pause(1000).delete(4).go();
    },
}
</script>

<template>
    <section id="home">
        <div class="bg-slate-200 w-full h-dvh relative gap-10 justify-center items-center flex flex-col">
          <div class="relative w-32 h-32">
            <div class="absolute ">
                <!-- <div class="w-64 bg-slate-200 h-64 rounded-full bg-yamada-light blur-3xl brightness-100 z-0"></div> -->
                <div class="w-32 h-32 rounded-full bg-gradient-to-bl from-yamada-light to-nijika z-0 p-1 animate-spin">
                    <div class="w-full h-full rounded-full bg-gradient-to-bl from-yamada-light to-nijika"></div>
                </div>
            </div>
            <div class="p-1 absolute z-10 rounded-full">
                <NuxtImg src="/about.webp" class="w-full h-full rounded-full" />
            </div>
          </div>

            <div class="flex flex-col w-full justify-center items-center gap-5 static">
                <h1 class="lg:text-6xl text-3xl font-mono font-bold">Sugeng.cpp here !🍀</h1>
                <h2 class="lg:text-3xl text-lg font-mono " id="interest">Interested in </h2>
                <div class="cursor-pointer rounded-lg border-2 border-gray-800 p-1 hover:text-gray-100 hover:bg-gray-800"> 
                    <a class="font-mono font-bold" href="mailto:blueshoko@gmail.com">Contact Me</a>
                </div>
                
                <div class="absolute bottom-20 flex flex-row">
                    <a class="text-black">Swipe down</a>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        class="h-6 w-6 ml-2">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </div>
            </div>
            <!-- <div class="w-64 h-64 rounded-md opacity-30 bg-gray-800 absolute bottom-10 left-40 rotate-6 flex flex-row items-center justify-center">
                <a class="text-3xl font-mono font-bold">
                    main.cpp
                </a>
            </div>
            <div class="w-64 h-64 rounded-md opacity-10 bg-gray-700 absolute bottom-10 left-40 "></div>
            <a class="absolute bottom-60 right-20 -rotate-6 font-mono font-bolf text-3xl text-slate-300 opacity-30">include bits/stdc++.h</a> -->


        </div>

    </section>

</template>
