<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const step = ref(0)
const joseBalance = ref(45000)
const isModalOpen = ref(false)
const showToast = ref(false)

const formatCurrency = (val: number) => {
  return new Intl.NumberFormat('es-CO', { 
    style: 'currency', 
    currency: 'COP', 
    maximumFractionDigits: 0 
  }).format(val)
}

let animationInterval: ReturnType<typeof setInterval>

const runSequence = () => {
  // 1. Initial State
  step.value = 0
  joseBalance.value = 45000
  isModalOpen.value = false
  showToast.value = false

  // 2. Open Payment Modal
  setTimeout(() => {
    isModalOpen.value = true
    step.value = 1
  }, 1500)

  // 3. Simulate "typing" the exact amount
  setTimeout(() => {
    step.value = 2
  }, 2500)

  // 4. Click Confirm
  setTimeout(() => {
    step.value = 3
  }, 3500)

  // 5. Success State: Modal closes, balance drops to 0, toast appears
  setTimeout(() => {
    isModalOpen.value = false
    joseBalance.value = 0
    showToast.value = true
  }, 3800)

  // 6. Hide toast
  setTimeout(() => {
    showToast.value = false
  }, 6000)
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
      
      <!-- Top header -->
      <div class="header-section">
        <div class="header-top">
          <svg class="icon-back" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 12H4M10 18l-6-6 6-6"/></svg>
          <div class="view-title">Clientes (Fiados)</div>
          <div style="width: 24px;"></div>
        </div>
        <div class="search-bar">
          <div class="search-input">
            <svg class="icon-search" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
            <span>Buscar cliente...</span>
          </div>
        </div>
      </div>

      <div class="app-scroll-body">
        
        <div class="client-list">
          
          <!-- Client Card: Target (Don José) -->
          <div class="client-card" :class="{'active-card': isModalOpen}">
            <div class="avatar bg-pink">
              <span class="avatar-initials">JO</span>
              <div class="status-dot"></div>
            </div>
            <div class="client-info">
              <div class="client-name">Don José</div>
              <div class="client-meta">Cliente frecuente</div>
            </div>
            <div class="client-balance">
              <div class="balance-label">Deuda pendiente</div>
              <div class="balance-amount transition-colors" :class="joseBalance > 0 ? 'text-red' : 'text-gray'">
                {{ joseBalance > 0 ? '-' : '' }} {{ formatCurrency(joseBalance) }}
              </div>
            </div>
          </div>

          <!-- Client Card: Normal -->
          <div class="client-card">
            <div class="avatar bg-blue">
              <span class="avatar-initials">MA</span>
              <div class="status-dot"></div>
            </div>
            <div class="client-info">
              <div class="client-name">Doña Marta</div>
              <div class="client-meta">Cliente</div>
            </div>
            <div class="client-balance">
              <div class="balance-label">Deuda pendiente</div>
              <div class="balance-amount text-red">- {{ formatCurrency(12500) }}</div>
            </div>
          </div>

          <!-- Client Card: Normal (No debt) -->
          <div class="client-card">
            <div class="avatar bg-green">
              <span class="avatar-initials">CA</span>
            </div>
            <div class="client-info">
              <div class="client-name">Carlos</div>
              <div class="client-meta">Cliente</div>
            </div>
            <div class="client-balance">
              <div class="balance-label">Deuda pendiente</div>
              <div class="balance-amount text-gray">{{ formatCurrency(0) }}</div>
            </div>
          </div>

        </div>

      </div>

      <!-- Slide-up Modal for Payment -->
      <transition name="slide-up">
        <div v-if="isModalOpen" class="bottom-sheet-overlay">
          <div class="bottom-sheet">
            <div class="sheet-handle"></div>
            <h3 class="sheet-title">Registrar Abono</h3>
            <p class="sheet-subtitle">Cliente: <strong>Don José</strong></p>
            
            <div class="input-group">
              <label>Monto a abonar</label>
              <div class="fake-input" :class="{'typing': step >= 2}">
                <span v-if="step < 2" class="placeholder">$ 0</span>
                <span v-else class="typed-value">$ 45.000</span>
              </div>
            </div>

            <div class="fake-btn" :class="{'pressed': step === 3}">
              Confirmar Abono
            </div>
          </div>
        </div>
      </transition>

      <!-- Success Toast -->
      <transition name="toast-slide">
        <div v-if="showToast" class="success-toast">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
          <div class="toast-text">
            <strong>Abono registrado</strong><br/>
            El saldo ha sido actualizado.
          </div>
        </div>
      </transition>

      <!-- Fake Floating Action Button -->
      <div class="fab-group">
        <div class="fab fab-primary">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
        </div>
      </div>

      <!-- Fake Bottom Nav -->
      <div class="bottom-nav">
        <div class="nav-item"><div class="nav-icon"></div>Vender</div>
        <div class="nav-item"><div class="nav-icon"></div>Productos</div>
        <div class="nav-item active"><div class="nav-icon active-icon"></div>Clientes</div>
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
  background: #f1f5f9;
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

/* Header */
.header-section {
  background: var(--white);
  padding: 16px 16px 12px;
  border-bottom: 1px solid var(--gray-200);
  z-index: 5;
}
.header-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}
.view-title {
  font-weight: 800;
  color: #0f172a;
  font-size: 1.1rem;
}
.icon-back { width: 24px; height: 24px; color: var(--gray-700); }
.search-bar { display: flex; align-items: center; gap: 12px; }
.search-input {
  flex: 1; height: 40px; background: #f8fafc; border: 1px solid #e2e8f0;
  border-radius: 8px; display: flex; align-items: center; padding: 0 12px; gap: 8px;
  color: var(--gray-400); font-size: 0.9rem;
}
.icon-search { width: 18px; height: 18px; }

