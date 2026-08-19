/**
 * Service Worker para LilD - Segurança no Trabalho
 * Permite funcionalidade offline e cache de recursos
 */

const CACHE_NAME = 'lild-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/assets/css/style.css',
    '/assets/js/script.js'
];

// Instalação do Service Worker
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Cache aberto');
                return cache.addAll(urlsToCache);
            })
            .catch(err => console.log('Erro ao cachear:', err))
    );
    self.skipWaiting();
});

// Ativação do Service Worker
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Cache antigo deletado:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

// Interceptação de requisições
self.addEventListener('fetch', event => {
    // Apenas GET requests
    if (event.request.method !== 'GET') {
        return;
    }

    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Retorna do cache se disponível
                if (response) {
                    return response;
                }

                return fetch(event.request)
                    .then(response => {
                        // Não cachea recursos inválidos
                        if (!response || response.status !== 200 || response.type === 'error') {
                            return response;
                        }

                        // Clona a resposta
                        const responseToCache = response.clone();

                        caches.open(CACHE_NAME)
                            .then(cache => {
                                cache.put(event.request, responseToCache);
                            });

                        return response;
                    })
                    .catch(err => {
                        console.log('Fetch failed:', err);
                        // Retorna página offline se disponível
                        return caches.match('/index.html');
                    });
            })
    );
});
