import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
  "/estudantes(.*)",
  "/professores(.*)",
]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) {
    // Apenas protege da não-autenticação
  }
});

export const config = {
  matcher: ["/estudantes(.*)", "/professores(.*)"],
};
