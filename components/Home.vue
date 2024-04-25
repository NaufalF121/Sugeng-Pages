<script>
export default {
    data() {
        return {
            i: 0,
            j: 0,
            txt: ["Zwicky", "blueshoko", "Naufal"],
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
                element.innerHTML = "Aka ";
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
        <div class="bg-slate-200 static">
            <div class="static flex flex-col w-full h-dvh justify-center items-center gap-5">
                <h1 class="text-6xl font-mono font-bold">Sugeng.cpp here !🍀</h1>
                <h2 id="name" class="text-3xl font-mono">Aka </h2>
                <div class="absolute bottom-20 flex flex-row">
                    <a class="text-black">Swipe down</a>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 ml-2">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
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
