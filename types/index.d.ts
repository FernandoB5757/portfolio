export * from './orbit'
export * from './project'
export * from './technology'

export interface Theme {
    key: string
    label: string
    icon: string
}

export interface SocialRef {
    icon: string;
    link: string
    ariaLabel: string;
}

export interface BestSkill {
    name: string;
    icon: string
}