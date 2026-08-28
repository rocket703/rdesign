import { getCollection, type CollectionEntry } from 'astro:content';

export type ProjectEntry = CollectionEntry<'projects'>;

export function isPublishedProject(project: ProjectEntry): boolean {
  return !project.data.archived;
}

export async function getPublishedProjects(): Promise<ProjectEntry[]> {
  const projects = await getCollection('projects');
  return projects.filter(isPublishedProject);
}

export function projectSlug(project: ProjectEntry): string {
  return project.id.replace(/\.mdx?$/, '');
}

export function groupProjectsByBiome(projects: ProjectEntry[]) {
  return {
    technical: projects.filter((p) => p.data.biome === 'technical'),
    candy: projects.filter((p) => p.data.biome === 'candy'),
    clean: projects.filter((p) => p.data.biome === 'clean'),
  } as const;
}
