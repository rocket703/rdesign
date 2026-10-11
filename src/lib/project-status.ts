// Anzeige-Texte für den Projektstatus aus den Content-Dateien
const labels: Record<string, string> = {
  online: 'Online',
  offline: 'Offline',
  'in arbeit': 'In Arbeit',
  'im aufbau': 'In Arbeit',
  archived: 'Archiviert',
};

export function statusLabel(status: string): string {
  return labels[status.toLowerCase()] ?? status;
}

export function isInProgress(status: string): boolean {
  return ['in arbeit', 'im aufbau'].includes(status.toLowerCase());
}
