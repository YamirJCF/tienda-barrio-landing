<script setup lang="ts">
import { RouterLink } from 'vue-router'

const APP_URL = 'https://detuconfianza.vercel.app'
</script>

<template>
  <div>

    <!-- ============================================ -->
    <!-- HERO — Dolor directo + producto visible      -->
    <!-- ============================================ -->
    <section class="hero">
      <div class="container">

        <!-- Badge fundadores -->
        <div class="founder-badge">
          <span class="founder-dot"></span>
          Abierto al público · Programa Fundadores activo
        </div>

        <div class="hero-grid">
          <div class="hero-text">
            <h1 class="t-display">
              ¿Cuánto ganaste hoy realmente?
            </h1>
            <p class="t-subheading" style="margin-top: 20px; max-width: 480px;">
              Si no tienes una respuesta exacta, tu tienda está perdiendo plata sin que te des cuenta. Tienda Barrio Pro te da ese número en segundos.
            </p>

            <div class="hero-cta-block">
              <a :href="`${APP_URL}/#/register-store`" class="btn btn-primary btn-lg">
                Crear mi cuenta gratis
              </a>
              <p class="cta-microcopy">Sin costo · Sin instalación · Funciona en tu celular Android</p>
            </div>
          </div>

          <!-- SCREENSHOT PRINCIPAL — Grande y anotado -->
          <div class="hero-screenshot">
            <div class="screenshot-container">
              <div class="app-frame">
                <img src="/images/app-dashboard.png" alt="Panel de control de Tienda Barrio Pro" />
              </div>
              <!-- Anotaciones flotantes -->
              <div class="annotation annotation-top">
                <span class="annotation-dot"></span>
                <span>Abre y cierra tu caja cada turno</span>
              </div>
              <div class="annotation annotation-right">
                <span class="annotation-dot"></span>
                <span>Tus métricas del día en tiempo real</span>
              </div>
              <div class="annotation annotation-bottom">
                <span class="annotation-dot"></span>
                <span>Estado del inventario siempre visible</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- ============================================ -->
    <!-- MÉTRICAS — Prueba de valor (no testimonios) -->
    <!-- ============================================ -->
    <section class="metrics-strip">
      <div class="container metrics-grid">
        <div class="metric">
          <span class="metric-num">30 seg</span>
          <span class="metric-label">Para registrar una venta completa</span>
        </div>
        <div class="metric-divider"></div>
        <div class="metric">
          <span class="metric-num">3 toques</span>
          <span class="metric-label">Para ver las ganancias del día</span>
        </div>
        <div class="metric-divider"></div>
        <div class="metric">
          <span class="metric-num">100%</span>
          <span class="metric-label">En tu celular, sin papel, sin Excel</span>
        </div>
        <div class="metric-divider"></div>
        <div class="metric">
          <span class="metric-num">$0</span>
          <span class="metric-label">Para comenzar. Sin costo oculto</span>
        </div>
      </div>
    </section>

    <!-- ============================================ -->
    <!-- PROGRAMA FUNDADORES — Early adopter hook    -->
    <!-- ============================================ -->
    <section class="section founder-section">
      <div class="container founder-inner">
        <div class="founder-content">
          <p class="t-label" style="color: var(--amber);">Oferta limitada</p>
          <h2 class="t-heading" style="margin-top: 8px;">
            Sé uno de los primeros 100 Tenderos Fundadores.
          </h2>
          <div class="divider" style="background: var(--amber);"></div>
          <p class="t-body">
            Estamos en etapa de lanzamiento. Los primeros 100 tenderos que se registren obtendrán acceso completo y prioritario, y sus comentarios darán forma a las próximas funcionalidades del sistema.
          </p>
          <ul class="founder-perks">
            <li>Acceso completo a todas las funcionalidades desde el día uno</li>
            <li>Soporte directo con el equipo de desarrollo</li>
            <li>Tu voz define las próximas mejoras del sistema</li>
            <li>Precio de fundador garantizado cuando lancemos planes premium</li>
          </ul>
          <a :href="`${APP_URL}/#/register-store`" class="btn btn-brand" style="margin-top: 24px;">
            Quiero ser Tendero Fundador
          </a>
        </div>
        <div class="founder-visual">
          <div class="spots-card">
            <p class="spots-label">Cupos disponibles</p>
            <p class="spots-num">100</p>
            <p class="spots-sub">primeros registros</p>
            <div class="spots-bar">
              <div class="spots-fill" style="width: 18%"></div>
            </div>
            <p class="spots-fine">Registro abierto · Gratis</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================ -->
    <!-- PROBLEMA — Breve y emocional               -->
    <!-- ============================================ -->
    <section class="section" style="background: var(--gray-50);">
      <div class="container">
        <p class="t-label">El contexto</p>
        <h2 class="t-heading" style="margin-top: 8px; max-width: 680px;">El 82% de los tenderos no saben exactamente cuánto gana su tienda. ¿Eres parte de ese porcentaje?</h2>
        <div class="divider"></div>
        <div class="problems-grid">
          <div class="problem-item">
            <h3 class="problem-title">La plata del negocio y la del hogar se mezclan</h3>
            <p class="t-body">Al final del día no sabes si ganaste o solo estás reponiendo mercancía con tu propio bolsillo.</p>
          </div>
          <div class="problem-item">
            <h3 class="problem-title">El cuaderno no da alertas</h3>
            <p class="t-body">No te avisa cuando un producto está por acabarse ni cuándo un fiado lleva meses sin cobrar.</p>
          </div>
          <div class="problem-item">
            <h3 class="problem-title">D1, Ara e Ísimo avanzan</h3>
            <p class="t-body">Ellos usan sistemas de datos para optimizar cada peso. Tu tienda puede jugar en el mismo nivel.</p>
          </div>
          <div class="problem-item">
            <h3 class="problem-title">Sin historial = sin crédito formal</h3>
            <p class="t-body">Los bancos piden demostrar ingresos. Sin registro diario, sigues dependiendo del "gota a gota".</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================ -->
    <!-- SOLUCIÓN — Producto en uso, con screenshots -->
    <!-- ============================================ -->
    <section class="section">
      <div class="container">
        <div style="text-align: center; margin-bottom: 64px;">
          <p class="t-label">La solución</p>
          <h2 class="t-heading" style="margin-top: 8px;">Tu tienda con los datos que necesitas para ganar más.</h2>
          <div class="divider divider-center"></div>
        </div>

        <!-- Feature 1 -->
        <div class="feature-row">
          <div class="feature-row-text">
            <p class="t-label">Pilar 01 — Finanzas</p>
            <h3 class="t-heading" style="margin-top: 8px; font-size: 1.8rem;">¿Cuánto ganas por cada producto que vendes?</h3>
            <div class="divider"></div>
            <p class="t-body">Registra cada venta y el sistema calcula automáticamente tu ganancia neta, tu margen real y tu ticket promedio. Por primera vez, la respuesta ya no es "más o menos".</p>
            <RouterLink to="/finanzas" class="feature-link">Ver detalles de Finanzas →</RouterLink>
          </div>
          <div class="feature-row-image">
            <div class="app-frame app-frame-lg">
              <img src="/images/app-reports.png" alt="Reportes financieros" />
            </div>
          </div>
        </div>

        <!-- Feature 2 -->
        <div class="feature-row feature-row-reverse">
          <div class="feature-row-text">
            <p class="t-label">Pilar 02 — Inventario</p>
            <h3 class="t-heading" style="margin-top: 8px; font-size: 1.8rem;">Sabe antes de quedarte sin tu producto estrella.</h3>
            <div class="divider"></div>
            <p class="t-body">El sistema detecta qué productos rotan, cuáles están parados y te avisa antes del quiebre de stock. Tu capital de trabajo, protegido.</p>
            <RouterLink to="/inventario" class="feature-link">Ver detalles de Inventario →</RouterLink>
          </div>
          <div class="feature-row-image">
            <div class="app-frame app-frame-lg">
              <img src="/images/app-inventory.png" alt="Control de inventario" />
            </div>
          </div>
        </div>

        <!-- Feature 3 -->
        <div class="feature-row">
          <div class="feature-row-text">
            <p class="t-label">Pilar 03 — Operación</p>
            <h3 class="t-heading" style="margin-top: 8px; font-size: 1.8rem;">Controla quién vende qué. Cobra los fiados a tiempo.</h3>
            <div class="divider"></div>
            <p class="t-body">Cada empleado con su propio acceso, cada fiado con fecha y monto. El cuaderno se queda corto; el sistema no olvida nada.</p>
            <RouterLink to="/operacion" class="feature-link">Ver detalles de Operación →</RouterLink>
          </div>
          <div class="feature-row-image">
            <div class="app-frame app-frame-lg">
              <img src="/images/app-employees.png" alt="Gestión de empleados" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================ -->
    <!-- CÓMO FUNCIONA                               -->
    <!-- ============================================ -->
    <section class="section" style="background: var(--gray-50);">
      <div class="container" style="text-align: center;">
        <p class="t-label">Empezar es simple</p>
        <h2 class="t-heading" style="margin-top: 8px;">De cero a tu primera venta registrada en 10 minutos.</h2>
        <div class="divider divider-center"></div>
        <div class="steps-grid">
          <div class="step">
            <span class="step-num">01</span>
            <h3 class="step-title">Crea tu cuenta</h3>
            <p class="t-body">Solo necesitas un correo. Sin papeles, sin instalaciones complicadas. En 2 minutos estás adentro.</p>
          </div>
          <div class="step-arrow">→</div>
          <div class="step">
            <span class="step-num">02</span>
            <h3 class="step-title">Carga tus productos</h3>
            <p class="t-body">Ingresa tu mercancía con precio de compra y precio de venta. El margen se calcula solo.</p>
          </div>
          <div class="step-arrow">→</div>
          <div class="step">
            <span class="step-num">03</span>
            <h3 class="step-title">Empieza a vender</h3>
            <p class="t-body">Registra cada venta. Al final del día, abre Reportes y mira exactamente cuánto ganaste.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================ -->
    <!-- EL PACTO — Después de mostrar el producto  -->
    <!-- ============================================ -->
    <section class="section pacto">
      <div class="container" style="max-width: 720px; text-align: center;">
        <p class="t-label" style="color: var(--amber);">Una cosa antes de empezar</p>
        <h2 class="t-heading" style="color: var(--white); margin-top: 8px;">Este sistema no hace magia.<br/>Te muestra tu realidad.</h2>
        <div class="divider divider-center" style="background: var(--amber);"></div>
        <p class="t-body" style="color: var(--gray-400);">
          El sistema es tan bueno como la información que le das. Si registras cada venta con honestidad, te dará una radiografía exacta de tu negocio. Si omites entradas, el reporte te mentirá.
        </p>
        <div class="pacto-rules">
          <div class="pacto-rule">Si registras cada venta → sabes exactamente cuánto ganaste hoy.</div>
          <div class="pacto-rule">Si ingresas tus compras → el sistema te avisa antes del quiebre de stock.</div>
          <div class="pacto-rule">Si usas el sistema 30 días → tienes datos para pedir crédito formal.</div>
        </div>
      </div>
    </section>

    <!-- ============================================ -->
    <!-- CTA FINAL — Con fricción mínima            -->
    <!-- ============================================ -->
    <section class="section cta-final">
      <div class="container" style="text-align: center; max-width: 760px;">
        <p class="t-label" style="color: var(--brand-light);">El paso que cambia el juego</p>
        <h2 class="t-display" style="color: var(--white); margin-top: 12px;">
          Los supermercados de cadena ya tienen este control. Ahora tú también puedes.
        </h2>
        <p class="t-subheading" style="color: var(--gray-400); margin-top: 16px; max-width: 520px; margin-left: auto; margin-right: auto;">
          Tienda Barrio Pro no reemplaza la forma en que atiendes a tu barrio. Solo pone en tu celular los números que necesitas para sobrevivir y crecer.
        </p>
        <div class="final-cta-block">
          <a :href="`${APP_URL}/#/register-store`" class="btn btn-brand btn-lg">
            Crear mi cuenta gratis ahora
          </a>
          <p class="cta-microcopy" style="color: var(--gray-500);">
            Sin tarjeta de crédito · Sin contratos · Cancela cuando quieras
          </p>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
