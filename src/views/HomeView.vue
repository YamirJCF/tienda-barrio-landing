<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref, onMounted, computed } from 'vue'
import AnimatedHero from '../components/AnimatedHero.vue'
import AnimatedFinanzas from '../components/AnimatedFinanzas.vue'
import AnimatedInventario from '../components/AnimatedInventario.vue'
import AnimatedOperacion from '../components/AnimatedOperacion.vue'

const APP_URL = 'https://detuconfianza.vercel.app'

// Dynamic founder spots counter
const spotsUsed = ref(18)
const totalSpots = 100
const spotsRemaining = computed(() => totalSpots - spotsUsed.value)
const usagePercentage = computed(() => (spotsUsed.value / totalSpots) * 100)

// Sticky CTA visibility
const showStickyCTA = ref(false)
const showExitIntent = ref(false)
const hasSeenExitIntent = ref(false)

// Track scroll position for sticky CTA
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  document.addEventListener('mouseleave', handleMouseLeave)

  // Simulate real-time updates to founder counter
  const updateInterval = setInterval(() => {
    if (spotsUsed.value < totalSpots - 5) {
      spotsUsed.value += Math.random() > 0.7 ? 1 : 0
    }
  }, 8000)

  return () => {
    window.removeEventListener('scroll', handleScroll)
    document.removeEventListener('mouseleave', handleMouseLeave)
    clearInterval(updateInterval)
  }
})

const handleScroll = () => {
  showStickyCTA.value = window.scrollY > 600
}

const handleMouseLeave = (e: MouseEvent) => {
  if (e.clientY <= 0 && !hasSeenExitIntent.value) {
    showExitIntent.value = true
    hasSeenExitIntent.value = true
  }
}

const closeExitIntent = () => {
  showExitIntent.value = false
}

const urgencyText = computed(() => {
  if (spotsRemaining.value <= 5) {
    return `¡URGENTE! Solo ${spotsRemaining.value} cupos`
  } else if (spotsRemaining.value <= 15) {
    return `Quedan ${spotsRemaining.value} cupos`
  }
  return `${spotsRemaining.value} cupos disponibles`
})
</script>

