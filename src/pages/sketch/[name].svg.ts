// src/pages/sketch/[name].svg.ts – Bleistift-Skizzen für den Hero, beim Build erzeugt
import type { APIRoute } from 'astro';
import { sketches, type SketchName } from '../../lib/sketch';

export const getStaticPaths = () =>
  Object.keys(sketches).map((name) => ({ params: { name } }));

export const GET: APIRoute = ({ params }) =>
  new Response(sketches[params.name as SketchName](), {
    headers: { 'Content-Type': 'image/svg+xml' },
  });
