<template>
  <section class="bg-gradient-to-b from-gray-100 to-white border-t border-gray-200">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20">

        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 class="h2">El equipo detrás de MotorDeal</h2>
        </div>

        <!-- Team members -->
        <div class="max-w-sm sm:max-w-5xl mx-auto sm:flex sm:flex-wrap sm:justify-center -my-6 sm:-my-8 sm:-mx-3" data-aos-id-team>

          <!-- 1st member -->
          <div class="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-anchor="[data-aos-id-team]">
            <div class="flex flex-col items-center">
              <img class="rounded-full mb-4" src="../images/aurelio.jpeg" width="120" height="120" alt="Team member 01" />
              <h4 class="text-xl font-bold mb-1">Aurelio Bonilla</h4>
              <div class="text-blue-600 font-medium mb-2">CEO & Co-founder</div>
              <p class="text-gray-600 text-center mb-3">Apasionado por la tecnología y el mundo del motor, Aurelio lidera MotorDeal con la visión de conectar personas y vehículos de manera innovadora.</p>
              <div class="text-sm text-gray-600 font-medium">
                 <a class="text-gray-900 hover:underline" href="https://github.com/aurebonilla">GitHub</a> · <a class="text-gray-900 hover:underline" href="#0">LinkedIn</a>
              </div>
            </div>
          </div>

          <!-- 2nd member -->
          <div class="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="150" data-aos-anchor="[data-aos-id-team]">
            <div class="flex flex-col items-center">
              <img class="rounded-full mb-4" src="../images/javier.jpg" width="120" height="120" alt="Team member 02" />
              <h4 class="text-xl font-bold mb-1">Javier Orts</h4>
              <div class="text-blue-600 font-medium mb-2">CTO & Co-founder</div>
              <p class="text-gray-600 text-center mb-3">Javier aporta su experiencia en desarrollo tecnológico, asegurando que MotorDeal sea una plataforma moderna y eficiente.</p>
              <div class="text-sm text-gray-600 font-medium">
                <a class="text-gray-900 hover:underline" href="https://github.com/jogo2-ua">GitHub</a> · <a class="text-gray-900 hover:underline" href="#0">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Team',
}
</script>