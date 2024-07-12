<template>
    <main>
        <ContentList path="/blog" v-slot="{list}">
            <div class="w-full h-dvh mt-10 flex flex-col items-center">
                <h1 class="text-4xl font-bold text-center mb-5">Personal blog</h1>
                <IconField class="w-2/3 flex items-center justify-items-center my-10 bg-transparent">
                    <InputText placeholder=" Search" class="mr-1 w-full rounded-md h-8" />
                    <InputIcon class="pi pi-search p-2 bg-white rounded-md"/>
                </IconField>
                <div class="grid grid-cols-1 md:grid-cols-2  gap-4">
                    <div v-for="blog in list" :key="blog._path" class="bg-white shadow-md p-4">
                        <h2 class="text-xl font-bold">{{ blog.title }}</h2>
                    </div>
                </div>
            </div>

        </ContentList>
    </main>
</template>
<script>
import 'primeicons/primeicons.css'
</script>