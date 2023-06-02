import PocketBase from 'pocketbase';

const globalForPb = global as unknown as {
    pb: PocketBase | undefined;
};

export const pb =
    globalForPb.pb ??
    new PocketBase(process.env.PB_SERVER);

if (process.env.NODE_ENV !== 'production') globalForPb.pb = pb
