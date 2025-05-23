import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"

// Cria um matcher para as rotas protegidas
const isProtectedRoute = createRouteMatcher(["/estudantes(.*)", "/professores(.*)"])

export default clerkMiddleware((auth, req) => {
  // Se a rota for protegida e o usuário não estiver autenticado,
  // o Clerk irá redirecionar para a página de login automaticamente
  if (isProtectedRoute(req)) {
    // Você pode adicionar lógica adicional aqui se necessário
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
}
