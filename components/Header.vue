<template>
    <div class="flex flex-row w-full h-14 top-0 bg-transparent items-center pl-5 justify-center pr-5 lg:gap-10 gap-5 z-50">
        <div class="pr-2 pl-2 rounded-md bg-transparent hover:bg-gray-500">
            <NuxtLink to="/" class="text-black font-mono" aria-label="Home" title="Home">
                <Icon name="mdi:home" :size="iconSize" />
                <span class="sr-only">Home</span>
            </NuxtLink>
        </div>
        <div class="pr-2 pl-2 rounded-md bg-transparent hover:bg-gray-500">
            <NuxtLink to="/blog" class="text-black font-mono" aria-label="Blog" title="Blog">
                <Icon name="mdi:post-outline" :size="iconSize" />
                <span class="sr-only">Blog</span>
            </NuxtLink>
        </div>
        <div class="pr-2 pl-2 rounded-md bg-transparent hover:bg-gray-500">
            <NuxtLink to="/project" class="text-black font-mono" aria-label="Projects" title="Projects">
                <Icon name="mdi:briefcase-outline" :size="iconSize" />
                <span class="sr-only">Projects</span>
            </NuxtLink>
        </div>
        <div class="pr-2 pl-2 rounded-md bg-transparent hover:bg-gray-500">
            <NuxtLink to="/about" class="text-black font-mono" aria-label="More" title="More">
                <Icon name="mdi:dots-horizontal-circle-outline" :size="iconSize" />
                <span class="sr-only">More</span>
            </NuxtLink>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            iconSize: 22,
        };
    },
};
</script>
