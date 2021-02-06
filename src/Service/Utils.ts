export function randomElement<T>(list: T[]): T | undefined  {
    return list[Math.floor(Math.random() * list.length)];
};