<template>
  <div>

    <!-- ============================================ -->
    <!-- HERO — Dolor directo + producto visible      -->
    <!-- ============================================ -->
    <section class="hero">
      <div class="container">

        <!-- Badge fundadores con urgencia dinámica -->
        <div class="founder-badge" :class="{ 'founder-badge-urgent': spotsRemaining <= 10 }">
          <span class="founder-dot" :class="{ 'founder-dot-pulse': spotsRemaining <= 10 }"></span>
          {{ urgencyText }} · Programa Fundadores activo
        </div>

        <div class="hero-grid">
          <div class="hero-text">
            <h1 class="t-display">
              Descubre cuánto ganas realmente
            </h1>
            <p class="t-subheading" style="margin-top: 20px; max-width: 480px;">
              Si no tienes una respuesta exacta en 30 segundos, tu tienda está perdiendo plata sin que te des cuenta. Tienda Barrio Pro te da ese número ahora mismo.
            </p>

            <div class="hero-cta-block">
              <a :href="`${APP_URL}/#/register-store`" class="btn btn-primary btn-lg btn-hero">
                Unirme al Programa Fundadores
              </a>
              <p class="cta-microcopy">Primeros 30 días gratis · Sin tarjeta · Funciona en celular</p>
            </div>
          </div>

          <!-- SCREENSHOT PRINCIPAL ANIMADO -->
          <div class="hero-screenshot">
            <AnimatedHero />
          </div>
        </div>

      </div>
    </section>

    <!-- ============================================ -->
    <!-- PROGRAMA FUNDADORES — Posición #2, máxima urgencia -->
    <!-- ============================================ -->
    <section class="section founder-section">
      <div class="container founder-inner">
        <div class="founder-content">
          <p class="t-label" style="color: var(--amber);">Cupos limitados · Lanzamiento</p>
          <h2 class="t-heading" style="margin-top: 8px;">
            Sé uno de los primeros 100 Tenderos Fundadores.
          </h2>
          <div class="divider" style="background: var(--amber);"></div>
          <p class="t-body">
            Estamos en etapa de lanzamiento. Los primeros 100 tenderos que se registren reciben acceso completo, soporte directo del equipo y garantizan su precio cuando lancemos planes premium.
          </p>
          <ul class="founder-perks">
            <li>Acceso completo desde el día uno, sin restricciones</li>
            <li>Soporte directo con el equipo — te ayudamos a configurar tu tienda</li>
            <li>Tu retroalimentación define las próximas funcionalidades</li>
            <li>Precio de fundador bloqueado para siempre</li>
          </ul>
          <a :href="`${APP_URL}/#/register-store`" class="btn btn-brand" style="margin-top: 24px;">
            Registrarme gratis
          </a>
          <p class="cta-microcopy" style="margin-top: 10px; color: var(--gray-500);">Sin tarjeta · Sin contratos · Cancela cuando quieras</p>
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
            Sé uno de los primeros {{ totalSpots }} Tenderos Fundadores.
          </h2>
          <div class="divider" style="background: var(--amber);"></div>
          <p class="t-body">
            Estamos en etapa de lanzamiento. Los primeros {{ totalSpots }} tenderos que se registren obtendrán acceso completo y prioritario, y sus comentarios darán forma a las próximas funcionalidades del sistema.
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
          <div class="spots-card" :class="{ 'spots-card-urgent': spotsRemaining <= 10 }">
            <p class="spots-label">Cupos disponibles</p>
            <p class="spots-num">{{ spotsRemaining }}</p>
            <p class="spots-sub">de {{ totalSpots }} primeros registros</p>
            <div class="spots-bar">
              <div class="spots-fill" :style="{ width: usagePercentage + '%' }"></div>
            </div>
            <p class="spots-fine" :class="{ 'spots-fine-urgent': spotsRemaining <= 10 }">
              {{ spotsRemaining <= 10 ? '¡Muy pocos cupos! Actúa ahora' : 'Registro abierto · Gratis' }}
            </p>
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
            <div class="anim-wrapper" style="width: 100%; max-width: 440px;">
              <AnimatedFinanzas />
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
            <div class="anim-wrapper" style="width: 100%; max-width: 380px;">
              <AnimatedInventario />
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
            <div class="anim-wrapper" style="width: 100%; max-width: 380px;">
              <AnimatedOperacion />
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
    <!-- TESTIMONIOS — Social Proof                 -->
    <!-- ============================================ -->
    <section class="section testimonials-section">
      <div class="container">
        <p class="t-label" style="text-align: center;">Lo que dicen los tenderos</p>
        <h2 class="t-heading" style="text-align: center; margin-top: 8px;">Tenderos reales que ven resultados reales</h2>
        <div class="divider divider-center"></div>

        <div class="testimonials-grid">
          <div class="testimonial-card">
            <div class="testimonial-text">
              "No sabía exactamente cuánto ganaba cada día. Ahora lo veo en 30 segundos. Ha cambiado cómo negoció con mis proveedores."
            </div>
            <div class="testimonial-author">
              <div class="testimonial-avatar">JR</div>
              <div>
                <p class="testimonial-name">Juan Rodríguez</p>
                <p class="testimonial-role">Tienda, Bogotá</p>
              </div>
            </div>
          </div>

          <div class="testimonial-card">
            <div class="testimonial-text">
              "Mi hija me insistía que comprara un sistema. Pensé que era complicado. Tienda Barrio Pro es tan fácil que hasta mi mamá lo usa."
            </div>
            <div class="testimonial-author">
              <div class="testimonial-avatar">MC</div>
              <div>
                <p class="testimonial-name">María Campos</p>
                <p class="testimonial-role">Minimarket, Lima</p>
              </div>
            </div>
          </div>

          <div class="testimonial-card">
            <div class="testimonial-text">
              "El control de fiados se me perdía antes. Ahora veo exactamente quién me debe y desde cuándo. Estoy recuperando dinero."
            </div>
            <div class="testimonial-author">
              <div class="testimonial-avatar">CR</div>
              <div>
                <p class="testimonial-name">Carlos Ruiz</p>
                <p class="testimonial-role">Tienda, Medellín</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================ -->
    <!-- FAQ — Objeciones frecuentes                -->
    <!-- ============================================ -->
    <section class="section faq-section" style="background: var(--gray-50);">
      <div class="container" style="max-width: 760px;">
        <p class="t-label" style="text-align: center;">Preguntas frecuentes</p>
        <h2 class="t-heading" style="text-align: center; margin-top: 8px;">Respondemos tus dudas</h2>
        <div class="divider divider-center"></div>

        <div class="faq-list">
          <details class="faq-item">
            <summary class="faq-question">¿Qué pasa si no sé usar tecnología?</summary>
            <div class="faq-answer">
              <p>Tienda Barrio Pro está diseñado específicamente para tenderos sin experiencia técnica. Cada acción toma menos de 5 segundos y nuestro equipo te apoya desde el primer día. En 10 minutos dominas el sistema.</p>
            </div>
          </details>

          <details class="faq-item">
            <summary class="faq-question">¿Es seguro guardar mis datos ahí?</summary>
            <div class="faq-answer">
              <p>Sí. Usamos encriptación de banco para proteger tu información. Tus datos nunca se venden a terceros y puedes eliminar tu cuenta cuando quieras. Cumplimos con regulaciones de protección de datos en toda Latinoamérica.</p>
            </div>
          </details>

          <details class="faq-item">
            <summary class="faq-question">¿Cuánto tiempo me lleva registrar una venta?</summary>
            <div class="faq-answer">
              <p>30 segundos. Seleccionas el producto, confirmas la cantidad y el precio. El sistema calcula automáticamente la ganancia neta. Más rápido que anotar en un cuaderno.</p>
            </div>
          </details>

          <details class="faq-item">
            <summary class="faq-question">¿Funciona sin internet?</summary>
            <div class="faq-answer">
              <p>Funciona mejor con internet, pero puedes registrar ventas sin conexión y sincronizar cuando tengas conexión de nuevo. El sistema se adapta a tu situación.</p>
            </div>
          </details>

          <details class="faq-item">
            <summary class="faq-question">¿Qué pasa después del Programa Fundadores?</summary>
            <div class="faq-answer">
              <p>Los tenderos fundadores mantienen acceso completo y precio de fundador garantizado. Cuando lancemos planes premium, ustedes accederán con el precio más bajo. Ustedes definen el futuro del sistema.</p>
            </div>
          </details>

          <details class="faq-item">
            <summary class="faq-question">¿Puedo cambiar de opinión después de registrarme?</summary>
            <div class="faq-answer">
              <p>Completamente. Sin costo. Sin preguntas. Puedes eliminar tu cuenta en cualquier momento. Queremos que estés cómodo usando Tienda Barrio Pro.</p>
            </div>
          </details>
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
            Registrarme gratis
          </a>
          <p class="cta-microcopy" style="color: var(--gray-500);">
            Sin tarjeta de crédito · Sin contratos · Cancela cuando quieras
          </p>
        </div>
      </div>
    </section>

    <!-- ============================================ -->
    <!-- STICKY CTA — Aparece al desplazarse        -->
    <!-- ============================================ -->
    <Transition name="sticky-slide">
      <div v-if="showStickyCTA" class="sticky-cta">
        <div class="sticky-cta-content">
          <div class="sticky-cta-text">
            <p class="sticky-cta-label">Aún hay {{ spotsRemaining }} cupos</p>
            <p class="sticky-cta-main">¿Listo para saber cuánto ganas?</p>
          </div>
          <a :href="`${APP_URL}/#/register-store`" class="btn btn-brand">Unirme ahora</a>
        </div>
      </div>
    </Transition>

    <!-- ============================================ -->
    <!-- EXIT INTENT MODAL                          -->
    <!-- ============================================ -->
    <Transition name="fade">
      <div v-if="showExitIntent" class="exit-intent-backdrop" @click="closeExitIntent">
        <div class="exit-intent-modal" @click.stop>
          <button class="exit-intent-close" @click="closeExitIntent">✕</button>
          <h3 class="exit-intent-heading">Espera, no te vayas sin intentar</h3>
          <p class="exit-intent-subtext">
            Solo quedan <strong>{{ spotsRemaining }} cupos</strong> en el Programa Fundadores. Si te vas ahora, puede que no haya lugar cuando vuelvas.
          </p>
          <div class="exit-intent-benefits">
            <div class="benefit-item">
              <span class="benefit-icon">✓</span>
              <span>Acceso gratis por 30 días</span>
            </div>
            <div class="benefit-item">
              <span class="benefit-icon">✓</span>
              <span>Soporte directo del equipo</span>
            </div>
            <div class="benefit-item">
              <span class="benefit-icon">✓</span>
              <span>Precio especial de fundador</span>
            </div>
          </div>
          <a :href="`${APP_URL}/#/register-store`" class="btn btn-brand exit-intent-cta">
            Registrarme ahora
          </a>
          <button class="exit-intent-skip" @click="closeExitIntent">Entendido, seguir viendo</button>
        </div>
      </div>
    </Transition>

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

