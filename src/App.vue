<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const APP_URL = 'https://detuconfianza.vercel.app'
const mobileMenuOpen = ref(false)
const toggleMenu = () => { mobileMenuOpen.value = !mobileMenuOpen.value }
const closeMenu = () => { mobileMenuOpen.value = false }
</script>

<template>
  <div class="layout">
    <!-- NAVBAR -->
    <nav class="nav">
      <div class="nav-inner">
        <RouterLink to="/" class="nav-brand" @click="closeMenu">
          Tienda Barrio <span>Pro</span>
        </RouterLink>

        <div class="nav-links">
          <RouterLink to="/finanzas" class="nav-link">Finanzas</RouterLink>
          <RouterLink to="/inventario" class="nav-link">Inventario</RouterLink>
          <RouterLink to="/operacion" class="nav-link">Operación</RouterLink>
        </div>

        <div class="nav-actions">
          <a :href="`${APP_URL}/#/login`" class="nav-login">Iniciar sesión</a>
          <a :href="`${APP_URL}/#/register-store`" class="btn btn-primary nav-cta">Registrarme gratis</a>
        </div>

        <button class="nav-toggle" @click="toggleMenu" :aria-label="mobileMenuOpen ? 'Cerrar' : 'Menú'">
          <span :class="['bar', { open: mobileMenuOpen }]"></span>
          <span :class="['bar', { open: mobileMenuOpen }]"></span>
        </button>
      </div>

      <Transition name="slide">
        <div v-if="mobileMenuOpen" class="nav-mobile">
          <RouterLink to="/finanzas" class="nav-mobile-link" @click="closeMenu">Finanzas</RouterLink>
          <RouterLink to="/inventario" class="nav-mobile-link" @click="closeMenu">Inventario</RouterLink>
          <RouterLink to="/operacion" class="nav-mobile-link" @click="closeMenu">Operación</RouterLink>
          <hr class="nav-mobile-divider" />
          <a :href="`${APP_URL}/#/login`" class="nav-mobile-link" @click="closeMenu">Iniciar sesión</a>
          <a :href="`${APP_URL}/#/register-store`" class="btn btn-primary" style="width: 100%; justify-content: center;" @click="closeMenu">Registrarme gratis</a>
        </div>
      </Transition>
    </nav>

    <!-- CONTENT -->
    <main><RouterView /></main>

    <!-- FOOTER -->
    <footer class="footer">
      <div class="container footer-grid">
        <div>
          <p class="footer-brand">Tienda Barrio <span>Pro</span></p>
          <p class="t-small" style="margin-top: 8px;">El sistema de gestión diseñado<br/>para tiendas de barrio y minimarkets.</p>
        </div>
        <div class="footer-col">
          <p class="footer-heading">Producto</p>
          <RouterLink to="/finanzas">Finanzas</RouterLink>
          <RouterLink to="/inventario">Inventario</RouterLink>
          <RouterLink to="/operacion">Operación</RouterLink>
        </div>
        <div class="footer-col">
          <p class="footer-heading">Acceso</p>
          <a :href="`${APP_URL}/#/login`">Iniciar sesión</a>
          <a :href="`${APP_URL}/#/register-store`">Crear cuenta</a>
        </div>
      </div>
      <div class="container footer-bottom">
        <p class="t-small">© {{ new Date().getFullYear() }} Tienda Barrio Pro. Todos los derechos reservados.</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.layout { padding-top: 64px; }

/* NAV */
.nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  background: rgba(255,255,255,0.85);
  backdrop-filter: blur(16px) saturate(180%);
  border-bottom: 1px solid var(--gray-200);
}
.nav-inner {
  max-width: 1080px; margin: 0 auto;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 24px; height: 64px;
}
.nav-brand {
  font-size: 1.1rem; font-weight: 700; color: var(--gray-950);
  text-decoration: none; letter-spacing: -0.01em;
}
.nav-brand span { color: var(--brand); }
.nav-links { display: flex; gap: 32px; }
.nav-link {
  font-size: 0.9rem; font-weight: 500; color: var(--gray-500);
  text-decoration: none; transition: color 0.2s;
  position: relative;
}
.nav-link:hover { color: var(--gray-900); }
.nav-link.router-link-active { color: var(--gray-900); }
.nav-link.router-link-active::after {
  content: ''; position: absolute; bottom: -20px; left: 0; right: 0;
  height: 2px; background: var(--brand); border-radius: 1px;
}
.nav-actions { display: flex; align-items: center; gap: 16px; }
.nav-login {
  font-size: 0.9rem; font-weight: 500; color: var(--gray-600);
  text-decoration: none; transition: color 0.2s;
}
.nav-login:hover { color: var(--gray-900); }
.nav-cta { padding: 8px 20px !important; font-size: 0.85rem !important; }

/* Hamburger */
.nav-toggle {
  display: none; flex-direction: column; gap: 6px;
  background: none; border: none; cursor: pointer; padding: 8px 4px;
}
.bar {
  display: block; width: 20px; height: 2px;
  background: var(--gray-900); border-radius: 1px; transition: all 0.3s ease;
}
.bar.open:first-child { transform: rotate(45deg) translate(3px, 3px); }
.bar.open:last-child { transform: rotate(-45deg) translate(3px, -3px); }

/* Mobile */
.nav-mobile {
  display: flex; flex-direction: column; padding: 16px 24px 24px; gap: 4px;
  background: var(--white); border-bottom: 1px solid var(--gray-200);
}
.nav-mobile-link {
  text-decoration: none; color: var(--gray-700); font-weight: 500;
  padding: 12px 0; border-bottom: 1px solid var(--gray-100);
  font-size: 0.95rem;
}
.nav-mobile-divider { border: none; border-top: 1px solid var(--gray-200); margin: 8px 0; }

.slide-enter-active, .slide-leave-active { transition: all 0.25s ease; }
.slide-enter-from, .slide-leave-to { opacity: 0; transform: translateY(-8px); }

/* FOOTER */
.footer { background: var(--gray-950); color: var(--gray-400); padding: 64px 0 0; }
.footer-grid {
  display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 48px;
}
.footer-brand { font-size: 1.05rem; font-weight: 700; color: var(--white); }
.footer-brand span { color: var(--brand-light); }
.footer-col { display: flex; flex-direction: column; gap: 10px; }
.footer-heading { font-size: 0.8rem; font-weight: 600; color: var(--gray-300); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 4px; }
.footer-col a { color: var(--gray-400); text-decoration: none; font-size: 0.9rem; transition: color 0.2s; }
.footer-col a:hover { color: var(--white); }
.footer-bottom {
  margin-top: 48px; padding: 20px 0;
  border-top: 1px solid var(--gray-800);
}

@media (max-width: 768px) {
  .nav-links, .nav-actions { display: none; }
  .nav-toggle { display: flex; }
  .footer-grid { grid-template-columns: 1fr; gap: 32px; }
}
</style>
