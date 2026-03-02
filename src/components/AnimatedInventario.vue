<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const step = ref(0)
const highlightProduct = ref(false)

const formatCurrency = (val: number) => {
  return new Intl.NumberFormat('es-CO', { 
    style: 'currency', 
    currency: 'COP', 
    maximumFractionDigits: 0 
  }).format(val)
}

// Initial state of the "Gaseosa" product
const gaseosaStock = ref(12)
const isAlertActive = ref(false)

let animationInterval: ReturnType<typeof setInterval>

const runSequence = () => {
  // 1. Reset
  step.value = 0
  highlightProduct.value = false
  gaseosaStock.value = 12
  isAlertActive.value = false

  // 2. Start highlighting the specific product card to draw attention
  setTimeout(() => {
    highlightProduct.value = true
  }, 1000)

  // 3. Simulate sales happening in the background (stock decreases rapidly)
  setTimeout(() => {
    const drainInterval = setInterval(() => {
      if (gaseosaStock.value > 2) {
        gaseosaStock.value -= 1
      } else {
        clearInterval(drainInterval)
      }
    }, 150) // Very fast countdown
  }, 2000)

  // 4. Hit critical threshold (e.g., stock = 2) and trigger the system alert banner
  setTimeout(() => {
    isAlertActive.value = true
  }, 3800)
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
      
      <!-- Top header with search & filters (Exact UI Replica) -->
      <div class="header-section">
        <div class="search-bar">
          <svg class="icon-back" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 12H4M10 18l-6-6 6-6"/></svg>
          <div class="search-input">
            <svg class="icon-search" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
            <span>Buscar producto...</span>
          </div>
          <svg class="icon-filter" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
        </div>
        
        <div class="pill-scroll">
          <span class="pill active">Todas</span>
          <span class="pill">LIQUIDO</span>
          <span class="pill">granos</span>
          <span class="pill">Sin categoría</span>
        </div>
      </div>

      <div class="app-scroll-body">
        
        <div class="section-title">PRODUCTOS (8)</div>

        <div class="product-list">
          <!-- Normal Product 1 -->
          <div class="product-card">
            <div class="pc-top">
              <div class="pc-info">
                <div class="pc-name">ACEITE</div>
                <div class="pc-meta">NADA <span class="divider">|</span> 122 <span class="pc-category">LIQUIDO</span></div>
              </div>
              <div class="pc-price">{{ formatCurrency(1300) }}</div>
            </div>
            <div class="pc-bottom">
              <div class="pc-stock text-green">19 <span class="pc-unit">UN</span></div>
              <div class="pc-actions">
                <div class="action-icon"></div>
                <div class="action-icon"></div>
                <div class="action-icon"></div>
              </div>
            </div>
          </div>

          <!-- Highlight Product (Gaseosa) -->
          <div class="product-card target-card" :class="{ 'highlighted': highlightProduct, 'critical-state': isAlertActive }">
            <div class="pc-top">
              <div class="pc-info">
                <div class="pc-name">Gaseosa Cola 2L</div>
                <div class="pc-meta">Bebidas <span class="divider">|</span> 185 <span class="pc-category">LIQUIDO</span></div>
              </div>
              <div class="pc-price">{{ formatCurrency(4500) }}</div>
            </div>
            <div class="pc-bottom">
              <div class="pc-stock transition-colors" :class="gaseosaStock > 5 ? 'text-green' : 'text-amber'">
                {{ gaseosaStock }} <span class="pc-unit">UN</span>
              </div>
              <div class="pc-actions">
                <div class="action-icon"></div>
                <div class="action-icon"></div>
                <div class="action-icon"></div>
              </div>
            </div>
          </div>

          <!-- Normal Product 3 -->
          <div class="product-card">
            <div class="pc-top">
              <div class="pc-info">
                <div class="pc-name">Cebolla</div>
                <div class="pc-meta">144 <span class="pc-category">GRANOS</span></div>
              </div>
              <div class="pc-price">{{ formatCurrency(700) }}</div>
            </div>
            <div class="pc-bottom">
              <div class="pc-stock text-green">33.33 <span class="pc-unit">LB</span></div>
              <div class="pc-actions">
                <div class="action-icon"></div>
                <div class="action-icon"></div>
                <div class="action-icon"></div>
              </div>
            </div>
          </div>

        </div>

      </div>

      <!-- System Supportive Alert Overlay -->
      <transition name="fade-slide">
        <div v-if="isAlertActive" class="system-alert-overlay">
          <div class="alert-box">
            <div class="alert-icon-wrapper">
              <!-- Friendly Shield Check Icon -->
              <svg viewBox="0 0 24 24" fill="none" class="alert-icon-svg" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <polyline points="9 12 11 14 15 10"/>
              </svg>
            </div>
            <div class="alert-content">
              <div class="alert-title">Sugerencia a tiempo</div>
              <div class="alert-desc">La Gaseosa Cola 2L se está agotando. Te avisamos para que pidas a tiempo y no pierdas ventas.</div>
            </div>
          </div>
        </div>
      </transition>

      <!-- Fake Floating Action Buttons -->
      <div class="fab-group">
        <div class="fab fab-secondary"></div>
        <div class="fab fab-primary">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
        </div>
      </div>

      <!-- Fake Bottom Nav -->
      <div class="bottom-nav">
        <div class="nav-item"><div class="nav-icon"></div>Vender</div>
        <div class="nav-item active"><div class="nav-icon active-icon"></div>Productos</div>
        <div class="nav-item"><div class="nav-icon"></div>Reportes</div>
        <div class="nav-item"><div class="nav-icon"></div>Admin</div>
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
  background: #f1f5f9; /* Light background for the list */
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

/* Header & Search */
.header-section {
  background: var(--white);
  padding: 16px 16px 12px;
  border-bottom: 1px solid var(--gray-200);
  z-index: 5;
}
.search-bar {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}
.icon-back { width: 24px; height: 24px; color: var(--gray-700); }
.icon-filter { width: 20px; height: 20px; color: var(--gray-500); }
.search-input {
  flex: 1;
  height: 40px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  gap: 8px;
  color: var(--gray-400);
  font-size: 0.9rem;
}
.icon-search { width: 18px; height: 18px; }

/* Pills */
.pill-scroll {
  display: flex;
  gap: 8px;
  overflow: hidden;
}
.pill {
  padding: 6px 12px;
  border: 1px solid var(--gray-200);
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--gray-600);
  white-space: nowrap;
}
.pill.active {
  background: #1d4ed8; /* Blue brand from screenshot */
  color: white;
  border-color: #1d4ed8;
}

