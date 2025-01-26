<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20 border-t border-gray-200">

        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <h1 class="h2 mb-4">Creciendo con MotorDeal</h1>
          <p class="text-xl text-gray-600">En MotorDeal, transformamos la compraventa de vehículos, conectando a millones de usuarios y llevando la innovación a nuevos niveles.</p>
        </div>

        <!-- World illustration -->
        <div class="flex flex-col items-center pt-16 pb-12 md:pt-20 md:pb-16">
          <div class="relative">
            <!-- Halo effect -->
            <svg class="absolute inset-0 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none" width="800" height="800" viewBox="0 0 800 800" style="max-width: 200%;" xmlns="http://www.w3.org/2000/svg">
              <g class="fill-current text-gray-400 opacity-75">
                <circle class="pulse" cx="400" cy="400" r="200" />
                <circle class="pulse pulse-1" cx="400" cy="400" r="200" />
                <circle class="pulse pulse-2" cx="400" cy="400" r="200" />
              </g>
            </svg>
            <!-- White box -->
            <svg class="absolute w-32 h-auto rounded-full shadow-xl" viewBox="0 0 128 48" style="width: 32%; top: 20%; right: -16%;" xmlns="http://www.w3.org/2000/svg">
              <rect class="fill-current text-white" width="128" height="48" rx="24" />
            </svg>
            <!-- Globe image -->
            <img class="relative rounded-full shadow-xl" src="../images/planet.png" width="400" height="400" alt="Planet" />
            <!-- Static dots -->
            <svg class="absolute top-0 w-full h-auto" viewBox="0 0 400 400" style="left: 12%;" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter x="-41.7%" y="-34.2%" width="183.3%" height="185.6%" filterUnits="objectBoundingBox" id="world-ill-a">
                  <feOffset dy="4" in="SourceAlpha" result="shadowOffsetOuter1" />
                  <feGaussianBlur stdDeviation="6" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
                  <feColorMatrix values="0 0 0 0 0 0 0 0 0 0.439215686 0 0 0 0 0.956862745 0 0 0 0.32 0" in="shadowBlurOuter1" />
                </filter>
                <filter x="-83.3%" y="-68.5%" width="266.7%" height="271.2%" filterUnits="objectBoundingBox" id="world-ill-c">
                  <feOffset dy="4" in="SourceAlpha" result="shadowOffsetOuter1" />
                  <feGaussianBlur stdDeviation="6" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
                  <feColorMatrix values="0 0 0 0 0 0 0 0 0 0.439215686 0 0 0 0 0.956862745 0 0 0 0.32 0" in="shadowBlurOuter1" />
                </filter>
                <filter x="-7.3%" y="-23.8%" width="114.5%" height="147.6%" filterUnits="objectBoundingBox" id="world-ill-e">
                  <feGaussianBlur stdDeviation="2" in="SourceGraphic" />
                </filter>
                <ellipse id="world-ill-b" cx="51" cy="175.402" rx="24" ry="23.364" />
                <ellipse id="world-ill-d" cx="246" cy="256.201" rx="12" ry="11.682" />
                <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="world-ill-f">
                  <stop stop-color="#0070F4" stop-opacity="0" offset="0%" />
                  <stop stop-color="#0070F4" stop-opacity=".64" offset="52.449%" />
                  <stop stop-color="#0070F4" stop-opacity="0" offset="100%" />
                </linearGradient>
              </defs>
              <g transform="translate(0 -.818)" fill="none" fill-rule="evenodd">
                <use fill="#000" filter="url(#world-ill-a)" xlink:href="#world-ill-b" />
                <use fill="#0070F4" xlink:href="#world-ill-b" />
                <use fill="#000" filter="url(#world-ill-c)" xlink:href="#world-ill-d" />
                <use fill="#0070F4" xlink:href="#world-ill-d" />
                <ellipse fill-opacity=".32" fill="#0070F4" cx="293" cy="142.303" rx="8" ry="7.788" />
                <ellipse fill-opacity=".64" fill="#0070F4" cx="250" cy="187.083" rx="6" ry="5.841" />
                <ellipse fill-opacity=".64" fill="#0070F4" cx="13" cy="233.811" rx="2" ry="1.947" />
                <ellipse fill="#0070F4" cx="29" cy="114.072" rx="2" ry="1.947" />
                <path d="M258 256.2l87-29.204" stroke="#666" stroke-width="2" opacity=".16" filter="url(#world-ill-e)" />
                <path d="M258 251.333c111.333-40.237 141-75.282 89-105.136M136 103.364c66.667 4.543 104.667 32.45 114 83.72" stroke="url(#world-ill-f)" stroke-width="2" stroke-dasharray="2" />
              </g>
            </svg>
            <!-- Dynamic dots -->
            <svg class="absolute max-w-full" width="48" height="48" viewBox="0 0 48 48" style="width: 12%;top: 45%; left: 50%;" xmlns="http://www.w3.org/2000/svg">
              <g class="fill-current text-blue-600">
                <circle class="pulse pulse-mini pulse-1" cx="24" cy="24" r="8" />
                <circle class="pulse pulse-mini pulse-2" cx="24" cy="24" r="8" />
                <circle cx="24" cy="24" r="8" />
              </g>
            </svg>
            <svg class="absolute max-w-full" width="48" height="48" viewBox="0 0 48 48" style="width: 12%;top: 19%; left: 46%;" xmlns="http://www.w3.org/2000/svg">
              <g class="fill-current text-blue-600">
                <circle class="pulse pulse-mini" cx="24" cy="24" r="8" />
                <circle class="pulse pulse-mini pulse-2" cx="24" cy="24" r="8" />
                <circle cx="24" cy="24" r="8" />
              </g>
            </svg>
           
            <svg class="absolute w-32 h-auto rounded-full shadow-xl" viewBox="0 0 128 48" style="width: 32%; top: 35%; left: -25%;" xmlns="http://www.w3.org/2000/svg">
              <rect class="fill-current text-white" width="128" height="48" rx="24" />
            </svg>
            <!-- White box -->
            <svg class="absolute w-32 h-auto rounded-full shadow-xl" viewBox="0 0 128 48" style="width: 32%; top: 52%; right: -41%;" xmlns="http://www.w3.org/2000/svg">
              <rect class="fill-current text-white" width="128" height="48" rx="24" />
            </svg>

          </div>
        </div>

        <!-- Items -->
        <div class="max-w-sm mx-auto grid gap-8 md:gap-16 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-5xl pt-8 md:pt-12">

          <!-- 1st item -->
          <div class="text-center">
            <div class="h3 mb-1">2019</div>
            <div class="text-gray-600">Año en el que MotorDeal fue fundado en Alicante, España.</div>
          </div>

          <!-- 2nd item -->
          <div class="text-center">
            <div class="h3 mb-1">$20M</div>
            <div class="text-gray-600">Transacciones procesadas hasta la fecha a través de la plataforma.</div>
          </div>

          <!-- 3rd item -->
          <div class="text-center">
            <div class="h3 mb-1">50M+</div>
            <div class="text-gray-600">Consultas de usuarios en nuestra plataforma cada mes.</div>
          </div>

          <!-- 4th item -->
          <div class="text-center">
            <div class="h3 mb-1">2900+</div>
            <div class="text-gray-600">Vehículos vendidos cada semana a través de MotorDeal.</div>
          </div>

          <!-- 5th item -->
          <div class="text-center">
            <div class="h3 mb-1">40K</div>
            <div class="text-gray-600">Anuncios publicados desde nuestro lanzamiento.</div>
          </div>

          <!-- 6th item -->
          <div class="text-center">
            <div class="h3 mb-1">Miles</div>
            <div class="text-gray-600">De usuarios satisfechos que han confiado en MotorDeal.</div>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Stats',
}
</script>