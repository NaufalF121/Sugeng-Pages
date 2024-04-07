<script>
export default {
  data() {
    return {
      i: 0,
      j: 0,
      txt: ['Zwicky', 'blueshoko', 'Naufal'],
      speed: 200,
    };
  },
  methods: {deleteWriter() {
    if (this.j >= 0) {
      document.getElementById('name').innerHTML = document.getElementById('name').innerHTML.slice(0, -1);
      this.j--;
      setTimeout(this.deleteWriter, this.speed);
    } else {
      this.j = 0;
      if (this.i === this.txt.length - 1) {
        this.i = 0;
      } else {
        this.i++;
      }
      document.getElementById('name').innerHTML = 'Aka ';
      setTimeout(this.typeWriter, this.speed);
    }
  },
    typeWriter() {
      if (this.j < this.txt[this.i].length) {
        document.getElementById('name').innerHTML += this.txt[this.i].charAt(this.j);
        this.j++;
        setTimeout(this.typeWriter, this.speed);
      } else {
      setTimeout(this.deleteWriter, this.speed);
      }
    }
  },
  mounted() {
    this.typeWriter();
  }
};
</script>

<template>
  <div class="flex flex-col bg-yamada justify-center items-center gap-2">
    <Header />
    <div
      class="flex flex-col w-full h-dvh bg-yamada justify-center items-center gap-5"
    >
      <h1 class="text-6xl font-mono font-bold">Sugeng.cpp here !</h1>
      <h2 id="name" class="text-3xl font-mono">Aka </h2>
    </div>
  </div>
</template>