/* Body */
.app-scroll-body {
  flex: 1; padding: 16px; display: flex; flex-direction: column; overflow: hidden;
}

/* Client List Exact Replica style */
.client-list { display: flex; flex-direction: column; gap: 12px; }
.client-card {
  background: var(--white);
  border-radius: 16px;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
  border: 1px solid transparent;
}
.active-card {
  border-color: #cbd5e1;
  box-shadow: 0 8px 16px -4px rgba(0,0,0,0.1);
  transform: scale(1.02);
}

.avatar {
  width: 48px; height: 48px; border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
  font-weight: 800; font-size: 1.1rem; color: #0f172a; position: relative;
}
.bg-pink { background: #fce7f3; color: #be185d; }
.bg-blue { background: #e0f2fe; color: #0369a1; }
.bg-green { background: #d1fae5; color: #047857; }
.status-dot {
  position: absolute; bottom: -2px; right: -2px; width: 12px; height: 12px;
  background: #10b981; border: 2px solid white; border-radius: 50%;
}

.client-info { flex: 1; }
.client-name { font-weight: 800; font-size: 0.95rem; color: #0f172a; margin-bottom: 2px; }
.client-meta { font-size: 0.75rem; color: #64748b; font-weight: 500; }

.client-balance { text-align: right; }
.balance-label { font-size: 0.65rem; color: var(--gray-400); font-weight: 600; text-transform: uppercase; margin-bottom: 2px; }
.balance-amount { font-weight: 800; font-size: 1.05rem; }
.text-red { color: #ef4444; }
.text-gray { color: #94a3b8; }
.transition-colors { transition: color 0.4s ease; font-variant-numeric: tabular-nums; }

/* Bottom Sheet Modal */
.bottom-sheet-overlay {
  position: absolute; inset: 0; background: rgba(15, 23, 42, 0.4);
  z-index: 30; display: flex; align-items: flex-end;
}
.bottom-sheet {
  background: white; width: 100%; border-radius: 24px 24px 0 0;
  padding: 24px; box-shadow: 0 -10px 25px rgba(0,0,0,0.1);
}
.sheet-handle { width: 40px; height: 4px; background: #e2e8f0; border-radius: 2px; margin: 0 auto 20px; }
.sheet-title { font-weight: 800; color: #0f172a; font-size: 1.1rem; margin-bottom: 4px; }
.sheet-subtitle { font-size: 0.85rem; color: #64748b; margin-bottom: 24px; }

.input-group label { display: block; font-size: 0.75rem; font-weight: 700; color: #64748b; margin-bottom: 8px; text-transform: uppercase; }
.fake-input {
  height: 52px; border: 2px solid #e2e8f0; border-radius: 12px;
  display: flex; align-items: center; padding: 0 16px; font-size: 1.2rem; font-weight: 800;
  transition: all 0.2s;
}
.fake-input.typing { border-color: #1d4ed8; box-shadow: 0 0 0 4px rgba(29, 78, 216, 0.1); }
.placeholder { color: #94a3b8; }
.typed-value { color: #0f172a; }

.fake-btn {
  margin-top: 24px; height: 52px; background: #1d4ed8; color: white;
  border-radius: 12px; display: flex; align-items: center; justify-content: center;
  font-weight: 800; font-size: 1rem; transition: transform 0.1s;
}
.fake-btn.pressed { transform: scale(0.97); background: #1e40af; }

/* Success Toast */
.success-toast {
  position: absolute; top: 20px; left: 16px; right: 16px;
  background: white; border-radius: 12px; padding: 16px;
  display: flex; align-items: center; gap: 12px;
  box-shadow: 0 10px 25px -5px rgba(0,0,0,0.15); border-left: 4px solid #10b981;
  z-index: 40;
}
.success-toast svg { width: 24px; height: 24px; color: #10b981; }
.toast-text { font-size: 0.85rem; color: #334155; line-height: 1.4; }
.toast-text strong { color: #0f172a; font-size: 0.95rem; }

/* FABs */
.fab-group { position: absolute; bottom: 80px; right: 16px; z-index: 10; }
.fab-primary { width: 56px; height: 56px; border-radius: 50%; background: #1d4ed8; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(29, 78, 216, 0.3); }
.fab-primary svg { width: 24px; height: 24px; }

/* Fake Bottom Nav */
.bottom-nav { height: 64px; background: var(--white); border-top: 1px solid var(--gray-200); display: flex; justify-content: space-around; align-items: center; z-index: 5; }
.nav-item { display: flex; flex-direction: column; align-items: center; gap: 4px; font-size: 0.6rem; font-weight: 600; color: var(--gray-400); }
.nav-icon { width: 24px; height: 24px; border-radius: 6px; background: var(--gray-200); }
.nav-item.active { color: #1d4ed8; }
.nav-item.active .active-icon { background: #1d4ed8; opacity: 0.1; }

/* Transitions */
.slide-up-enter-active, .slide-up-leave-active { transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1); }
.slide-up-enter-from, .slide-up-leave-to { opacity: 0; transform: translateY(100%); }
.toast-slide-enter-active, .toast-slide-leave-active { transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1); }
.toast-slide-enter-from { opacity: 0; transform: translateY(-20px) scale(0.95); }
.toast-slide-leave-to { opacity: 0; transform: translateY(-20px); }
</style>