/* ====== HERO ====== */
.hero {
  padding: 48px 24px 80px;
  background: var(--white);
}
.founder-badge {
  display: inline-flex; align-items: center; gap: 8px;
  border: 1px solid var(--green-border);
  background: var(--green-soft);
  color: var(--green-text);
  padding: 6px 14px; border-radius: 100px;
  font-size: 0.8rem; font-weight: 600;
  margin-bottom: 32px;
}
.founder-dot {
  width: 6px; height: 6px; border-radius: 50%;
  background: var(--brand); flex-shrink: 0;
}
.hero-grid {
  display: grid; grid-template-columns: 1fr 1.1fr;
  gap: 56px; align-items: center;
}
.hero-cta-block { margin-top: 32px; }
.cta-microcopy {
  font-size: 0.8rem; color: var(--gray-400); margin-top: 10px;
}
.btn-lg { padding: 16px 40px !important; font-size: 1rem !important; }

/* SCREENSHOT HERO */
.hero-screenshot { position: relative; }
.screenshot-container { position: relative; display: inline-block; }
.screenshot-container .app-frame { max-width: 420px; }

/* Annotations */
.annotation {
  position: absolute;
  display: flex; align-items: center; gap: 8px;
  background: var(--white); border: 1px solid var(--gray-200);
  border-radius: 8px; padding: 8px 12px;
  font-size: 0.78rem; font-weight: 600; color: var(--gray-700);
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  white-space: nowrap;
}
.annotation-dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: var(--brand); flex-shrink: 0;
}
.annotation-top { top: -14px; left: 30px; }
.annotation-right { right: -20px; top: 45%; transform: translateY(-50%); }
.annotation-bottom { bottom: 24px; left: -16px; }