/* Body */
.app-scroll-body {
  flex: 1;
  padding: 16px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.section-title {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--gray-500);
  letter-spacing: 0.05em;
  margin-bottom: 12px;
}

/* Product List */
.product-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* Product Card - Exact Replica */
.product-card {
  background: var(--white);
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 1px solid transparent;
  transition: all 0.4s ease;
}
.target-card.highlighted {
  transform: scale(1.02);
  box-shadow: 0 8px 24px -6px rgba(0,0,0,0.1);
  border-color: #cbd5e1;
}
/* Softer warning state instead of harsh red */
.target-card.critical-state {
  border-color: #f59e0b; /* Amber 500 */
  box-shadow: 0 0 0 1px #f59e0b, 0 8px 24px -6px rgba(245, 158, 11, 0.2);
  background: #fffbeb; /* Amber 50 */
}

.pc-top { display: flex; justify-content: space-between; align-items: flex-start; }
.pc-name { font-weight: 800; font-size: 0.95rem; color: #0f172a; margin-bottom: 6px; }
.pc-meta { font-size: 0.65rem; color: var(--gray-400); font-weight: 600; display: flex; align-items: center; gap: 4px; }
.divider { color: var(--gray-300); }
.pc-category { background: #f1f5f9; padding: 2px 6px; border-radius: 4px; font-weight: 700; color: #64748b; }

.pc-price {
  background: #f1f5f9;
  padding: 6px 10px;
  border-radius: 8px;
  font-weight: 800;
  font-size: 0.9rem;
  color: #0f172a;
}

.pc-bottom { display: flex; justify-content: space-between; align-items: flex-end; }
.pc-stock { font-weight: 800; font-size: 1.1rem; }
.pc-unit { font-size: 0.65rem; font-weight: 700; color: var(--gray-400); }
.text-green { color: #10b981; }
.text-amber { color: #d97706; } /* Amber 600 */
.text-red { color: #ef4444; }

.transition-colors { transition: color 0.2s ease; font-variant-numeric: tabular-nums; }

.pc-actions { display: flex; gap: 12px; }
.action-icon {
  width: 18px; height: 18px;
  border: 1.5px solid var(--gray-300);
  border-radius: 4px;
}

/* FABs */
.fab-group {
  position: absolute;
  bottom: 80px;
  right: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 20;
}
.fab {
  width: 56px; height: 56px;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}
.fab-primary { background: #1d4ed8; }
.fab-primary svg { width: 24px; height: 24px; }
.fab-secondary { width: 44px; height: 44px; background: #10b981; align-self: flex-end; }

/* Fake Bottom Nav */
.bottom-nav {
  height: 64px;
  background: var(--white);
  border-top: 1px solid var(--gray-200);
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 5;
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
.nav-icon { width: 24px; height: 24px; border-radius: 6px; background: var(--gray-200); }
.nav-item.active { color: #1d4ed8; }
.nav-item.active .active-icon { background: #1d4ed8; opacity: 0.1; }

/* System Alert Overlay */
.system-alert-overlay {
  position: absolute;
  inset: 0;
  background: rgba(15, 23, 42, 0.4);
  backdrop-filter: blur(2px);
  z-index: 30;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}
.alert-box {
  background: white;
  border-radius: 16px;
  padding: 20px;
  width: 100%;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2);
  display: flex;
  gap: 16px;
  align-items: center;
}
.alert-icon-wrapper {
  background: #eff6ff; /* Blue 50 */
  color: #2563eb; /* Blue 600 */
  padding: 12px;
  border-radius: 12px;
}
.alert-icon-svg { width: 24px; height: 24px; }
.alert-content { flex: 1; }
.alert-title { font-weight: 800; color: #0f172a; font-size: 0.95rem; margin-bottom: 4px; }
.alert-desc { font-size: 0.8rem; color: var(--gray-600); line-height: 1.4; }

/* Vue Animations */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.fade-slide-enter-from { opacity: 0; transform: translateY(20px); }
.fade-slide-leave-to { opacity: 0; }
</style>
