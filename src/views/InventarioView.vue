<script setup lang="ts">
import { RouterLink } from 'vue-router'
import AnimatedInventario from '../components/AnimatedInventario.vue'

const APP_URL = 'https://detuconfianza.vercel.app'
</script>

<template>
  <div>
    <!-- HERO -->
    <section class="detail-hero">
      <div class="container">
        <RouterLink to="/" class="back-link">← Volver al inicio</RouterLink>
        <p class="t-label" style="margin-top: 32px;">Pilar 02</p>
        <h1 class="t-display" style="margin-top: 8px; max-width: 640px;">Control de Inventario y Protección de Capital</h1>
        <div class="divider" style="margin-top: 20px;"></div>
        <p class="t-subheading" style="max-width: 540px;">Tu mercancía es dinero en efectivo disfrazado.</p>
      </div>
    </section>

    <!-- PROBLEMA -->
    <section class="section">
      <div class="container detail-grid">
        <div class="detail-text">
          <p class="t-label" style="color: var(--red-text);">El problema</p>
          <h2 class="t-heading" style="margin-top: 8px;">Las fugas silenciosas que desangran tu negocio.</h2>
          <div class="divider"></div>
          <p class="t-body">
            El stock muerto (mercancía que no rota), los productos vencidos y los quiebres de stock (cuando un cliente te pide algo y no tienes) son fugas silenciosas de capital que te impiden competir.
          </p>
          <p class="t-body" style="margin-top: 12px;">
            Las mermas por "robo hormiga" pueden representar entre el <strong style="color: var(--gray-900);">3% y el 5%</strong> de las pérdidas totales del negocio. Pequeñas sustracciones continuas que, al no ser detectadas, se acumulan mes a mes.
          </p>
          <div class="callout callout-warning" style="margin-top: 24px;">
            <p>El exceso de inventario (sobrestock) es uno de los problemas financieros más graves: tu capital queda <strong>"atrapado" en productos que no rotan</strong>, afectando la liquidez necesaria para pagar a proveedores.</p>
          </div>
        </div>
        <div class="detail-image">
          <div class="anim-wrapper" style="width: 100%; max-width: 380px;">
            <AnimatedInventario />
          </div>
        </div>
      </div>
    </section>

    <!-- CAMBIO -->
    <section class="section" style="background: var(--gray-50);">
      <div class="container">
        <p class="t-label">El cambio en tu negocio</p>
        <h2 class="t-heading" style="margin-top: 8px;">Tu inventario deja de estar "en la cabeza".</h2>
        <div class="divider"></div>
        <p class="t-body" style="max-width: 640px;">Con Tienda Barrio Pro, el inventario pasa de tu memoria y el cuaderno a un sistema seguro en la nube, accesible desde tu celular.</p>
        <div class="benefits-grid">
          <div class="benefit">
            <h4 class="benefit-title">Detecta tu mercancía estrella y tu stock muerto</h4>
            <p class="t-body">Sabrás qué productos te generan retorno y cuáles están atrapando tu plata sin producir.</p>
          </div>
          <div class="benefit">
            <h4 class="benefit-title">Alertas de stock bajo</h4>
            <p class="t-body">El sistema te avisará antes de que te quedes sin tu producto estrella, evitando ventas perdidas.</p>
          </div>
          <div class="benefit">
            <h4 class="benefit-title">Rotación visible</h4>
            <p class="t-body">Identifica productos con baja rotación para armar promociones antes de que se conviertan en pérdida.</p>
          </div>
          <div class="benefit">
            <h4 class="benefit-title">Vigilancia contra el "robo hormiga"</h4>
            <p class="t-body">Si las unidades vendidas + las de stock no cuadran con lo que compraste, lo sabrás inmediatamente.</p>
          </div>
          <div class="benefit">
            <h4 class="benefit-title">Registro de compras a proveedores</h4>
            <p class="t-body">Cada factura registrada alimenta tu inventario automáticamente. Conoce tu costo real y negocia mejores precios.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- REGLA -->
    <section class="section" style="background: var(--gray-950);">
      <div class="container" style="max-width: 680px; text-align: center;">
        <p class="t-label" style="color: var(--amber);">La regla del tendero pro</p>
        <h2 class="t-heading" style="color: var(--white); margin-top: 8px;">La exactitud de tu inventario depende de tu disciplina.</h2>
        <p class="t-body" style="color: var(--gray-400); margin-top: 16px;">
          El sistema no acomoda los estantes ni frena a los ladrones por sí solo. Si ingresas a consciencia las compras de tus proveedores y cobras cada salida, el sistema será tu mejor vigilante.
        </p>
      </div>
    </section>

    <!-- CTA -->
    <section class="section" style="text-align: center;">
      <div class="container" style="display: flex; flex-direction: column; align-items: center;">
        <h2 class="t-heading">Protege tu capital. Cada producto cuenta.</h2>
        <div style="display: flex; gap: 12px; margin-top: 28px; flex-wrap: wrap; justify-content: center;">
          <a :href="`${APP_URL}/#/register-store`" class="btn btn-primary">Comenzar ahora</a>
          <RouterLink to="/operacion" class="btn btn-outline">Siguiente: Operación</RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.detail-hero { padding: 48px 24px 64px; background: var(--gray-50); }
.back-link { font-size: 0.9rem; color: var(--gray-500); text-decoration: none; transition: color 0.2s; }
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