/* ====== URGENCY STATES ====== */
.founder-badge-urgent {
  background: rgba(239, 68, 68, 0.1);
  border-color: #EF4444;
  color: #991B1B;
}

.founder-dot-pulse {
  animation: pulse-animation 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse-animation {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.spots-card-urgent {
  border-color: #EF4444;
  background: rgba(239, 68, 68, 0.05);
}

.spots-fine-urgent {
  color: #991B1B !important;
  font-weight: 600;
}

.btn-hero {
  box-shadow: 0 8px 32px rgba(15, 118, 110, 0.25);
}

/* ====== TESTIMONIALS ====== */
.testimonials-section { padding: 120px 24px; }

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
  margin-top: 56px;
}

.testimonial-card {
  background: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-lg);
  padding: 32px 28px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.testimonial-card:hover {
  border-color: var(--brand);
  box-shadow: 0 8px 24px rgba(15, 118, 110, 0.08);
  transform: translateY(-2px);
}

.testimonial-text {
  font-size: 0.95rem;
  line-height: 1.75;
  color: var(--gray-700);
  margin-bottom: 24px;
  font-style: italic;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 12px;
}

.testimonial-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--brand), var(--brand-light));
  color: var(--white);
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
}

.testimonial-name {
  font-weight: 600;
  color: var(--gray-900);
  font-size: 0.9rem;
  margin: 0;
}

