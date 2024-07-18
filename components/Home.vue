<script>
export default {
    data() {
        return {
            i: 0,
            j: 0,
            txt: ["Software", "Data", "AI"],
            speed: 200,
        };
    },
    methods: {
        deleteWriter() {
            const element = document.getElementById("name");
            if (!element) {
                console.log("Element not found");
                return;
            }
            if (this.j >= 0) {
                element.innerHTML = element
                    .innerHTML.slice(0, -1);
                this.j--;
                setTimeout(this.deleteWriter, this.speed);
            } else {
                this.j = 0;
                if (this.i === this.txt.length - 1) {
                    this.i = 0;
                } else {
                    this.i++;
                }
                element.innerHTML = "Interested in ";
                setTimeout(this.typeWriter, this.speed);
            }
        },
        typeWriter() {
            const element = document.getElementById("name");
            if (!element) {
                console.log("Element not found");
                return;
            }
            if (this.j < this.txt[this.i].length) {
                element.innerHTML += this.txt[this.i].charAt(
                    this.j
                );
                this.j++;
                setTimeout(this.typeWriter, this.speed);
            } else {
                setTimeout(this.deleteWriter, this.speed);
            }
        },
    },
    mounted() {
        this.typeWriter();
    },
};
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
                <h2 id="name" class="lg:text-3xl text-lg font-mono ">Interested in </h2>
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
