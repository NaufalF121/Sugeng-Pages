<template>
    <div class="flex flex-col bg-slate-200 justify-center items-center min-h-dvh">
        <a class="mb-4 text-2xl">
            Let's <span class="text-blue-500">Connect</span> !
        </a>
        <div class="w-64 h-64 bg-slate-800 rounded-xl grid grid-cols-2 gap-4 place-items-center">
            <div class="relative group">
                <Icon
                    name="mdi:instagram"
                    color="white"
                    :size="iconSize"
                    class="group-hover:blur-sm"
                />
                <NuxtLink to="https://www.instagram.com/farraspratama/" class="absolute cursor-pointer inset-0 flex items-center justify-center text-white text-outline-black opacity-0 group-hover:opacity-100">
                    Instagram
                </NuxtLink>
            </div>
            <div class="relative group cursor-pointer">
                <Icon
                    name="mdi:facebook"
                    color="white"
                    :size="iconSize"
                    class="group-hover:blur-sm"
                />
                <NuxtLink to="https://www.facebook.com/naufal.farraspratama/" class="absolute cursor-pointer inset-0 flex items-center justify-center text-white text-outline-black opacity-0 group-hover:opacity-100">
                    Facebook
                </NuxtLink>
            </div>
            <div class="relative group">
                <Icon
                    name="mdi:linkedin"
                    color="white"
                    :size="iconSize"
                    class="group-hover:blur-sm"
                />
                <NuxtLink to="https://www.linkedin.com/in/naufal-farras-pratama-7467691b7/" class="absolute cursor-pointer inset-0 flex items-center justify-center text-white text-outline-black opacity-0 group-hover:opacity-100">
                    LinkedIn
                </NuxtLink>
            </div>
            <div class="relative group">
                <Icon
                    name="mdi:github"
                    color="white"
                    :size="iconSize"
                    class="group-hover:blur-sm"
                />
                <NuxtLink to="https://github.com/NaufalF121" class="absolute cursor-pointer inset-0 flex items-center justify-center text-white text-outline-black opacity-0 group-hover:opacity-100">
                    GitHub
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  
  setup() {
    return {
      iconSize: "100",
    };
  },
  mounted() {
    this.updateIconSize();
    window.addEventListener('resize', this.updateIconSize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateIconSize);
  },
  methods: {
    updateIconSize() {
      if (window.innerWidth < 768) { // Example breakpoint at 768px
        this.iconSize = "50"; // Smaller size for smaller screens
      } else {
        this.iconSize = "100"; // Default size for larger screens
      }
    },
  },
};
</script>

<style>
.text-outline-black {
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
}
</style>