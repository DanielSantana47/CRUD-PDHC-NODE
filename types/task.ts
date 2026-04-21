export type Task = {
    id: number,
    title: string,
    description: string,
    imageSource?: string,
    status: 'TODO' | 'DONE',
    priority: 'HIGH' | 'MEDIUM' | 'LOW',
    dateOfCreation: Date
}