/* ====== METRICS ====== */
.metrics-strip {
  background: var(--gray-950);
  padding: 32px 24px;
}
.metrics-grid {
  display: grid; grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr;
  align-items: center; gap: 0; text-align: center;
}
.metric { padding: 0 24px; }
.metric-num {
  display: block; font-size: 1.8rem; font-weight: 800;
  color: var(--brand-light); letter-spacing: -0.02em;
}
.metric-label { font-size: 0.8rem; color: var(--gray-400); margin-top: 4px; display: block; }
.metric-divider { width: 1px; height: 48px; background: var(--gray-700); }

/* ====== FOUNDER SECTION ====== */
.founder-section { background: var(--gray-950); }
.founder-inner {
  display: grid; grid-template-columns: 1.4fr 0.6fr;
  gap: 56px; align-items: center;
}
.founder-content .t-heading { color: var(--white); }
.founder-content .t-body { color: var(--gray-400); }
.founder-perks {
  margin-top: 20px; display: flex; flex-direction: column; gap: 10px;
  padding-left: 0; list-style: none;
}
.founder-perks li {
  padding: 12px 16px; border-radius: 8px;
  background: rgba(255,255,255,0.04); border: 1px solid var(--gray-700);
  font-size: 0.9rem; color: var(--gray-300);
}
.founder-perks li::before {
  content: '✓ '; color: var(--brand-light); font-weight: 700;
}

