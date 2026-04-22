export type Task = {
    id: number,
    title: string,
    description: string,
    status: 'TODO' | 'DONE',
    priority: 'HIGH' | 'MEDIUM' | 'LOW',
    dateOfCreation: Date
}