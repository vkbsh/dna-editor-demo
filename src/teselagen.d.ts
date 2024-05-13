declare module '@teselagen/ui' {
	export function tg_modalState(state: any): any;
}

declare module '@teselagen/ove' {
	export function updateEditor(
		store: any,
		editorName: string,
		initialValues: {
			sequenceData: {
				circular: boolean;
				sequence: string;
				features: {
					id: string;
					name: string;
					start: number;
					end: number;
				}[];
			};
		},
	): void;

	export function Editor(props: any): any;
	export function vectorEditorReducer(): any;
	export function vectorEditorMiddleware(): any;
}
