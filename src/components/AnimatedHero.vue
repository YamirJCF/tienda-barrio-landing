<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const step = ref(0)
const ganancia = ref(15400)
const isGlowing = ref(false)
const showBadge = ref(false)

let animationInterval: ReturnType<typeof setInterval>

const runAnimationSequence = () => {
  // Step 0: Initial state
  step.value = 0
  ganancia.value = 15400
  isGlowing.value = false
  showBadge.value = false

  // Step 1: Start typing (Product)
  setTimeout(() => { step.value = 1 }, 800)

  // Step 2: Prices typed
  setTimeout(() => { step.value = 2 }, 1600)

  // Step 3: Button clicked
  setTimeout(() => { step.value = 3 }, 2600)

  // Step 4: Result shown on the right panel
  setTimeout(() => {
    step.value = 4
    ganancia.value = 16200
    isGlowing.value = true
    showBadge.value = true
    
    // Remove glow after a second, but keep badge a bit longer
    setTimeout(() => { isGlowing.value = false }, 1200)
  }, 2900)
}

onMounted(() => {
  runAnimationSequence()
  animationInterval = setInterval(runAnimationSequence, 6500)
})

onUnmounted(() => {
  clearInterval(animationInterval)
})

const formatCurrency = (val: number) => {
  return new Intl.NumberFormat('es-CO', { 
    style: 'currency', 
    currency: 'COP', 
    maximumFractionDigits: 0 
  }).format(val)
}
</script>

<template>
  <div class="anim-container" aria-hidden="true">
    <div class="anim-app-window">
      
      <!-- Navbar (Mock) -->
      <div class="anim-header">
        <div class="anim-dots">
          <span></span><span></span><span></span>
        </div>
        <div class="anim-title">Tienda Barrio Pro</div>
      </div>

      <!-- App Body -->
      <div class="anim-body">
        
        <!-- Left Panel: Manual Input -->
        <div class="anim-panel panel-left">
          <div class="anim-panel-header">Nueva Venta</div>
          
          <div class="anim-form">
            <div class="anim-field">
              <div class="field-label">Producto</div>
              <div class="field-input" :class="{'typing': step === 0}">
                <transition name="fade">
                  <span v-if="step >= 1">Empanada Carne</span>
                </transition>
              </div>
            </div>
            
            <div class="anim-row">
              <div class="anim-field">
                <div class="field-label">Precio</div>
                <div class="field-input" :class="{'typing': step === 1}">
                  <transition name="fade">
                    <span v-if="step >= 2" class="text-brand">$ 2.000</span>
                  </transition>
                </div>
              </div>
              <div class="anim-field">
                <div class="field-label">Costo</div>
                <div class="field-input" :class="{'typing': step === 1}">
                  <transition name="fade">
                    <span v-if="step >= 2" class="text-danger">$ 1.200</span>
                  </transition>
                </div>
              </div>
            </div>

            <!-- CTA Button -->
            <div class="anim-btn" :class="{ 'btn-pressed': step === 3 }">
              Registrar Venta
            </div>
          </div>
        </div>

        <!-- Right Panel: Automatic Output -->
        <div class="anim-panel panel-right">
          <div class="anim-panel-header">Resumen Hoy</div>
          
          <div class="anim-card" :class="{ 'card-glow': isGlowing }">
            <div class="card-header">
              <div class="card-title">Ganancia Neta</div>
              <div class="card-icon">↗</div>
            </div>
            
            <div class="card-value" :class="{ 'value-updated': isGlowing }">
              {{ formatCurrency(ganancia) }}
            </div>
            
            <transition name="pop">
              <div v-if="showBadge" class="card-badge">
                + {{ formatCurrency(800) }}
              </div>
            </transition>
          </div>
          
          <div class="anim-card-small">
            <div class="card-title">Margen Promedio</div>
            <div class="card-value-small">26.5%</div>
            <div class="card-bar"><div class="card-fill"></div></div>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
/* Container & 3D Perspective */
.anim-container {
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  perspective: 1200px;
  user-select: none;
}

.anim-app-window {
  background: var(--white);
  border-radius: 12px;
  border: 1px solid var(--gray-200);
  box-shadow: 0 24px 48px -12px rgba(0, 0, 0, 0.18), 0 4px 12px -4px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transform: rotateY(-8deg) rotateX(4deg) translateY(0);
  transform-style: preserve-3d;
  transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
  will-change: transform;
}

