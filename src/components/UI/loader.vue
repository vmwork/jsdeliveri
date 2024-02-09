<template>
  <div class="loader"></div>
</template>

<style></style>
<style scoped>
.loader {
  position: absolute;
  top: 40%;
  left: 40%;
  width: 40px;
  aspect-ratio: 1;
  --c: linear-gradient(#f57c00 0 0);
  --m: radial-gradient(farthest-side, #f57c00 92%, #f57c00);
  background: var(--c), var(--m), var(--c), var(--m), var(--c), var(--m);
  background-size: 8px 15px, 8px 8px;
  background-repeat: no-repeat;
  animation: l14 1s infinite alternate;

  z-index: 100000;
}
@keyframes l14 {
  0%,
  10% {
    background-position: 0 0, 0 100%, 50% 0, 50% 100%, 100% 0, 100% 100%;
  }
  33% {
    background-position: 0 100%, 0 0, 50% 0, 50% 100%, 100% 0, 100% 100%;
  }
  66% {
    background-position: 0 100%, 0 0, 50% 100%, 50% 0, 100% 0, 100% 100%;
  }
  90%,
  100% {
    background-position: 0 100%, 0 0, 50% 100%, 50% 0, 100% 100%, 100% 0;
  }
}
</style>