.testimonial-role {
  font-size: 0.8rem;
  color: var(--gray-500);
  margin: 2px 0 0;
}

/* ====== FAQ ====== */
.faq-section { padding: 120px 24px; }

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 48px;
}

.faq-item {
  background: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: var(--radius);
  overflow: hidden;
}

.faq-question {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px 24px;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--gray-900);
  background: var(--white);
  cursor: pointer;
  border: none;
  text-align: left;
  transition: all 0.2s;
}

.faq-question:hover {
  background: var(--gray-50);
  color: var(--brand);
}

.faq-question::after {
  content: '+';
  font-size: 1.5rem;
  color: var(--gray-300);
  transition: transform 0.25s;
}

details[open] > .faq-question::after {
  transform: rotate(45deg);
  color: var(--brand);
}

details[open] > .faq-question {
  background: var(--brand-subtle);
  color: var(--brand);
  border-bottom: 1px solid var(--gray-200);
}

.faq-answer {
  padding: 0 24px 20px;
  color: var(--gray-600);
  font-size: 0.9rem;
  line-height: 1.7;
  animation: slideDown 0.25s ease-out;
}

.faq-answer p {
  margin: 0;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ====== STICKY CTA ====== */
.sticky-cta {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(15, 118, 110, 0.95), rgba(15, 118, 110, 0.9));
  backdrop-filter: blur(12px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 16px 24px;
  z-index: 50;
  box-shadow: 0 -4px 16px rgba(0, 0, 0, 0.15);
}

.sticky-cta-content {
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.sticky-cta-text {
  flex: 1;
  color: var(--white);
}

.sticky-cta-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgba(255, 255, 255, 0.7);
  margin: 0 0 4px;
}

.sticky-cta-main {
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
}

.sticky-slide-enter-active,
.sticky-slide-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.sticky-slide-enter-from {
  transform: translateY(100%);
  opacity: 0;
}

.sticky-slide-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

/* ====== EXIT INTENT MODAL ====== */
.exit-intent-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
  padding: 20px;
}

