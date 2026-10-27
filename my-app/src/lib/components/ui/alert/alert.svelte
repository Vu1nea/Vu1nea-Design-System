<script lang="ts" module>
	import { type VariantProps, tv } from "tailwind-variants";

	export const alertVariants = tv({
		base: "grid gap-0.5 px-4 py-4 pl-10 text-left text-base leading-6 has-data-[slot=alert-action]:relative has-data-[slot=alert-action]:pr-18 has-[>svg]:grid-cols-[auto_1fr] has-[>svg]:gap-x-4 *:[svg]:row-span-2 *:[svg]:text-current *:[svg:not([class*='size-'])]:size-8 group/alert relative w-full items-center",
		variants: {
			variant: {
				default: "bg-info-muted text-info",
				info: "bg-info-muted text-info",
				success: "bg-success-muted text-success",
				destructive: "bg-danger-muted text-(--danger-300)",
				warning: "bg-warning-muted text-warning",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	});

	export type AlertVariant = VariantProps<typeof alertVariants>["variant"];
</script>

<script lang="ts">
	import { cn, type WithElementRef } from "$lib/utils.js";
	import type { HTMLAttributes } from "svelte/elements";

	let {
		ref = $bindable(null),
		class: className,
		variant = "default",
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> & {
		variant?: AlertVariant;
	} = $props();
</script>

<div
	bind:this={ref}
	data-slot="alert"
	role="alert"
	class={cn(alertVariants({ variant }), className)}
	{...restProps}
>
	{@render children?.()}
</div>
