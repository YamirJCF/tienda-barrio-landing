<script setup lang="ts">
import { RouterLink } from 'vue-router'
import AnimatedFinanzas from '../components/AnimatedFinanzas.vue'

const APP_URL = 'https://detuconfianza.vercel.app'
</script>

<template>
  <div>
    <!-- HERO -->
    <section class="detail-hero">
      <div class="container">
        <RouterLink to="/" class="back-link">← Volver al inicio</RouterLink>
        <p class="t-label" style="margin-top: 32px;">Pilar 01</p>
        <h1 class="t-display" style="margin-top: 8px; max-width: 640px;">Finanzas, Reportes y Rentabilidad</h1>
        <div class="divider" style="margin-top: 20px;"></div>
        <p class="t-subheading" style="max-width: 540px;">Dejar de suponer para empezar a crecer.</p>
      </div>
    </section>

    <!-- PROBLEMA -->
    <section class="section">
      <div class="container detail-grid">
        <div class="detail-text">
          <p class="t-label" style="color: var(--red-text);">El problema</p>
          <h2 class="t-heading" style="margin-top: 8px;">¿Por qué no ves la plata que ganas?</h2>
          <div class="divider"></div>
          <p class="t-body">
            La mezcla del "dinero de bolsillo" y la dependencia del "gota a gota" ocurren cuando no sabes cuánto ganas realmente en un día. La práctica más destructiva es usar los ingresos diarios de la venta para cubrir gastos familiares sin control alguno.
          </p>
          <p class="t-body" style="margin-top: 12px;">
            Esto impide conocer la rentabilidad real, provoca descapitalización progresiva y lleva a suponer que todo el dinero en caja es ganancia, cuando en realidad una gran parte se debe destinar a <strong style="color: var(--gray-900);">reponer mercancía y cubrir costos operativos</strong>.
          </p>
          <div class="callout callout-warning" style="margin-top: 24px;">
            <p>Sin datos financieros claros, no puedes acceder a créditos bancarios formales. Y sin crédito formal, dependes del "gota a gota" con tasas de usura. Es un ciclo vicioso que solo se rompe con <strong>información real</strong>.</p>
          </div>
        </div>
        <div class="detail-image">
          <div class="anim-wrapper" style="width: 100%; max-width: 440px;">
            <AnimatedFinanzas />
          </div>
        </div>
      </div>
    </section>

    <!-- CAMBIO -->
    <section class="section" style="background: var(--gray-50);">
      <div class="container">
        <p class="t-label">El cambio en tu negocio</p>
        <h2 class="t-heading" style="margin-top: 8px;">Tu contador automático, en tu bolsillo.</h2>
        <div class="divider"></div>
        <p class="t-body" style="max-width: 640px;">
          Tienda Barrio Pro actúa como tu contador personal. Por primera vez, verás la separación exacta entre lo que vendiste (ingresos) y lo que realmente te quedó libre (utilidad).
        </p>
        <div class="benefits-grid">
          <div class="benefit">
            <h4 class="benefit-title">Rentabilidad por producto</h4>
            <p class="t-body">Descubre cuáles productos te dejan más ganancia y cuáles estás vendiendo prácticamente "al costo".</p>
          </div>
          <div class="benefit">
            <h4 class="benefit-title">Reportes de venta diarios</h4>
            <p class="t-body">Cada noche sabrás exactamente cuánto vendiste, cuánto costó tu mercancía vendida y cuánto quedó neto.</p>
          </div>
          <div class="benefit">
            <h4 class="benefit-title">Ticket promedio</h4>
            <p class="t-body">Conoce el valor promedio de cada compra por cliente. Mide si tus estrategias de venta están funcionando.</p>
          </div>
          <div class="benefit">
            <h4 class="benefit-title">Historial formal</h4>
            <p class="t-body">Al registrar tus ventas diarias, construyes un historial formal. El primer paso para demostrar ingresos ante un banco.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- REGLA -->
    <section class="section" style="background: var(--gray-950);">
      <div class="container" style="max-width: 680px; text-align: center;">
        <p class="t-label" style="color: var(--amber);">La regla del tendero pro</p>
        <h2 class="t-heading" style="color: var(--white); margin-top: 8px;">Los reportes solo son útiles si eres estricto.</h2>
        <p class="t-body" style="color: var(--gray-400); margin-top: 16px;">
          Si registras cada chicle que vendes, el sistema te dará una radiografía exacta. Si omites ventas, el reporte te mentirá. El sistema no hace el trabajo duro — tú le das la verdad y él te devuelve el control.
        </p>
      </div>
    </section>

    <!-- CTA -->
    <section class="section" style="text-align: center;">
      <div class="container" style="display: flex; flex-direction: column; align-items: center;">
        <h2 class="t-heading">Empieza a ver tus ganancias reales hoy.</h2>
        <div style="display: flex; gap: 12px; margin-top: 28px; flex-wrap: wrap; justify-content: center;">
          <a :href="`${APP_URL}/#/register-store`" class="btn btn-primary">Comenzar ahora</a>
          <RouterLink to="/inventario" class="btn btn-outline">Siguiente: Inventario</RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.detail-hero { padding: 48px 24px 64px; background: var(--gray-50); }
.back-link {
  font-size: 0.9rem; color: var(--gray-500); text-decoration: none;
  transition: color 0.2s;
}
.back-link:hover { color: var(--gray-900); }
.detail-grid { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 56px; align-items: start; }
.detail-image { position: sticky; top: 96px; }
.detail-image .app-frame { max-width: 340px; }
.benefits-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: var(--gray-200); border: 1px solid var(--gray-200); border-radius: var(--radius-lg); overflow: hidden; margin-top: 36px; }
.benefit { background: var(--white); padding: 32px 28px; }
.benefit-title { font-size: 1.05rem; font-weight: 700; color: var(--gray-900); margin-bottom: 6px; }

@media (max-width: 768px) {
  .detail-grid { grid-template-columns: 1fr; }
  .detail-image { position: static; display: flex; justify-content: center; }
  .benefits-grid { grid-template-columns: 1fr; }
}
</style>