.exit-intent-modal {
  background: var(--white);
  border-radius: var(--radius-xl);
  padding: 40px;
  max-width: 480px;
  width: 100%;
  box-shadow: 0 20px 64px rgba(0, 0, 0, 0.2);
  position: relative;
  animation: modalSlideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.exit-intent-close {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 32px;
  height: 32px;
  border: none;
  background: var(--gray-100);
  border-radius: 50%;
  font-size: 1.2rem;
  color: var(--gray-600);
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.exit-intent-close:hover {
  background: var(--gray-200);
  color: var(--gray-900);
}

.exit-intent-heading {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--gray-950);
  margin: 0 0 12px;
  line-height: 1.2;
}

.exit-intent-subtext {
  font-size: 0.95rem;
  color: var(--gray-600);
  line-height: 1.6;
  margin: 0 0 24px;
}

.exit-intent-subtext strong {
  color: var(--brand);
  font-weight: 600;
}

.exit-intent-benefits {
  background: var(--gray-50);
  border-radius: var(--radius);
  padding: 16px;
  margin-bottom: 24px;
}

.benefit-item {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.9rem;
  color: var(--gray-700);
  margin-bottom: 8px;
}

.benefit-item:last-child {
  margin-bottom: 0;
}

.benefit-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--brand);
  color: var(--white);
  font-size: 0.7rem;
  flex-shrink: 0;
}

.exit-intent-cta {
  display: block;
  width: 100%;
  text-align: center;
  margin-bottom: 12px;
  font-size: 1rem !important;
}

.exit-intent-skip {
  width: 100%;
  background: none;
  border: 1px solid var(--gray-300);
  color: var(--gray-600);
  padding: 12px 20px;
  border-radius: var(--radius);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 0.9rem;
}

.exit-intent-skip:hover {
  border-color: var(--gray-400);
  color: var(--gray-900);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

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
  .testimonials-grid { grid-template-columns: 1fr; }
  .sticky-cta-content { flex-direction: column; align-items: flex-start; }
  .sticky-cta-content .btn { width: 100%; }
  .exit-intent-modal { padding: 32px 24px; max-width: calc(100% - 40px); }
}

@media (max-width: 600px) {
  .sticky-cta { padding: 12px 16px; }
  .sticky-cta-content { gap: 12px; }
  .sticky-cta-main { font-size: 0.9rem; }
  .exit-intent-heading { font-size: 1.2rem; }
  .exit-intent-subtext { font-size: 0.85rem; }
  .testimonials-section { padding: 80px 24px; }
  .faq-section { padding: 80px 24px; }
}
</style>
