<template>
  <div class="flex flex-col h-screen">
    <!-- Header -->
    <header
      class="relative flex items-center px-4 border-b border-gray-300 sm:min-h-16 md:px-6 lg:px-8"
    >
      <div>
        <a class="flex items-center gap-2 font-semibold" href="#">
          <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="40" height="40" />
        </a>
      </div>
      <nav class="ml-auto space-x-4 flex items-center h-10 sm:space-x-6">
        <div class="flex gap-4">
          <RouterLink :to="{ name: 'home' }" exact-active-class="underline font-semibold">
            Home
          </RouterLink>
          <RouterLink :to="{ name: 'features' }" exact-active-class="underline font-semibold">
            Features
          </RouterLink>
          <RouterLink :to="{ name: 'pricing' }" exact-active-class="underline font-semibold">
            Pricing
          </RouterLink>
          <RouterLink :to="{ name: 'contact' }" exact-active-class="underline font-semibold">
            Contact
          </RouterLink>
          <RouterLink
            :to="{ name: 'pokemon', params: { id: 1 } }"
            exact-active-class="underline font-semibold"
          >
            Pokemon
          </RouterLink>
        </div>
        <RouterLink :to="{ name: 'login' }"> Login </RouterLink>
        <div></div>
      </nav>
    </header>
    <!-- Fin Header -->

    <!-- Main -->
    <main class="flex-1 flex items-center justify-center relative h-full">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
      <!-- <RouterView /> -->
    </main>
    <!-- Fin Main -->

    <!-- Footer -->
    <footer
      class="relative flex items-center h-14 px-4 border-t border-gray-300 sm:min-h-16 md:px-6 lg:px-8"
    >
      <p class="flex-1 text-sm text-gray-500 text-center">
        © {{ new Date().getFullYear() }} Acme Corporation. Derechos reservados
      </p>
    </footer>
    <!-- Fin Footer -->
  </div>
</template>
