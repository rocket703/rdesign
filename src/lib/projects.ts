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
