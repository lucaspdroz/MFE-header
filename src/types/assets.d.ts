// assets.d.ts
declare module '*.png' {
    const content: string;
    export default content;
}

declare module 'host/store'