<template>
    <section>
        <h2 class="text-2xl mt-5 mb-2 font-semibold">
            <ContentSlot :use = "$slots.default"/>
        </h2>
        <ul class="list-inside">
            <li class="point">
                <ContentSlot :use = "$slots.default"/>
            </li>
        </ul>
    </section>
  </template>