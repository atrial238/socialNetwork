const maxLength = (max: number) => (value: string) => value && value.length < max ? undefined : `Too long, max length ${max} symbols`;

export const maxLength15 = maxLength(15);
export const maxLength20 = maxLength(20);
export const maxLength100 = maxLength(100);
export const required =(value: number | string) => value || typeof value === 'number' ? undefined : 'Required';