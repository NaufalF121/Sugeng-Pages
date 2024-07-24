<script lang="ts" setup>
const { slug } = useRoute().params;
</script>

<template>
  <article class="bg-inherit rounded-2xl min-h-dvh w-full flex justify-center">
    <div class="w-full flex flex-col items-center">
      <ContentDoc :path="`/blog/${slug}`" v-slot="{ doc }" class="flex flex-col items-center w-full">
       
        <div class="flex flex-col items-center w-full">
          <div class="text-center p-5">
            <h1 class="text-3xl font-bold lg:w-2/3 mx-auto">{{ doc.title }}</h1>
            <p class="text-gray-500 text-sm mt-2">{{ doc.date }}</p>
          </div>
          <NuxtImg
            v-if="doc.thumb"
            :src="doc.thumb"
            :placeholder="[128, 128, 10, 5]"
            :alt="doc.title"
            sizes="69vw md:30vw"
            class="object-cover rounded-xl"
          />
        </div>
     
        <div class="w-full flex justify-center mt-5">
          <ContentRenderer :value="doc" class="w-2/3 text-justify"/>
        </div>
      </ContentDoc>
    </div>
  </article>
</template>

<style>
.content p:not(:last-child),
.content li:not(:last-child),
.content blockquote:not(:last-child),
.content h1:not(:last-child),
.content h2:not(:last-child),
.content h3:not(:last-child),
.content h4:not(:last-child),
.content pre:not(:last-child),
.content table:not(:last-child) {
  @apply mb-4;
}
.content h1 {
  @apply text-3xl font-bold;
}
.content h2 {
  @apply text-2xl font-bold;
}
.content h3 {
  @apply text-xl font-bold;
}
.content h4 {
  @apply text-lg font-bold;
}
.content h5 {
  @apply text-base font-bold;
}
</style>