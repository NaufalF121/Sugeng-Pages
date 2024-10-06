<template>
  <section id="exp" class="mt-10 p-5">
    <div
      class="flex flex-col w-full h-auto bg-slate-200 relative justify-center items-center gap-5"
    >
      <h1 class="lg:text-4xl text-2xl font-bold text-gray-800">
        See what i've been doing so far..
      </h1>
      <div
        class="mx-auto mt-10 grid grid-cols-1 lg:grid-cols-2 row-auto gap-10 px-2 md:columns-3 md:px-5 lg:columns-2 mb-10 lg:px-10"
      >
        <div
          class="relative cursor-pointer p-4 h-full w-full before:opacity-50 bg-gray-100 hover:shadow-lg rounded-lg"
        >
          <NuxtLink
            to="https://github.com/NaufalF121/satria_data"
            class="text-2xl font-bold text-gray-800"
          >
            License Plate Vehicle OCR
          </NuxtLink>

          <NuxtImg
            src="project/ocr.png"
            alt="License Plate Vehicle OCR"
            class="object-cover rounded-lg h-48 w-full my-5"
          />

          <p class="text-sm">
            <a class="text-gray-800">Self project</a> |
            <a class="text-gray-400">June 2022</a>
          </p>
          <p class="text-gray-800 text-justify mt-3">
            Me and my team are working on a project called "License Plate
            Vehicle OCR" which is a project for our Satria Data competition.
            This project is about recognizing the license plate of a vehicle in
            Indonesia using OCR technology, Our Score get 97% Accuracy.
          </p>
        </div>
        <div
          class="relative cursor-pointer p-4 h-full w-full before:opacity-50 bg-gray-100 hover:shadow-lg rounded-lg"
        >
          <NuxtLink
            to="https://github.com/NaufalF121/PeminjamanLab"
            class="text-2xl font-bold text-gray-800"
            >Management Lab WebApp</NuxtLink
          >
          <NuxtImg
            src="project/lab.png"
            alt="License Plate Vehicle OCR"
            class="object-cover rounded-lg h-48 w-full my-5"
          />
          <p class="text-sm">
            <a class="text-gray-800">Self project</a> |
            <a class="text-gray-400">November 2023</a>
          </p>
          <p class="text-gray-800 text-justify mt-3">
            Me and my team are working on a project called "Management Lab
            WebApp" which is a project for our Software Engineering course. This
            project is about managing the lab in our campus, we use React for
            the frontend and Next for the app route.
          </p>
        </div>
        <div
          class="relative cursor-pointer p-4 h-full w-full before:opacity-50 bg-gray-100 hover:shadow-lg rounded-lg"
        >
          <NuxtLink
            to="https://github.com/NaufalF121/DigitRecognizerFromScratch"
            class="text-2xl font-bold text-gray-800"
            >Digit Recognizer using Residual Net</NuxtLink
          >
          <NuxtImg
            src="project/digit.png"
            alt="License Plate Vehicle OCR"
            class="object-cover rounded-lg h-48 w-full my-5"
          />
          <p class="text-sm">
            <a class="text-gray-800">Self project</a> |
            <a class="text-gray-400">December 2023</a>
          </p>
          <p class="text-gray-800 text-justify mt-3">
            Me and my team are working on a project called "Management Lab
            WebApp" which is simple digit recognizer from scratch using python
            and pytorch. The model is trained on MNIST dataset. The model is
            trained using resnet architecture. The model is trained on 60,000
            images and tested on 10,000 images. The model has an accuracy of
            99.01% on the test set. The model is then deployed on a web UI using
            Flask.
          </p>
        </div>
        <div
          class="relative cursor-pointer p-4 h-full w-full before:opacity-50 bg-gray-100 hover:shadow-lg rounded-lg"
        >
          <NuxtLink
            to="https://github.com/NaufalF121/PeminjamanLab"
            class="text-2xl font-bold text-gray-800"
            >Realtime Face Censor</NuxtLink
          >
          <NuxtImg
            src="project/private.png"
            alt="License Plate Vehicle OCR"
            class="object-cover rounded-lg h-48 w-full my-5"
          />
          <p class="text-sm">
            <a class="text-gray-800">Self project</a> |
            <a class="text-gray-400">November 2023</a>
          </p>
          <p class="text-gray-800 text-justify mt-3">
            Me and my team are working on a project called "Realtime Face
            Censor" which is a project for child abusive prevention in realtime
            using Yolo as object detection and Resnet for classification if the
            face is minor or not. The project is still in prototype and need
            further development.
          </p>
        </div>
        <div
          class="relative cursor-pointer p-4 h-full w-full before:opacity-50 bg-gray-100 hover:shadow-lg rounded-lg"
        >
          <NuxtLink
            to="https://animagine.vercel.app/"
            class="text-2xl font-bold text-gray-800"
            >Animagine 3.0</NuxtLink
          >
          <NuxtImg
            src="project/animagine.png"
            alt="License Plate Vehicle OCR"
            class="object-cover rounded-lg h-48 w-full my-5"
          />
          <p class="text-sm">
            <a class="text-gray-800">Cagliostro Research Lab</a> |
            <a class="text-gray-400">March 2024</a>
          </p>
          <p class="text-gray-800 text-justify mt-3">
            Contributing building a website for Animagine 3.0, A model from
            stable difussion that has been fine tuned to generate high quality
            anime faces. Beside building website I also help to build the model
            and the training process especially in data preprocessing.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
