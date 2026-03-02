<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const step = ref(0)
const selectedRange = ref('HOY')

// Datos "HOY"
const dataHoy = {
  ventas: 28500,
  costos: 19800,
  gastos: 0,
  ganancia: 8700,
  margen: '30.5%'
}

// Datos "ÚLTIMOS 7 DÍAS"
const dataSemana = {
  ventas: 1450000,
  costos: 1050000,
  gastos: 85000,
  ganancia: 315000,
  margen: '21.7%'
}

// Estado reactivo que se mostrará en pantalla
const currentData = ref({ ...dataHoy })
const isCalculating = ref(false)

let animationInterval: ReturnType<typeof setInterval>

const formatCurrency = (val: number) => {
  return new Intl.NumberFormat('es-CO', { 
    style: 'currency', 
    currency: 'COP', 
    maximumFractionDigits: 0 
  }).format(val)
}

// Función para animar los números (ruleta)
const animateValues = (targetData: typeof dataHoy) => {
  isCalculating.value = true
  
  const start = { ...currentData.value }
  const duration = 800
  const steps = 20
  const interval = duration / steps
  let currentStep = 0

  const counter = setInterval(() => {
    currentStep++
    const progress = currentStep / steps
    
    // Ease out math
    const easeProgress = 1 - Math.pow(1 - progress, 3)

    currentData.value.ventas = start.ventas + (targetData.ventas - start.ventas) * easeProgress
    currentData.value.costos = start.costos + (targetData.costos - start.costos) * easeProgress
    currentData.value.gastos = start.gastos + (targetData.gastos - start.gastos) * easeProgress
    currentData.value.ganancia = start.ganancia + (targetData.ganancia - start.ganancia) * easeProgress
    
    // Just swap the string at the end
    if (currentStep >= steps) {
      currentData.value.margen = targetData.margen
      clearInterval(counter)
      isCalculating.value = false
    }
  }, interval)
}

const runSequence = () => {
  // Estado 1: Viendo reporte de "HOY"
  step.value = 0
  selectedRange.value = 'HOY'
  currentData.value = { ...dataHoy }
  isCalculating.value = false

  // Estado 2: Click en el dropdown
  setTimeout(() => { step.value = 1 }, 2500)

  // Estado 3: Selecciona "Últimos 7 días" y corre el cálculo
  setTimeout(() => { 
    step.value = 2
    selectedRange.value = 'ÚLTIMOS 7 DÍAS'
    animateValues(dataSemana)
  }, 3500)
}

onMounted(() => {
  runSequence()
  animationInterval = setInterval(runSequence, 8000)
})

onUnmounted(() => {
  clearInterval(animationInterval)
})
</script>

<template>
  <div class="anim-container" aria-hidden="true">
    <div class="app-ui-frame">
      
      <!-- Topbar Header -->
      <div class="app-header">
        <div class="menu-icon">
          <span></span><span></span><span></span>
        </div>
        <div class="app-title">Reportes</div>
        <div class="avatar-placeholder"></div>
      </div>

      <div class="app-scroll-body">
        
        <!-- Interactive Date Selector -->
        <div class="filter-section">
          <label class="filter-label">Período de análisis</label>
          <div class="dropdown-wrapper" :class="{ 'dropdown-active': step === 1, 'dropdown-calculating': isCalculating }">
            <div class="dropdown-selected">
              {{ selectedRange }}
              <svg viewBox="0 0 24 24" fill="none" class="chevron" :class="{'rotate': step === 1}">
                <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>
            
            <div v-if="step === 1" class="dropdown-menu">
              <div class="dropdown-item">Ayer</div>
              <div class="dropdown-item active hover-target">Últimos 7 días</div>
              <div class="dropdown-item">Este mes</div>
            </div>
          </div>
        </div>

        <!-- The "Earned" Main Card -->
        <div class="main-profit-card" :class="{ 'pulse-green': !isCalculating && step === 2 }">
          <div class="mp-header">TU GANANCIA PERÍODO SELECCIONADO</div>
          <div class="mp-value" :class="{'blur-text': isCalculating}">
            {{ formatCurrency(currentData.ganancia) }}
          </div>
          <div class="mp-badge">
            <span class="dot"></span> Resultados en tiempo real
          </div>
        </div>

        <!-- Breakdown Grid -->
        <div class="breakdown-grid">
          
          <div class="breakdown-card">
            <div class="bd-label">Ventas Totales</div>
            <div class="bd-value text-dark" :class="{'blur-text': isCalculating}">
              {{ formatCurrency(currentData.ventas) }}
            </div>
          </div>

          <div class="breakdown-card">
            <div class="bd-label">Costo de Mercancía</div>
            <div class="bd-value text-red" :class="{'blur-text': isCalculating}">
              - {{ formatCurrency(currentData.costos) }}
            </div>
          </div>

          <div class="breakdown-card">
            <div class="bd-label">Gastos Operativos</div>
            <div class="bd-value text-red" :class="{'blur-text': isCalculating}">
              - {{ formatCurrency(currentData.gastos) }}
            </div>
          </div>

          <div class="breakdown-card highlight-card">
            <div class="bd-label">Margen Bruto</div>
            <div class="bd-value text-brand" :class="{'blur-text': isCalculating}">
              {{ currentData.margen }}
            </div>
          </div>

        </div>

      </div>
      
      <!-- Fake Bottom Nav -->
      <div class="bottom-nav">
        <div class="nav-item"><div class="nav-icon"></div>Vender</div>
        <div class="nav-item"><div class="nav-icon"></div>Inventario</div>
        <div class="nav-item active"><div class="nav-icon active-icon"></div>Reportes</div>
        <div class="nav-item"><div class="nav-icon"></div>Más</div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.anim-container {
  width: 100%;
  max-width: 380px;
  margin: 0 auto;
  user-select: none;
}

