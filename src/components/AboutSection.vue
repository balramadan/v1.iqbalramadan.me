<template>
  <div
    class="section px-8 sm:px-10 lg:px-28 py-10 grid grid-cols-1 md:grid-cols-2"
  >
    <div class="bg-orange-600">
      <div class="pb-5 sm:pb-10 px-8 md:px-28 sm:px-10">
        <h2 class="text-white font-bold text-center text-lg sm:text-2xl">
          About Me
        </h2>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="p-5">
            <div class="flex gap-1 sm:gap-4 justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fff"
                  d="m12.89 3l1.96.4L11.11 21l-1.96-.4zm6.7 9L16 8.41V5.58L22.42 12L16 18.41v-2.83zM1.58 12L8 5.58v2.83L4.41 12L8 15.58v2.83z"
                />
              </svg>
              <p class="text-lg sm:text-xl text-center text-white font-serif">
                Frontend Web Developer
              </p>
            </div>
            <p class="mt-4 text-center opacity-60 text-white">
              I can use HTML/CSS, Javascript and PHP programming languages. I
              can also use frameworks such as VueJs, TailwindCSS, and Bootstrap.
            </p>
            <div class="justify-center flex gap-2 items-center mt-4 text-white">
              <a href="#"
                >See more <i class="fa-solid fa-arrow-right-long"></i
              ></a>
            </div>
          </div>
          <div class="p-5">
            <div class="flex gap-1 sm:gap-4 justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4s8-1.79 8-4s-3.58-4-8-4M4 9v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4s-8-1.79-8-4m0 5v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4s-8-1.79-8-4"
                />
              </svg>
              <p class="text-lg sm:text-xl text-center text-white font-serif">
                Backend Web Developer
              </p>
            </div>
            <p class="mt-4 text-center opacity-60 text-white">
              I am a basic Backend Developer and can use tools such as MySQL and
              Supabase. Can integrate the login system, database, and storage
              provided by Supabase.
            </p>
            <div class="justify-center flex gap-2 items-center mt-4 text-white">
              <a href="#"
                >See more <i class="fa-solid fa-arrow-right-long"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
      <div class="pb-5 sm:pb-10 px-8 md:px-28 sm:px-10">
        <h2 class="text-white font-bold text-center text-lg sm:text-2xl">
          Skills
        </h2>
        <div
          class="carousel rounded-box w-full lg:justify-center items-center gap-4 mt-4"
        >
          <div class="carousel-item tooltip tooltip-right" data-tip="HTML5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="m12 17.56l4.07-1.13l.55-6.1H9.38L9.2 8.3h7.6l.2-1.99H7l.56 6.01h6.89l-.23 2.58l-2.22.6l-2.22-.6l-.14-1.66h-2l.29 3.19zM4.07 3h15.86L18.5 19.2L12 21l-6.5-1.8z"
              />
            </svg>
          </div>
          <div class="carousel-item tooltip tooltip-right" data-tip="CSS3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="m5 3l-.65 3.34h13.59L17.5 8.5H3.92l-.66 3.33h13.59l-.76 3.81l-5.48 1.81l-4.75-1.81l.33-1.64H2.85l-.79 4l7.85 3l9.05-3l1.2-6.03l.24-1.21L21.94 3z"
              />
            </svg>
          </div>
          <div
            class="carousel-item tooltip tooltip-right"
            data-tip="Javascript"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M3 3h18v18H3zm4.73 15.04c.4.85 1.19 1.55 2.54 1.55c1.5 0 2.53-.8 2.53-2.55v-5.78h-1.7V17c0 .86-.35 1.08-.9 1.08c-.58 0-.82-.4-1.09-.87zm5.98-.18c.5.98 1.51 1.73 3.09 1.73c1.6 0 2.8-.83 2.8-2.36c0-1.41-.81-2.04-2.25-2.66l-.42-.18c-.73-.31-1.04-.52-1.04-1.02c0-.41.31-.73.81-.73c.48 0 .8.21 1.09.73l1.31-.87c-.55-.96-1.33-1.33-2.4-1.33c-1.51 0-2.48.96-2.48 2.23c0 1.38.81 2.03 2.03 2.55l.42.18c.78.34 1.24.55 1.24 1.13c0 .48-.45.83-1.15.83c-.83 0-1.31-.43-1.67-1.03z"
              />
            </svg>
          </div>
          <div class="carousel-item tooltip tooltip-right" data-tip="VueJs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M2 3h3.5L12 15l6.5-12H22L12 21zm4.5 0h3L12 7.58L14.5 3h3L12 13.08z"
              />
            </svg>
          </div>
          <div class="carousel-item tooltip tooltip-right" data-tip="Vite">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 510 512"
            >
              <path
                fill="white"
                d="M493.89 58.275L355.178 83.558L379.282 0L186.79 37.718l-2.999 50.64L15.145 58.214C3.53 57.538-3.238 65.879 1.558 77.46l244.056 427.983c5.253 8.575 17.347 8.91 22.65 0L507.575 77.419c5.4-9.676-2.874-21.018-13.685-19.144m-237 435.435L17.87 74.556l164.993 29.491l-7.778 131.365l67.632-15.608l-18.858 92.344l51.374-15.608l-25.495 123.397c-1.27 8.069 9.241 12.362 14.44.812l150.22-299.792l-74.135 14.308l10.086-34.962l140.91-25.684z"
              />
            </svg>
          </div>
          <div
            class="carousel-item tooltip tooltip-right"
            data-tip="TailwindCSS"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M12 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.31.74 1.91 1.35c.98 1 2.09 2.15 4.59 2.15c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6m-5 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12"
              />
            </svg>
          </div>
          <div class="carousel-item tooltip tooltip-left" data-tip="Supabase">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M3.084 15.25c-1.664 0-2.6-1.912-1.58-3.226L10.21.806C10.794.054 12 .466 12 1.42v7.33h8.916c1.663 0 2.6 1.912 1.58 3.226L13.79 23.194c-.584.752-1.79.34-1.79-.613V15.25z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>
