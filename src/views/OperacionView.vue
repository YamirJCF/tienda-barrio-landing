<script setup lang="ts">
import { RouterLink } from 'vue-router'
import AnimatedOperacion from '../components/AnimatedOperacion.vue'

const APP_URL = 'https://detuconfianza.vercel.app'
</script>

<template>
  <div>
    <!-- HERO -->
    <section class="detail-hero">
      <div class="container">
        <RouterLink to="/" class="back-link">← Volver al inicio</RouterLink>
        <p class="t-label" style="margin-top: 32px;">Pilar 03</p>
        <h1 class="t-display" style="margin-top: 8px; max-width: 640px;">Operación Diaria: Personal y Clientes</h1>
        <div class="divider" style="margin-top: 20px;"></div>
        <p class="t-subheading" style="max-width: 540px;">Delega las tareas, nunca el control.</p>
      </div>
    </section>

    <!-- PROBLEMA -->
    <section class="section">
      <div class="container detail-grid">
        <div class="detail-text">
          <p class="t-label" style="color: var(--red-text);">El problema</p>
          <h2 class="t-heading" style="margin-top: 8px;">Administrar a ciegas genera desconfianza y pérdidas.</h2>
          <div class="divider"></div>
          <p class="t-body">
            El cuaderno tradicional no te puede decir qué cajero se equivocó en un cobro, ni te avisa automáticamente cuánto te debe el vecino desde el mes pasado.
          </p>
          <p class="t-body" style="margin-top: 12px;">
            Los <strong style="color: var(--gray-900);">fiados no cobrados</strong> son capital perdido que afecta directamente tu flujo de caja. Y sin control sobre quién vende qué, los errores (o las pérdidas intencionales) quedan en la sombra.
          </p>
          <div class="callout callout-warning" style="margin-top: 24px;">
            <p>Gran parte de la administración de las tiendas es empírica. El desconocimiento sobre gestión de recursos humanos impide que el negocio evolucione de una <strong>actividad de subsistencia a una empresa estructurada</strong>.</p>
          </div>
        </div>
        <div class="detail-image">
          <div class="anim-wrapper" style="width: 100%; max-width: 380px;">
            <AnimatedOperacion />
          </div>
        </div>
      </div>
    </section>

    <!-- CAMBIO: EMPLEADOS -->
    <section class="section" style="background: var(--gray-50);">
      <div class="container">
        <p class="t-label">Gestión de personal</p>
        <h2 class="t-heading" style="margin-top: 8px;">Cada empleado con su usuario, cada venta con su responsable.</h2>
        <div class="divider"></div>
        <p class="t-body" style="max-width: 640px;">Al crear usuarios individuales para tus empleados, formalizas las relaciones laborales dentro de tu negocio. Cada persona tiene su acceso, y cada acción queda registrada.</p>
        <div class="benefits-grid">
          <div class="benefit">
            <h4 class="benefit-title">Control de accesos y permisos</h4>
            <p class="t-body">Define qué puede hacer cada empleado: vender, consultar inventario, ver reportes. Tú decides el nivel de confianza.</p>
          </div>
          <div class="benefit">
            <h4 class="benefit-title">Auditoría de operaciones</h4>
            <p class="t-body">Sabrás exactamente quién vendió qué, a qué hora y por cuánto. Si hay un error, sabes dónde buscar.</p>
          </div>
          <div class="benefit">
            <h4 class="benefit-title">Turnos y sesiones de caja</h4>
            <p class="t-body">Cada turno de caja tiene un inicio y un cierre. Al final del día, cuadras las cuentas de cada empleado.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CAMBIO: CLIENTES -->
    <section class="section">
      <div class="container">
        <p class="t-label">Gestión de clientes</p>
        <h2 class="t-heading" style="margin-top: 8px;">El "fiado" deja de ser un favor y se vuelve un registro seguro.</h2>
        <div class="divider"></div>
        <p class="t-body" style="max-width: 640px;">El crédito informal es uno de los más poderosos mecanismos de fidelización del tendero. No queremos eliminarlo — queremos profesionalizarlo.</p>
        <div class="benefits-grid">
          <div class="benefit">
            <h4 class="benefit-title">Historial de créditos por cliente</h4>
            <p class="t-body">Cada "fiado" queda registrado con fecha, monto y detalle de productos. Adiós a los papelitos perdidos y a los cobros olvidados.</p>
          </div>
          <div class="benefit">
            <h4 class="benefit-title">Saldos pendientes claros</h4>
            <p class="t-body">Conoce en todo momento cuánto te deben tus clientes y quién lleva más tiempo sin pagar.</p>
          </div>
          <div class="benefit">
            <h4 class="benefit-title">Relaciones de confianza formalizadas</h4>
            <p class="t-body">Cuando el cliente sabe que hay un registro, se genera un compromiso mutuo más profesional. Esto educa al cliente y protege tu capital.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- REGLA -->
    <section class="section" style="background: var(--gray-950);">
      <div class="container" style="max-width: 680px; text-align: center;">
        <p class="t-label" style="color: var(--amber);">La regla del tendero pro</p>
        <h2 class="t-heading" style="color: var(--white); margin-top: 8px;">La herramienta te da visibilidad. La cultura de orden la pones tú.</h2>
        <p class="t-body" style="color: var(--gray-400); margin-top: 16px;">
          El sistema no es un policía ni un cobrador. Si le exiges a tus cajeros que vendan usando su propio usuario, tendrás auditoría perfecta. Si anotas el fiado en el momento exacto, el sistema te recordará los saldos.
        </p>
      </div>
    </section>

    <!-- CTA -->
    <section class="section" style="text-align: center;">
      <div class="container" style="display: flex; flex-direction: column; align-items: center;">
        <h2 class="t-heading">Organiza tu equipo. Formaliza tus cuentas. Toma el control.</h2>
        <div style="display: flex; gap: 12px; margin-top: 28px; flex-wrap: wrap; justify-content: center;">
          <a :href="`${APP_URL}/#/register-store`" class="btn btn-primary">Crear mi cuenta ahora</a>
          <RouterLink to="/" class="btn btn-outline">← Volver al inicio</RouterLink>
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
