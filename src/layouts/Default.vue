<template>
  <div class="container mx-auto p-10">
    <header class="mb-10">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="flex gap-x-2">
        <g-link class="text-lg text-blue-800 hover:text-green-800" to="/">Home</g-link>
        <g-link class="text-lg text-blue-800 hover:text-green-800" to="/blog">Blog</g-link>
      </nav>
    </header>
    <main class="mb-10">
      <slot />
    </main>
    <footer>
      Built with
      <a class="text-lg text-blue-800 hover:text-green-800"
         href="https://gridsome.org/docs"
         rel="noopener"
         target="_blank">Gridsome
      </a>
      by
      <a class="text-lg text-blue-800 hover:text-green-800"
         href="https://github.com/teziovsky"
         rel="noopener"
         target="_blank">Jakub Soboczyński
      </a>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>

</style>
