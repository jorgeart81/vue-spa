<script setup lang="ts">
interface Props {
  id: number
}

defineProps<Props>()
</script>

<template>
  <section class="flex flex-col">
    <h1 class="text-3xl font-bold">
      Pokémon <small class="text-blue-500">#{{ id }}</small>
    </h1>
    <img
      :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`"
      alt="pokemon image"
      class="size-52 mt-5"
    />
    <RouterLink
      :to="{ name: 'pokemon', params: { id: id + 1 } }"
      class="bg-blue-500 text-white p-2 rounded mt-2 text-center hover:bg-blue-700"
      >Siguiente</RouterLink
    >
  </section>
</template>
