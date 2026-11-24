import { createFileRoute, redirect } from "@tanstack/react-router";
export const Route = createFileRoute("/why-marastu")({ beforeLoad: () => { throw redirect({ to: "/who-we-are", statusCode: 301 }); } });
