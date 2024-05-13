import { useEffect } from 'react';
import { Editor, updateEditor } from '@teselagen/ove';

import store from './store';

const editorName = 'editor';

const sequenceData = {
	circular: true,
	sequence:
		'caatgcacca aaaactcgaa aaagctctga tgtctctatc ttttttacac cdgttttcatc',
	features: [
		{
			id: '2oi452',
			name: "I'm a feature :)",
			start: 10,
			end: 20,
		},
	],
};

function App() {
	useEffect(() => {
		updateEditor(store, editorName, {
			sequenceData,
		});
	});

	const editorProps = {
		editorName,
		isFullscreen: true,
		showMenuBar: false,
	};

	return (
		<div>
			<Editor {...editorProps} />
		</div>
	);
}

export default App;