/* Spots card */
.spots-card {
  border: 1px solid var(--gray-700); border-radius: var(--radius-lg);
  padding: 32px 24px; text-align: center;
  background: rgba(255,255,255,0.03);
}
.spots-label { font-size: 0.75rem; color: var(--gray-400); text-transform: uppercase; letter-spacing: 0.08em; }
.spots-num {
  font-size: 4rem; font-weight: 800; color: var(--white);
  letter-spacing: -0.04em; line-height: 1; margin: 8px 0;
}
.spots-sub { font-size: 0.85rem; color: var(--gray-500); }
.spots-bar {
  height: 6px; background: var(--gray-700); border-radius: 3px;
  margin: 20px 0 12px; overflow: hidden;
}
.spots-fill { height: 100%; background: var(--brand); border-radius: 3px; }
.spots-fine { font-size: 0.75rem; color: var(--gray-500); }

/* ====== PROBLEMS ====== */
.problems-grid {
  display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
  background: var(--gray-200); border: 1px solid var(--gray-200);
  border-radius: var(--radius-lg); overflow: hidden; margin-top: 40px;
}
.problem-item { background: var(--white); padding: 32px 28px; }
.problem-title { font-size: 1.05rem; font-weight: 700; color: var(--gray-900); margin-bottom: 8px; }

