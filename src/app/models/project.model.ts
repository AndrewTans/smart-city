export interface Project {
    _id?: string,
    author?: string,
    authorEmail?: string,
    projectName: string,
    image?: string,
    imageKey?: string,
    desc: any,
    goals: string,
    result: string,
    budget: number,
    date?: string,
    status?: string,
    comments?: string[],
    likes?: string[],
    rating?: number,
    approved?: boolean,
    currentRating?: number
}