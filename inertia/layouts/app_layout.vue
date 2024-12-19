<script setup>
import { Link } from '@inertiajs/vue3'
</script>

<template>
  <div class="min-h-screen bg-base-200">
    <header class="navbar bg-base-100 shadow-lg">
      <div class="">
        <Link href="/" class="btn btn-ghost normal-case text-xl"> Flashcards App </Link>
      </div>
    </header>

    <main>
      <slot />
    </main>
  </div>
</template>