/* ====== FEATURES ROWS ====== */
.feature-row {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 64px; align-items: center;
  padding: 64px 0;
  border-bottom: 1px solid var(--gray-100);
}
.feature-row:last-child { border-bottom: none; }
.feature-row-reverse { direction: rtl; }
.feature-row-reverse > * { direction: ltr; }
.feature-link {
  display: inline-block; margin-top: 20px;
  font-size: 0.9rem; font-weight: 600; color: var(--brand);
  text-decoration: none;
  transition: gap 0.2s;
}
.feature-link:hover { color: var(--brand-light); }
.app-frame-lg { max-width: 380px; }

/* ====== STEPS ====== */
.steps-grid {
  display: grid; grid-template-columns: 1fr auto 1fr auto 1fr;
  gap: 0; margin-top: 56px; align-items: start;
}
.step { padding: 0 24px; text-align: center; }
.step-arrow {
  font-size: 1.5rem; color: var(--gray-300); padding-top: 32px;
  align-self: flex-start;
}
.step-num {
  display: block; font-size: 2.8rem; font-weight: 800;
  color: var(--gray-200); letter-spacing: -0.02em; line-height: 1;
}
.step-title { font-size: 1.05rem; font-weight: 700; color: var(--gray-900); margin: 12px 0 8px; }

/* ====== PACTO ====== */
.pacto { background: var(--gray-950); }
.pacto-rules {
  display: flex; flex-direction: column; gap: 0; margin-top: 32px;
  border: 1px solid var(--gray-700); border-radius: var(--radius-lg); overflow: hidden;
  text-align: left;
}
.pacto-rule {
  padding: 16px 20px; border-bottom: 1px solid var(--gray-700);
  font-size: 0.95rem; color: var(--gray-300); line-height: 1.6;
}
.pacto-rule:last-child { border-bottom: none; }

/* ====== CTA FINAL ====== */
.cta-final { background: var(--gray-950); }
.final-cta-block { margin-top: 40px; display: flex; flex-direction: column; align-items: center; gap: 12px; }

/* ====== RESPONSIVE ====== */
@media (max-width: 900px) {
  .hero-grid { grid-template-columns: 1fr; }
  .hero-screenshot { display: flex; justify-content: center; }
  .screenshot-container .app-frame { max-width: 300px; }
  .annotation-right { display: none; }
  .metrics-grid { grid-template-columns: 1fr 1fr; gap: 24px; }
  .metric-divider { display: none; }
  .founder-inner { grid-template-columns: 1fr; }
  .founder-visual { display: none; }
  .problems-grid { grid-template-columns: 1fr; }
  .feature-row { grid-template-columns: 1fr; gap: 32px; direction: ltr !important; }
  .steps-grid { grid-template-columns: 1fr; }
  .step-arrow { transform: rotate(90deg); text-align: center; padding: 8px 0; }
}
</style>
