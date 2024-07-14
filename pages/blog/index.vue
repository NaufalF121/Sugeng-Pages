<template>
    <main class="w-full min-h-dvh">


        <div class="w-full mt-10 flex flex-col items-center">
            <h1 class="text-4xl font-bold text-center mb-5">Personal blog</h1>
            <IconField class="w-2/3 flex items-center justify-items-center my-10 bg-transparent">
                <div class="mr-1 w-full rounded-md h-8">
                    <InputText placeholder=" Search" class="mr-1 w-full rounded-md h-8" v-model="search" />
                </div>
                <InputIcon class="pi pi-search p-2 rounded-md" />
            </IconField>
            <div class="w-full h-8 rounded-md flex flex-col items-center" v-if="search != ''">
                <!-- <p class="text-gray-500 text-center">
                    Search results: {{ results.length }}
                </p>
                <div v-if="results.length === 0" class="text-center text-gray-500">
                    No results found
                </div> -->
                <div class="grid grid-cols-1 w-2/3 gap-4">
                    <div v-for="result in results" :key="result.id" class="bg-white hover:shadow-md p-4 rounded-md flex flex-row">
                        <ContentDoc :path="result.id" v-slot="{ doc }">
                            <div class="mr-2 gap-2 w-2/3">
                                <h2 class="text-xl font-bold">{{ doc.title }}</h2>
                                <p class="text-gray-500">{{ doc.description }}</p>
                                <p class="text-gray-500">{{ doc.date }}</p>
                                <NuxtLink :to="`/blog/${doc.slug}`" class="text-blue-500">Read more</NuxtLink>
                            </div>
                            <NuxtImg :src="doc.thumb" :alt="doc.title" class="w-1/3 h-48 object-cover rounded-md" />
                        </ContentDoc>
                    </div>
                </div>
            </div>
            <ContentList path="/blog" v-slot="{ list }" v-else>
                <div class="grid grid-cols-1 w-2/3 gap-4">
                    <div v-for="blog in list" :key="blog._path"
                        class="bg-white hover:shadow-md p-4 w-full rounded-md flex flex-row">
                        <div class="mr-2 gap-2 w-2/3">
                            <h2 class="text-xl font-bold">{{ blog.title }}</h2>
                            <p class="text-gray-500">{{ blog.description }}</p>
                            <p class="text-gray-500">{{ blog.date }}</p>
                            <NuxtLink :to="`/blog/${blog.slug}`" class="text-blue-500">Read more</NuxtLink>
                        </div>
                        <NuxtImg :src="blog.thumb" :alt="blog.title" class="w-1/3 h-48 object-cover rounded-md" />
                    </div>

                </div>
            </ContentList>
        </div>

    </main>
</template>

<script lang="ts" setup>

import "primeicons/primeicons.css";
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';

const search  = ref('')

const results = await searchContent(search)
</script>
