import { getCollection, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;

export async function getProjects(): Promise<Project[]> {
  const projects = await getCollection('projects');
  return projects.sort((a, b) => a.data.order - b.data.order);
}

/** "2023 → Current", "2019 → 2022" or "2025". */
export function formatPeriod({ start, end }: Project['data']): string {
  if (end === undefined || end === start) return String(start);
  return `${start} → ${end === 'current' ? 'Current' : end}`;
}

export const projectUrl = (project: Project) => `/projects/${project.id}/`;
