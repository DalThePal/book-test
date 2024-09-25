declare module "*.avif" {
	const src: string
	export default src
}

declare module "*.bmp" {
	const src: string
	export default src
}

declare module "*.gif" {
	const src: string
	export default src
}

declare module "*.jpg" {
	const src: string
	export default src
}

declare module "*.jpeg" {
	const src: string
	export default src
}

declare module "*.png" {
	const src: string
	export default src
}

declare module "*.webp" {
	const src: string
	export default src
}

declare module "*.mp4" {
	const src: string
	export default src
}

declare module "*.webm" {
	const src: string
	export default src
}

declare module "*.svg" {
	export const ReactComponent: React.FunctionComponent<
		React.SVGProps<SVGSVGElement> & { title?: string }
	>

	const src: string
	export default src
}