.anim-app-window:hover {
  transform: rotateY(0) rotateX(0) translateY(-8px);
  box-shadow: 0 32px 64px -12px rgba(0, 0, 0, 0.2), 0 8px 24px -4px rgba(0, 0, 0, 0.1);
}

/* Header */
.anim-header {
  background: var(--gray-50);
  border-bottom: 1px solid var(--gray-200);
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  position: relative;
}
.anim-dots {
  display: flex;
  gap: 6px;
}
.anim-dots span {
  width: 10px; height: 10px; border-radius: 50%;
  background: var(--gray-300);
}
.anim-dots span:nth-child(1) { background: #ff5f56; }
.anim-dots span:nth-child(2) { background: #ffbd2e; }
.anim-dots span:nth-child(3) { background: #27c93f; }
.anim-title {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--gray-500);
  letter-spacing: 0.05em;
}

/* Body Layout */
.anim-body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: var(--gray-50);
  min-height: 280px;
}

/* Panels */
.anim-panel {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.panel-left {
  background: var(--white);
  border-right: 1px dashed var(--gray-200);
}
.panel-right {
  background: var(--gray-50);
}

.anim-panel-header {
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 700;
  color: var(--gray-400);
}

/* Form Styles */
.anim-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.anim-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}
.anim-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.field-label {
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--gray-500);
}
.field-input {
  height: 36px;
  background: var(--gray-50);
  border: 1px solid var(--gray-200);
  border-radius: 6px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--gray-900);
  position: relative;
}

/* Typing cursor animation */
.field-input::after {
  content: '';
  position: absolute;
  left: 12px;
  width: 2px;
  height: 16px;
  background: var(--brand);
  opacity: 0;
}
.field-input.typing::after {
  animation: cursorBlink 1s infinite;
}
@keyframes cursorBlink {
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
}

.text-brand { color: var(--brand); }
.text-danger { color: #e11d48; }

/* Button */
.anim-btn {
  margin-top: 8px;
  height: 40px;
  background: var(--brand);
  color: var(--white);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  font-weight: 700;
  box-shadow: 0 4px 12px rgba(13, 148, 136, 0.2);
  transition: all 0.15s ease;
}
.anim-btn.btn-pressed {
  transform: scale(0.96) translateY(2px);
  background: var(--brand-dark);
  box-shadow: 0 0 0 transparent;
}

/* Result Card */
.anim-card {
  background: var(--white);
  border-radius: 8px;
  border: 1px solid var(--gray-200);
  padding: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  position: relative;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.anim-card.card-glow {
  border-color: #10b981;
  box-shadow: 0 12px 24px -4px rgba(16, 185, 129, 0.25);
  transform: translateY(-4px) scale(1.02);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}
.card-title {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--gray-500);
}
.card-icon {
  width: 20px; height: 20px;
  background: var(--green-soft);
  color: var(--green-text);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.6rem; font-weight: bold;
}

.card-value {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--gray-900);
  letter-spacing: -0.02em;
  transition: color 0.3s;
}
.card-value.value-updated {
  color: #10b981; /* green-500 */
}

.card-badge {
  position: absolute;
  top: -10px;
  right: -10px;
  background: #10b981;
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(16, 185, 129, 0.3);
  z-index: 10;
}

/* Small Card */
.anim-card-small {
  margin-top: auto;
  background: transparent;
  padding: 8px 0;
}
.card-value-small {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--gray-700);
  margin-top: 4px;
}
.card-bar {
  height: 6px;
  background: var(--gray-200);
  border-radius: 3px;
  margin-top: 8px;
  overflow: hidden;
}
.card-fill {
  width: 26.5%;
  height: 100%;
  background: var(--brand);
  border-radius: 3px;
}

/* Vue Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(4px);
}
.fade-leave-to {
  opacity: 0;
}

.pop-enter-active {
  animation: popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.pop-leave-active {
  animation: fadeOut 0.3s ease forwards;
}

@keyframes popIn {
  0% { transform: scale(0.5) translateY(10px); opacity: 0; }
  100% { transform: scale(1) translateY(0); opacity: 1; }
}
@keyframes fadeOut {
  to { transform: scale(0.8); opacity: 0; }
}

@media (max-width: 600px) {
  .anim-body { grid-template-columns: 1fr; }
  .panel-left { border-right: none; border-bottom: 1px dashed var(--gray-200); }
  .anim-app-window { transform: none; }
  .anim-app-window:hover { transform: translateY(-4px); }
}
</style>
