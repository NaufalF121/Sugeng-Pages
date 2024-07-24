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
            height="450"
            class="object-cover"
          />
        </div>
     
        <div class="w-full flex justify-center mt-5">
          <ContentRenderer :value="doc" class="w-2/3 text-justify"/>
        </div>
      </ContentDoc>
    </div>
  </article>
</template>

