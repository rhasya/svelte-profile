<script lang="ts">
	import { signIn } from '@auth/sveltekit/client';
	import '../app.scss';

	export let data;
</script>

<svelte:head>
	<title>Svelte Profile</title>
</svelte:head>

<header class="container">
	<div class="nav-container">
		<nav>
			<ul>
				<li><a href="/">Home</a></li>
			</ul>
		</nav>
		<nav>
			<ul>
				{#if data.session}
					{#if data.session.user?.name}
						<li>{data.session.user?.name}</li>
					{/if}
					<li>
						<a href="/auth/signout" data-sveltekit-preload-data="off">Sign Out</a>
					</li>
				{:else}
					<li>
						<a
							href={'#'}
							on:click|preventDefault={() => signIn()}
							data-sveltekit-preload-data="off"
						>
							Sign In
						</a>
					</li>
				{/if}
			</ul>
		</nav>
	</div>
</header>

<main class="container">
	<slot />
</main>

<style>
	.nav-container {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
</style>
