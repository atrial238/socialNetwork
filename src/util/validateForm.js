export const required = value => value || typeof value === 'number' ? undefined : 'Required';

const maxLength = max => value => value && value.length < max ? undefined : 'your message too long';

export const maxLength15 = maxLength(5);