import store from '@/store';

const isPublicGuard = async (to, from, next) => {

    const { ok } = await store.dispatch('auth/checkAuthentication');

    if (ok) next({ name: 'no-entry' });
    else next();
}

export default isPublicGuard;