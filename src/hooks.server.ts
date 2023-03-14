import { SvelteKitAuth } from '@auth/sveltekit';
import GitHub from '@auth/core/providers/github';
import Naver from '@auth/core/providers/naver';
import { env } from '$env/dynamic/private';

export const handle = SvelteKitAuth({
	providers: [
		// @ts-expect-error issue https://github.com/nextauthjs/next-auth/issues/6174
		GitHub({ clientId: env.GITHUB_ID, clientSecret: env.GITHUB_SECRET }),
		// @ts-expect-error issue https://github.com/nextauthjs/next-auth/issues/6174
		Naver({ clientId: env.NAVER_ID, clientSecret: env.NAVER_SECRET })
	],
});