/* Base Phone UI Frame */
.app-ui-frame {
  background: #f4f4f5; /* Light gray app background */
  border-radius: 20px;
  border: 8px solid var(--white);
  box-shadow: 0 10px 25px rgba(0,0,0,0.1), 0 4px 10px rgba(0,0,0,0.05);
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 600px;
  font-family: 'Inter', system-ui, sans-serif;
}

/* Topbar */
.app-header {
  background: var(--brand);
  color: white;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  flex-shrink: 0;
}
.menu-icon {
  display: flex; flex-direction: column; gap: 4px;
}
.menu-icon span { width: 18px; height: 2px; background: white; border-radius: 2px; }
.app-title { font-weight: 600; font-size: 1rem; letter-spacing: -0.01em; }
.avatar-placeholder { width: 28px; height: 28px; border-radius: 50%; background: rgba(255,255,255,0.2); }

/* Body */
.app-scroll-body {
  flex: 1;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow: hidden;
}

/* Dropdown */
.filter-section {
  display: flex;
  flex-direction: column;
  gap: 6px;
  position: relative;
  z-index: 10;
}
.filter-label {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--gray-500);
}
.dropdown-wrapper {
  background: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: 8px;
  position: relative;
  transition: all 0.2s ease;
}
.dropdown-selected {
  padding: 12px 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--gray-800);
}
.dropdown-active {
  border-color: var(--brand);
  box-shadow: 0 0 0 2px rgba(13, 148, 136, 0.1);
}
.dropdown-calculating {
  opacity: 0.7;
  pointer-events: none;
}
.chevron { width: 16px; height: 16px; color: var(--gray-400); transition: transform 0.2s; }
.chevron.rotate { transform: rotate(180deg); }

.dropdown-menu {
  position: absolute;
  top: 100%; left: 0; right: 0;
  background: white;
  border-radius: 8px;
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
  border: 1px solid var(--gray-200);
  margin-top: 4px;
  overflow: hidden;
}
.dropdown-item {
  padding: 10px 14px;
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--gray-600);
  border-bottom: 1px solid var(--gray-100);
}
.dropdown-item:last-child { border-bottom: none; }
.dropdown-item.active { background: #f8fafc; font-weight: 600; }
.dropdown-item.hover-target { background: #f0fdf4; color: var(--brand); }

/* Main Profit Card */
.main-profit-card {
  background: var(--white);
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  border: 1px solid var(--gray-200);
  box-shadow: 0 2px 4px rgba(0,0,0,0.02);
  transition: box-shadow 0.4s ease, border-color 0.4s ease;
}
.pulse-green {
  border-color: #10b981;
  box-shadow: 0 8px 20px -4px rgba(16, 185, 129, 0.2);
}

.mp-header {
  font-size: 0.65rem;
  font-weight: 700;
  color: var(--gray-400);
  letter-spacing: 0.05em;
  margin-bottom: 8px;
}
.mp-value {
  font-size: 2rem;
  font-weight: 800;
  color: #10b981;
  letter-spacing: -0.03em;
  font-variant-numeric: tabular-nums;
  transition: filter 0.2s ease;
}
.mp-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #f0fdf4;
  color: #059669;
  font-size: 0.65rem;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 20px;
  margin-top: 12px;
}
.mp-badge .dot {
  width: 6px; height: 6px; background: #10b981; border-radius: 50%;
}

/* Breakdown Grid */
.breakdown-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}
.breakdown-card {
  background: var(--white);
  border-radius: 10px;
  padding: 14px;
  border: 1px solid var(--gray-200);
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.highlight-card {
  background: #f8fafc;
  border-color: #cbd5e1;
}
.bd-label {
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--gray-500);
}
.bd-value {
  font-size: 1.05rem;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  transition: filter 0.2s ease;
}
.text-dark { color: var(--gray-900); }
.text-red { color: #e11d48; }
.text-brand { color: var(--brand); font-size: 1.2rem; }

/* Blur effect applied while numbers are calculating */
.blur-text {
  filter: blur(2px);
  opacity: 0.8;
}

/* Fake Bottom Nav */
.bottom-nav {
  height: 64px;
  background: var(--white);
  border-top: 1px solid var(--gray-200);
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-shrink: 0;
}
.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  font-size: 0.6rem;
  font-weight: 600;
  color: var(--gray-400);
}
.nav-icon {
  width: 24px; height: 24px;
  border-radius: 6px;
  background: var(--gray-200);
}
.nav-item.active { color: var(--brand); }
.nav-item.active .active-icon { background: var(--brand-light); }
</style>
